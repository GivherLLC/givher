import React from "react";
import clientData from "../../data/clients.json";
import Link from "next/link";
import { getAssetPath } from "@/utils/assetPath";

export default function AllClients(){
    const clients = clientData.clients;

    return (
        <div className="bg-softOpal dark:bg-navySmoke py-[2.5rem] flex justify-center">
            <div className="flex flex-col w-full items-center justify-center gap-[2.5rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <h1 className="font-visbyBold text-navySmoke dark:text-softOpal">{clientData.clientsSectionTitle}</h1>
                <div className="flex flex-wrap gap-[2rem] justify-center lg:justify-start">
                    {clients.map((c)=>(
                        <div key={c.clientName} className="group relative">
                            <img loading="eager" src={getAssetPath(c.clientImageSrc)} alt={`${c.clientName} logo`} width={280} height={175} className="rounded-[20px] border border-1 border-mauvelous"/>
                            <div className="absolute top-0 rounded-[20px] hidden group-hover:flex bg-opacity-80 bg-navySmoke h-full w-full px-[1rem] py-[1.5rem] flex-col justify-between">
                                <p className="text-softOpal">{c.clientName}</p>
                                <div className="flex justify-between">
                                    {c.clientWebsite && (
                                        <Link className={`bg-electricYellow p-[0.75rem] min-w-[120px] rounded-[.5rem] font-medium text-black text-center`} href={c.clientWebsite} target="_blank">
                                            Website
                                        </Link>
                                    )}
                                    {c.clientW9Src && (
                                        <Link className={`bg-softOpal p-[0.75rem] min-w-[120px] rounded-[.5rem] font-medium text-black text-center`} href={c.clientW9Src} target="_blank">
                                           W-9
                                        </Link>
                                    )}
                                </div>
                            </div>    
                        </div>    
                    ))}
                </div>
            </div>
        </div>

    )
}