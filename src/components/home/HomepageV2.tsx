import React from "react";

import { lazy } from 'react';

import HeroVideo from "./HeroVideo";
import FloatingLogos from "./FloatingLogos";
import UpcomingEvents from "./UpcomingEvents";
import AboutUs from "./AboutUs";
import { EventType, ClientLogo } from "@/types/types";
import { HomePageData } from "@/app/page";

type HomepageProps = {
  homepageInfo: HomePageData;
  events: EventType[];
  postponedEventText: string;
  clientLogos: ClientLogo[];
}

const Services = lazy(() => import('./Services'));
const EventsCarousel = lazy(() => import('./EventsCarousel'));



export default function Homepage({ homepageInfo, events, postponedEventText, clientLogos }:HomepageProps){
    const { video, services, featuredEvents, about, eventCarousel } = homepageInfo;
  
    const upcomingEvents = events.slice(0, 3);

    return (
        <>
            <HeroVideo data={video}/>
            <FloatingLogos logos={clientLogos}/>
            <Services services={services}/>
            {!!upcomingEvents.length && (
                <UpcomingEvents title={featuredEvents.title} events={upcomingEvents} postponedEventText={postponedEventText} />
            )}
            <AboutUs aboutInfo={about}/>
            <EventsCarousel events={eventCarousel}/>
        </>
    )
}