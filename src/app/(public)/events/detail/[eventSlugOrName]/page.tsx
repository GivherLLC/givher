import React from 'react';
import type { Metadata } from 'next';
import EventDetailPage from '@/components/event-detail/EventDetailPage';
import getEventNameParam from '@/utils/getEventNameParam';
import getEventsPageData from '../../../../../../lib/getEventsPageData';
import { getAllEvents } from '../../../../../../lib/getAllEvents';
import getAllClientImages from '../../../../../../lib/getAllClientImages';
import {
  getReadyEvents,
  getEventBySlugOrName,
  getClientEvents,
} from '@/utils/getEvents';

type Params = { eventSlugOrName: string };

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { eventSlugOrName } = await props.params;

  const decodedParam = decodeURIComponent(eventSlugOrName);
  const allEvents = await getAllEvents();
  const event = getEventBySlugOrName(decodedParam, allEvents);

  if (!event) return { title: 'Event Not Found' };

  const title = `${event.eventName} | Givher Event`;
  const description = `Event details for ${event.clientName}'s event ${event.eventName}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.givher.com/events/detail/${event.slug}`,
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

export default async function EventsDetailPage(props: {
  params: Promise<Params>;
}) {
  const { eventSlugOrName } = await props.params;

  const decodedParam = decodeURIComponent(eventSlugOrName);
  const eventsPageData = getEventsPageData();

  const [allEvents, clientImages] = await Promise.all([
    getAllEvents(),
    getAllClientImages(),
  ]);

  const event = getEventBySlugOrName(decodedParam, allEvents);
  const clientEvents = getClientEvents(decodedParam, allEvents);

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
  const allEvents = await getAllEvents();
  const events = getReadyEvents(allEvents);

  return events.map((event) => ({
    eventSlugOrName: event.slug || getEventNameParam(event.eventName),
  }));
}
