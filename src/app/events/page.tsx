import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';
import EventsPage from '@/components/events/EventsPage';

export default function EventsMainPage() { 
  return (
    <>
      <GlobalLayout>
        <EventsPage/>
      </GlobalLayout>
    </>

  )
}
