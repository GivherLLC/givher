import React from "react";
import EventButton from "../common/EventButton";
import EventsFilter from "./EventsFilter";
import { EventType } from "@/types/types";
import eventsData from "../../data/events.json";


export default function AllEvents({events}:{events:EventType[]}){
    return (
        <div id="events" className="bg-softOpal dark:bg-navySmoke my-[2.5rem] flex justify-center">
            <div className="flex flex-col w-full justify-center gap-[1rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <h1 className="font-visbyBold text-navySmoke dark:text-softOpal">{eventsData.allEventsSectionTitle}</h1>
                {!events.length ? (
                    <div className="h-full flex flex-col justify-center md:justify-start items-start gap-[1.5rem]">
                        <p className="text-black dark:text-softOpal">We do not have any events right now. Sign up for updates to receive information about future events.</p>
                        <EventButton text="Sign Up" link="/signup4emails" bg="mauvelous"/>
                    </div>
                ):(
                    <EventsFilter events={events}/>
                )}
            </div>
        </div>
    )
}