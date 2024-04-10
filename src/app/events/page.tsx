import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';
import EventsPage from '@/components/events/EventsPage';
import Head from 'next/head';

export default function EventsMainPage() { 
  return (
    <>
      <Head>
        <title>Givher - Events</title>
        <meta name='description' content='View the schedule and details of upcoming events hosted or managed by Givher, specializing in fundraising and engagement initiatives.'/>
        <meta property='og:title' content='Givher - Events'/>
        <meta property='og:description' content="View the schedule and details of upcoming events hosted or managed by Givher, specializing in fundraising and engagement initiatives."/>
        <meta property='og:url' content='https://www.givher.com/events'/>
      </Head>
      <GlobalLayout>
        <EventsPage/>
      </GlobalLayout>
    </>

  )
}
