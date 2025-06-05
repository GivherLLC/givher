import path from 'path';
import fs from 'fs';
import matter, { GrayMatterFile } from 'gray-matter';
import { toDate, format } from 'date-fns-tz';
import getEventNameParam from '@/utils/getEventNameParam';
import formatTimeTo12Hour from '@/utils/formatTime';
import { EventTypeWithDisplayInfo, EventTypeData } from '@/types/types';

// Helper function to parse a date string in MM.DD.YYYY format
const parseDateString = (dateString: string, timeZone: string) => {
  const [month, day, year] = dateString
    .split('/')
    .map((part) => parseInt(part, 10));
  const date = new Date(year, month - 1, day);
  return toDate(date, { timeZone });
};

const displayDate = (dateString: string, timeZone: string) => {
  const date = parseDateString(dateString.split('.').join('/'), timeZone);
  return format(date, 'EEEE, MMMM d, yyyy', { timeZone });
};

const formatAddress = (
  eventAddress: string | null,
  eventCity: string | null,
  eventState: string | null,
  eventZipCode: string | null
) =>
  [eventAddress, eventCity, eventState, eventZipCode]
    .filter(Boolean)
    .join(', ');

// Main function to fetch all events with enriched metadata
async function getAllEvents(): Promise<EventTypeWithDisplayInfo[]> {
  const eventsDirectory = path.join(process.cwd(), 'content/all-events');
  if (!fs.existsSync(eventsDirectory)) {
    console.warn("No 'events' directory found.");
    return [];
  }

  const fileNames = fs.readdirSync(eventsDirectory);
  const events = fileNames.map((fileName) => {
    const filePath = path.join(eventsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const fileData = matter(fileContents) as GrayMatterFile<string>;
    const data = fileData.data as unknown as EventTypeData; // Cast 'data' correctly

    const slug = data.slug
      ? data.slug.toLowerCase().replace(/\s+/g, '-')
      : getEventNameParam(data.eventName);

    const displayAddress = formatAddress(
      data.eventAddress,
      data.eventCity,
      data.eventState,
      data.eventZipCode
    );

    return {
      ...data,
      slug,
      firstDayOfEvent: data.firstDayOfEvent || null,
      lastDayOfEvent: data.lastDayOfEvent || null,
      displayDateFirst:
        data.firstDayOfEvent && data.timeZone
          ? displayDate(data.firstDayOfEvent, data.timeZone)
          : null,
      displayDateLast:
        data.lastDayOfEvent && data.timeZone
          ? displayDate(data.lastDayOfEvent, data.timeZone)
          : null,
      eventTime: data.eventTime ? formatTimeTo12Hour(data.eventTime) : null,
      eventEndTime: data.eventEndTime
        ? formatTimeTo12Hour(data.eventEndTime)
        : null,
      displayAddress,
    } as EventTypeWithDisplayInfo;
  });

  // Sort events by `firstDayOfEvent` in descending order (newest to oldest)
  return events
    .filter((e) => !e.hideEvent)
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
      return firstDayA - firstDayB;
    });
}

export { getAllEvents };
