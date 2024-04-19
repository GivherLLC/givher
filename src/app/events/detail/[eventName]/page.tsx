import React from "react";
import eventsData from "../../../../data/events.json";
import EventDetailPage from "@/components/event-detail/EventDetailPage";
import GlobalLayout from "@/components/GlobalLayout";
import Head from "next/head";
import { Metadata } from "next";

type EventDetailPageProps = {
  params: {
    eventName: string;
  }
}

const getEventParam = (eventName:string)=>{
  return eventName.replace(/\s+/g, '-').toLowerCase();
}

export async function generateMetadata({params: {eventName}}:EventDetailPageProps): Promise<Metadata> {
  const decodedUrlParam = decodeURIComponent(eventName);

  const events = eventsData.events;
  const event = events.find((e)=>{
    return (getEventParam(e.eventName) === decodedUrlParam)
  });

  if(event){
    const title = `${event.eventName} | Givher Event`;
    const description = `Event details for ${event.clientName}'s event ${event.eventName} on ${event.eventDateString}`;
    const url = `/events/detail/${eventName}`;
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: url,
      siteName: 'Givher',
      type: 'website',
      }
  }
} else {
  return {
    title: 'Event Not Found',
  }
}
}

export default function EventsDetailPage ({params: {eventName}}:EventDetailPageProps) {
  const decodedUrlParam = decodeURIComponent(eventName);

  const events = eventsData.events;
  const event = events.find((e)=>{
    return (getEventParam(e.eventName) === decodedUrlParam)
  });
  if(event){
    return (
      <>
      <Head>
        <title>{`Givher Event - ${event.eventName}`}</title>
        <meta name='description' content={`Event details for ${event.clientName}'s event ${event.eventName} on ${event.eventDateString}`}/>
        <meta property='og:title' content={`Givher Event - ${event.eventName}`}/>
        <meta property='og:description' content={`Event details for ${event.clientName}'s event ${event.eventName} on ${event.eventDateString}`}/>
        <meta property='og:url' content={`https://www.givher.com/events/detail/${eventName}`}/>
      </Head>
      <GlobalLayout>
        <EventDetailPage event={event}/>
      </GlobalLayout>

      </>
    );
  }
  return (
    <GlobalLayout>
      <div className="bg-white dark:bg-navySmoke h-full w-full flex items-center justify-center">
        <p className="font-ramenson text-mauvelous dark:text-softOpal-">Oops! Event not found.</p>
      </div>
    </GlobalLayout>
  )
};

export async function generateStaticParams() {
  const events = eventsData.events.filter((event)=> {
    const currentDate = new Date();
      // Convert the string date to a Date object
      const eventDate = new Date(event.firstDayOfEvent);
      // Compare the event date with the current date
      return eventDate >= currentDate;
  });

   return events.map(event => ({
      eventName: event.eventName.replace(/\s+/g, '-').toLowerCase()
   }));

}