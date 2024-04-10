import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';
import ClientsPage from '@/components/clients/ClientsPage';
import Head from 'next/head';

export default function Home() { 
  return (
    <>
      <Head>
        <title>Givher | Current and Past Clients</title>
        <meta name='description' content='Explore the list of organizations and advocacy groups that partner with Givher for fundraising and event development services.'/>
        <meta property='og:title' content='Givher | Current and Past Clients'/>
        <meta property='og:description' content="Explore the list of organizations and advocacy groups that partner with Givher for fundraising and event development services."/>
        <meta property='og:url' content='https://www.givher.com/clients'/>
      </Head>
      <GlobalLayout>
        <ClientsPage/>
      </GlobalLayout>
    </>

  )
}