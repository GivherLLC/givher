import React from "react";
import FeaturedEvents from "./FeaturedEvents";
import ComingSoon from "./ComingSoon";
import { EventsPageProps } from "@/types/types";
import { lazy } from 'react';

const AllEvents = lazy(() => import('./AllEvents'));



const EventsPage = ({ events, comingSoonEvents, eventsPageData, clientImagesObject }:EventsPageProps) => {
  const postponedEventText = eventsPageData.postponedEventText;

  // Featured events function as defined
  const featuredEvents = () => {
    // Add timeOfYear and comingSoon fields to the first five events
    const firstFiveEvents = events.slice(0, 4).map(event => ({
      ...event,
      timeOfYear: null,
      comingSoon: false,
    }));

    if (firstFiveEvents.length < 4 && comingSoonEvents) {
      const remainingEventsCount = 4 - firstFiveEvents.length;
      
      // Add comingSoon field to the additional coming soon events
      const additionalComingSoonEvents = comingSoonEvents
        .slice(0, remainingEventsCount)
        .map(event => ({
          ...event,
          comingSoon: true,
        }));

      const combinedEvents = [...firstFiveEvents, ...additionalComingSoonEvents];
      return combinedEvents;
    }
    return firstFiveEvents.sort((a, b) => {
      const timestampA = new Date(a.firstDayOfEvent).getTime();
      const timestampB = new Date(b.firstDayOfEvent).getTime();
      return timestampA - timestampB;
    });
  };

  return (
    <div className="min-h-[calc(100vh-360px)] bg-softOpal dark:bg-navySmoke">
      <FeaturedEvents events={featuredEvents()} clientImages={clientImagesObject} givherFeaturedEvent={eventsPageData.givherFeaturedEvent}/>
      <AllEvents events={events} postponedEventText={postponedEventText} allEventsSectionTitle={eventsPageData.allEventsSectionTitle}/>
      {!!comingSoonEvents.length && (
        <ComingSoon comingEvents={comingSoonEvents} postponedEventText={postponedEventText} title={eventsPageData.comingSoonEventsSectionTitle} />
      )}
    </div>
  );
};

export default EventsPage;