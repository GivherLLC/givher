'use client'
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

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
      <div className="flex flex-col">
        <Navbar scrollTo={scrollTo}/>
        <Homepage scrollToSection={scrollToSection} handleScrollComplete={handleScrollComplete}/>
      </div>
    </>

  )
}
