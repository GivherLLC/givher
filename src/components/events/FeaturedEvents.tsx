'use client'
import React, { useMemo, useState, useEffect } from "react";
import { getAssetPath } from "@/utils/assetPath";
import EventButton from "../common/EventButton";
import { EventType, FeaturedEventType } from "@/types/types";
import eventsData from "../../data/events.json";

type FeaturedEventsProps = EventType[];

export default function FeaturedEvents({events}:{events:FeaturedEventsProps}){
    const {clientImages}: { clientImages: { [key: string]: string } } = eventsData;

    const [activeIndex, setActiveIndex] = useState(0);

    const convertToFeaturedEvent = (event: EventType) => {
        const { clientName, eventName, eventDateString: eventDate, eventLocation, eventButtonName, eventButtonLink } = event;
        const clientImage = clientImages[clientName];
    
        return {
            eventName,
            eventDate,
            eventLocation,
            eventButtonName,
            eventButtonLink,
            clientImage,
        };
    };

    const featuredEvents = useMemo(()=>{
        let featured: FeaturedEventType[] = [
            {
                eventName: "Upcoming Events",
                eventDate: "",
                eventLocation: "",
                eventButtonName: "View Events",
                eventButtonLink: "#events",
                clientImage: "givher.png",
            },
        ];
        if(events.length < 3){
            const addEvents = events.map((e)=>(convertToFeaturedEvent(e)));
            featured = [...featured, ...addEvents]
        }
        return featured;

    },[events]);

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
          friction: 0.8
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
        <div className="bg-softOpal dark:bg-navySmoke py-[2.5rem] flex justify-center relative">
            <div className="relative w-full flex flex-col items-center justify-center gap-[2.5rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <div id="carousel-inner" className="w-full grid grid-cols-[1fr,minmax(auto,675px)] items-center justify-between gap-[70px] ml-[calc(max(0px, (100% - 1440px) / 2))]">
                    <div id="carousel-content-container" className="h-full grid grid-rows-[1fr,52px] gap-[2rem] box-border">
                        <div id="carousel-content-inner" className="flex items-center box-border">
                            {featuredEvents.map((e, i)=>{
                                return (
                                <div key={i} className={`carousel-content relative flex flex-col items-start transform translate-y-[50px] ${activeIndex === i ? "active transition-all duration-500 transform translate-y-0":""}`}>
                                    <h1 className="font-ramenson text-navySmoke dark:text-softOpal pb-[2rem] text-[3rem]">{e.eventName}</h1>
                                    <p className="border-box my-[10px] text-black dark:text-softOpal opacity-70"> </p>
                                    <EventButton text={e.eventButtonName} link={e.eventButtonLink} bg="electricYellow"/>
                                </div>
                                )
                            })}
                        </div>
                        <div id="carousel-content-btn" className="self-end flex items-center gap-[120px] mb-[2rem]">
                            <div className="flex gap-[24px]">
                                <button type="button" data-id="prev" className="custom-prev-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="overflow-hidden transform rotate-[180deg] color-black cursor-pointer align-middle">
                                        <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z" fill="currentColor"></path>
                                    </svg> 
                                </button>
                                <button type="button" data-id="next" className="custom-next-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="overflow-hidden color-black cursor-pointer align-middle">
                                        <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z" fill="currentColor"></path>
                                    </svg> 
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel featured-carousel relative">
                        <img src={getAssetPath("/images/events/paint-splatter-large.png")} height="435" width="595" className="absolute left-[-30%] bottom-[-15%] z-0"/>

                            {featuredEvents.map((e,i)=>{
                                return (
                                    <div key={i} data-id={i} className="carousel-cell">
                                        <img height="450" width="450" src={`/images/events/client-images/${e.clientImage}`} alt={e.eventName} className="flickity-lazyloaded"/>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}