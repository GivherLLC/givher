import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';
import SignUpForEmailsForm from '@/components/signup4emails/Form';

export async function generateMetadata() {
  return {
    title: 'Sign Up for Emails | Givher',
    description: 'Stay connected with exclusive event invites by signing up for our emails today.',
    openGraph: {
      title: 'Sign Up for Emails  | Givher',
      description: 'Stay connected with exclusive event invites by signing up for our emails today.',
      url: '/signup4emails',
      siteName: 'Givher',
      type: 'website',
      }
    }
}

export default function Home() { 
  return (
    <GlobalLayout>
      <SignUpForEmailsForm/>
    </GlobalLayout>
  )
}
