import React from "react";
import Image from "next/image";
import { EventType } from "@/types/types";
import ButtonLink from "../common/ButtonLink";
import { ClientImage } from "@/types/types";

export default function DetailHeader({event, postponedEventText, clientImages}:{event:EventType, postponedEventText:string, clientImages: ClientImage[]}){
    const clientImagesObject = clientImages.reduce<Record<string, string>>((acc, obj) => {
        const [key, value] = Object.entries(obj)[0] as [string, string]; // Type assertion to ensure key-value pair is [string, string]
        acc[key] = value; // Add the key-value pair to the accumulator object
        return acc;
        }, {});

    const { clientName, eventName, eventCity, eventButtonTextOne, eventButtonLinkOne, eventLocation, firstDayOfEvent, lastDayOfEvent, eventTime } = event;
    const clientImage = clientImagesObject[clientName];

    return (
        <div className="bg-navySmoke py-[2.5rem] flex justify-center">
            <div className="flex flex-col md:flex-row w-full items-center justify-center gap-[2.5rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <div className="w-full md:w-1/2 flex flex-col gap-[1rem]">
                <div className="flex flex-col gap-[0.5rem]"></div>
                    <p className="flex justify-center md:justify-start gap-[1rem] flex-wrap"><span className="text-softOpal">{firstDayOfEvent}{!!lastDayOfEvent && ` - ${lastDayOfEvent}`}</span><span className="text-electricYellow">{eventLocation}</span></p>
                    {event.postponed && <div className="text-red">{postponedEventText}</div>}
                    <h1 className="font-visbyBold text-softOpal mb-[2rem] text-center md:text-left">{eventName}</h1>
                    <h2 className="font-visbyBold text-softOpal text-center md:text-left">{eventCity} {!!eventTime && <span className="text-mauvelous text-2xl font-visbyBold pl-[1rem]">{eventTime}</span>}</h2>  
                    <div className="flex gap-[1rem] md:items-center justify-center md:justify-start">
                        <ButtonLink openNewTab bg="electricYellow" darkModeBg="electricYellow" text={eventButtonTextOne} link={eventButtonLinkOne}/>
                       
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                <div className="bg-white h-[450px] w-[450px] rounded-lg flex justify-center items-center">
                    <Image priority={true} height={450} width={450} src={clientImage} alt={eventName} className="w-full max-w-[360px] rounded-lg"/>
                </div>
                </div>
            </div>
        </div>
    )
}