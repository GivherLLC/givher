import React from "react";

import homepageData from "../../data/homepage.json";
import eventsData from "../../data/events.json";
import { lazy } from 'react';

import HeroVideo from "./HeroVideo";
import FloatingLogos from "./FloatingLogos";
import UpcomingEvents from "./UpcomingEvents";
import AboutUs from "./AboutUs";
const Services = lazy(() => import('./Services'));
const EventsCarousel = lazy(() => import('./EventsCarousel'));
const Form = lazy(() => import('./Form'));

export default function Homepage(){
    const {video, logos, services, featuredEvents, about, eventCarousel, form} = homepageData;
    const { events } = eventsData;

    const currentDate = new Date().getTime();
    const upcomingEvents = events.sort((a, b) => {
        const dateA = new Date(a.firstDayOfEvent).getTime();
        const dateB = new Date(b.firstDayOfEvent).getTime();
        // Exclude past events during sorting
        return dateA >= currentDate ? (dateB >= currentDate ? dateA - dateB : -1) : 1;
    }).filter(event => {
        const eventDate = new Date(event.firstDayOfEvent).getTime();
        // Exclude events happening on the current day
        return eventDate > currentDate;
    }).slice(0, 3);

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