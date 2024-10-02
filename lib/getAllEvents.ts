import path from "path";
import fs from "fs";
import matter from "gray-matter";
import getEventNameParam from "@/utils/getEventNameParam";
import formatTimeTo12Hour from "@/utils/formatTime";
import { format } from 'date-fns';
import { toDate } from 'date-fns-tz';

// Helper function to parse a date string in MM.DD.YYYY format
const parseDateString = (dateString: string, timeZone: string) => {
  const [month, day, year] = dateString.split('/').map(part => parseInt(part, 10));
  const date = new Date(year, month - 1, day);
  return toDate(date, { timeZone });
};

// Fetch and sort all events
async function getAllEvents() {
  const eventsDirectory = path.join(process.cwd(), 'content/events');
  const fileNames = fs.readdirSync(eventsDirectory);
  const currentDate = new Date();
  const currentDateString = format(currentDate, 'yyyy-MM-dd');

  const events = fileNames.map((fileName) => {
    const filePath = path.join(eventsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: data.slug || getEventNameParam(data.eventName),
      eventName: data.eventName,
      firstDayOfEvent: data.firstDayOfEvent,
      lastDayOfEvent: data.lastDayOfEvent,
      eventTime: formatTimeTo12Hour(data.eventTime),
      timeZone: data.timeZone,
      eventCity: data.eventCity,
      eventLocation: data.eventLocation,
      clientName: data.clientName,
      eventButtonTextOne: data.eventButtonTextOne,
      eventButtonLinkOne: data.eventButtonLinkOne,
      eventButtonTextTwo: data.eventButtonTextTwo,
      eventButtonLinkTwo: data.eventButtonLinkTwo,
      eventDescription: data.eventDescription,
      boldedEventInformation: data.boldedEventInformation,
      detailImage: data.detailImage,
      postponed: data.postponed,
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

export default getAllEvents;