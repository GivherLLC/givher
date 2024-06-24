'use client'
import React, { useMemo } from "react";
import FeaturedEvents from "./FeaturedEvents";
import eventsData from "../../data/events.json";
import ComingSoon from "./ComingSoon";
import useCurrentEventsSorted from "@/hooks/useCurrentEventsSorted";

import { lazy } from 'react';

const AllEvents = lazy(() => import('./AllEvents'));


export default function EventsPage(){
  const currentEvents = useCurrentEventsSorted();

  //Pulls 4 events from list of events and coming soon events
  const featuredEvents = useMemo(() => {
      const comingSoonEvents = eventsData.comingSoon;
      const firstFiveEvents = currentEvents.slice(0, 4);
    
      if (firstFiveEvents.length < 4 && comingSoonEvents) {
        const remainingEventsCount = 4 - firstFiveEvents.length;
        const additionalComingSoonEvents = comingSoonEvents.slice(0, remainingEventsCount);
        return [...firstFiveEvents, ...additionalComingSoonEvents].sort((a, b) => {
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
    }, [currentEvents]);
    
  return (
      <div className="min-h-[calc(100vh-360px)] bg-softOpal dark:bg-navySmoke">
          <FeaturedEvents events={featuredEvents}/>
          <AllEvents events={currentEvents}/>
          {!!eventsData.comingSoon.length && (
              <ComingSoon comingEvents={eventsData.comingSoon}/>
          )}
      </div>
  )
}