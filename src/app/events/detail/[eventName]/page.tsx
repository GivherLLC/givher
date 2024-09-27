import React from "react";
import EventDetailPage from "@/components/event-detail/EventDetailPage";
import GlobalLayout from "@/components/GlobalLayout";
import Head from "next/head";
import { Metadata } from "next";
import getEventNameParam from "@/utils/getEventNameParam";
import getEventsPageData from "../../../../../lib/getEventsPageData";
import getAllEvents from "../../../../../lib/getAllEvents";
import getAllClientImages from "../../../../../lib/getAllClientImages";
import getComingsoonEvents from "../../../../../lib/getComingSoonEvents";

type EventDetailPageProps = {
  params: {
    eventName: string;
  }
}

export async function generateMetadata({ params: { eventName } }: EventDetailPageProps): Promise<Metadata> {
  const decodedUrlParam = decodeURIComponent(eventName);

  const events = await getAllEvents() || [];
  const event = events.find((e) => {
    return (getEventNameParam(e.eventName) === decodedUrlParam)
  });

  if (event) {
    const title = `${event.eventName} | Givher Event`;
    const description = `Event details for ${event.clientName}'s event ${event.eventName}`;
    const url = `/events/detail/${eventName}`;
    return {
      title: title,
      description: description,
      openGraph: {
        title: title,
        description: description,
        url: url,
        siteName: 'Givher',
        type: 'website',
      }
    }
  } else {
    return {
      title: 'Event Not Found',
    }
  }
}

export default async function EventsDetailPage({ params: { eventName } }: EventDetailPageProps) {
  const decodedUrlParam = decodeURIComponent(eventName);
  const eventsPageData = getEventsPageData();
  const clientImages = await getAllClientImages();
  const comingSoonEvents = await getComingsoonEvents() || [];

  const events = await getAllEvents() || [];
  const event = events.find((e) => {
    return (getEventNameParam(e.eventName) === decodedUrlParam)
  });
  if (event) {
    const client = event.clientName;
    const clientEvents = events.filter((e)=>{
        return e.clientName == client && e.eventName !== event.eventName;
    }).map((e => ({
      ...e,
      comingSoon: false,
    })));

    const clientsComingSoonEvents = comingSoonEvents.filter((e)=> e.clientName === client).map((e => ({
      ...e,
      comingSoon: true,
    })));

    const upcomingEvents = [...clientEvents, ...clientsComingSoonEvents];

    return (
      <>
        <Head>
          <title>{`Givher Event - ${event.eventName}`}</title>
          <meta name='description' content={`Event details for ${event.clientName}'s event ${event.eventName}`} />
          <meta property='og:title' content={`Givher Event - ${event.eventName}`} />
          <meta property='og:description' content={`Event details for ${event.clientName}'s event ${event.eventName}`} />
          <meta property='og:url' content={`https://www.givher.com/events/detail/${eventName}`} />
        </Head>
        <GlobalLayout>
          <EventDetailPage event={event} clientEvents={upcomingEvents} postponedEventText={eventsPageData.postponedEventText} upcomingEventsTitle={eventsPageData.clientEventPageUpcomingEventsTitle} clientImages={clientImages}/>
        </GlobalLayout>
      </>
    );
  }
  return (
    <GlobalLayout>
      <div className="bg-white dark:bg-navySmoke w-full  min-h-[calc(100vh-408px)] flex items-center justify-center">
        <h1 className="font-visbyBold text-mauvelous dark:text-softOpal">Oops! Event not found.</h1>
      </div>
    </GlobalLayout>
  )
}

export async function generateStaticParams() {
  const currentDate = new Date();
  const events = (await getAllEvents() || [])
    .filter(event => {
      const eventDate = new Date(event.firstDayOfEvent);
      return (!event.postponed && eventDate >= currentDate) || event.postponed;
    })
    .sort((a, b) => {
      const timestampA = new Date(a.firstDayOfEvent).getTime();
      const timestampB = new Date(b.firstDayOfEvent).getTime();
      return timestampA - timestampB;
    });

  if (events.length === 0) {
    console.warn("No events available to generate static pages.");
    return [{ eventName: 'no-events' }];
  }

  return events.map(event => ({
    eventName: getEventNameParam(event.eventName)
  }));
}
