import React from "react";
import EventDetailPage from "@/components/event-detail/EventDetailPage";
import { Metadata } from "next";
import getEventNameParam from "@/utils/getEventNameParam";
import getEventsPageData from "../../../../../../lib/getEventsPageData";
import getAllEvents from "../../../../../../lib/getAllEvents";
import getAllClientImages from "../../../../../../lib/getAllClientImages";
import getComingsoonEvents from "../../../../../../lib/getComingSoonEvents";
import { EventDetailPageProps } from "@/types/types";

export async function generateMetadata({ params: { eventSlugOrName } }: EventDetailPageProps): Promise<Metadata> {
  const decodedParam = decodeURIComponent(eventSlugOrName);

  const events = await getAllEvents() || [];
  const event = events.find((e) => {
    return (e.slug === decodedParam || getEventNameParam(e.eventName) === decodedParam);
  });

  if (event) {
    const title = `${event.eventName} | Givher Event`;
    const description = `Event details for ${event.clientName}'s event ${event.eventName}`;
    const url = `/events/detail/${event.slug}`;  // Ensure slug is used in the URL
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url,
        siteName: "Givher",
        type: "website",
      },
    };
  } else {
    return {
      title: "Event Not Found",
    };
  }
}

export default async function EventsDetailPage({ params: { eventSlugOrName } }: EventDetailPageProps) {
  const decodedParam = decodeURIComponent(eventSlugOrName);
  const eventsPageData = getEventsPageData();
  const clientImages = await getAllClientImages();
  const comingSoonEvents = await getComingsoonEvents() || [];

  const events = await getAllEvents() || [];
  const event = events.find((e) => {
    return (e.slug === decodedParam || getEventNameParam(e.eventName) === decodedParam);
  });

  if (event) {
    const client = event.clientName;
    const clientEvents = events.filter((e) => {
      return e.clientName === client && e.eventName !== event.eventName;
    }).map((e) => ({
      ...e,
      comingSoon: false,
    }));

    const clientsComingSoonEvents = comingSoonEvents.filter((e) => e.clientName === client).map((e) => ({
      ...e,
      comingSoon: true,
    }));

    const upcomingEvents = [...clientEvents, ...clientsComingSoonEvents];

    return (
      <EventDetailPage
        event={event}
        clientEvents={upcomingEvents}
        postponedEventText={eventsPageData.postponedEventText}
        clientImages={clientImages}
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
  const currentDate = new Date();
  const events = (await getAllEvents() || [])
    .filter((event) => {
      const eventDate = new Date(event.firstDayOfEvent);
      return (!event.postponed && eventDate >= currentDate) || event.postponed;
    })
    .sort((a, b) => {
      const timestampA = new Date(a.firstDayOfEvent).getTime();
      const timestampB = new Date(b.firstDayOfEvent).getTime();
      return timestampA - timestampB;
    });

  const params = events.map((event) => {
    return ({
      eventSlugOrName: event.slug || getEventNameParam(event.eventName),  // Prioritize slug for static params
    });
  });

  return params;
}