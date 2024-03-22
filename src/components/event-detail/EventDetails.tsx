import React from "react";
import { getAssetPath } from "@/utils/assetPath";
import { EventType } from "@/types/types";
import ArrowLink from "../common/ArrowLink";

export default function EventDetails({event}:{event:EventType}){
    const { eventName, eventDescription, eventPdfLink, boldedEventInformation, detailImage  } = event;

    return (
        <div className="bg-softOpal dark:bg-navySmoke py-[4.5rem] flex justify-center">
            <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-[2.5rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <div className="w-full lg:w-1/2 flex flex-col gap-[1rem]">
                    <h1 className="font-ramenson text-navySmoke dark:text-softOpal text-center lg:text-left">{eventName}</h1>
                    <div className="flex justify-center lg:justify-start">
                        <ArrowLink text="View Flyer" color="black" darkModeColor="softOpal" link={eventPdfLink} borderColor="mauvelous"/>
                    </div>
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    {eventDescription.map((p,i)=>(
                        <p key={i} className="text-black dark:text-softOpal">{p}</p>
                    ))}
                    </div>
                    <div className="flex flex-col items-center lg:items-start">
                        {boldedEventInformation.map((b,i)=>(
                            <p key={i} className="text-black dark:text-softOpal font-semibold">{b}</p>
                        ))}
                    </div>
                </div>
                <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-left">
                    <img src={getAssetPath("/images/events/paint-splatter-small.png")} alt="paint splatter" height="333" width="322" className="absolute left-[30%] lg:left-[-23%] bottom-[-23%] z-0"/>
                    <img height="385" width="615" src={getAssetPath(detailImage)} alt={eventName} className="relative z-8"/>
                </div>
            </div>
        </div>
    )
}