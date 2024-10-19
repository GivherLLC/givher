import React from "react";
import EventCard from "../common/EventCard";
import ComingSoonEventCard from "../common/ComingSoonEventCard";
import { EventType, ComingSoonEventType, UpcomingClientEventType } from "@/types/types";

type UpcomingComingSoonType = ComingSoonEventType & {
    comingSoon: boolean;
}

export default function UpcomingClientEvents({events, clientName, event, postponedEventText, upcomingEventsTitle }:{ events: UpcomingClientEventType[], clientName:string, event: EventType, postponedEventText:string, upcomingEventsTitle:string }){
    const { eventName } = event;
    const shownEvents = events.filter((e)=> e.eventName !== eventName).slice(0, 3);

    function isComingSoonEventType(event: UpcomingClientEventType): event is UpcomingComingSoonType {
        return event.comingSoon === true;
      }      

    return (
        <div className="bg-softOpal dark:bg-navySmoke py-[2.5rem] flex justify-center">
            <div className="flex flex-col w-full max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <h1 className="font-visbyBold text-navySmoke dark:text-softOpal text-center lg:text-left mb-[1rem]">{clientName}</h1>
                <h2 className="uppercase text-[1.75rem] text-black dark:text-softOpal text-center lg:text-left mb-[2.5rem]">{upcomingEventsTitle}</h2>
                <div className={`flex flex-col lg:flex-row ${events.length < 3 ? "":"lg:justify-between"} gap-[2rem] items-center w-full`}>
                    {shownEvents.map((e, i)=>{
                        if(!isComingSoonEventType(e)){
                            return (
                                <EventCard key={`${i}-${e.clientName}-${e.eventName}-${e.firstDayOfEvent}`} event={e} postponedEventText={postponedEventText} showClientName={false}/>
                            )
                        } else {
                            return (
                                <ComingSoonEventCard key={`${i}-${e.clientName}-${e.eventName}-${e.firstDayOfEvent}`} event={e} postponedEventText={postponedEventText} showClientName={false} showTag={true}/>
                            )
                        }

                    })}
                </div>
            </div>
        </div>
    )
}