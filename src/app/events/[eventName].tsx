// pages/events/[eventName].tsx
'use client'
import React from "react";
import Layout from "../layout"

import jsonData from "../../data/events.json";

import { GetStaticPaths, GetStaticProps } from 'next';

interface Event {
  clientName: string;
  eventName: string;
  eventDateString: string;
  eventDescription: string[];
  boldedEventInformation: string[];
  eventLocation: string;
  eventLocationTime: string | null;
  eventPdfSrc: string;
  eventButtonName: string;
  eventButtonLink: string;
}

interface EventsPageProps {
  event: Event;
}

const EventsPage: React.FC<EventsPageProps> = ({ event }) => {
  return (
    <Layout>
    <div>
      <h1>{event.eventName}</h1>
      {/* Render other event details here */}
    </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const events: Event[] = jsonData.events;

   const paths = events.map(event => ({
     params: { eventName: event.eventName.replace(/\s+/g, '-').toLowerCase() }
   }));
   console.log(paths)
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const events: Event[] = jsonData.events;
  const eventName = params?.eventName as string;
  const event = events.find(e => e.eventName.replace(/\s+/g, '-').toLowerCase() === eventName);
  console.log(event)

  if (!event) {
    return { notFound: true };
  }

  return {
    props: { event },
    revalidate: 1,
  };
};

export default EventsPage;

