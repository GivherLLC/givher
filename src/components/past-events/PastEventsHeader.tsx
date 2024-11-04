import React from "react";
import { PastEventsPageData, EventType, ClientImage } from "@/types/types";
import FeaturedPastEventCard from "./FeaturedPastEventCard";

export default function PastEventsHeader({headerData, featuredPastEvents, clientLogos}:{headerData: PastEventsPageData, featuredPastEvents: EventType[], clientLogos:ClientImage}){
    const {pastEventsPageTitle, pastEventsPageSubtitle} = headerData;

    return (
        <section className="bg-softOpal dark:bg-navySmoke py-[2.5rem] flex justify-center">
            <div className="flex flex-col w-full items-center justify-center gap-[2.5rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
            <h1 className="font-visbyBold text-navySmoke dark:text-softOpal">{pastEventsPageTitle}</h1>
            <p className="text-navySmoke dark:text-softOpal max-w-[650px] text-center">{pastEventsPageSubtitle}</p>
            <div>
            {featuredPastEvents.map((e,i)=>{
                const priority = i === 0;
                const clientLogo = clientLogos[e.clientName];
                return (
                    <FeaturedPastEventCard key={e.eventName} priority={priority} event={e} clientLogo={clientLogo}/>
                )
            })}
            </div>
            </div>
        </section>
    )
}