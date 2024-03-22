import React from "react";

import homepageData from "../../data/homepage.json";
import eventsData from "../../data/events.json";

import HeroVideo from "./HeroVideo";
import FloatingLogos from "./FloatingLogos";
import Services from "./Services";
import UpcomingEvents from "./UpcomingEvents";
import AboutUs from "./AboutUs";
import EventsCarousel from "./EventsCarousel";
import Form from "./Form";

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