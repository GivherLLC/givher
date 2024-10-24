import React from "react";
import { getAssetPath } from "@/utils/assetPath";
import { EventType } from "@/types/types";
import ArrowLink from "../common/ArrowLink";

export default function EventDetails({event, postponedEventText}:{event:EventType, postponedEventText:string}){
    const { eventName, eventDescription, eventButtonTextOne, eventButtonLinkOne, eventButtonTextTwo, eventButtonLinkTwo, boldedEventInformation, detailImage  } = event;

    return (
        <div className="bg-softOpal dark:bg-navySmoke py-[4.5rem] flex justify-center overflow-hidden">
            <div className="flex flex-col lg:flex-row w-full items-center justify-center lg:justify-between gap-[2.5rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <div className="w-full h-full max-w-[615px] lg:w-1/2 flex flex-col gap-[1rem]">
                    <h1 className="font-visbyBold text-navySmoke dark:text-softOpal">{eventName}</h1>
                    {event.postponed && <div className="text-red">{postponedEventText}</div>}
                    <div className="flex">
                        <ArrowLink text={eventButtonTextTwo? eventButtonTextTwo:eventButtonTextOne} color="black" darkModeColor="softOpal" link={eventButtonLinkTwo ? eventButtonLinkTwo: eventButtonLinkOne} borderColor="mauvelous" openNewTab={true}/>
                    </div>
                    <div className="flex flex-col items-center lg:items-start">
                    {!!eventDescription && eventDescription.map((item, i) => (
                    <p key={i} className="text-black dark:text-softOpal">
                        {item.paragraph}
                    </p>
                    ))}
                    </div>
                    <div className="flex flex-col">
                        {!!boldedEventInformation && boldedEventInformation.map((item,i)=>(
                            <p key={i} className="text-black dark:text-softOpal font-visbyBold">{item.line}</p>
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