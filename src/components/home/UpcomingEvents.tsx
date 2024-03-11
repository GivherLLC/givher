import React from "react";
// import dynamic from "next/dynamic";
import ArrowLink from "../common/ArrowLink";
import EventCard from "../common/EventCard";
// const ArrowLink = dynamic(() => import('../common/ArrowLink'), { ssr: false });
// const EventCard = dynamic(() => import('../common/EventCard'), { ssr: false });

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
            <div className="flex flex-col w-full items-center justify-center gap-[2.5rem]">
                <h1 className="font-ramenson text-navySmoke dark:text-softOpal">{title}</h1>
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-[1rem] items-center w-full max-w-[85.75rem] mx-[0.625rem] md:mx-[1.5625rem]">
                    {events.map((e)=>(
                        <EventCard key={`${e.clientName}-${e.eventName}-${e.firstDayOfEvent}`} event={e}/>
                    ))}
                </div>
                <div className="flex justify-center items-center">
                    <ArrowLink text="See All Events" color="black" darkModeColor="softOpal" link="/events/" borderColor="mauvelous"/>
                </div>
            </div>
        </div>
    )
}