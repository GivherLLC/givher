import { toDate } from 'date-fns-tz';
import { format, addDays } from 'date-fns';

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
      const formattedDateString = dateString.replace(/\./g, '/');
      const [month, day, year] = formattedDateString
        .split('/')
        .map((part) => parseInt(part, 10));

      if (isNaN(month) || isNaN(day) || isNaN(year)) {
        console.error(`Invalid date components in: ${formattedDateString}`);
        return null;
      }

      const date = new Date(Date.UTC(year, month - 1, day));
      return toDate(date, { timeZone });
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

    return format(parsedDate, "yyyyMMdd'T'HHmmss'Z'");
  };

  const getDefaultEndTime = (eventTime: string | null): string | null => {
    if (!eventTime) return null;

    const timeParts = eventTime.match(/(\d+):(\d+)\s?(AM|PM)/i);
    if (timeParts) {
      let hours = parseInt(timeParts[1]);
      const minutes = timeParts[2];
      const period = timeParts[3]?.toUpperCase();

      // Handle AM/PM conversion
      if (period === 'PM' && hours < 12) {
        hours += 12;
      }
      if (period === 'AM' && hours === 12) {
        hours = 0; // Midnight edge case
      }

      // Add 1 hour and handle 24-hour wrap-around
      hours = (hours + 1) % 24;
      const newPeriod = hours >= 12 ? 'PM' : 'AM';
      const adjustedHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;

      return `${adjustedHours}:${minutes} ${newPeriod}`;
    }

    console.error(`Invalid time format: ${eventTime}`);
    return null;
  };

  const isMultiDay = Boolean(
    firstDayOfEvent && lastDayOfEvent && firstDayOfEvent !== lastDayOfEvent
  );

  const isAllDaySingleDay = !lastDayOfEvent && !eventTime && !eventEndTime;

  // Generate end date logic
  let endDate = isMultiDay
    ? formatDateForICS(lastDayOfEvent, null, true)
    : formatDateForICS(
        firstDayOfEvent,
        eventEndTime ? eventEndTime : getDefaultEndTime(eventTime)
      );

  // Fix multi-day end date to ensure it includes the full last day
  if (isMultiDay && lastDayOfEvent) {
    const parsedEndDate = parseDateString(lastDayOfEvent, timeZone);
    if (parsedEndDate) {
      const adjustedEndDate = format(addDays(parsedEndDate, 1), 'yyyyMMdd');
      endDate = adjustedEndDate;
    }
  }

  const startDate = formatDateForICS(
    firstDayOfEvent,
    isMultiDay || isAllDaySingleDay ? null : eventTime,
    isMultiDay || isAllDaySingleDay
  );

  if (!startDate || !endDate) {
    console.error('Date formatting failed.');
    return null;
  }

  const escapeICSString = (str: string | null): string =>
    str
      ? str
          .replace(/,/g, '\\,')
          .replace(/;/g, '\\;')
          .replace(/(\r\n|\n|\r)/g, '\\n')
      : '';

  const formattedLocation = [eventLocation, displayAddress]
    .filter(Boolean)
    .join(', ');

  const icsContent =
    `BEGIN:VCALENDAR\r\n` +
    `VERSION:2.0\r\n` +
    `PRODID:-//givher//NONSGML v1.0//EN\r\n` +
    `BEGIN:VEVENT\r\n` +
    `UID:${Date.now()}@givher.com\r\n` +
    `DTSTAMP:${format(new Date(), "yyyyMMdd'T'HHmmss'Z'")}\r\n` +
    `${
      isMultiDay || isAllDaySingleDay
        ? `DTSTART;VALUE=DATE:${startDate}\r\nDTEND;VALUE=DATE:${endDate}\r\n`
        : `DTSTART;TZID=${timeZone}:${startDate}\r\nDTEND;TZID=${timeZone}:${endDate}\r\n`
    }` +
    `SUMMARY:${escapeICSString(eventName)}\r\n` +
    `DESCRIPTION:${escapeICSString(eventDescriptionMarkdown)}\r\n` +
    `LOCATION:${escapeICSString(formattedLocation)}\r\n` +
    (isAllDaySingleDay ? `X-MICROSOFT-CDO-BUSYSTATUS:FREE\r\n` : '') +
    `END:VEVENT\r\n` +
    `END:VCALENDAR`.replace(/\n/g, '\r\n').trim();

  return `data:text/calendar;charset=utf-8,${encodeURIComponent(icsContent)}`;
};
