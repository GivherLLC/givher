import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';
import ContactPage from '@/components/contact/ContactPage';
import Head from 'next/head';

export default function Home() { 
  return (
    <>
      <Head>
        <title>Givher - Contact</title>
        <meta name='description' content='Find our contact information to get in touch with Givher and sign up for event and fundraising updates.'/>
        <meta property='og:title' content='Givher - Contact'/>
        <meta property='og:description' content="Find our contact information to get in touch with Givher and sign up for event and fundraising updates."/>
        <meta property='og:url' content='https://www.givher.com/contact'/>
      </Head>
      <GlobalLayout>
        <ContactPage/>
      </GlobalLayout>
    </>

  )
}
