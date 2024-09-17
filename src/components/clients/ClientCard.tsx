import React from "react";
import Link from "next/link";
import { getAssetPath } from "@/utils/assetPath";

type ClientCardProps = {
    clientInfo: {
        clientName: string;
        clientImageSrc: string;
        clientWebsite: string;
        clientW9Src: string;    
    }
}

export default function ClientCard({clientInfo}:ClientCardProps){
    const {clientName, clientImageSrc, clientWebsite, clientW9Src} = clientInfo;
    return (
    <div key={clientName} className="group relative">
        <img loading="eager" src={getAssetPath(clientImageSrc)} alt={`${clientName} logo`} width={280} height={175} className="rounded-[20px] border border-1 border-mauvelous"/>
        <div className="absolute top-0 rounded-[20px] hidden group-hover:flex bg-opacity-80 bg-navySmoke h-full w-full px-[1rem] py-[1.5rem] flex-col justify-between">
            <p className="text-softOpal">{clientName}</p>
            <div className="flex justify-between">
                {clientWebsite && (
                    <Link className={`bg-electricYellow p-[0.75rem] min-w-[120px] rounded-[.5rem] font-medium text-black text-center`} href={clientWebsite} target="_blank">
                        Website
                    </Link>
                )}
                {clientW9Src && (
                    <Link className={`bg-softOpal p-[0.75rem] min-w-[120px] rounded-[.5rem] font-medium text-black text-center`} href={clientW9Src} target="_blank">
                       W-9
                    </Link>
                )}
            </div>
        </div>    
    </div>  
    )
}