import React from 'react';
import Homepage from '@/components/home/HomepageV2';
import getAllEvents from '../../lib/getAllEvents';
import getEventsPageData from '../../lib/getEventsPageData';
import getAllClientLogos from '../../lib/getAllClientLogos';
import getHomePageData from '../../lib/getHomePageData';


export interface HomePageData {
  video: {
    videoTitle: string;
    videoDescription: string;
    videoButtonText: string;
    videoButtonLink: string;
  };
  services: {
    servicesCarouselTitle: string;
    sevicesCarouselCards: ServiceCarouselCard[];
  };
  featuredEvents: {
    title: string;
  };
  about: {
    aboutTitle: string;
    aboutUsSections: AboutUsSection[];
  };
  eventCarousel: {
    eventCarouselTitle: string;
    eventCarouselImages: EventCarouselImage[];
  };
}

export interface ServiceCarouselCard {
  cardTitle: string;
  cardDescription: string;
  cardImageSrc: string;
  cardImageAlt: string;
  cardLinkText: string;
  cardLink: string;
}

export interface AboutUsSection {
  sectionTitle: string;
  sectionText: string;
  sectionImageSrc: string;
  sectionImageSrcDarkMode: string;
  sectionImageAlt: string;
}

export interface EventCarouselImage {
  imageSrc: string;
  imageAlt: string;
}


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
  const events = await getAllEvents();
  const eventsPageData = getEventsPageData();
  const clientLogos = await getAllClientLogos();

  return (
    <Homepage homepageInfo={homepageInfo} events={events} postponedEventText={eventsPageData.postponedEventText} clientLogos={clientLogos}/>
  )
}
