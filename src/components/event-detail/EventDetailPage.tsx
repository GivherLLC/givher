import React from "react";
import { EventType } from "@/types/types";
import DetailHeader from "./DetailHeader";
import EventDetails from "./EventDetails";
import UpcomingClientEvents from "./UpcomingClientEvents";
import eventData from "../../data/events.json";

export default function EventDetailPage({event}:{event:EventType}){
    return (
        <>
            <DetailHeader event={event}/>
            <EventDetails event={event}/>
            <UpcomingClientEvents clientName="California Legislative LGBTQ Foundation" events={eventData.events}/>
        </>
    )
}