import React from "react";
import AllClients from "./AllClients";
import { lazy } from 'react';

const Testimonials = lazy(() => import('./Testimonials'));

export default function ClientsPage(){
    return (
        <>
           <AllClients/>
           <Testimonials/>
        </>
    )
}