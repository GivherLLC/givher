import React from "react";
import { EventType } from "@/types/types";
import DetailHeader from "./DetailHeader";

import { lazy } from 'react';

const EventDetails = lazy(() => import('./EventDetails'));
const ClientEvents = lazy(()=> import('./ClientEvents'));


export default function EventDetailPage({event, clientEvents, postponedEventText, clientImage}:{event:EventType, clientEvents: EventType[], postponedEventText:string, clientImage: string}){
    const client = event.clientName;

    return (
        <>
            <DetailHeader event={event} postponedEventText={postponedEventText} clientImage={clientImage}/>
            <EventDetails event={event} postponedEventText={postponedEventText}/>
            {!!clientEvents.length && (
            <ClientEvents clientName={client} events={clientEvents} event={event} postponedEventText={postponedEventText} clientImage={clientImage} />
            )}
        </>
    )
}