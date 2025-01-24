import { toDate } from 'date-fns-tz';
import { format, addDays } from 'date-fns';

export const generateOutlookCalendarLink = (event: {
  eventName: string;
  firstDayOfEvent: string | null;
  lastDayOfEvent: string | null;
  eventTime: string | null;
  eventEndTime: string | null;
  displayAddress: string | null;
  eventLocation: string | null;
  eventDescriptionMarkdown: string | null;
  timeZone: string;
}) => {
  const {
    eventName,
    firstDayOfEvent,
    lastDayOfEvent,
    eventTime,
    eventEndTime,
    displayAddress,
    eventLocation,
    eventDescriptionMarkdown,
    timeZone,
  } = event;

  const allowedTimeZones = [
    'America/Los_Angeles',
    'America/New_York',
    'America/Phoenix',
    'America/Denver',
    'America/Anchorage',
    'Pacific/Honolulu',
  ];

  if (!allowedTimeZones.includes(timeZone)) {
    console.error(`Invalid timezone provided: ${timeZone}`);
    return null;
  }

  const parseDateString = (
    dateString: string,
    timeZone: string
  ): Date | null => {
    try {
      const [month, day, year] = dateString
        .split('.')
        .map((part) => parseInt(part, 10));

      if (isNaN(month) || isNaN(day) || isNaN(year)) {
        console.error(`Invalid date components in: ${dateString}`);
        return null;
      }

      const date = new Date(Date.UTC(year, month - 1, day));

      if (isNaN(date.getTime())) {
        console.error(`Unable to parse date: ${dateString}`);
        return null;
      }

      const zonedDate = toDate(date, { timeZone });
      return zonedDate;
    } catch (error) {
      console.error(`Error parsing date: ${dateString}`, error);
      return null;
    }
  };

  const formatDateForCalendar = (
    dateStr: string | null,
    timeStr: string | null = '00:00',
    isAllDay: boolean = false
  ) => {
    if (!dateStr) {
      console.error('Date string is null or undefined');
      return null;
    }

    const parsedDate = parseDateString(dateStr, timeZone);
    if (!parsedDate || isNaN(parsedDate.getTime())) {
      console.error(`Failed to parse date: ${dateStr}`);
      return null;
    }

    if (isAllDay) {
      return format(parsedDate, 'yyyy-MM-dd'); // Outlook all-day event format
    }

    if (timeStr) {
      const timeParts = timeStr.match(/(\d+):(\d+)\s?(AM|PM)/i);
      if (timeParts) {
        let hours = parseInt(timeParts[1]);
        const minutes = parseInt(timeParts[2]);
        const isPM = timeParts[3]?.toUpperCase() === 'PM';

        if (isPM && hours < 12) {
          hours += 12;
        }
        if (!isPM && hours === 12) {
          hours = 0;
        }

        parsedDate.setHours(hours, minutes, 0);
      } else {
        console.error(`Invalid time format: ${timeStr}`);
        return null;
      }
    } else {
      parsedDate.setHours(0, 0, 0, 0);
    }

    return format(parsedDate, "yyyy-MM-dd'T'HH:mm:ss");
  };

  const isMultiDay = Boolean(
    firstDayOfEvent && lastDayOfEvent && firstDayOfEvent !== lastDayOfEvent
  );

  const startDate = formatDateForCalendar(
    firstDayOfEvent,
    isMultiDay ? null : eventTime,
    isMultiDay
  );

  let correctedEndDate = isMultiDay
    ? formatDateForCalendar(lastDayOfEvent, null, true)
    : formatDateForCalendar(firstDayOfEvent, eventEndTime);

  if (isMultiDay && lastDayOfEvent) {
    const parsedEndDate = parseDateString(lastDayOfEvent, timeZone);
    if (parsedEndDate) {
      const adjustedEndDate = format(addDays(parsedEndDate, 1), 'yyyy-MM-dd');
      correctedEndDate = adjustedEndDate + 'T00:00:00';
    }
  }

  if (!startDate || !correctedEndDate) {
    console.error('Date formatting failed.');
    return null;
  }

  const formattedLocation = [eventLocation, displayAddress]
    .filter(Boolean) // Removes empty/null values
    .join(', ');

  // Generate Outlook Calendar link with correct timezone
  const outlookCalendarLink = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&subject=${encodeURIComponent(
    eventName
  )}&startdt=${startDate}&enddt=${correctedEndDate}&location=${encodeURIComponent(
    formattedLocation || ''
  )}&body=${encodeURIComponent(eventDescriptionMarkdown || '')}&allday=${
    isMultiDay ? 'true' : 'false'
  }&timezone=${encodeURIComponent(timeZone)}`;

  return outlookCalendarLink;
};
