import React from "react";
import eventsData from "../../../../data/events.json";
import EventDetailPage from "@/components/event-detail/EventDetailPage";
import GlobalLayout from "@/components/GlobalLayout";

type EventDetailPageProps = {
  params: {
    eventName: string;
  }
}

const getEventParam = (eventName:string)=>{
  return eventName.replace(/\s+/g, '-').toLowerCase();
}

export default function EventsDetailPage ({params: {eventName}}:EventDetailPageProps) {
  const decodedUrlParam = decodeURIComponent(eventName);

  const events = eventsData.events;
  const event = events.find((e)=>{
    return (getEventParam(e.eventName) === decodedUrlParam)
  });
  if(event){
    return (
      <GlobalLayout>
        <EventDetailPage event={event}/>
      </GlobalLayout>
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