import path from "path";
import fs from "fs";
import matter from "gray-matter";
import getEventNameParam from "@/utils/getEventNameParam";
import formatTimeTo12Hour from "@/utils/formatTime";
import { format } from 'date-fns';
import { toDate } from 'date-fns-tz';
import { EventType, EventTypeData } from "@/types/types";
import getPastEventsPageData from "./getPastEventsPageData";

// Helper function to parse a date string in MM.DD.YYYY format
const parseDateString = (dateString: string, timeZone: string) => {
  const [month, day, year] = dateString.split('/').map(part => parseInt(part, 10));
  const date = new Date(year, month - 1, day);
  return toDate(date, { timeZone });
};

// Fetch and sort all events
async function getAllEvents(): Promise<EventType[]> {
  const eventsDirectory = path.join(process.cwd(), 'content/all-events');

  // Check if the directory exists
  if (!fs.existsSync(eventsDirectory)) {
    console.warn("No 'events' directory found.");
    return []; // Return an empty array if the directory doesn't exist
  }
  
  const fileNames = fs.readdirSync(eventsDirectory);
  const currentDate = new Date();
  const currentDateString = format(currentDate, 'yyyy-MM-dd');

  const events = fileNames.map((fileName) => {
    const filePath = path.join(eventsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    function formatSlug(slug:string | null) {
      if (!slug) {
        return '';
      }
    
      return slug.trim().toLowerCase().replace(/\s+/g, '-');
    }

    function getEventStatus(data: EventTypeData): "past" | "inTheWorks" | "event" {
      const requiredFields = [
        data.available,
        data.eventName,
        data.firstDayOfEvent,
        data.eventCity,
        data.eventLocation,
        data.clientName,
        data.eventDescription,
        data.detailImage,
      ];
    
      const currentDate = new Date();
      const eventStartDate = data.firstDayOfEvent ? new Date(data.firstDayOfEvent) : null;
      const eventEndDate = data.lastDayOfEvent ? new Date(data.lastDayOfEvent) : eventStartDate;
    
      // Check if the event is past
      if (eventStartDate && eventStartDate < currentDate && (!eventEndDate || eventEndDate < currentDate)) {
        return "past";
      }
    
      // Check if the event is "inTheWorks"
      if (!data.available || requiredFields.some(field => field === null)) {
        return "inTheWorks";
      }
    
      // Otherwise, the event is considered "event"
      return "event";
    }    
    
    return {
      available: data.available,
      eventName: data.eventName,
      slug: formatSlug(data.slug) || getEventNameParam(data.eventName),
      firstDayOfEvent: data.firstDayOfEvent || null,
      eventTime: data.eventTime ? formatTimeTo12Hour(data.eventTime): null,
      lastDayOfEvent: data.lastDayOfEvent || null,
      timeOfYear: data.timeOfYear || null,
      timeZone: data.timeZone,
      eventType: data.eventType || null,
      eventCity: data.eventCity || null,
      eventLocation: data.eventLocation || null,
      clientName: data.clientName,
      eventButtonTextOne: data.eventButtonTextOne || null,
      eventButtonLinkOne: data.eventButtonLinkOne || null,
      eventButtonTextTwo: data.eventButtonTextTwo || null,
      eventButtonLinkTwo: data.eventButtonLinkTwo || null,
      eventDescription: data.eventDescription || null,
      boldedEventInformation: data.boldedEventInformation || null,
      detailImage: data.detailImage || null,
      postponed: data.postponed,
      hideEvent: data.hideEvent,
      eventStatus: getEventStatus(data as EventTypeData),
    };
  });

  const sortedEvents = events
    // .filter(event => {
    //   const timeZone = event.timeZone || 'UTC'; // Default to UTC if no timeZone provided

    //   // Convert the period-separated date to a slash-separated date for parsing
    //   const convertFirstDate = event.firstDayOfEvent.split('.').join("/");
    //   const firstDay = parseDateString(convertFirstDate, timeZone);
    //   const convertLastDate = event.lastDayOfEvent ? event.lastDayOfEvent.split('.').join("/") : convertFirstDate;
    //   const lastDay = parseDateString(convertLastDate, timeZone);

    //   const firstDayString = format(firstDay, 'yyyy-MM-dd');
    //   const lastDayString = format(lastDay, 'yyyy-MM-dd');

    //   // Adjust for current date in the same time zone
    //   const eventBeforeFirstDay = currentDateString <= firstDayString;
    //   const eventBeforeLastDay = !!lastDayString && currentDateString <= lastDayString;

    //   return eventBeforeFirstDay || eventBeforeLastDay;
    // })
    .sort((a, b) => {
      const timeZoneA = a.timeZone || 'UTC';
      const timeZoneB = b.timeZone || 'UTC';
      const firstDayA = parseDateString(a.firstDayOfEvent.split('.').join("/"), timeZoneA).getTime();
      const firstDayB = parseDateString(b.firstDayOfEvent.split('.').join("/"), timeZoneB).getTime();
      return firstDayA - firstDayB;
    });

  return sortedEvents;
}

//returns only events will all info that generate a detail page
async function getReadyEvents(): Promise<EventType[]> {
  const allEvents = await getAllEvents();
  return allEvents.filter(event => event.eventStatus === "event");
}

//returns all events that are not in the past
async function getInTheWorksEvents(): Promise<EventType[]> {
  const allEvents = await getAllEvents();
  return allEvents.filter(event => event.eventStatus === "inTheWorks");
}

//returns all events that are not in the past
async function getNonPastEvents(): Promise<EventType[]> {
  const allEvents = await getAllEvents();
  return allEvents.filter(event => event.eventStatus !== "past");
}

// Fetch and filter only past events
async function getPastEvents(): Promise<EventType[]> {
  const allEvents = await getAllEvents();
  return allEvents.filter(event => event.eventStatus === "past");
}

// Fetch only featured past event names from CMS
async function getFeaturedPastEventNames(): Promise<string[]> {
  const pastEventsPageData = await getPastEventsPageData(); // Fetch data from CMS
  return pastEventsPageData.featuredPastEvents || [];
}

// Fetches full details for featured events by matching event names
async function getFullDetailsForFeaturedEvents(featuredEventNames: string[]): Promise<EventType[]> {
  const allPastEvents = await getPastEvents();
  return allPastEvents.filter(event => featuredEventNames.includes(event.eventName));
}

// Main function to get featured past events or fallback to recent past events
async function getFeaturedOrRecentPastEvents(): Promise<EventType[]> {
  const featuredEventNames = await getFeaturedPastEventNames();

  if (featuredEventNames.length > 0) {
    // Fetch and return full details for featured events
    return getFullDetailsForFeaturedEvents(featuredEventNames);
  }

  // Fallback to the 10 most recent past events if no featured events
  const allPastEvents = await getPastEvents();
  return allPastEvents.slice(0, 10); // Limits to the top 10 most recent past events
}



export { getNonPastEvents, getPastEvents, getFeaturedOrRecentPastEvents, getReadyEvents, getInTheWorksEvents };