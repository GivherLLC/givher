import React from 'react';
import Image from 'next/image';
import { EventType } from '@/types/types';
import ArrowLink from '../common/ArrowLink';
import { remark } from 'remark';
import html from 'remark-html';

export default async function EventDetails({
  event,
  postponedEventText,
}: {
  event: EventType;
  postponedEventText: string;
}) {
  const {
    eventName,
    eventDescriptionMarkdown,
    eventButtonTextOne,
    eventButtonLinkOne,
    eventButtonTextTwo,
    eventButtonLinkTwo,
    detailImage,
  } = event;

  const processedContent = await remark()
    .use(html)
    .process(eventDescriptionMarkdown || '');
  const contentHtml = processedContent.toString();

  return (
    <div className="bg-softOpal dark:bg-navySmoke py-[4.5rem] flex justify-center overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full items-center justify-between lg:justify-between gap-[2.5rem] lg:max-w-[1200px] mx-[0.625rem] lg:mx-[1.5625rem]">
        <div className="w-full h-full max-w-[615px] lg:w-1/2 flex flex-col gap-[1rem]">
          <h1 className="font-visbyBold text-navySmoke dark:text-softOpal">
            {eventName}
          </h1>
          {event.postponed && (
            <div className="text-red">{postponedEventText}</div>
          )}
          {((eventButtonTextOne && eventButtonTextTwo) ||
            (eventButtonTextTwo && eventButtonLinkTwo)) && (
            <div className="flex">
              <ArrowLink
                text={eventButtonTextTwo || eventButtonTextOne || ''}
                color="black"
                darkModeColor="softOpal"
                link={eventButtonLinkTwo || eventButtonLinkOne || '#'}
                borderColor="mauvelous"
                openNewTab={true}
              />
            </div>
          )}
          <div
            className="flex flex-col text-left gap-[1rem] prose-strong:font-visbyBold prose-em:italic text-navySmoke dark:text-softOpal"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
          <Image
            loading="lazy"
            height={311}
            width={322}
            src={'/images/events/paint-splatter-small.svg'}
            alt="paint splatter"
            className="absolute right-[30%] lg:right-[-23%] bottom-[-23%] z-0"
          />
          <Image
            loading="lazy"
            height={385}
            width={615}
            src={detailImage!}
            alt={eventName}
            className="relative z-8"
          />
        </div>
      </div>
    </div>
  );
}
