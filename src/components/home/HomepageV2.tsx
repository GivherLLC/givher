import React from "react";
import dynamic from 'next/dynamic';

import homepageData from "../../data/homepage.json";
import eventsData from "../../data/events.json";

const HeroVideo = dynamic(() => import('./HeroVideo'), { ssr: false });
const FloatingLogos = dynamic(() => import('./FloatingLogos'), { ssr: false });
const Services = dynamic(() => import('./Services'), { ssr: false });
const UpcomingEvents = dynamic(() => import('./UpcomingEvents'), { ssr: false });
const AboutUs = dynamic(() => import('./AboutUs'), { ssr: false });
const EventsCarousel = dynamic(() => import('./EventsCarousel'), { ssr: false });
const Form = dynamic(() => import('./Form'), { ssr: false });

export default function Homepage(){
    const {video, logos, services, featuredEvents, about, eventCarousel, form} = homepageData;
    const { events } = eventsData;

    //Need to add util that goes through events data and grabs the 3 events that are coming up
    //Need to handle case of less than 3 events in data

    return (
        <>
            <HeroVideo data={video}/>
            <FloatingLogos logos={logos}/>
            <Services services={services}/>
            <UpcomingEvents title={featuredEvents.title} events={events}/>
            <AboutUs aboutInfo={about}/>
            <EventsCarousel events={eventCarousel}/>
            <Form title={form.contactFormTitle}/>
        </>
    )
}