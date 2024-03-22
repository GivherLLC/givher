import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';
import TeamPage from '@/components/team/TeamPage';

export default function Home() { 
  return (
    <>
      <GlobalLayout>
        <TeamPage/>
      </GlobalLayout>
    </>

  )
}
