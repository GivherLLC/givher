import React from 'react';
import EventsPage from '@/components/events/EventsPage';
import { getAllEvents } from '../../../../lib/getAllEvents';
import getEventsPageData from '../../../../lib/getEventsPageData';
import getAllClientImages from '../../../../lib/getAllClientImages';

export async function generateMetadata() {
  return {
    title: 'Events | Givher',
    description:
      'View the schedule and details of upcoming events hosted or managed by Givher, specializing in fundraising and engagement initiatives.',
    openGraph: {
      title: 'Events | Givher',
      description:
        'View the schedule and details of upcoming events hosted or managed by Givher, specializing in fundraising and engagement initiatives.',
      url: '/events',
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

export default async function EventsPageWrapper() {
  const eventsPageData = getEventsPageData();

  const [allEvents, clientImages] = await Promise.all([
    getAllEvents(),
    getAllClientImages(),
  ]);

  return (
    <EventsPage
      allEvents={allEvents}
      eventsPageData={eventsPageData}
      clientImagesObject={clientImages}
    />
  );
}
