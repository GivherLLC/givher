export const revalidate = 3600;

import React from 'react';
import PastEventsPage from '@/components/past-events/PastEventsPage';
import getPastEventsPageData from '../../../../lib/getPastEventsPageData';
import { getAllEvents } from '../../../../lib/getAllEvents';
import getAllClientImages from '../../../../lib/getAllClientImages';

export async function generateMetadata() {
  return {
    title: 'Past Events | Givher',
    description: 'Our journey so far at Givher.',
    openGraph: {
      title: 'Past Events | Givher',
      description: 'Our journey so far at Givher.',
      url: '/past-events',
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

export default async function PastEvents() {
  const pageData = getPastEventsPageData();
  const [allEvents, clientLogos] = await Promise.all([
    getAllEvents(),
    getAllClientImages(),
  ]);

  return (
    <PastEventsPage
      pageData={pageData}
      allEvents={allEvents}
      clientLogos={clientLogos}
    />
  );
}
