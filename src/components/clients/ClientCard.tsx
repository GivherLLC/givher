import React from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowLink from "../common/ArrowLink";

type ClientCardProps = {
    clientInfo: {
        clientName: string;
        clientLogo: string;
        clientWebsite: string;
        clientW9Src: string;    
    }
}

export default function ClientCard({clientInfo}:ClientCardProps){
    const {clientName, clientLogo, clientWebsite, clientW9Src, eventLink} = clientInfo;
    return (
    <div className="group">
        <div className="relative bg-white rounded-[20px] border border-1 border-mauvelous flex items-center justify-center w-[280px] h-[175px]">
            <Image priority={true} src={clientLogo} alt={`${clientName} logo`} width={280} height={175} className="rounded-[20px] max-w-[250px] w-auto max-h-[150px] h-auto"/>
            <div className="absolute top-0 rounded-[20px] hidden group-hover:flex bg-opacity-80 bg-navySmoke h-full w-full px-[1rem] py-[1.5rem] flex-col justify-between">
                <p className="text-softOpal">{clientName}</p>
                <div className="flex justify-between">
                    {clientWebsite && (
                        <Link className={`bg-electricYellow p-[0.75rem] min-w-[120px] rounded-[.5rem] font-medium text-black text-center`} href={clientWebsite} target="_blank" rel="noopener noreferrer">
                            Website
                        </Link>
                    )}
                    {clientW9Src && (
                        <Link className={`bg-softOpal p-[0.75rem] min-w-[120px] rounded-[.5rem] font-medium text-black text-center`} href={clientW9Src} target="_blank" rel="noopener noreferrer">
                        W-9
                        </Link>
                    )}
                </div>
            </div>    
        </div>  
        <div className="opacity-0 group-hover:opacity-100 pt-[0.5rem] text-visbyBold">
            {eventLink && (
        <ArrowLink text={`View ${eventLink} Events`} color={"black"} darkModeColor={"softOpal"} link={`${eventLink === "current" ? `/events?client=${encodeURIComponent(clientName)}`:`/past-events?client=${encodeURIComponent(clientName)}`}`} className="justify-center md:justify-start text-[0.9rem]"/>

            )}
        </div>
    </div>
    )
}