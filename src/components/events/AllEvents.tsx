import React from "react";
import EventCard from "../common/EventCard";

type AllEventsProps = {
    clientName:string;
    eventName:string;
    eventDateString:string;
    firstDayOfEvent:string;
    eventDescription:string[];
    boldedEventInformation:string[]
    eventLocation:string;
    eventLocationTime:string | null;
    eventPdfSrc:string | null;
    eventButtonName:string;
    eventButtonLink:string;
}[]

export default function AllEvents({events}:{events:AllEventsProps}){
    return (
        <div id="events" className="bg-softOpal dark:bg-navySmoke py-[2.5rem] flex justify-center">
            <div className="flex flex-col w-full justify-center gap-[2.5rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <h1 className="font-ramenson text-navySmoke dark:text-softOpal">Events</h1>
                <div className="flex flex-wrap gap-[4rem]">
                    {events.map((e,i)=>(
                        <EventCard key={`${i}-${e.clientName}-${e.eventName}-${e.firstDayOfEvent}`} event={e} type="events-page"/>
                    ))}
                </div>
            </div>
        </div>
    )
}