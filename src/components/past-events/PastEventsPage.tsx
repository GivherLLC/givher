'use client';

import React, { Suspense } from 'react';
import PastEventsHeader from './PastEventsHeader';
import PastEvents from './PastEvents';
import {
  PastEventsPageData,
  EventTypeWithDisplayInfo,
  ClientImage,
} from '@/types/types';
import {
  getFeaturedOrRecentPastEvents,
  getPastEvents,
} from '@/utils/getEvents';

export default function PastEventsPage({
  pageData,
  allEvents,
  clientLogos,
}: {
  pageData: PastEventsPageData;
  allEvents: EventTypeWithDisplayInfo[];
  clientLogos: ClientImage;
}) {
  const featuredPastEvents = getFeaturedOrRecentPastEvents(allEvents, pageData);
  const pastEvents = getPastEvents(allEvents);

  return (
    <>
      <PastEventsHeader
        headerData={pageData}
        featuredPastEvents={featuredPastEvents}
        clientLogos={clientLogos}
      />
      <Suspense>
        <PastEvents allPastEvents={pastEvents} clientLogos={clientLogos} />
      </Suspense>
    </>
  );
}
