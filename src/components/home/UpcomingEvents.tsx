import React from "react";
import ArrowLink from "../common/ArrowLink";
import EventCard from "../common/EventCard";

type HomepageEventsProps = {
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

export default function events({title, events}:{title:string, events: HomepageEventsProps}){

    return (
        <div className="bg-softOpal dark:bg-navySmoke py-[2.5rem] flex justify-center">
            <div className={`flex flex-col w-full items-center justify-center gap-[2.5rem] px-[0.625rem] md:px-[1.5625rem]`}>
                <h1 className="font-ramenson text-navySmoke dark:text-softOpal">{title}</h1>
                <div className={`flex flex-col lg:flex-row justify-center ${events.length < 3 ? "":"lg:justify-between"} gap-[1rem] items-center w-full max-w-[85.75rem]`}>
                    {events.map((e, i)=>(
                        <EventCard key={`${i}-${e.clientName}-${e.eventName}-${e.firstDayOfEvent}`} event={e}/>
                    ))}
                </div>
                <div className="flex justify-center items-center">
                    <ArrowLink text="See All Events" color="black" darkModeColor="softOpal" link="/events/" borderColor="mauvelous"/>
                </div>
            </div>
        </div>
    )
}