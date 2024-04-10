import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';
import Homepage from '@/components/home/HomepageV2';
import Head from 'next/head';

export default function Home() { 
  return (
    <>
      <Head>
        <title>Givher Political Hospitality</title>
        <meta name='description' content='Givher LLC is a dynamic and forward-thinking company specializing in fundraising, event development, and political hospitality.'/>
        <meta property='og:title' content='Givher'/>
        <meta property='og:description' content="Givher LLC is a dynamic and forward-thinking company specializing in fundraising, event development, and political hospitality."/>
        <meta property='og:url' content='https://www.givher.com/'/>
      </Head>
      <GlobalLayout>
        <Homepage/>
      </GlobalLayout>
    </>

  )
}
