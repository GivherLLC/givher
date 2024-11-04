import React from "react";
import PastEventsHeader from "./PastEventsHeader";
import PastEvents from "./PastEvents";
import { PastEventsPageData, EventType, ClientImage } from "@/types/types";

export default function PastEventsPage({pageData, pastEvents, featuredPastEvents, clientLogos}:{pageData:PastEventsPageData, pastEvents:EventType[], featuredPastEvents:EventType[], clientLogos: ClientImage}){
    return (
        <>
            <PastEventsHeader headerData={pageData} featuredPastEvents={featuredPastEvents} clientLogos={clientLogos}/>
            <PastEvents allPastEvents={pastEvents} clientLogos={clientLogos}/>
        </>
    )
}