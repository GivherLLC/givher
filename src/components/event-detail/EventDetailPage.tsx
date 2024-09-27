import React from "react";
import { EventType, UpcomingClientEventType } from "@/types/types";
import DetailHeader from "./DetailHeader";
import { ClientImage } from "@/types/types";

import { lazy } from 'react';

const EventDetails = lazy(() => import('./EventDetails'));
const UpcomingClientEvents = lazy(()=> import('./UpcomingClientEvents'));


export default function EventDetailPage({event, clientEvents, postponedEventText, upcomingEventsTitle, clientImages}:{event:EventType, clientEvents: UpcomingClientEventType[], postponedEventText:string, upcomingEventsTitle:string, clientImages: ClientImage[]}){
    const client = event.clientName;

    return (
        <>
            <DetailHeader event={event} postponedEventText={postponedEventText} clientImages={clientImages}/>
            <EventDetails event={event} postponedEventText={postponedEventText}/>
            {!!clientEvents.length && (
            <UpcomingClientEvents clientName={client} events={clientEvents} event={event} postponedEventText={postponedEventText} upcomingEventsTitle={upcomingEventsTitle}/>
            )}
        </>
    )
}