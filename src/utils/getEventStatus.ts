import { toDate, format } from 'date-fns-tz';
import { EventTypeWithDisplayInfo } from '@/types/types';

const getEventStatus = (data: EventTypeWithDisplayInfo) => {
  const currentDate = toDate(new Date(), { timeZone: data.timeZone });
  const eventStatus = getEventStatus(data, currentDate);

  function getEventStatus(
    data: EventTypeWithDisplayInfo,
    currentDate: Date
  ): 'past' | 'inTheWorks' | 'event' {
    const requiredFields = [
      data.available,
      data.eventName,
      data.firstDayOfEvent,
      data.eventCity,
      data.eventState,
      data.eventLocation,
      data.clientName,
      data.eventDescriptionMarkdown,
      data.detailImage,
    ];

    // Helper function to parse date with timezone in MM.DD.YYYY format, ignoring time
    const parseDateWithTimezone = (dateString: string, timeZone: string) => {
      const [month, day, year] = dateString
        .split('.')
        .map((part) => parseInt(part, 10));
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
      : firstDayString; // If no end date, use start date

    // Format current date in the event's timezone, considering only the date
    const currentDateString = format(currentDate, 'yyyy-MM-dd', {
      timeZone: data.timeZone || 'UTC',
    });

    // Determine if the current date is on or before the start or end dates
    const eventBeforeFirstDay =
      firstDayString && currentDateString <= firstDayString;
    const eventBeforeLastDay =
      lastDayString && currentDateString <= lastDayString;

    // Event is in the past only if it's after both the start and end dates
    if (!eventBeforeFirstDay && !eventBeforeLastDay) {
      return 'past';
    }

    if (!data.available || requiredFields.some((field) => field === null)) {
      return 'inTheWorks';
    }

    return 'event';
  }

  return eventStatus;
};

export default getEventStatus;
