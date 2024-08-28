import React from "react";
import EventCard from "../common/EventCard";
import { ComingSoonEventType } from "@/types/types";
import eventsData from "../../data/events.json";

type ComingSoonProps = ComingSoonEventType[]

export default function ComingSoon({comingEvents}:{comingEvents:ComingSoonProps}){
    return (
        <div id="events" className="bg-softOpal dark:bg-navySmoke py-[2.5rem] flex justify-center">
            <div className="flex flex-col w-full justify-center gap-[2.5rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <h1 className="font-visbyBold text-navySmoke dark:text-softOpal">{eventsData.comingSoonEventsSectionTitle}</h1>
                <div className="flex flex-wrap gap-[4rem]">
                    {comingEvents.map((e,i)=>(
                        <EventCard key={`${i}-${e.clientName}-${e.eventName}`} event={e} type="coming-soon"/>
                    ))}
                </div>
            </div>
        </div>
    )
}