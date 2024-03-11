import React from "react";
// import dynamic from "next/dynamic";
import EventButton from "../common/EventButton";
// const EventButton = dynamic(() => import('../common/EventButton'), { ssr: false });

type EventCardProps = {
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
}

export default function EventCard({event}:{event:EventCardProps}){
    return (
        <div className="flex flex-col gap-[1.5rem] border border-navySmoke dark:border-softOpal rounded-[10px] py-[2.5rem] px-[1.5rem] h-full w-full sm:h-[400px] sm:w-[400px] shadow-custom-shadow dark:shadow-custom-shadow-darkmode">
            <div className="flex flex-col gap-[1.5rem]">
                <h3 className="font-ramenson text-navySmoke text-xl dark:text-softOpal">{event.eventName}</h3>
                <p className="pl-[1rem] text-navySmoke dark:text-softOpal">{event.eventDateString} | {event.eventLocation}</p>
                <p className="uppercase text-navySmoke font-bold dark:text-softOpal">{event.clientName}</p>
            </div>
            <div className="flex h-full items-center flex-wrap gap-x-[1.5rem]">
                <EventButton text={event.eventButtonName} link={event.eventButtonLink} bg="electricYellow"/>
                <EventButton text="Learn More" link={`/events/${event.clientName}/${event.eventName}-${event.firstDayOfEvent}/`} bg="mauvelous"/>
            </div>
        </div>
    )
}