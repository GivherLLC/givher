import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';
import ClientsPage from '@/components/clients/ClientsPage';

export async function generateMetadata() {
  return {
    title: 'Current and Past Clients | Givher',
    description: 'Explore the list of organizations and advocacy groups that partner with Givher for fundraising and event development services.',
    openGraph: {
      title: 'Current and Past Clients | Givher',
      description: 'Explore the list of organizations and advocacy groups that partner with Givher for fundraising and event development services.',
      url: '/clients',
      siteName: 'Givher',
      type: 'website',
      }
    }
}

export default function Home() { 
  return (
    <GlobalLayout>
      <ClientsPage/>
    </GlobalLayout>
  )
}