import React from 'react';
import SignUpForEmailsForm from '@/components/signup4emails/Form';
import getSignUpForEmailsPageData from '../../../lib/getSignUpPageData';

export interface SignUpForEmailsData {
  signupTitle: string;
  googleFormLink: string;
}

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

export default function SignUpForEmails() { 
  const data = getSignUpForEmailsPageData();

  return (
    <SignUpForEmailsForm data={data} />
  )
}
