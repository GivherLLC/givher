import { format } from 'date-fns';
import { toDate } from 'date-fns-tz';
import { EventType } from "@/types/types";

// Helper function to parse a date string in MM/DD/YYYY format
const parseDateString = (dateString:string, timeZone:string) => {
  const [month, day, year] = dateString.split('/').map(part => parseInt(part, 10));
  const date = new Date(year, month - 1, day);
  return toDate(date, { timeZone });
};

const useCurrentEventsSorted = (events:EventType[]) => {
    const currentDate = new Date();
    const currentDateString = format(currentDate, 'yyyy-MM-dd');

    const sortedEvents = events
      .filter(event => {
        const timeZone = event.timeZone || 'UTC'; // Default to UTC if no timeZone provided

        // Parse the event dates using the provided time zone
        const convertFirstDate = event.firstDayOfEvent.split('.').join("/");
        const firstDay = parseDateString(convertFirstDate, timeZone);
        const convertLastDate = event.lastDayOfEvent ? event.lastDayOfEvent.split('.').join("/") : convertFirstDate;
        const lastDay = parseDateString(convertLastDate, timeZone);
        const firstDayString = format(firstDay, 'yyyy-MM-dd');
        const lastDayString = format(lastDay, 'yyyy-MM-dd');

        // Adjust for current date in the same time zone
        const eventBeforeFirstDay = currentDateString <= firstDayString;
        const eventBeforeLastDay =  !!lastDayString && currentDateString <= lastDayString;
        const includeEvent = eventBeforeFirstDay || eventBeforeLastDay;
        
        return includeEvent;
      })
      .sort((a, b) => {
        const timeZoneA = a.timeZone || 'UTC';
        const timeZoneB = b.timeZone || 'UTC';
        const firstDayA = parseDateString(a.firstDayOfEvent, timeZoneA).getTime();
        const firstDayB = parseDateString(b.firstDayOfEvent, timeZoneB).getTime();
        return firstDayA - firstDayB;
      });

  return sortedEvents;
};

export default useCurrentEventsSorted;
