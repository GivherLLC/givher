import React from "react";
import FeaturedEvents from "./FeaturedEvents";
import InTheWorks from "./InTheWorks";
import { EventsPageProps } from "@/types/types";
import { lazy } from "react";

const AllEvents = lazy(() => import("./AllEvents"));

const EventsPage = ({
  events,
  eventsPageData,
  clientImagesObject,
  inTheWorksEvents,
}: EventsPageProps) => {
  const postponedEventText = eventsPageData.postponedEventText;

  // Featured events function as defined
  const featuredEvents = () => {
    return events.slice(0, 4).map((event) => ({
      ...event,
    }));
  };

  return (
    <div className="min-h-[calc(100vh-360px)] bg-softOpal dark:bg-navySmoke">
      <FeaturedEvents
        events={featuredEvents()}
        clientImages={clientImagesObject}
        givherFeaturedEvent={eventsPageData.givherFeaturedEvent}
      />
      <AllEvents
        events={events}
        postponedEventText={postponedEventText}
        allEventsSectionTitle={eventsPageData.allEventsSectionTitle}
        clientImages={clientImagesObject}
      />
      {!!inTheWorksEvents.length && (
        <InTheWorks
          comingEvents={inTheWorksEvents}
          postponedEventText={postponedEventText}
          title={eventsPageData.comingSoonEventsSectionTitle}
          subtitle={eventsPageData.comingSoonEventsSectionSubtitle}
          clientImages={clientImagesObject}
        />
      )}
    </div>
  );
};

export default EventsPage;
