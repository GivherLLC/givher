'use client'
import React, { useMemo } from "react";
import FeaturedEvents from "./FeaturedEvents";
import eventsData from "../../data/events.json";
import AllEvents from "./AllEvents";
import ComingSoon from "./ComingSoon";

export default function EventsPage(){

    const shownEvents = eventsData.events.filter((event)=> {
        const currentDate = new Date();
          // Convert the string date to a Date object
          const eventDate = new Date(event.firstDayOfEvent);
          // Compare the event date with the current date
          return eventDate >= currentDate;
      }); 

    //TO DO: create utility to handle grabbing featured events
    //Need to ask Alina how she wants this  
    const featuredEvents = useMemo(()=>{
        const comingSoonEvents = eventsData.comingSoon;

        if(eventsData.events.length < 3){
            if(comingSoonEvents){
                return [...shownEvents, ...comingSoonEvents];

            }
            return shownEvents;
        }
        return shownEvents;
    },[shownEvents])

    return (
        <div className="min-h-[calc(100vh-360px)] bg-softOpal dark:bg-navySmoke">
            <FeaturedEvents events={featuredEvents}/>
            <AllEvents events={shownEvents}/>
            {!!eventsData.comingSoon.length && (
                <ComingSoon comingEvents={eventsData.comingSoon}/>
            )}
        </div>
    )
}