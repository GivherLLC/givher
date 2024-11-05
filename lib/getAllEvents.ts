import path from "path";
import fs from "fs";
import matter, { GrayMatterFile } from "gray-matter";
import { toDate, format } from 'date-fns-tz';
import getEventNameParam from "@/utils/getEventNameParam";
import formatTimeTo12Hour from "@/utils/formatTime";
import getPastEventsPageData from "./getPastEventsPageData";
import { EventType, EventTypeData } from "@/types/types";

// Helper function to parse a date string in MM.DD.YYYY format
const parseDateString = (dateString: string, timeZone: string) => {
  const [month, day, year] = dateString.split('/').map(part => parseInt(part, 10));
  const date = new Date(year, month - 1, day);
  return toDate(date, { timeZone });
};

// Main function to fetch all events with enriched metadata
async function getAllEvents(): Promise<EventType[]> {
  const eventsDirectory = path.join(process.cwd(), 'content/all-events');
  if (!fs.existsSync(eventsDirectory)) {
    console.warn("No 'events' directory found.");
    return [];
  }

  const fileNames = fs.readdirSync(eventsDirectory);
  const currentDate = new Date();

  const events = fileNames.map((fileName) => {
    const filePath = path.join(eventsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const fileData = matter(fileContents) as GrayMatterFile<string>;
    const data = fileData.data as unknown as EventTypeData; // Cast 'data' correctly

    const slug = data.slug ? data.slug.toLowerCase().replace(/\s+/g, '-') : getEventNameParam(data.eventName);
    const eventStatus = getEventStatus(data, currentDate);

    return {
      ...data,
      slug,
      eventStatus,
      firstDayOfEvent: data.firstDayOfEvent || null,
      lastDayOfEvent: data.lastDayOfEvent || null,
      eventTime: data.eventTime ? formatTimeTo12Hour(data.eventTime) : null,
    } as EventType;
  });

// Sort events by `firstDayOfEvent` in descending order (newest to oldest)
return events.sort((a, b) => {
  const timeZoneA = a.timeZone || 'UTC';
  const timeZoneB = b.timeZone || 'UTC';
  const firstDayA = a.firstDayOfEvent ? parseDateString(a.firstDayOfEvent.split('.').join("/"), timeZoneA).getTime():0;
  const firstDayB = b.firstDayOfEvent ? parseDateString(b.firstDayOfEvent.split('.').join("/"), timeZoneB).getTime():0;
  return firstDayA - firstDayB;
});
}

function getEventStatus(data: EventTypeData, currentDate: Date): "past" | "inTheWorks" | "event" {
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

  // Helper function to parse date with timezone in MM.DD.YYYY format, ignoring time
  const parseDateWithTimezone = (dateString: string, timeZone: string) => {
    const [month, day, year] = dateString.split('.').map(part => parseInt(part, 10));
    const date = new Date(year, month - 1, day);
    // Format to 'yyyy-MM-dd' to consider only the date in the specified time zone
    return format(date, 'yyyy-MM-dd', { timeZone });
  };

  // Get event start and end dates with timezone as date strings
  const firstDayString = data.firstDayOfEvent
    ? parseDateWithTimezone(data.firstDayOfEvent, data.timeZone || 'UTC')
    : null;

  const lastDayString = data.lastDayOfEvent
    ? parseDateWithTimezone(data.lastDayOfEvent, data.timeZone || 'UTC')
    : firstDayString;  // If no end date, use start date

  // Format current date in the event's timezone, considering only the date
  const currentDateString = format(currentDate, 'yyyy-MM-dd', { timeZone: data.timeZone || 'UTC' });

  // Determine if the current date is on or before the start or end dates
  const eventBeforeFirstDay = firstDayString && currentDateString <= firstDayString;
  const eventBeforeLastDay = lastDayString && currentDateString <= lastDayString;

  // Event is in the past only if it's after both the start and end dates
  if (!eventBeforeFirstDay && !eventBeforeLastDay) {
    return "past";
  }
  
  if (!data.available || requiredFields.some(field => field === null)) {
    return "inTheWorks";
  }
  
  return "event";
}

// Filter functions to get specific event subsets
async function getReadyEvents(): Promise<EventType[]> {
  const allEvents = await getAllEvents();
  return allEvents.filter(event => event.eventStatus === "event");
}

async function getInTheWorksEvents(): Promise<EventType[]> {
  const allEvents = await getAllEvents();
  return allEvents.filter(event => event.eventStatus === "inTheWorks");
}

async function getNonPastEvents(): Promise<EventType[]> {
  const allEvents = await getAllEvents();
  return allEvents.filter(event => event.eventStatus !== "past");
}

async function getPastEvents(): Promise<EventType[]> {
  const allEvents = await getAllEvents();
  return allEvents.filter(event => event.eventStatus === "past" && !event.hideEvent);
}

// Fetch only featured past event names from CMS
async function getFeaturedPastEventNames(): Promise<string[]> {
  const pastEventsPageData = await getPastEventsPageData();
  return pastEventsPageData.featuredPastEvents || [];
}

async function getFeaturedOrRecentPastEvents(): Promise<EventType[]> {
  const featuredEventNames = await getFeaturedPastEventNames();
  const allPastEvents = await getPastEvents();

  return featuredEventNames.length
    ? allPastEvents.filter(event => featuredEventNames.includes(event.eventName))
    : allPastEvents.slice(0, 10);
}

// Fetch specific event by slug or name
async function getEventBySlugOrName(slugOrName: string): Promise<EventType | null> {
  const allEvents = await getAllEvents();
  return allEvents.find(event => event.slug === slugOrName || event.eventName === slugOrName) || null;
}

// Fetch up to three other events by the same client for the given event
async function getClientEvents(eventSlugOrName: string): Promise<EventType[]> {
  const mainEvent = await getEventBySlugOrName(eventSlugOrName);
  if (!mainEvent) return [];

  const clientName = mainEvent.clientName;
  const allClientEvents = (await getAllEvents()).filter(
    event => 
      event.clientName === clientName &&
      event.eventName !== mainEvent.eventName &&
      !event.hideEvent // Exclude hidden events
  );

  // Count how many "event" or "inTheWorks" statuses the client has
  const activeEventsCount = allClientEvents.filter(
    event => event.eventStatus === "event" || event.eventStatus === "inTheWorks"
  ).length;

  // Determine if we should include past events or not
  const filteredEvents = activeEventsCount >= 3
    ? allClientEvents.filter(event => event.eventStatus !== "past") // Exclude past events if there are 3+ active ones
    : allClientEvents;

  // Sort events to move past events to the end
  const sortedEvents = filteredEvents.sort((a, b) => {
    if (a.eventStatus === "past" && b.eventStatus !== "past") return 1;
    if (a.eventStatus !== "past" && b.eventStatus === "past") return -1;
    return 0;
  });

  // Return up to 3 events
  return sortedEvents.slice(0, 3);
}



export {
  getAllEvents,
  getReadyEvents,
  getInTheWorksEvents,
  getNonPastEvents,
  getPastEvents,
  getFeaturedOrRecentPastEvents,
  getEventBySlugOrName,
  getClientEvents,
};