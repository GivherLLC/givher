import React from "react";
import InTheWorksEventCard from "../common/InTheWorksEventCard";
import { EventType, ClientImage } from "@/types/types";

type ComingSoonProps = {
    comingEvents: EventType[];
    postponedEventText: string;
    title: string;
    subtitle: string;
    clientImages: ClientImage;
}

export default function InTheWorks({comingEvents, postponedEventText, title, subtitle, clientImages}:ComingSoonProps){
    return (
        <div id="events" className="bg-softOpal dark:bg-navySmoke py-[2.5rem] flex justify-center">
            <div className="flex flex-col w-full justify-center gap-[2.5rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <div>
                    <h1 className="font-visbyBold text-navySmoke dark:text-softOpal mb-[1rem]">{title}</h1>
                    <p className="text-navySmoke dark:text-softOpal">{subtitle}</p>
                </div>
                <div className="flex flex-wrap gap-[4rem]">
                    {comingEvents.map((e,i)=>{
                        const clientImage = clientImages[e.clientName];
                    return(
                        <InTheWorksEventCard key={`${i}-${e.clientName}-${e.eventName}`} event={e} postponedEventText={postponedEventText}
                        clientLogo={clientImage}
                        showTag={false}
                        />
                    )})}
                </div>
            </div>
        </div>
    )
}