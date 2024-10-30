import React from 'react';
import EventsPage from '@/components/events/EventsPage';
import { getReadyEvents, getInTheWorksEvents } from '../../../../lib/getAllEvents';
import getEventsPageData from "../../../../lib/getEventsPageData";
import getAllClientImages from "../../../../lib/getAllClientImages";

export async function generateMetadata() {
  return {
    title: 'Events | Givher',
    description: 'View the schedule and details of upcoming events hosted or managed by Givher, specializing in fundraising and engagement initiatives.',
    openGraph: {
      title: 'Events | Givher',
      description: 'View the schedule and details of upcoming events hosted or managed by Givher, specializing in fundraising and engagement initiatives.',
      url: '/events',
      siteName: 'Givher',
      type: 'website',
      }
    }
}

export default async function EventsPageWrapper() {
  const eventsPageData = getEventsPageData();

  const [readyEvents, inTheWorksEvents, clientImages] = await Promise.all([
    getReadyEvents(),
    getInTheWorksEvents(),
    getAllClientImages(),
  ]);

  
  const clientImagesObject = clientImages.reduce<Record<string, string>>((acc, obj) => {
    const [key, value] = Object.entries(obj)[0] as [string, string];
    acc[key] = value;
    return acc;
  }, {});

  return (
    <EventsPage
      events={readyEvents}
      eventsPageData={eventsPageData}
      clientImagesObject={clientImagesObject}
      inTheWorksEvents={inTheWorksEvents}
    />
  );
}

