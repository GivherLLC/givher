import path from "path";
import fs from "fs";
import matter from "gray-matter";
import getEventNameParam from "@/utils/getEventNameParam";
import formatTimeTo12Hour from "@/utils/formatTime";
import { format } from 'date-fns';
import { toDate } from 'date-fns-tz';
import { EventType, EventTypeData } from "@/types/types";

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
    .filter(event => {
      const timeZone = event.timeZone || 'UTC'; // Default to UTC if no timeZone provided

      // Convert the period-separated date to a slash-separated date for parsing
      const convertFirstDate = event.firstDayOfEvent.split('.').join("/");
      const firstDay = parseDateString(convertFirstDate, timeZone);
      const convertLastDate = event.lastDayOfEvent ? event.lastDayOfEvent.split('.').join("/") : convertFirstDate;
      const lastDay = parseDateString(convertLastDate, timeZone);

      const firstDayString = format(firstDay, 'yyyy-MM-dd');
      const lastDayString = format(lastDay, 'yyyy-MM-dd');

      // Adjust for current date in the same time zone
      const eventBeforeFirstDay = currentDateString <= firstDayString;
      const eventBeforeLastDay = !!lastDayString && currentDateString <= lastDayString;

      return eventBeforeFirstDay || eventBeforeLastDay;
    })
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

//returns only events that are in the past
async function getPastEvents(): Promise<EventType[]> {
  const allEvents = await getAllEvents();
  return allEvents.filter(event => event.eventStatus === "past");
}

export { getNonPastEvents, getPastEvents, getReadyEvents, getInTheWorksEvents };