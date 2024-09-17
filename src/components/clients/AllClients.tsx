import React from "react";
import clientData from "../../data/clients.json";
import ClientCard from "./ClientCard";

export default function AllClients(){
    const clients = clientData.clients;

    return (
        <div className="bg-softOpal dark:bg-navySmoke py-[2.5rem] flex justify-center">
            <div className="flex flex-col w-full items-center justify-center gap-[2.5rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <h1 className="font-visbyBold text-navySmoke dark:text-softOpal">{clientData.clientsSectionTitle}</h1>
                <div className="flex flex-wrap gap-[2rem] justify-center lg:justify-start">
                    {clients.map((c)=>(
                        <ClientCard key={c.clientName} clientInfo={c}/>
                    ))}
                </div>
            </div>
        </div>

    )
}