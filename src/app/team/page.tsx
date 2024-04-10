import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';
import TeamPage from '@/components/team/TeamPage';
import Head from 'next/head';

export default function Home() { 
  return (
    <>
      <Head>
        <title>Givher - Team</title>
        <meta name='description' content='Learn about the individuals comprising the team at Givher, dedicated to supporting clients and driving social impact through fundraising and event development.'/>
        <meta property='og:title' content='Givher - Team'/>
        <meta property='og:description' content="Learn about the individuals comprising the team at Givher, dedicated to supporting clients and driving social impact through fundraising and event development."/>
        <meta property='og:url' content='https://www.givher.com/team/'/>
      </Head>
      <GlobalLayout>
        <TeamPage/>
      </GlobalLayout>
    </>

  )
}
