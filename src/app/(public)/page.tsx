import React from 'react';
import Homepage from '@/components/home/HomepageV2';
import { getNonPastEvents } from '../../../lib/getAllEvents';
import getEventsPageData from '../../../lib/getEventsPageData';
import getAllClientLogos from '../../../lib/getAllClientLogos';
import getHomePageData from '../../../lib/getHomePageData';
import getAllClientImages from '../../../lib/getAllClientImages';

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
  const homepageInfo = getHomePageData();
  const eventsPageData = getEventsPageData();

  const [events, clientLogos, clientImages] = await Promise.all([
    getNonPastEvents(),
    getAllClientLogos(),
    getAllClientImages(),
  ]);

  return (
    <Homepage homepageInfo={homepageInfo} events={events} postponedEventText={eventsPageData.postponedEventText} clientLogos={clientLogos} eventCardImages={clientImages}/>
  )
}
