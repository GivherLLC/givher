'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import navySmokeLogo from "../components/img/GIVHER_Primary_NavySmoke.png";
import alinaImage from "../components/img/alina-crop.png"
import mailIcon from "../components/img/mail-icon.png"

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
            <div id="about" className="flex flex-1 flex-col justify-center items-center bg-mauvelous font-visby h-screen">
                <div className='flex flex-1 flex-col justify-center items-center w-5/6 max-w-screen-xl pt-10 pb-10'>
                <h1 className="font-ramenson text-navySmoke text-2xl md:text-6xl self-start pb-4">About</h1>
                <div className="flex flex-col justify-center items-center space-y-5 text-justify text-sm md:text-base">
                <p>
                Givher, a dynamic consulting firm based in California, empowers change-makers through political hospitality. Founded by a non-binary, female-presenting person of color, Givher embodies a fresh perspective and a commitment to diversity, equity, and inclusion.
                </p>
                <p>With expertise in fundraising, event management, general consulting, and modern technology, Givher is uniquely positioned to support individuals, organizations, and campaigns in their quest for impactful political engagement. Our tailored approach recognizes the delicate approach political spaces require and leverages innovative strategies to thrive in them.</p>
                <p>At Givher, we understand the power of collaboration and believe that successful ventures are built upon solid relationships. Our team of experienced consultants excels at fostering meaningful connections, bridging the gap between stakeholders, and generating sustainable solutions. We pride ourselves on navigating the complex landscape of political fundraising and event management while keeping an unwavering focus on the client’s priorities.</p>
                <p>Whether seeking financial support, planning a high-impact event, or eager to contribute to positive change, Givher is your trusted partner. Together, we can create an unforgettable experience with a lasting impact. Let’s get to work!</p>
                </div>
                </div>
            </div>
            <div id="team" className="bg-navySmoke flex justify-center lg:h-screen">
                <div className="flex flex-col lg:flex-row items-center lg:items-between lg:space-x-5 bg-navySmoke pt-10 w-5/6 max-w-screen-xl">
                <div className='flex flex-1 flex-col justify-center items-center lg:w-1/2 sm:pl-0 sm:pb-0 lg:pb-10'>
                    <h1 className="font-ramenson text-electricYellow text-2xl md:text-6xl self-start pb-2">Alina Hernandez</h1>
                    <h2 className="font-visbyBold text-softOpal text-xl md:text-4xl self-start">Principle</h2>
                    <div className="h-1 bg-electricYellow w-1/6 self-start mb-6 mt-3"/>
                    <div className="flex flex-col justify-center items-center space-y-5">
                    <p className='text-softOpal text-justify text-sm md:text-base font-visby'>
                    Alina Hernandez (she/they) is the Principal Consultant for the California Legislative LGBTQ Caucus, President of the LGBTQ Capitol Association, and a full-stack web developer. Her work has advanced numerous policies related to equality and civil rights, including AB 2969, which officially made June the month of Pride in California. The law resulted in the Pride flag flying over the Capitol for the first time in state history. Alina also played a key role in crafting ACR 269, which requested the California lawmakers to use only gender-neutral pronouns when drafting new laws. Before venturing into public policy, Alina worked for the state’s Employment Development Department as a computer hardware and software technician. She was born on an Air Force base in Germany and grew up in the greater Sacramento area. She later studied at the Fashion Institute of Design & Merchandising and graduated from City College of San Francisco’s Emergency Medical Technician program. Alina now lives in Sacramento with their partner and their dog, Lemon.
                    </p>
                    </div>
                </div>
                <Image
                    src={alinaImage}
                    alt="Givher Logo"
                    className="w-4/6 lg:w-1/2 pt-20 lg:pt-0 lg:self-end"
                    priority
                    />
                    </div>
            </div>
            <div id="contact" className="flex flex-1 flex-col items-center bg-softOpal font-visby">
                <div className='flex flex-1 flex-col justify-center items-center p-10 max-w-screen-xl'>
                    <div className="flex flex-col justify-center items-center space-y-3 p-12">
                        <div>916-296-4656</div>
                        <div>alina@givher.com</div>
                        <a href="mailto:alina@getgivher.com">
                        <Image
                            src={mailIcon}
                            alt="mail"
                            width={20}
                            priority
                            />
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}