import { toDate } from 'date-fns-tz';
import {
  EventTypeWithDisplayInfo,
  EventTypeWithStatus,
  PastEventsPageData,
} from '@/types/types';
import getEventStatus from './getEventStatus';

// Helper function to parse a date string in MM.DD.YYYY format
const parseDateString = (dateString: string, timeZone: string) => {
  const [month, day, year] = dateString
    .split('/')
    .map((part) => parseInt(part, 10));
  const date = new Date(year, month - 1, day);
  return toDate(date, { timeZone });
};

export const getAllEventsWithStatus = (
  allEvents: EventTypeWithDisplayInfo[]
): EventTypeWithStatus[] => {
  return allEvents.map((e) => {
    return {
      ...e,
      eventStatus: getEventStatus(e),
    };
  });
};

// Filter functions to get specific event subsets
export function getReadyEvents(allEvents: EventTypeWithDisplayInfo[]) {
  const allEventsWithStatus = getAllEventsWithStatus(allEvents);
  return allEventsWithStatus.filter((event) => event.eventStatus === 'event');
}

export function getInTheWorksEvents(allEvents: EventTypeWithDisplayInfo[]) {
  const allEventsWithStatus = getAllEventsWithStatus(allEvents);
  return allEventsWithStatus.filter(
    (event) => event.eventStatus === 'inTheWorks'
  );
}

export function getNonPastEvents(allEvents: EventTypeWithDisplayInfo[]) {
  const allEventsWithStatus = getAllEventsWithStatus(allEvents);
  return allEventsWithStatus.filter((event) => event.eventStatus !== 'past');
}

export function getPastEvents(allEvents: EventTypeWithDisplayInfo[]) {
  const allEventsWithStatus = getAllEventsWithStatus(allEvents);
  return allEventsWithStatus
    .filter((event) => event.eventStatus === 'past' && !event.hideEvent)
    .sort((a, b) => {
      const timeZoneA = a.timeZone || 'UTC';
      const timeZoneB = b.timeZone || 'UTC';
      const firstDayA = a.firstDayOfEvent
        ? parseDateString(
            a.firstDayOfEvent.split('.').join('/'),
            timeZoneA
          ).getTime()
        : 0;
      const firstDayB = b.firstDayOfEvent
        ? parseDateString(
            b.firstDayOfEvent.split('.').join('/'),
            timeZoneB
          ).getTime()
        : 0;
      return firstDayB - firstDayA;
    });
}

// Fetch only featured past event names from CMS
export function getFeaturedPastEventNames(
  pastEventsPageData: PastEventsPageData
) {
  return pastEventsPageData.featuredPastEvents || [];
}

export function getFeaturedOrRecentPastEvents(
  allEvents: EventTypeWithDisplayInfo[],
  pastEventsPageData: PastEventsPageData
) {
  const featuredEventNames = getFeaturedPastEventNames(pastEventsPageData);
  const allPastEvents = getPastEvents(allEvents);

  return featuredEventNames.length
    ? allPastEvents.filter((event) =>
        featuredEventNames.includes(event.eventName)
      )
    : allPastEvents.slice(0, 10);
}

// Fetch specific event by slug or name
export function getEventBySlugOrName(
  slugOrName: string,
  allEvents: EventTypeWithDisplayInfo[]
) {
  return (
    allEvents.find(
      (event) => event.slug === slugOrName || event.eventName === slugOrName
    ) || null
  );
}

// Fetch up to three other events by the same client for the given event
export function getClientEvents(
  eventSlugOrName: string,
  allEvents: EventTypeWithDisplayInfo[]
) {
  const allEventsWithStatus = getAllEventsWithStatus(allEvents);
  const mainEvent = getEventBySlugOrName(eventSlugOrName, allEvents);
  if (!mainEvent) return [];

  const clientName = mainEvent.clientName;
  const allClientEvents = allEventsWithStatus.filter(
    (event) =>
      event.clientName === clientName &&
      event.eventName !== mainEvent.eventName &&
      !event.hideEvent // Exclude hidden events
  );

  // Count how many "event" or "inTheWorks" statuses the client has
  const activeEventsCount = allClientEvents.filter(
    (event) =>
      event.eventStatus === 'event' || event.eventStatus === 'inTheWorks'
  ).length;

  // Determine if we should include past events or not
  const filteredEvents =
    activeEventsCount >= 3
      ? allClientEvents.filter((event) => event.eventStatus !== 'past') // Exclude past events if there are 3+ active ones
      : allClientEvents;

  // Sort events to move past events to the end
  const sortedEvents = filteredEvents.sort((a, b) => {
    if (a.eventStatus === 'past' && b.eventStatus !== 'past') return 1;
    if (a.eventStatus !== 'past' && b.eventStatus === 'past') return -1;
    return 0;
  });

  // Return up to 3 events
  return sortedEvents.slice(0, 3);
}
