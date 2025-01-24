import { toDate } from 'date-fns-tz';
import { format, addDays } from 'date-fns';

export const generateGoogleCalendarLink = (event: {
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
      // console.log(`Parsing date: ${dateString} with timezone: ${timeZone}`);

      const [month, day, year] = dateString
        .split('.')
        .map((part) => parseInt(part, 10));

      if (isNaN(month) || isNaN(day) || isNaN(year)) {
        console.error(`Invalid date components in: ${dateString}`);
        return null;
      }

      // Create the date object in UTC (without timezone offset)
      const date = new Date(Date.UTC(year, month - 1, day));

      if (isNaN(date.getTime())) {
        console.error(`Unable to parse date: ${dateString}`);
        return null;
      }

      // console.log('Parsed Date:', date);

      // Convert the date to the specified timezone
      const zonedDate = toDate(date, { timeZone });
      // console.log('Zoned Date:', zonedDate);

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

    // console.log(`Formatting date for calendar: ${dateStr} at time ${timeStr}`);

    const parsedDate = parseDateString(dateStr, timeZone);
    if (!parsedDate || isNaN(parsedDate.getTime())) {
      console.error(`Failed to parse date: ${dateStr}`);
      return null;
    }

    if (isAllDay) {
      return format(parsedDate, 'yyyyMMdd'); // All-day event (YYYYMMDD)
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

    // console.log('Final Parsed Date:', parsedDate);

    try {
      const formattedDate = format(parsedDate, "yyyyMMdd'T'HHmmss");
      // console.log(`Formatted date for calendar: ${formattedDate}`);
      return formattedDate;
    } catch (error) {
      console.error('Error formatting date for calendar:', error);
      return null;
    }
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
    ? formatDateForCalendar(lastDayOfEvent, null, true) + 'T000000'
    : formatDateForCalendar(firstDayOfEvent, eventEndTime);

  if (isMultiDay && lastDayOfEvent) {
    const parsedEndDate = parseDateString(lastDayOfEvent, timeZone);
    if (parsedEndDate) {
      const adjustedEndDate = format(addDays(parsedEndDate, 1), 'yyyyMMdd');
      correctedEndDate = adjustedEndDate + 'T000000';
    }
  }

  if (!startDate || !correctedEndDate) {
    console.error('Date formatting failed.');
    return null;
  }

  const formattedLocation = [eventLocation, displayAddress]
    .filter(Boolean) // Removes empty/null values
    .join(', ');

  // console.log(`Start Date: ${startDate}, End Date: ${correctedEndDate}`);

  // Generate Google Calendar link with correct timezone
  const googleCalendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    eventName
  )}&dates=${startDate}/${correctedEndDate}&details=${encodeURIComponent(
    eventDescriptionMarkdown || ''
  )}&location=${encodeURIComponent(formattedLocation || '')}&ctz=${encodeURIComponent(timeZone)}`;

  return googleCalendarLink;
};
