import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';
import EventsPage from '@/components/events/EventsPage';

export default function Home() { 
  return (
    <>
      <GlobalLayout>
        <EventsPage/>
      </GlobalLayout>
    </>

  )
}
