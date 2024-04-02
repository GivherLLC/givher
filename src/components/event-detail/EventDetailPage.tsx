import React from "react";
import { EventType } from "@/types/types";
import DetailHeader from "./DetailHeader";
import EventDetails from "./EventDetails";
import UpcomingClientEvents from "./UpcomingClientEvents";
import eventData from "../../data/events.json";

export default function EventDetailPage({event}:{event:EventType}){
    const client = event.clientName;
    const clientEvents = eventData.events.filter((e)=>{
        const currentDate = new Date();
        // Convert the string date to a Date object
        const eventDate = new Date(e.firstDayOfEvent);
        // Compare the event date with the current date
        return eventDate >= currentDate && e.clientName == client && e.eventName !== event.eventName;
    })

    return (
        <>
            <DetailHeader event={event}/>
            <EventDetails event={event}/>
            {!!clientEvents.length && (
            <UpcomingClientEvents clientName={client} events={clientEvents}/>
            )}
        </>
    )
}