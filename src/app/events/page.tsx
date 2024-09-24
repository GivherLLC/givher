import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';
import EventsPage from '@/components/events/EventsPage';
import getAllEvents from "../../../lib/getAllEvents";
import getEventsPageData from "../../../lib/getEventsPageData";
import getAllClientImages from "../../../lib/getAllClientImages";
import { EventType, ComingSoonEventType, FeaturedEventType, ClientImage } from "@/types/types";


// Types for the data coming from events_page.yml
export interface EventsPageData {
  allEventsSectionTitle: string;
  comingSoonEventsSectionTitle: string;
  postponedEventText: string;
  clientEventPageUpcomingEventsTitle: string;
  givherFeaturedEvent: FeaturedEventType;
  comingSoon?: ComingSoonEventType[]; // Optional array for coming soon events
}

// Props for the EventsPage component
export interface EventsPageProps {
  events: EventType[];
  eventsPageData: EventsPageData;
  clientImagesObject: ClientImage;
}

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
  const events = await getAllEvents();
  const eventsPageData = getEventsPageData();
  const clientImages = await getAllClientImages();
  
  const clientImagesObject = clientImages.reduce<Record<string, string>>((acc, obj) => {
    const [key, value] = Object.entries(obj)[0] as [string, string];
    acc[key] = value;
    return acc;
  }, {});

  return (
    <GlobalLayout>
    <EventsPage
      events={events}
      eventsPageData={eventsPageData}
      clientImagesObject={clientImagesObject}
    />
    </GlobalLayout>
  );
}

