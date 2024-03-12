import React from "react";
import { getAssetPath } from "@/utils/assetPath";
import EventButton from "../common/EventButton";

type FeaturedEventsProps = {
    clientName:string;
    eventName:string;
    eventDateString:string;
    firstDayOfEvent:string;
    eventDescription:string[];
    boldedEventInformation:string[]
    eventLocation:string;
    eventLocationTime:string | null;
    eventPdfSrc:string | null;
    eventButtonName:string;
    eventButtonLink:string;
}[]

export default function FeaturedEvents({events}:{events:FeaturedEventsProps}){
    return (
        <div className="bg-softOpal dark:bg-navySmoke py-[2.5rem] flex justify-center relative">
            <div className="relative w-full flex flex-col items-center justify-center gap-[2.5rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <div id="carousel-inner" className="w-full flex items-center mx-auto gap-[70px]">
                    <div id="carousel-content-container" className="w-[40%] h-full grid grid-rows-[1fr,52px] gap-[2rem]">
                        <div id="carousel-content-inner" className="flex items-center">
                            {/* EVENTS WILL BE MAPPED HERE */}
                            <div className="relative flex flex-col items-start">
                                <h1 className="font-ramenson text-navySmoke dark:text-softOpal pb-[2rem]">Upcoming Events</h1>
                                <p></p>
                                <EventButton text="View Events" link="#events" bg="electricYellow"/>
                            </div>
                        </div>
                        <div id="carousel-content-btn" className="self-end flex items-center gap-[120px] mt-[24px]">
                            <div className="flex gap-[24px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="overflow-hidden transform rotate-[180deg] color-black cursor-pointer align-middle">
                                    <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z" fill="currentColor"></path>
                                </svg> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="overflow-hidden color-black cursor-pointer align-middle">
                                    <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z" fill="currentColor"></path>
                                </svg> 
                            </div>
                        </div>
                    </div>
                    {/* THIS WILL START FLICKITY CAROUSEL is-draggable*/}
                    <div id="carousel-image-container" className="relative w-[60%] flex justify-end">
                        <img src={getAssetPath("/images/events/paint-splatter-large.png")} height="435" width="595" className="absolute left-[15%] bottom-[-10%] z-0"/>
                            {/* EVENT IMAGES WILL BE MAPPED HERE */}
                            <div className="z-15 relative">
                                <img height="450" width="450" src={getAssetPath("/images/events/featured/featured-givher.png")}/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}