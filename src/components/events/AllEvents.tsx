import React from "react";
import EventCard from "../common/EventCard";
import EventButton from "../common/EventButton";
import EventsFilter from "./EventsFilter";

type AllEventsProps = {
    clientName:string;
    eventName:string;
    eventDateString:string;
    firstDayOfEvent:string;
    eventDescription:string[];
    boldedEventInformation:string[]
    eventCity:string;
    eventLocationTime:string | null;
    eventPdfLink:string | null;
    eventButtonText:string;
    eventButtonLink:string;
}[]

export default function AllEvents({events}:{events:AllEventsProps}){
    return (
        <div id="events" className="bg-softOpal dark:bg-navySmoke py-[2.5rem] flex justify-center">
            <div className="flex flex-col w-full justify-center gap-[1rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <h1 className="font-ramenson text-navySmoke dark:text-softOpal">Events</h1>
                {!events.length ? (
                    <div className="h-full flex flex-col justify-center md:justify-start items-start gap-[1.5rem]">
                        <p className="text-black dark:text-softOpal">We do not have any events right now. Sign up for updates to receive information about future events.</p>
                        <EventButton text="Sign Up" link="/contact" bg="mauvelous"/>
                    </div>
                ):(
                    <EventsFilter/>
                )}
            </div>
        </div>
    )
}