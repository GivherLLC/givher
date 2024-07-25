import { useMemo } from "react";
import { format } from 'date-fns';
import { toDate } from 'date-fns-tz';
import eventsData from "../data/events.json";

// Helper function to parse a date string in MM/DD/YYYY format
const parseDateString = (dateString:string, timeZone:string) => {
  const [month, day, year] = dateString.split('/').map(part => parseInt(part, 10));
  const date = new Date(year, month - 1, day);
  return toDate(date, { timeZone });
};

const useCurrentEventsSorted = () => {
  const currentEvents = useMemo(() => {
    const currentDate = new Date();
    const currentDateString = format(currentDate, 'yyyy-MM-dd');

    return eventsData.events
      .filter(event => {
        const timeZone = event.timeZone || 'UTC'; // Default to UTC if no timeZone provided

        // Parse the event dates using the provided time zone
        const firstDay = parseDateString(event.firstDayOfEvent, timeZone);
        const lastDay = event.lastDayOfEvent ? parseDateString(event.lastDayOfEvent, timeZone) : firstDay;
        const firstDayString = format(firstDay, 'yyyy-MM-dd');
        const lastDayString = format(lastDay, 'yyyy-MM-dd');

        // Adjust for current date in the same time zone
        const includeEvent = (!event.postponed && (currentDateString >= firstDayString && currentDateString <= lastDayString)) || event.postponed;

        return includeEvent;
      })
      .sort((a, b) => {
        const timeZoneA = a.timeZone || 'UTC';
        const timeZoneB = b.timeZone || 'UTC';
        const firstDayA = parseDateString(a.firstDayOfEvent, timeZoneA).getTime();
        const firstDayB = parseDateString(b.firstDayOfEvent, timeZoneB).getTime();
        return firstDayA - firstDayB;
      });
  }, []);

  return currentEvents;
};

export default useCurrentEventsSorted;
