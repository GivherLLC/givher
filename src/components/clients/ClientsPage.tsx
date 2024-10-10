import React from "react";
import AllClients from "./AllClients";
import { lazy } from 'react';
import { Client } from "@/types/types";
import { ClientsPageData } from "@/types/types";

const Testimonials = lazy(() => import('./Testimonials'));

export default function ClientsPage({clients, clientsPageData}:{clients:Client[], clientsPageData: ClientsPageData}){
    return (
        <>
           <AllClients clients={clients} clientsSectionTitle={clientsPageData.clientsSectionTitle}/>
           <Testimonials testimonials={clientsPageData.testimonials} testimonalsSectionTitle={clientsPageData.testimonalsSectionTitle}/>
        </>
    )
}