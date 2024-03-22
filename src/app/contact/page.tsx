import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';
import ContactPage from '@/components/contact/ContactPage';

export default function Home() { 
  return (
    <>
      <GlobalLayout>
        <ContactPage/>
      </GlobalLayout>
    </>

  )
}
