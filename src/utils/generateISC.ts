import { toDate } from 'date-fns-tz';
import { format } from 'date-fns';

export const generateICSFile = (event: {
  eventName: string;
  firstDayOfEvent: string | null;
  lastDayOfEvent: string | null;
  eventTime: string | null;
  eventEndTime: string | null;
  displayAddress: string | null;
  eventLocation: string | null;
  eventDescriptionMarkdown: string | null;
  timeZone: string;
}): string | null => {
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
      //   console.log(`Parsing date: ${dateString} with timezone: ${timeZone}`);
      const formattedDateString = dateString.replace(/\./g, '/');
      const [month, day, year] = formattedDateString
        .split('/')
        .map((part) => parseInt(part, 10));

      if (isNaN(month) || isNaN(day) || isNaN(year)) {
        console.error(`Invalid date components in: ${formattedDateString}`);
        return null;
      }

      const date = new Date(Date.UTC(year, month - 1, day));
      //   console.log('Parsed Date:', date);

      const zonedDate = toDate(date, { timeZone });
      //   console.log('Zoned Date:', zonedDate);

      return zonedDate;
    } catch (error) {
      console.error(`Invalid date format: ${dateString}`, error);
      return null;
    }
  };

  const formatDateForICS = (
    dateStr: string | null,
    timeStr: string | null = '00:00',
    isAllDay: boolean = false
  ) => {
    if (!dateStr) {
      console.error('Date string is null or undefined');
      return null;
    }

    // console.log(`Formatting date for ICS: ${dateStr} at time ${timeStr}`);

    const parsedDate = parseDateString(dateStr, timeZone);
    if (!parsedDate || isNaN(parsedDate.getTime())) {
      console.error(`Failed to parse date: ${dateStr}`);
      return null;
    }

    if (isAllDay) {
      // Format for all-day event (YYYYMMDD)
      return format(parsedDate, 'yyyyMMdd');
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

    // console.log('Parsed Date Before Conversion:', parsedDate);

    const zonedDate = toDate(parsedDate, { timeZone });
    // console.log('Zoned Date (corrected for timezone):', zonedDate);

    try {
      const formattedDate = format(zonedDate, "yyyyMMdd'T'HHmmss'Z'");
      //   console.log(`Formatted date for ICS: ${formattedDate}`);
      return formattedDate;
    } catch (error) {
      console.error('Error formatting date for ICS:', error);
      return null;
    }
  };

  const isMultiDay = Boolean(
    firstDayOfEvent && lastDayOfEvent && firstDayOfEvent !== lastDayOfEvent
  );

  const startDate = formatDateForICS(
    firstDayOfEvent,
    isMultiDay ? null : eventTime,
    isMultiDay
  );

  const endDate = isMultiDay
    ? formatDateForICS(lastDayOfEvent, null, true) // Treat multi-day event as all-day
    : formatDateForICS(firstDayOfEvent, eventEndTime);

  if (!startDate || !endDate) {
    console.error('Date formatting failed.');
    return null;
  }

  //   console.log('DATE CHECK');
  //   console.log(`Start Date: ${startDate}, End Date: ${endDate}`);

  const escapeICSString = (str: string | null): string =>
    str
      ? str
          .replace(/,/g, '\\,')
          .replace(/;/g, '\\;')
          .replace(/(\r\n|\n|\r)/g, '\\n')
      : '';

  const formattedLocation = [eventLocation, displayAddress]
    .filter(Boolean) // Removes empty/null values
    .join(', ');

  const icsContent =
    `BEGIN:VCALENDAR\r\n` +
    `VERSION:2.0\r\n` +
    `PRODID:-//givher//NONSGML v1.0//EN\r\n` +
    `BEGIN:VEVENT\r\n` +
    `UID:${Date.now()}@givher.com\r\n` +
    `DTSTAMP:${format(new Date(), "yyyyMMdd'T'HHmmss'Z'")}\r\n` +
    `${
      isMultiDay
        ? `DTSTART;VALUE=DATE:${startDate}\r\nDTEND;VALUE=DATE:${endDate}\r\n`
        : `DTSTART;TZID=${timeZone}:${startDate}\r\nDTEND;TZID=${timeZone}:${endDate}\r\n`
    }` +
    `SUMMARY:${escapeICSString(eventName)}\r\n` +
    `DESCRIPTION:${escapeICSString(eventDescriptionMarkdown)}\r\n` +
    `LOCATION:${escapeICSString(formattedLocation)}\r\n` +
    `END:VEVENT\r\n` +
    `END:VCALENDAR`.replace(/\n/g, '\r\n').trim();

  //   console.log('CHECK OUTPUT');
  //   console.log(
  //     `data:text/calendar;charset=utf-8,${encodeURIComponent(icsContent)}`
  //   );

  return `data:text/calendar;charset=utf-8,${encodeURIComponent(icsContent)}`;
};
