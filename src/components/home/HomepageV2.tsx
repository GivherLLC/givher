import React from "react";

import homepageData from "../../data/homepage.json";
import { lazy } from 'react';

import HeroVideo from "./HeroVideo";
import FloatingLogos from "./FloatingLogos";
import UpcomingEvents from "./UpcomingEvents";
import AboutUs from "./AboutUs";

import useCurrentEventsSorted from "@/hooks/useCurrentEventsSorted";

const Services = lazy(() => import('./Services'));
const EventsCarousel = lazy(() => import('./EventsCarousel'));
const Form = lazy(() => import('./Form'));

export default function Homepage(){
    const {video, logos, services, featuredEvents, about, eventCarousel, form} = homepageData;
    const currentEvents = useCurrentEventsSorted();

    const upcomingEvents = currentEvents.slice(0, 3);

    return (
        <>
            <HeroVideo data={video}/>
            <FloatingLogos logos={logos}/>
            <Services services={services}/>
            {!!upcomingEvents.length && (
                <UpcomingEvents title={featuredEvents.title} events={upcomingEvents}/>
            )}
            <AboutUs aboutInfo={about}/>
            <EventsCarousel events={eventCarousel}/>
            <Form title={form.contactFormTitle}/>
        </>
    )
}