import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';
import Homepage from '@/components/home/HomepageV2';

export async function generateMetadata() {
  return {
    title: 'Givher Political Hospitality',
    description: 'Givher is a dynamic and forward-thinking company specializing in fundraising, event development, and political hospitality.',
    openGraph: {
      title: 'Givher Political Hospitality',
      description: 'Givher is a dynamic and forward-thinking company specializing in fundraising, event development, and political hospitality.',
      url: '/',
      siteName: 'Givher',
      type: 'website',
      }
    }
}

export default function Home() { 
  return (
    <GlobalLayout>
      <Homepage/>
    </GlobalLayout>
  )
}
