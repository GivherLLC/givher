import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EventTypeWithDisplayInfo } from '@/types/types';
import ButtonLink from '../common/ButtonLink';
import { generateICSFile } from '@/utils/generateISC';
import { generateGoogleCalendarLink } from '@/utils/generateGoogleCalendarLink';
import { generateOutlookCalendarLink } from '@/utils/generateOutlookCalendarLink';

export default function DetailHeader({
  event,
  postponedEventText,
  clientImage,
}: {
  event: EventTypeWithDisplayInfo;
  postponedEventText: string;
  clientImage: string;
}) {
  const {
    eventName,
    displayAddress,
    eventButtonTextOne,
    eventButtonLinkOne,
    eventLocation,
    firstDayOfEvent,
    lastDayOfEvent,
    displayDateFirst,
    displayDateLast,
    eventTime,
    eventEndTime,
    eventDescriptionMarkdown,
    timeZone,
  } = event;

  const icsFile = generateICSFile({
    eventName,
    firstDayOfEvent,
    lastDayOfEvent,
    eventTime,
    eventEndTime,
    displayAddress,
    eventLocation,
    eventDescriptionMarkdown,
    timeZone,
  });

  const googleCalendarLink = generateGoogleCalendarLink({
    eventName,
    firstDayOfEvent,
    lastDayOfEvent,
    eventTime,
    eventEndTime,
    displayAddress,
    eventLocation,
    eventDescriptionMarkdown,
    timeZone,
  });

  const outlookCalendarLink = generateOutlookCalendarLink({
    eventName,
    firstDayOfEvent,
    lastDayOfEvent,
    eventTime,
    eventEndTime,
    displayAddress,
    eventLocation,
    eventDescriptionMarkdown,
    timeZone,
  });

  return (
    <div className="bg-navySmoke py-[2.5rem] flex justify-center">
      <div className="flex flex-col lg:flex-row w-full items-center justify-between gap-[2.5rem] max-w-[615px] lg:max-w-[1200px] mx-[0.625rem] lg:mx-[1.5625rem]">
        <div className="w-full lg:w-1/2 flex flex-col gap-[1.5rem]">
          <h1 className="font-visbyBold text-softOpal text-center lg:text-left">
            {eventName}
          </h1>
          {event.postponed && (
            <div className="text-red dark:text-electricYellow">
              {postponedEventText}
            </div>
          )}
          <div className="flex flex-col gap-[0.5rem] text-center lg:text-left">
            <p className="text-mauvelous font-visbyBold">
              {displayDateFirst}
              {!!displayDateLast && ` - ${displayDateLast}`}
            </p>
            <p>
              {!!eventTime && (
                <span className="text-softOpal font-visbyBold">
                  {eventTime}
                </span>
              )}
              {!!eventEndTime && (
                <span className="text-softOpal font-visbyBold">
                  {' '}
                  - {eventEndTime}
                </span>
              )}
            </p>
          </div>
          <div className="flex flex-col gap-[0.5rem] text-center lg:text-left">
            <p className="text-electricYellow font-visbyBold">
              {eventLocation}
            </p>
            <p className="font-visbyBold text-softOpal">{displayAddress}</p>
          </div>
          <div className="flex gap-[1.25rem] justify-center lg:justify-start">
            {googleCalendarLink && (
              <>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={googleCalendarLink}
                  className="text-softOpal underline focus:outline-none focus-visible:ring-2 focus-visible:ring-mauvelous rounded"
                >
                  Google Calendar
                </Link>
              </>
            )}
            {outlookCalendarLink && (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={outlookCalendarLink}
                className="text-softOpal underline focus:outline-none focus-visible:ring-2 focus-visible:ring-mauvelous rounded"
              >
                Outlook Calendar
              </Link>
            )}
            {icsFile && (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={icsFile}
                className="text-softOpal underline focus:outline-none focus-visible:ring-2 focus-visible:ring-mauvelous rounded"
              >
                ICS
              </Link>
            )}
          </div>
          <div className="flex gap-[1rem] lg:items-center justify-center lg:justify-start">
            {eventButtonTextOne && eventButtonLinkOne && (
              <ButtonLink
                openNewTab
                bg="electricYellow"
                darkModeBg="electricYellow"
                text={eventButtonTextOne}
                link={eventButtonLinkOne}
              />
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-white h-[275px] w-[275px] sm:h-[450px] sm:w-[450px] rounded-lg flex justify-center items-center p-[1rem]">
            <Image
              priority={true}
              height={450}
              width={450}
              src={clientImage}
              alt={eventName}
              className="w-full max-w-[360px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
