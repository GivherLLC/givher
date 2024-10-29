import React from "react";
import { EventType, ClientEventType } from "@/types/types";
import DetailHeader from "./DetailHeader";
import { ClientImage } from "@/types/types";

import { lazy } from 'react';

const EventDetails = lazy(() => import('./EventDetails'));
const ClientEvents = lazy(()=> import('./ClientEvents'));


export default function EventDetailPage({event, clientEvents, postponedEventText, clientImages}:{event:EventType, clientEvents: ClientEventType[], postponedEventText:string, clientImages: ClientImage[]}){
    const client = event.clientName;

    return (
        <>
            <DetailHeader event={event} postponedEventText={postponedEventText} clientImages={clientImages}/>
            <EventDetails event={event} postponedEventText={postponedEventText}/>
            {!!clientEvents.length && (
            <ClientEvents clientName={client} events={clientEvents} event={event} postponedEventText={postponedEventText} />
            )}
        </>
    )
}