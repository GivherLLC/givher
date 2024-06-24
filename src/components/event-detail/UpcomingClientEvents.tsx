import React from "react";
import EventCard from "../common/EventCard";
import { EventType } from "@/types/types";
import eventsData from "../../data/events.json";
import useCurrentEventsSorted from "@/hooks/useCurrentEventsSorted";

export default function UpcomingClientEvents({events, clientName}:{events: EventType[], clientName:string}){
    const currentEvents = useCurrentEventsSorted();

    return (
        <div className="bg-softOpal dark:bg-navySmoke py-[2.5rem] flex justify-center">
            <div className="flex flex-col w-full gap-[2.5rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <h1 className="font-ramenson text-navySmoke dark:text-softOpal text-center lg:text-left">{eventsData.clientEventPageUpcomingEventsTitle}</h1>
                <h2 className="uppercase text-black dark:text-softOpal text-[1rem] text-center lg:text-left">{clientName}</h2>
                <div className={`flex flex-col lg:flex-row ${events.length < 3 ? "":"lg:justify-between"} gap-[2rem] items-center w-full`}>
                    {currentEvents.map((e, i)=>(
                        <EventCard key={`${i}-${e.clientName}-${e.eventName}-${e.firstDayOfEvent}`} event={e} type="detail-page"/>
                    ))}
                </div>
            </div>
        </div>
    )
}