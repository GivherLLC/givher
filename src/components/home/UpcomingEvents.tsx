import React from 'react';
import ArrowLink from '../common/ArrowLink';
import EventCard from '../common/EventCard';
import { EventTypeWithStatus, ClientImage } from '@/types/types';

export default function UpcomingEvents({
  title,
  events,
  postponedEventText,
  clientLogos,
}: {
  title: string;
  events: EventTypeWithStatus[];
  postponedEventText: string;
  clientLogos: ClientImage;
}) {
  return (
    <div className="bg-softOpal dark:bg-navySmoke py-[2.5rem] flex justify-center">
      <div
        className={`flex flex-col w-full items-center justify-center gap-[2.5rem] max-w-[85.75rem] px-[0.625rem] md:px-[1.5625rem]`}
      >
        <h2 className="font-visbyBold text-navySmoke dark:text-softOpal">
          {title}
        </h2>
        <div
          className={`flex flex-col lg:flex-row justify-center ${events.length < 3 ? '' : 'lg:justify-between'} gap-[1rem] items-center w-full max-w-[85.75rem]`}
        >
          {events.map((e, i) => {
            const clientLogo = clientLogos[e.clientName];
            return (
              <EventCard
                key={`${i}-${e.clientName}-${e.eventName}-${e.firstDayOfEvent}`}
                event={e}
                postponedEventText={postponedEventText}
                clientLogo={clientLogo}
              />
            );
          })}
        </div>
        <div className="flex justify-center items-center">
          <ArrowLink
            text="See All Events"
            color="black"
            darkModeColor="softOpal"
            link="/events/"
            borderColor="mauvelous"
          />
        </div>
      </div>
    </div>
  );
}
