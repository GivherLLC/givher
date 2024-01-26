'use client'
import React, { useEffect } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import useScreenSize from '../hooks/useScreenSize';
import { getImagePath } from '@/utils/imagePath';
import homepageData from "../data/homepage.json";

type HomepageProps = {
    scrollToSection: string | null,
    handleScrollComplete: ()=>void,
}

export default function Homepage({scrollToSection, handleScrollComplete}:HomepageProps){
    const screenSize = useScreenSize();

    useEffect(() => {
        if (scrollToSection) {
          // Perform scroll action to the specified section
          const targetSection = document.getElementById(scrollToSection);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
    
            // Notify the parent component that the scroll is complete
            handleScrollComplete();
          }
        }
      }, [scrollToSection, handleScrollComplete]);

    return (
        <main>
            <div className='flex flex-col gap-10 xl:gap-5 bg-softOpal h-full md:h-[calc(100vh-59px)] p-5 xl:p-20'>
                <div className="flex flex-1 justify-center items-center pt-10 xl:pt-0">
                    <img
                        src={getImagePath("GIVHER_Primary_NavySmoke.png")}
                        alt="Givher Logo"
                        className="w-full max-w-[1000px]"
                        width={1024}
                        height={448}
                        />
                </div>
                <div className='flex items-center justify-center gap-[30px]'>
                    <a href={`mailto:${homepageData.contactEmail}`} aria-label="Email Alina Hernandez">
                    <LazyLoadImage
                            src={getImagePath("mail-icon.png")}
                            alt="mail"
                            width={30}
                            height={30}
                            effect="blur"
                            />
                    </a>
                    <a href="https://www.instagram.com/givherllc/" target="_blank" aria-label="Givher Instagram" rel="noreferrer">
                    <LazyLoadImage
                            src={getImagePath("ig-icon.png")}
                            alt="mail"
                            width={30}
                            height={30}
                            effect="blur"
                            />
                    </a>    
                </div>
            </div>
            <div id="about" className="scroll-mt-[59px] flex flex-1 flex-col justify-center items-center bg-mauvelous font-visby h-full xl:h-[calc(100vh-59px)]">
                <div className='flex flex-1 flex-col justify-center items-center w-5/6 max-w-screen-xl pt-10 pb-10'>
                <h1 className="font-ramenson text-navySmoke text-2xl md:text-6xl self-start pb-4">About</h1>
                <div className="flex flex-col justify-center items-center space-y-5 text-justify text-sm md:text-base">
                    {homepageData.givherBio.map((p, i)=>(
                        <p key={i}>{p}</p>
                    ))}
                </div>
                </div>
            </div>
            <div id="team" className="scroll-mt-[59px]">
                <div className="flex justify-center h-full xl:h-[calc(100vh-59px)] bg-navySmoke">
                    <div className="flex flex-col xl:flex-row items-center xl:items-between xl:space-x-5 w-5/6 max-w-screen-xl pt-10 xl:pt-0 xl:gap-10">
                        {screenSize.width < 1280 && (
                        <div className="flex items-center justify-center w-4/6 xl:w-1/2 pb-10 xl:pt-0 xl:self-end">
                            <LazyLoadImage
                                src={getImagePath("alina-crop-mobile.png")}
                                className="w-full self-end"
                                alt="Alina Hernandez"
                                effect="blur"
                                width={400}
                            />
                        </div>
                        )}
                        <div className='flex flex-1 flex-col justify-center items-center xl:w-1/2 sm:pl-0 pb-10 xl-pb-0'>
                            <h1 className="font-ramenson text-electricYellow text-2xl md:text-6xl self-start pb-4">Alina Hernandez</h1>
                            <h2 className="font-visbyBold text-softOpal text-xl md:text-4xl self-start">Founder and Principal</h2>
                            <div className="h-1 bg-electricYellow w-1/6 self-start mb-6 mt-3"/>
                            <div className="flex flex-col justify-center items-center space-y-5">
                                {homepageData.alinaBio.map((p,i)=>(
                                    <p key={i} className='text-softOpal text-justify text-sm md:text-base font-visby'>{p}</p>
                                ))}
                            </div>
                        </div>
                        {screenSize.width >= 1280 && (
                        <div className="flex items-center justify-center w-4/6 xl:w-1/2 xl:self-end">
                            <LazyLoadImage
                                src={getImagePath("alina-crop.png")}
                                className="w-[95%] self-end"
                                wrapperClassName='w-full h-full flex items-end'
                                alt="Alina Hernandez"
                                effect="blur"
                                placeholderSrc="../images/alina-crop-placeholder.png"
                            />
                        </div>
                        )}
                    </div>
                </div>
                <div className="flex justify-center h-full xl:h-[calc(100vh-59px)] bg-mauvelous">
                <div className="flex flex-col xl:flex-row items-center xl:items-between xl:space-x-5 pt-10 xl:pt-0 xl:gap-10 w-5/6 max-w-screen-xl">
                        {screenSize.width < 1280 && (
                        <div className="flex items-center justify-center w-4/6 xl:w-1/2 pb-10 xl:pt-0 xl:self-end">
                            <LazyLoadImage
                                src={getImagePath("jay-headshot-mobile.png")}
                                className="w-full self-end"
                                alt="Jay Franco"
                                effect="blur"
                                width={400}
                            />
                        </div>
                        )}
                        
                        {screenSize.width >= 1280 && (
                        <div className="flex items-center justify-center w-4/6 xl:w-1/2 xl:self-end">
                        <LazyLoadImage
                                src={getImagePath("jay-headshot.png")}
                                className="w-[95%] self-end"
                                wrapperClassName='w-full h-full flex items-end'
                                    alt="Jay Franco"
                                effect="blur"
                                placeholderSrc={getImagePath("jay-headshot-placeholder.png")}
                            />
                        </div>
                        )}
                        <div className='flex flex-1 flex-col justify-center items-center xl:w-1/2 sm:pl-0 pb-10 xl-pb-0'>
                            <h1 className="font-ramenson text-navySmoke text-2xl md:text-6xl self-start pb-4">Jay Franco</h1>
                            <h2 className="font-visbyBold text-softOpal text-xl md:text-4xl self-start">Fundraising Associate</h2>
                            <div className="h-1 bg-electricYellow w-1/6 self-start mb-6 mt-3"/>
                            <div className="flex flex-col justify-center items-center space-y-5">
                                {homepageData.jayBio.map((p,i)=>(
                                    <p key={i} className='text-black text-justify text-sm md:text-base font-visby'>{p}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact" className="flex flex-1 flex-col items-center bg-softOpal font-visby">
                <div className='flex flex-1 flex-col justify-center items-center p-10 max-w-screen-xl'>
                    <div className="flex flex-col justify-center items-center gap-5 p-12">
                        <div>{homepageData.contactPhoneNumber}</div>
                        <div>{homepageData.contactEmail}</div>
                        <div className='flex items-center justify-center gap-[20px]'>
                            <a href={`mailto:${homepageData.contactEmail}`} aria-label="Email Alina Hernandez" className='flex items-center'>
                                <LazyLoadImage
                                    src={getImagePath("mail-icon.png")}
                                    alt="mail"
                                    className="w-full"
                                    width={20}
                                    height={20}
                                    effect="blur"
                                    />
                            </a>
                            <a href="https://www.instagram.com/givherllc/" target="_blank" aria-label="Givher Instagram" rel="noreferrer" className='flex items-center'>
                                <LazyLoadImage
                                    src={getImagePath("ig-icon.png")}
                                    alt="mail"
                                    width={20}
                                    height={20}
                                    effect="blur"
                                    />
                            </a>   
                        </div>
                       
                    </div>
                </div>
            </div>
        </main>
    )
}