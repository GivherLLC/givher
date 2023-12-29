'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import navySmokeLogo from "../components/img/GIVHER_Primary_NavySmoke.png";

interface ChildComponentProps {
    scrollToSection: string | null;
    handleScrollComplete: () => void;
  }

export default function Homepage({scrollToSection, handleScrollComplete}:ChildComponentProps){
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient && scrollToSection) {
          // Perform scroll action to the specified section
          const targetSection = document.getElementById(scrollToSection);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
    
            // Notify the parent component that the scroll is complete
            handleScrollComplete();
          }
        }
      }, [isClient, scrollToSection, handleScrollComplete]);


    return (
        <main>
            <div className="flex flex-1 justify-center items-center p-20 bg-softOpal h-screen">
            <Image
                    src={navySmokeLogo}
                    alt="Givher Logo"
                    className="w-5/6 max-w-screen-lg"
                    priority
                    />
            </div>
            <div id="about" className="flex flex-1 flex-col justify-center items-center bg-mauvelous h-screen font-visby p-10">
                <div className='flex flex-1 flex-col justify-center items-center p-10 max-w-screen-lg'>
                <h1 className="font-ramenson text-navySmoke ke text-6xl self-start pb-2">About</h1>
                <div className="flex flex-col justify-center items-center space-y-5 p-12 text-justify">
                <p>
                Givher, a dynamic consulting firm based in California, empowers change-makers through political hospitality. Founded by a non-binary, female-presenting person of color, Givher embodies a fresh perspective and a commitment to diversity, equity, and inclusion.
                </p>
                <p>With expertise in fundraising, event management, general consulting, and modern technology, Givher is uniquely positioned to support individuals, organizations, and campaigns in their quest for impactful political engagement. Our tailored approach recognizes the delicate approach political spaces require and leverages innovative strategies to thrive in them.</p>
                <p>At Givher, we understand the power of collaboration and believe that successful ventures are built upon solid relationships. Our team of experienced consultants excels at fostering meaningful connections, bridging the gap between stakeholders, and generating sustainable solutions. We pride ourselves on navigating the complex landscape of political fundraising and event management while keeping an unwavering focus on the client’s priorities.</p>
                <p>Whether seeking financial support, planning a high-impact event, or eager to contribute to positive change, Givher is your trusted partner. Together, we can create an unforgettable experience with a lasting impact. Let’s get to work!</p>
                </div>
                </div>
            </div>
            <div id="team" className="flex flex-1 flex-col items-between bg-navySmoke h-screen font-visby p-20">
                <div className='flex flex-1 flex-col justify-center items-center max-w-screen-lg w-1/2'>
                    <h1 className="font-ramenson text-electricYellow ke text-6xl self-start pb-2">Alina Hernandez</h1>
                    <h2 className="font-visbyBold text-softOpal ke text-4xl self-start">Principle</h2>
                    <div className="h-1 bg-electricYellow w-1/6 self-start mb-6 mt-3"/>
                    <div className="flex flex-col justify-center items-center space-y-5">
                    <p className='text-softOpal text-justify'>
                    Alina Hernandez (she/they) is the Principal Consultant for the California Legislative LGBTQ Caucus, President of the LGBTQ Capitol Association, and a full-stack web developer. Her work has advanced numerous policies related to equality and civil rights, including AB 2969, which officially made June the month of Pride in California. The law resulted in the Pride flag flying over the Capitol for the first time in state history. Alina also played a key role in crafting ACR 269, which requested the California lawmakers to use only gender-neutral pronouns when drafting new laws. Before venturing into public policy, Alina worked for the state’s Employment Development Department as a computer hardware and software technician. She was born on an Air Force base in Germany and grew up in the greater Sacramento area. She later studied at the Fashion Institute of Design & Merchandising and graduated from City College of San Francisco’s Emergency Medical Technician program. Alina now lives in Sacramento with their partner and their dog, Lemon.
                    </p>
                    </div>
                </div>
            </div>
            <div id="contact" className="flex flex-1 flex-col items-center bg-softOpal font-visby">
                <div className='flex flex-1 flex-col justify-center items-center p-10 max-w-screen-lg'>
                    <div className="flex flex-col justify-center items-center space-y-3 p-12">
                        <div>916-296-4656</div>
                        <div>alina@givher.com</div>
                    </div>
                </div>
            </div>
        </main>
    )
}