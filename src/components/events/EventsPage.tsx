import React from "react";
import FeaturedEvents from "./FeaturedEvents";
import eventsData from "../../data/events.json";
import AllEvents from "./AllEvents";

export default function EventsPage(){

    //TO DO: create utility to handle gradding featured events
    //Handle functionaltiy of no events

    return (
        <>
            <FeaturedEvents events={eventsData.events}/>
            <AllEvents events={eventsData.events}/>
        </>
    )
}