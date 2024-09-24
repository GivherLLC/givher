import React from "react";
import FeaturedEvents from "./FeaturedEvents";
// import ComingSoon from "./ComingSoon";
import useCurrentEventsSorted from "@/hooks/useCurrentEventsSorted";
import { EventsPageProps } from "@/app/events/page";
// import getEventNameParam from "@/utils/getEventNameParam";
import { lazy } from 'react';

const AllEvents = lazy(() => import('./AllEvents'));



const EventsPage = ({ events, eventsPageData, clientImagesObject }:EventsPageProps) => {
  const postponedEventText = eventsPageData.postponedEventText;
  const currentEvents = useCurrentEventsSorted(events)// Assuming you have this hook

  // Featured events function as defined
  const featuredEvents = () => {
    // const comingSoonEvents = eventsPageData.comingSoon; // Assuming this is from eventsPageData
    const firstFiveEvents = currentEvents.slice(0, 4);

    if (firstFiveEvents.length < 4 
      // && comingSoonEvents
    ) {
      const remainingEventsCount = 4 - firstFiveEvents.length;
      // const additionalComingSoonEvents = comingSoonEvents.slice(0, remainingEventsCount);
      return [...firstFiveEvents
        // , ...additionalComingSoonEvents
      ].sort((a, b) => {
        const timestampA = new Date(a.firstDayOfEvent).getTime();
        const timestampB = new Date(b.firstDayOfEvent).getTime();
        return timestampA - timestampB;
      });
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
      <AllEvents events={currentEvents} postponedEventText={postponedEventText} allEventsSectionTitle={eventsPageData.allEventsSectionTitle}/>
      {/* {!!eventsData.comingSoon?.length && (
        <ComingSoon comingEvents={eventsData.comingSoon} />
      )} */}
    </div>
  );
};

export default EventsPage;