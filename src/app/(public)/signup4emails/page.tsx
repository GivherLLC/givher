import React from 'react';
import SignUpForEmailsForm from '@/components/signup4emails/Form';
import getSignUpForEmailsPageData from '../../../../lib/getSignUpPageData';

export async function generateMetadata() {
  return {
    title: 'Sign Up for Emails | Givher',
    description:
      'Stay connected with exclusive event invites by signing up for our emails today.',
    openGraph: {
      title: 'Sign Up for Emails  | Givher',
      description:
        'Stay connected with exclusive event invites by signing up for our emails today.',
      url: '/signup4emails',
      siteName: 'Givher',
      type: 'website',
      images: [
        {
          url: 'https://www.givher.com/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: 'Givher Political Hospitality',
        },
      ],
    },
  };
}

export default function SignUpForEmails() {
  const data = getSignUpForEmailsPageData();

  return <SignUpForEmailsForm data={data} />;
}
