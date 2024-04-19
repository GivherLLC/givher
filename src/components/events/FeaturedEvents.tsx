'use client'
import React, { useMemo, useState, useEffect } from "react";
import { getAssetPath } from "@/utils/assetPath";
import EventButton from "../common/EventButton";
import { EventType, FeaturedEventType, ComingSoonEventType } from "@/types/types";
import eventsData from "../../data/events.json";

type FeaturedEventsProps = (EventType | ComingSoonEventType)[];

export default function FeaturedEvents({events}:{events:FeaturedEventsProps}){
    const {clientImages}: { clientImages: { [key: string]: string } } = eventsData;

    const [activeIndex, setActiveIndex] = useState(0);

    const featuredEvents = useMemo(()=>{
        let featured: FeaturedEventType[] = [
            {
                eventName: "Upcoming Events",
                eventDateString: "",
                eventCity: "",
                eventButtonText: "View Events",
                eventButtonLink: "#events",
                clientImage: "givher.png",
            },
        ];
        const addEvents = events.map((e)=>{
            const { clientName, eventName, eventDateString, eventCity, eventButtonText, eventButtonLink } = e;
            const clientImage = clientImages[clientName];
        
            return {
                eventName,
                eventDateString,
                eventCity,
                eventButtonText,
                eventButtonLink,
                clientImage,
            };
        });
        featured = [...featured, ...addEvents]

        return featured;

    },[events, clientImages]);

    useEffect(() => {
        const Flickity = require('flickity-imagesloaded');
        const flkty = new Flickity('.carousel', {
          cellAlign: "left",
          cellSelector: ".carousel-cell",
          imagesLoaded: true,
          prevNextButtons: false,
          pageDots: false,
          percentPosition: false,
          wrapAround: true,
          dragThreshold: 5,
          selectedAttraction: 0.2,
          friction: 0.8,
        });
    
        // Add event listeners to custom buttons
        const prevButton = document.querySelector('.custom-prev-button');
        if (prevButton) {
          prevButton.addEventListener('click', () => {
            flkty.previous();
          });
        }
    
        const nextButton = document.querySelector('.custom-next-button');
        if (nextButton) {
          nextButton.addEventListener('click', () => {
            flkty.next();
          });
        }
    
        // Listen for the 'select' event
        flkty.on('select', () => {
          const activeIndex = flkty.selectedIndex;
          setActiveIndex(activeIndex);
        });
    
        // Cleanup event listeners and destroy Flickity instance on component unmount
        return () => {
          flkty.off('select');
          flkty.destroy();
        };
      }, []); // Empty dependency array ensures the effect runs only once on mount


    return (
        <div className="bg-softOpal dark:bg-navySmoke pb-[2.5rem] md:py-[2.5rem] flex justify-center relative overflow-hidden">
            <div className="relative w-full h-full flex flex-col items-center justify-center gap-[2.5rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <div id="carousel-inner" className="w-full h-full grid grid-cols-1 grid-rows-1 md:grid-cols-[1fr,minmax(auto,675px)] items-center justify-center md:justify-between gap-[1rem] md:gap-[70px] ml-[calc(max(0px, (100% - 1440px) / 2))]">
                    <div id="carousel-content-container" className="order-2 md:order-1 h-full grid grid-rows-[1fr,52px] gap-[2rem] z-10">
                        <div id="carousel-content-inner" className="flex items-center box-border">
                            {featuredEvents.map((e, i)=>{
                                return (
                                <div key={i} className={`carousel-content relative flex flex-col md:gap-[2rem] items-start transform translate-y-[50px] ${activeIndex === i ? "active transition-all duration-500 transform translate-y-0":""}`}>
                                    <div>
                                    <h1 className="font-ramenson text-navySmoke dark:text-softOpal text-[1.75rem] md:text-[3rem] mb-[1rem]">{e.eventName}</h1>
                                    {e.eventDateString && (
                                        <div className="flex gap-[1rem] mb-[1rem]">
                                            <p className="border-box text-black dark:text-softOpal font-semibold">{e.eventDateString}</p>
                                            <div className="border-box text-black dark:text-softOpal font-semibold border-l border-[1.5px] border-black"/>
                                            <p className="border-box text-black dark:text-softOpal font-semibold">{e.eventCity}</p>
                                        </div>
                                    )}
                                    </div>
                                    <EventButton text={e.eventButtonText} link={e.eventButtonLink} bg="electricYellow"/>
                                </div>
                                )
                            })}
                        </div>
                        <div id="carousel-content-btn" className="self-end flex items-center gap-[120px] mb-[1rem] md:mb-[2rem]">
                            <div className="flex gap-[24px]">
                                <button type="button" data-id="prev" aria-label="Previous Event" className="custom-prev-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="overflow-hidden transform rotate-[180deg] text-black dark:text-softOpal cursor-pointer align-middle">
                                        <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z" fill="currentColor"></path>
                                    </svg> 
                                </button>
                                <button type="button" data-id="next" aria-label="Next Event" className="custom-next-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="overflow-hidden text-black dark:text-softOpal cursor-pointer align-middle">
                                        <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z" fill="currentColor"></path>
                                    </svg> 
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel featured-carousel order-1 md:order-2 relative h-full max-h-[410px]">
                        <img loading="eager" src={getAssetPath("/images/events/paint-splatter-large.png")} alt="paint splatter" height={435} width={595} className="hidden md:block md:absolute left-[-30%] bottom-[-15%] z-0"/>

                            {featuredEvents.map((e,i)=>{
                                return (
                                    <div key={i} data-id={i} className="carousel-cell">
                                        <img loading="eager" height={450} width={450} src={getAssetPath(`/images/events/client-images/${e.clientImage}`)} alt={e.eventName} className="flickity-lazyloaded"/>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}