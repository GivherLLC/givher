export const revalidate = 43200;
export const dynamic = 'force-dynamic';

import React from 'react';
import EventDetailPage from '@/components/event-detail/EventDetailPage';
import { Metadata } from 'next';
import getEventNameParam from '@/utils/getEventNameParam';
import getEventsPageData from '../../../../../../lib/getEventsPageData';
import {
  getReadyEvents,
  getEventBySlugOrName,
  getClientEvents,
} from '../../../../../../lib/getAllEvents';
import getAllClientImages from '../../../../../../lib/getAllClientImages';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata(props: any): Promise<Metadata> {
  const params = await props.params;
  const decodedParam = decodeURIComponent(params.eventSlugOrName);

  const event = await getEventBySlugOrName(decodedParam);

  if (!event) {
    return { title: 'Event Not Found' };
  }

  const title = `${event.eventName} | Givher Event`;
  const description = `Event details for ${event.clientName}'s event ${event.eventName}`;
  const url = `/events/detail/${event.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Givher',
      type: 'website',
      images: [
        {
          url: 'https://www.givher.com/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: 'Givher Political Hospitality',
        },
      ],
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function EventsDetailPage(props: any) {
  const params = await props.params;
  const decodedParam = decodeURIComponent(params.eventSlugOrName);

  const eventsPageData = getEventsPageData();
  const [event, clientImages, clientEvents] = await Promise.all([
    getEventBySlugOrName(decodedParam),
    getAllClientImages(),
    getClientEvents(decodedParam),
  ]);

  if (!event) {
    return (
      <div className="bg-white dark:bg-navySmoke w-full min-h-[calc(100vh-408px)] flex items-center justify-center">
        <h1 className="font-visbyBold text-mauvelous dark:text-softOpal">
          Oops! Event not found.
        </h1>
      </div>
    );
  }

  const clientImage = clientImages[event.clientName];

  return (
    <EventDetailPage
      event={event}
      clientEvents={clientEvents}
      postponedEventText={eventsPageData.postponedEventText}
      clientImage={clientImage}
    />
  );
}

export async function generateStaticParams() {
  const events = await getReadyEvents();
  return events.map((event) => ({
    eventSlugOrName: event.slug || getEventNameParam(event.eventName),
  }));
}
