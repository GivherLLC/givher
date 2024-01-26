'use client'
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { getImagePath } from '@/utils/imagePath';

const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });
const Homepage = dynamic(() => import('../components/Homepage'), { ssr: false });

export default function Home() {
  const [scrollToSection, setScrollToSection] = useState<null | string>(null);
  const scrollTo = (sectionId:string) => {
    setScrollToSection(sectionId);
  };
  const handleScrollComplete = () => {
    setScrollToSection(null);
  };

  return (
    <>
      <Head>
        <meta property='og:title' content='Givher - Political Hospitality'/>
        <meta property='og:description' content="Givher LLC is a dynamic and forward-thinking company specializing in fundraising, event development, and political hospitality."/>
        <meta property='og:image' content={getImagePath('preview-link-image.png')}/>
        <meta property='og:url' content='www.givher.com'/>
      </Head>
      <div className="flex flex-col">
        <Navbar scrollTo={scrollTo}/>
        <Homepage scrollToSection={scrollToSection} handleScrollComplete={handleScrollComplete}/>
      </div>
    </>

  )
}
