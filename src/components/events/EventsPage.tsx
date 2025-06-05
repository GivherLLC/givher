'use client';

import React from 'react';
import FeaturedEvents from './FeaturedEvents';
import InTheWorks from './InTheWorks';
import { EventsPageProps } from '@/types/types';
import { lazy } from 'react';
import { getReadyEvents } from '@/utils/getEvents';
import { getInTheWorksEvents } from '@/utils/getEvents';

const AllEvents = lazy(() => import('./AllEvents'));

const EventsPage = ({
  allEvents,
  eventsPageData,
  clientImagesObject,
}: EventsPageProps) => {
  const postponedEventText = eventsPageData.postponedEventText;
  const readyEvents = getReadyEvents(allEvents);
  const inTheWorksEvents = getInTheWorksEvents(allEvents);

  // Featured readyEvents function as defined
  const featuredEvents = () => {
    return readyEvents.slice(0, 4).map((event) => ({
      ...event,
    }));
  };

  return (
    <div className="min-h-[calc(100vh-360px)] bg-softOpal dark:bg-navySmoke">
      <FeaturedEvents
        events={featuredEvents()}
        clientImages={clientImagesObject}
        givherFeaturedEvent={eventsPageData.givherFeaturedEvent}
      />
      <AllEvents
        events={readyEvents}
        postponedEventText={postponedEventText}
        allEventsSectionTitle={eventsPageData.allEventsSectionTitle}
        clientImages={clientImagesObject}
      />
      {!!inTheWorksEvents.length && (
        <InTheWorks
          comingEvents={inTheWorksEvents}
          postponedEventText={postponedEventText}
          title={eventsPageData.comingSoonEventsSectionTitle}
          subtitle={eventsPageData.comingSoonEventsSectionSubtitle}
          clientImages={clientImagesObject}
        />
      )}
    </div>
  );
};

export default EventsPage;
