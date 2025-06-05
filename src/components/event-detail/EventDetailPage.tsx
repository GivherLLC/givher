import React from 'react';

import { EventTypeWithDisplayInfo } from '@/types/types';
import DetailHeader from './DetailHeader';

import { lazy } from 'react';

const EventDetails = lazy(() => import('./EventDetails'));
const ClientEvents = lazy(() => import('./ClientEvents'));

export default function EventDetailPage({
  event,
  clientEvents,
  postponedEventText,
  clientImage,
}: {
  event: EventTypeWithDisplayInfo;
  clientEvents: EventTypeWithDisplayInfo[];
  postponedEventText: string;
  clientImage: string;
}) {
  const client = event.clientName;

  return (
    <>
      <DetailHeader
        event={event}
        postponedEventText={postponedEventText}
        clientImage={clientImage}
      />
      <EventDetails event={event} postponedEventText={postponedEventText} />
      {!!clientEvents.length && (
        <ClientEvents
          clientName={client}
          allEvents={clientEvents}
          event={event}
          postponedEventText={postponedEventText}
          clientImage={clientImage}
        />
      )}
    </>
  );
}
