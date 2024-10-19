import React from 'react';
import TeamPage from '@/components/team/TeamPage';
import getTeamPageData from '../../../../lib/getTeamPageData';

export async function generateMetadata() {
  return {
    title: 'Team | Givher',
    description: 'Learn about the individuals comprising the team at Givher, dedicated to supporting clients and driving social impact through fundraising and event development.',
    openGraph: {
      title: 'Team | Givher',
      description: 'Learn about the individuals comprising the team at Givher, dedicated to supporting clients and driving social impact through fundraising and event development.',
      url: '/team',
      siteName: 'Givher',
      type: 'website',
      }
    }
}

export default function Home() { 
  const data = getTeamPageData();

  return (
    <TeamPage data={data}/>
  )
}