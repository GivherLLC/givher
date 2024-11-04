'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { EventType } from "@/types/types";
import ButtonLink from "../common/ButtonLink";

export default function FeaturedPastEventCard({event, priority, clientLogo}:{event:EventType, priority:boolean, clientLogo:string}){
    const [showInfo, setShowInfo] = useState<EventType | null>(null);

    useEffect(()=>{
        //prevent scrolling behind open bio
        if(showInfo){
            document.body.style.overflow = 'hidden';
        }
        return ()=>{
            document.body.style.overflow = 'unset';
        }
    },[showInfo])

    return (
        <div className="group cursor-pointer flex flex-col sm:flex-row rounded-xl shadow-custom-shadow dark:shadow-custom-shadow-darkmode w-full max-w-[750px] border border-navySmoke dark:border-mauvelous">
            {/* TO DO: FILTER OUT EVENTS WITHOUT DETAIL IMAGE FROM FEATURED PAST */}
            {event.detailImage && (
            <div className="md:max-w-[50%] h-[275px] w-auto">
                <Image 
                src={event.detailImage} 
                alt={event.eventName} 
                height={300} 
                width={473} 
                priority={priority} 
                className="object-cover w-full h-full rounded-t-xl md:rounded-s-xl" 
                />
            </div>
            )}
            <div className="flex flex-col justify-between gap-[1.5rem] md:w-[50%] py-[2rem] pl-[2rem] min-w-[300px] border-navySmoke">
                <div className="flex justify-between items-center gap-[1rem]">
                    <div className="text-[1.25rem] text-navySmoke dark:text-softOpal">{event.firstDayOfEvent}{!!event.lastDayOfEvent && ` - ${event.lastDayOfEvent}`}</div>
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
                            {event.eventLocation}

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
                        {event.eventCity}

                    </p>
                    </div>
              </div>
              <button onClick={()=>{setShowInfo(event)}} className="w-fit relative transition duration-300 before:bg-black before:rounded-[12px] before:h-[calc(100%+3px)] before:w-[calc(100%+3.5px)] before:absolute before:left-0 before:top-0 before:transition before:transform before:translate-x-[2px] before:translate-y-[2px]">
                <div className={`bg-electricYellow text-navySmoke text-[0.75rem] uppercase font-visbyBold py-[10px] px-[20px] rounded-[12px] border-[3px] border-navySmoke relative z-10 block group-hover:transform group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]`}>
                    Behind the Scenes
                </div>
            </button>
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
                                    <img alt={`${event.clientName} logo`} src={clientLogo} className="h-auto w-auto" />
                                </div>
                                <h2 className="text-softOpal text-[1.2rem] max-w-[375px] text-center md:text-left">Explore More from {event.clientName}</h2>
                                    <div className="flex gap-[1rem] items-center justify-center flex-wrap md:min-w-[375px]">
                                        {/* TO DO: MAKE LINK GO TO FILTER */}
                                    <ButtonLink openNewTab bg="electricYellow" darkModeBg="electricYellow" text="Current Events" link=""/>
                                    <ButtonLink openNewTab bg="mauvelous" darkModeBg="mauvelous" text="Past Events" link=""/>
                                    </div>

                            </div>
                            <div className="w-full flex flex-col justify-center items-center lg:justify-between gap-[2rem] lg:gap-[1rem] px-[2rem] p-[2rem] lg:px-[1rem] lg:py-[2.5rem]">
                                <div className="max-w-[500px] w-full flex flex-col sm:flex-row justify-between gap-[2rem] lg:pr-[3rem]">
                                    <div className="w-full sm:w-fit flex justify-center sm:justify-start">
                                        <div className="h-fit w-fit px-[1rem] py-[0.5rem] bg-electricYellow rounded-3xl border border-x-navySmoke">
                                            {event.eventType}
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
                                                    {event.eventLocation}

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
                                                {event.eventCity}

                                            </p>
                                            </div>
                                        </div>
                                <p className="text-navySmoke dark:text-softOpal w-full sm:w-fit text-center sm:text-left">{event.firstDayOfEvent}{!!event.lastDayOfEvent && ` - ${event.lastDayOfEvent}`}</p>
                            </div>
                            <div className="max-w-[500px]">
                            <Image loading="lazy" height={385} width={615} src={event.detailImage!} alt={event.eventName} className="relative z-8" />
                            </div>

                            </div>
                        </div>
                    </div>
                    </div>
                )}
                </div>
        </div>
    )
}