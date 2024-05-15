import React from "react";
import { getAssetPath } from "@/utils/assetPath";
import { EventType } from "@/types/types";
import ArrowLink from "../common/ArrowLink";
import eventsData from "../../data/events.json";

export default function EventDetails({event}:{event:EventType}){
    const { eventName, eventDescription, eventLink, eventLinkText, boldedEventInformation, detailImage  } = event;

    return (
        <div className="bg-softOpal dark:bg-navySmoke py-[4.5rem] flex justify-center overflow-hidden">
            <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-[2.5rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <div className="w-full max-w-[615px] lg:w-1/2 flex flex-col gap-[1rem]">
                    <h1 className="font-ramenson text-navySmoke dark:text-softOpal">{eventName}</h1>
                    {event.postponed && <div className="text-red">{eventsData.postponedEventText}</div>}
                    <div className="flex">
                        <ArrowLink text={eventLinkText} color="black" darkModeColor="softOpal" link={eventLink} borderColor="mauvelous" openNewTab={true}/>
                    </div>
                    <div className="flex flex-col items-center lg:items-start">
                    {eventDescription.map((p,i)=>(
                        <p key={i} className="text-black dark:text-softOpal">{p}</p>
                    ))}
                    </div>
                    <div className="flex flex-col">
                        {boldedEventInformation.map((b,i)=>(
                            <p key={i} className="text-black dark:text-softOpal font-semibold">{b}</p>
                        ))}
                    </div>
                </div>
                <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-left">
                    <img loading="lazy" height={311} width={322} src={getAssetPath("/images/events/paint-splatter-small.png")} alt="paint splatter" className="absolute left-[30%] lg:left-[-23%] bottom-[-23%] z-0"/>
                    <img loading="lazy" height={385} width={615} src={getAssetPath(detailImage)} alt={eventName} className="relative z-8"/>
                </div>
            </div>
        </div>
    )
}