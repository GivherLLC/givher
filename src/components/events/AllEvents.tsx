import React from "react";
import EventButton from "../common/EventButton";
import EventsFilter from "./EventsFilter";
import { EventType } from "@/types/types";
import { ClientImage } from "@/types/types";

export default function AllEvents({events, postponedEventText, allEventsSectionTitle, clientImages}:{events:EventType[], postponedEventText:string, allEventsSectionTitle:string, clientImages: ClientImage}){
    return (
        <div id="all-events" className="bg-softOpal dark:bg-navySmoke my-[2.5rem] flex justify-center scroll-pt-[82px]">
            <div className="flex flex-col w-full justify-center gap-[1rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <h1 className="font-visbyBold text-navySmoke dark:text-softOpal">{allEventsSectionTitle}</h1>
                {!events.length ? (
                    <div className="h-full flex flex-col justify-center md:justify-start items-start gap-[1.5rem]">
                        <p className="text-black dark:text-softOpal">We do not have any events right now. Sign up for updates to receive information about future events.</p>
                        <EventButton text="Sign Up" link="/signup4emails" bg="mauvelous"/>
                    </div>
                ):(
                    <EventsFilter events={events} postponedEventText={postponedEventText} clientImages={clientImages}/>
                )}
            </div>
        </div>
    )
}