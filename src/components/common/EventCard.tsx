import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EventType } from '@/types/types';

export default function EventCard({
  event,
  postponedEventText,
  clientLogo,
}: {
  event: EventType;
  postponedEventText: string;
  clientLogo: string;
}) {
  return (
    <Link
      href={`/events/detail/${event.slug}`}
      className={`group cursor-pointer flex flex-col gap-[1.5rem] sm:gap-[0rem] border border-navySmoke dark:border-softOpal rounded-[10px] pl-[0.75rem] sm:pl-[1.5rem] pt-[1rem] pb-[2rem] h-content w-full max-w-[375px] shadow-custom-shadow dark:shadow-custom-shadow-darkmode focus:outline-none focus-visible:ring-2 focus-visible:ring-mauvelous`}
    >
      <div className="flex flex-col justify-between h-full gap-[1rem]">
        <div className="flex justify-between">
          <div className="max-w-[50%] h-[100px] flex items-center dark:bg-softOpal p-[0.5rem] rounded-md">
            {clientLogo.endsWith('.svg') ? (
              <img
                src={clientLogo}
                alt={`${event.clientName} logo`}
                className="w-auto max-h-[80px] h-[80px]"
              />
            ) : (
              <Image
                src={clientLogo}
                width={280}
                height={175}
                alt={`${event.clientName} logo`}
                className="w-auto max-h-[80px]"
              />
            )}
          </div>
          {event.eventType && (
            <div className="font-visbyBold text-[0.85rem] px-[1rem] py-[0.5rem] text-navySmoke bg-electricYellow border border-navySmoke border-r-0 h-min rounded-l-3xl">
              {event.eventType}
            </div>
          )}
        </div>
        <div className="pr-[0.75rem] sm:pr-[1.5rem] flex flex-col justify-between h-full gap-[1rem]">
          <div>
            <div className="overflow-hidden">
              <h3
                className="overflow-ellipsis font-visbyBold text-navySmoke text-[23px] dark:text-softOpal h-[60px]"
                style={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                }}
              >
                {event.eventName}
              </h3>
            </div>
            <div className="text-red dark:text-electricYellow min-h-[26px]">
              {event.postponed && postponedEventText}
            </div>
          </div>
          <div className="text-navySmoke dark:text-softOpal h-[48px] overflow-hidden flex justify-between gap-[1rem]">
            <div className="flex gap-[0.5rem] items-center">
              <Image
                loading="lazy"
                alt="location icon"
                src={`/images/common/location-icon.svg`}
                height={60}
                width={40}
                className="max-w-[20px]"
              />
              <div className="flex flex-col">
                <div className="overflow-hidden">
                  <p
                    className="overflow-ellipsis max-w-[240px]"
                    style={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 1,
                    }}
                  >
                    {event.eventLocation}
                  </p>
                </div>
                <p
                  className="overflow-ellipsis max-w-[240px]"
                  style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1,
                  }}
                >
                  {event.eventCity}, {event.eventState}
                </p>
              </div>
            </div>
            <p className="max-w-[100px]">
              {event.firstDayOfEvent}
              {!!event.lastDayOfEvent && ` - ${event.lastDayOfEvent}`}
            </p>
          </div>
          <div className="flex items-center flex-wrap gap-x-[1.5rem] gap-y-[1rem]">
            <div className="relative transition duration-300 before:bg-black before:rounded-[12px] before:h-[calc(100%+3px)] before:w-[calc(100%+3.5px)] before:absolute before:left-0 before:top-0 before:transition before:transform before:translate-x-[2px] before:translate-y-[2px]">
              <button
                className={`bg-mauvelous dark:bg-electricYellow text-navySmoke text-[0.75rem] uppercase font-visbyBold py-[10px] px-[20px] rounded-[12px] border-[3px] border-black relative z-10 block group-hover:transform group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]`}
              >
                Inside the Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
