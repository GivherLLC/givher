'use client'
import React, { useMemo } from "react";
import FeaturedEvents from "./FeaturedEvents";
import eventsData from "../../data/events.json";
import AllEvents from "./AllEvents";
import ComingSoon from "./ComingSoon";

export default function EventsPage(){

    //TO DO: create utility to handle grabbing featured events
    //Need to ask Alina how she wants this

    const featuredEvents = useMemo(()=>{
        const allEvents = eventsData.events;
        const comingSoonEvents = eventsData.comingSoon;

        if(eventsData.events.length < 3){
            if(comingSoonEvents){
                return [...allEvents, ...comingSoonEvents];

            }
            return allEvents;
        }
        return allEvents;
    },[])

    return (
        <div className="min-h-[calc(100vh-360px)] bg-softOpal dark:bg-navySmoke">
            <FeaturedEvents events={featuredEvents}/>
            <AllEvents events={eventsData.events}/>
            {!!eventsData.comingSoon.length && (
                <ComingSoon comingEvents={eventsData.comingSoon}/>
            )}
        </div>
    )
}