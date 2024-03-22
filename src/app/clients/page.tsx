import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';
import ClientsPage from '@/components/clients/ClientsPage';

export default function Home() { 
  return (
    <>
      <GlobalLayout>
        <ClientsPage/>
      </GlobalLayout>
    </>

  )
}