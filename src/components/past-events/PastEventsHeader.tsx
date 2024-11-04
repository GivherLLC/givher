'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ButtonLink from "../common/ButtonLink";
import { PastEventsPageData, EventType, ClientImage } from "@/types/types";

export default function PastEventsHeader({headerData, featuredPastEvents, clientLogos}:{headerData: PastEventsPageData, featuredPastEvents: EventType[], clientLogos:ClientImage}){
    const {pastEventsPageTitle, pastEventsPageSubtitle} = headerData;

    const [activeIndex, setActiveIndex] = useState(0);
    const [showInfo, setShowInfo] = useState<EventType | null>(null);
    console.log(showInfo)

    useEffect(()=>{
        //prevent scrolling behind open bio
        if(showInfo){
            document.body.style.overflow = 'hidden';
        }
        return ()=>{
            document.body.style.overflow = 'unset';
        }
    },[showInfo])

    useEffect(() => {
        const Flickity = require('flickity-imagesloaded');
        const flkty = new Flickity('.past-events-carousel', {
            cellAlign: 'center',         // Align cells to the center
            cellSelector: '.past-carousel-cell',
            imagesLoaded: true,           // Ensures images are loaded before layout
            prevNextButtons: false,       // Disable default buttons (we use custom ones)
            pageDots: false,              // Disable page dots
            wrapAround: true,             // Enable infinite looping
            percentPosition: true,        // Maintains responsive positioning
            groupCells: 1,                // Move one slide at a time
            contain: true,                // Ensure cells stay within the carousel bounds
            dragThreshold: 5,
            selectedAttraction: 0.2,
            friction: 0.9,
          });
          
    
        // Add e listeners to custom buttons
        const prevButton = document.querySelector('.custom-prev-button-past');
        if (prevButton) {
          prevButton.addEventListener('click', () => {
            flkty.previous();
          });
        }
    
        const nextButton = document.querySelector('.custom-next-button-past');
        if (nextButton) {
          nextButton.addEventListener('click', () => {
            flkty.next();
          });
        }
    
        // Listen for the 'select' e
        flkty.on('select', () => {
          const activeIndex = flkty.selectedIndex;
          setActiveIndex(activeIndex);
        });
    
        // Cleanup e listeners and destroy Flickity instance on component unmount
        return () => {
          flkty.off('select');
          flkty.destroy();
        };
      }, [featuredPastEvents]); // Empty dependency array ensures the effect runs only once on mount

    return (
        <section className="bg-softOpal dark:bg-navySmoke py-[2.5rem] flex justify-center">
            <div className="flex flex-col w-full items-center justify-center gap-[2.5rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
            <h1 className="font-visbyBold text-navySmoke dark:text-softOpal">{pastEventsPageTitle}</h1>
            <p className="text-navySmoke dark:text-softOpal max-w-[650px] text-center">{pastEventsPageSubtitle}</p>
            <div className="past-events-carousel w-[290px] xs:w-[350px] sm:w-[650px] overflow-hidden">
            {featuredPastEvents.map((e,i)=>{
                const priority = i === 0;
                return (
                    <div key={`featured-past-e-${e.eventName}`} data-id={i} className="past-carousel-cell h-[400px] xs:h-[425px] sm:h-[225px] mr-[2rem] m-[2rem]">
                    <div className="group cursor-pointer flex flex-col justify-between sm:flex-row rounded-xl overflow-hidden  w-[270px] xs:w-[325px] sm:w-[625px] border border-navySmoke shadow-custom-shadow">
                        {e.detailImage && (
                            <Image
                            src={e.detailImage} 
                            alt={e.eventName} 
                            height={300} 
                            width={473} 
                            priority={priority} 
                            className="flickity-lazyloaded object-cover w-full max-w-[350px] h-auto rounded-s-xl" 
                            />
                        )}
                        <div className="w-full sm:w-[275px] flex flex-col justify-between gap-[1.5rem] py-[2rem] pl-[2rem] border-navySmoke">
                            <div className="flex justify-between items-center gap-[1rem]">
                                <div className="text-[1.25rem] text-navySmoke dark:text-softOpal">{e.firstDayOfEvent}{!!e.lastDayOfEvent && ` - ${e.lastDayOfEvent}`}</div>
                                <div className="font-visbyBold text-[0.85rem] px-[1rem] py-[0.5rem] text-navySmoke bg-mauvelous border border-navySmoke border-r-0 h-min rounded-l-3xl">
                                FEATURED
                                </div>
                            </div>
                            <div className="flex gap-[0.5rem] items-center">
                                <Image loading="lazy" alt="location icon" src={`/images/common/location-icon.svg`} height={60} width={40} className="max-w-[20px]"/>
                                <div className="flex flex-col text-navySmoke dark:text-softOpal">
                                <div className="overflow-hidden">
                                    <p
                                        className="overflow-ellipsis max-w-[240px]"
                                        style={{
                                            display: "-webkit-box",
                                            WebkitBoxOrient: "vertical",
                                            WebkitLineClamp: 1,
                                            }}
                                    >
                                        {e.eventLocation}
            
                                    </p>
                                </div>
                                <p
                                    className="overflow-ellipsis max-w-[240px]"
                                    style={{
                                        display: "-webkit-box",
                                        WebkitBoxOrient: "vertical",
                                        WebkitLineClamp: 1,
                                        }}
                                >
                                    {e.eventCity}
            
                                </p>
                                </div>
                          </div>
                          <button onClick={()=>{setShowInfo(e)}} className="w-fit relative transition duration-300 before:bg-black before:rounded-[12px] before:h-[calc(100%+3px)] before:w-[calc(100%+3.5px)] before:absolute before:left-0 before:top-0 before:transition before:transform before:translate-x-[2px] before:translate-y-[2px]">
                            <div className={`bg-electricYellow text-navySmoke text-[0.75rem] uppercase font-visbyBold py-[10px] px-[20px] rounded-[12px] border-[3px] border-navySmoke relative z-10 block group-hover:transform group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]`}>
                                Behind the Scenes
                            </div>
                        </button>
                        </div>
                    </div>
                    </div>
                )
            })}

            </div>
            {featuredPastEvents.length > 1 && (
            <div className="w-full flex justify-center">
                <div id="carousel-content-btn" className="self-end flex items-center gap-[120px] mb-[1rem] md:mb-[2rem]">
                <div className="flex gap-[24px]">
                    <button type="button" data-id="prev" aria-label="Previous Event" className="custom-prev-button-past">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="overflow-hidden transform rotate-[180deg] text-black dark:text-softOpal cursor-pointer align-middle">
                            <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z" fill="currentColor"></path>
                        </svg> 
                    </button>
                    <div>
                        {`${activeIndex + 1} / ${featuredPastEvents.length}`}
                    </div>
                    <button type="button" data-id="next" aria-label="Next Event" className="custom-next-button-past">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="overflow-hidden text-black dark:text-softOpal cursor-pointer align-middle">
                            <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z" fill="currentColor"></path>
                        </svg> 
                    </button>
                </div>
            </div>
        </div>
        )}
            </div>
            <div data-id="bio" className={`transition-opacity duration-300 ease-in-out z-[101] ${showInfo ? "opacity-100" : "opacity-0"}`}>
                            {showInfo && (
                                <div
                                className="fixed top-0 left-0 bottom-0 w-full h-full bg-overlay visible overflow-hidden z-[100] p-[1rem]"
                                onClick={() => setShowInfo(null)} // Close modal on background click
                                >
                                <div
                                    className="bg-softOpal dark:bg-navySmoke opacity-100 max-h-[80vh] max-w-[1040px] min-h-[100px] top-[10%] mx-auto relative overflow-y-scroll z-[101]"
                                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
                                >
                                    <button
                                    type="button"
                                    data-id="Close Button"
                                    onClick={() => setShowInfo(null)}
                                    className="self-end flex flex-col items-center justify-between h-[50px] w-[50px] p-0 transition-transform absolute top-[10px] right-[10px]"
                                    >
                                    <div className="h-[2px] w-full bg-grey absolute top-[50%] left-[50%] max-w-[20px] transform -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] mt-0" />
                                    <div className="h-[2px] w-full bg-grey absolute top-[50%] left-[50%] max-w-[20px] transform -translate-x-1/2 -translate-y-1/2 rotate-45 mt-0" />
                                    </button>
                                    <div className="flex flex-col lg:flex-row gap-[1.5rem]">
                                        <div className="flex flex-col items-center gap-[2rem] bg-navySmoke p-[1rem] lg:p-[4rem]">
                                            <div className="bg-white rounded-xl p-[1rem] max-w-[375px] w-full">
                                                <img alt={`${showInfo.clientName} logo`} src={clientLogos[showInfo.clientName]} className="h-auto w-auto" />
                                            </div>
                                            <h2 className="text-softOpal text-[1.2rem] max-w-[375px] text-center md:text-left">Explore More from {showInfo.clientName}</h2>
                                                <div className="flex gap-[1rem] items-center justify-center flex-wrap md:min-w-[375px]">
                                                    <ButtonLink bg="electricYellow" darkModeBg="electricYellow" text="Current Events" link={`/events?client=${encodeURIComponent(showInfo.clientName)}`}/>
            
                                                    <ButtonLink
                                                    bg="mauvelous"
                                                    darkModeBg="mauvelous"
                                                    text="Past Events"
                                                    link={`/past-events?client=${encodeURIComponent(showInfo.clientName)}`}
                                                    onClick={(e) => {
                                                        e.stopPropagation(); // Prevents the modal from closing due to "outside click"
                                                        setShowInfo(null); // Explicitly close the modal
                                                    }}
                                                    />                                    
                                                </div>
                                        </div>
                                        <div className="w-full flex flex-col justify-center items-center lg:justify-between gap-[2rem] lg:gap-[1rem] px-[2rem] p-[2rem] lg:px-[1rem] lg:py-[2.5rem]">
                                            <div className="max-w-[500px] w-full flex flex-col sm:flex-row justify-between gap-[2rem] lg:pr-[3rem]">
                                                <div className="w-full sm:w-fit flex justify-center sm:justify-start">
                                                    <div className="h-fit w-fit px-[1rem] py-[0.5rem] bg-electricYellow rounded-3xl border border-x-navySmoke">
                                                        {showInfo.eventType}
                                                    </div>
                                                </div>
                                                <div className="flex gap-[0.5rem] items-center mx-auto sm:mx-0">
                                                    <Image loading="lazy" alt="location icon" src={`/images/common/location-icon.svg`} height={60} width={40} className="max-w-[20px]"/>
                                                    <div className="flex flex-col text-navySmoke dark:text-softOpal">
                                                        <div className="overflow-hidden">
                                                            <p
                                                                className="overflow-ellipsis max-w-[240px]"
                                                                style={{
                                                                    display: "-webkit-box",
                                                                    WebkitBoxOrient: "vertical",
                                                                    WebkitLineClamp: 1,
                                                                    }}
                                                            >
                                                                {showInfo.eventLocation}
            
                                                            </p>
                                                        </div>
                                                        <p
                                                            className="overflow-ellipsis max-w-[240px]"
                                                            style={{
                                                                display: "-webkit-box",
                                                                WebkitBoxOrient: "vertical",
                                                                WebkitLineClamp: 1,
                                                                }}
                                                        >
                                                            {showInfo.eventCity}
            
                                                        </p>
                                                        </div>
                                                    </div>
                                            <p className="text-navySmoke dark:text-softOpal w-full sm:w-fit text-center sm:text-left">{showInfo.firstDayOfEvent}{!!showInfo.lastDayOfEvent && ` - ${showInfo.lastDayOfEvent}`}</p>
                                        </div>
                                        <div className="max-w-[500px]">
                                        <Image loading="lazy" height={385} width={615} src={showInfo.detailImage!} alt={showInfo.eventName} className="relative z-8" />
                                        </div>
            
                                        </div>
                                    </div>
                                </div>
                                </div>
                            )}
                            </div>
        </section>
    )
}