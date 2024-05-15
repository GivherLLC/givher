import React from "react";
import { getAssetPath } from "@/utils/assetPath";
import { EventType } from "@/types/types";
import eventsData from "../../data/events.json";
import ButtonLink from "../common/ButtonLink";

export default function DetailHeader({event}:{event:EventType}){
    const {clientImages}: { clientImages: { [key: string]: string } } = eventsData;
    const { clientName, eventName, eventDateString, eventCity, eventButtonText, eventButtonLink } = event;
    const clientImage = clientImages[clientName];

    return (
        <div className="bg-navySmoke py-[2.5rem] flex justify-center">
            <div className="flex flex-col sm:flex-row w-full items-center justify-center gap-[2.5rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <div className="w-full md:w-1/2 flex flex-col gap-[1rem]">
                    <p className="flex justify-center md:justify-start gap-[1rem] flex-wrap"><span className="text-softOpal">{eventDateString}</span><span className="text-electricYellow">{eventCity}</span></p>
                    {event.postponed && <div className="text-red">{eventsData.postponedEventText}</div>}
                    <h1 className="font-ramenson text-softOpal mb-[2rem] text-center md:text-left">{eventName}</h1>
                    <div className="flex gap-[1rem] md:items-center justify-center md:justify-start">
                        <ButtonLink openNewTab bg="electricYellow" darkModeBg="electricYellow" text={eventButtonText} link={eventButtonLink}/>
                        <h2 className="uppercase text-softOpal text-[1rem] max-w-[200px] hidden md:block">{clientName}</h2>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img loading="eager" height={450} width={450} src={getAssetPath(`/images/events/client-images/${clientImage}`)} alt={eventName} className="w-[60%] sm:w-[unset]"/>
                </div>
            </div>
        </div>
    )
}