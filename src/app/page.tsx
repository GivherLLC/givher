import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';
import Homepage from '@/components/home/HomepageV2';
import getAllEvents from '../../lib/getAllEvents';
import getEventsPageData from '../../lib/getEventsPageData';
import getAllClientLogos from '../../lib/getAllClientLogos';

export async function generateMetadata() {
  return {
    title: 'Givher Political Hospitality',
    description: 'Givher is a dynamic and forward-thinking company specializing in fundraising, event development, and political hospitality.',
    openGraph: {
      title: 'Givher Political Hospitality',
      description: 'Givher is a dynamic and forward-thinking company specializing in fundraising, event development, and political hospitality.',
      url: '/',
      siteName: 'Givher',
      type: 'website',
      }
    }
}

export default async function Home() { 
  const events = await getAllEvents();
  const eventsPageData = getEventsPageData();
  const clientLogos = await getAllClientLogos();

  return (
    <GlobalLayout>
      <Homepage events={events} postponedEventText={eventsPageData.postponedEventText} clientLogos={clientLogos}/>
    </GlobalLayout>
  )
}
