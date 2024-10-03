import React from 'react';
import ContactPage from '@/components/contact/ContactPage';

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
      }
    }
}

export default function Home() { 
  return (
    <ContactPage/>
  )
}
