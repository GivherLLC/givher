'use client'
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Helmet } from 'react-helmet-async';

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

  useEffect(() => {
    console.log(document.head.innerHTML);
  }, []);
  

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Givher Political Hospitality</title>
        <meta name='description' content='Givher LLC is a dynamic and forward-thinking company specializing in fundraising, event development, and political hospitality.'/>
        <meta property='og:title' content='Givher - Political Hospitality'/>
        <meta property='og:description' content="Givher LLC is a dynamic and forward-thinking company specializing in fundraising, event development, and political hospitality."/>
        <meta property='og:image' content="https://leighdahlin.github.io/givher/images/preview-link-image.png"/>
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property='og:url' content='https://www.givher.com'/>
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="flex flex-col">
        <Navbar scrollTo={scrollTo}/>
        <Homepage scrollToSection={scrollToSection} handleScrollComplete={handleScrollComplete}/>
      </div>
    </>

  )
}
