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
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const param = await params;
  const decodedParam = decodeURIComponent(param.eventSlugOrName);

  const event = await getEventBySlugOrName(decodedParam);

  if (event) {
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
  } else {
    return {
      title: 'Event Not Found',
    };
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function EventsDetailPage({ params }: any) {
  const param = await params;
  const decodedParam = decodeURIComponent(param.eventSlugOrName);

  const eventsPageData = getEventsPageData();
  const [event, clientImages, clientEvents] = await Promise.all([
    getEventBySlugOrName(decodedParam),
    getAllClientImages(),
    getClientEvents(decodedParam),
  ]);

  if (event) {
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

  return (
    <div className="bg-white dark:bg-navySmoke w-full min-h-[calc(100vh-408px)] flex items-center justify-center">
      <h1 className="font-visbyBold text-mauvelous dark:text-softOpal">
        Oops! Event not found.
      </h1>
    </div>
  );
}

export async function generateStaticParams() {
  const events = await getReadyEvents();
  return events.map((event) => ({
    eventSlugOrName: event.slug || getEventNameParam(event.eventName),
  }));
}
