import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';
import EventsPage from '@/components/events/EventsPage';

export async function generateMetadata() {
  return {
    title: 'Events | Givher',
    description: 'View the schedule and details of upcoming events hosted or managed by Givher, specializing in fundraising and engagement initiatives.',
    openGraph: {
      title: 'Events | Givher',
      description: 'View the schedule and details of upcoming events hosted or managed by Givher, specializing in fundraising and engagement initiatives.',
      url: '/events',
      siteName: 'Givher',
      type: 'website',
      }
    }
}

export default function EventsMainPage() { 
  return (
    <GlobalLayout>
      <EventsPage/>
    </GlobalLayout>
  )
}
