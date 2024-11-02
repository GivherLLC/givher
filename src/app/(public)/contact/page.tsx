import React from 'react';
import ContactPage from '@/components/contact/ContactPage';
import getContactPageData from '../../../../lib/getContactPageData';

export async function generateMetadata() {
  return {
    title: 'Contact | Givher',
    description: 'Find our contact information to get in touch with Givher and sign up for event and fundraising updates.',
    openGraph: {
      title: 'Contact | Givher',
      description: 'Find our contact information to get in touch with Givher and sign up for event and fundraising updates.',
      url: '/contact',
      siteName: 'Givher',
      type: 'website',
      images: [
        {
          url: 'https://www.givher.com/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: 'Givher Event Banner'
        }
        ],
      }
    }
}

export default function Home() { 
  const contactData = getContactPageData();

  return (
    <ContactPage contactData={contactData}/>
  )
}
