import React from "react";
import Image from "next/image";
import EventButton from "./EventButton";
import { EventType } from "@/types/types";

export default function InTheWorksEventCard({event, postponedEventText, clientLogo, showTag}:{event:EventType, postponedEventText:string, clientLogo: string, showTag: boolean}){
    return (
      <div className={`flex flex-col gap-[1.5rem] sm:gap-[0rem] border border-navySmoke dark:border-softOpal rounded-[10px] pl-[0.75rem] sm:pl-[1.5rem] pt-[1rem] pb-[2rem] h-content w-full max-w-[375px] shadow-custom-shadow dark:shadow-custom-shadow-darkmode`}>
        <div className="flex flex-col justify-between h-full gap-[1rem]">
        <div className="flex justify-between gap-[1rem]">
            <div className="max-w-[50%] h-[100px] flex items-center dark:bg-softOpal p-[0.5rem] rounded-md">
              <Image src={clientLogo} width={280} height={175} className="w-auto max-h-[80px]" alt={`${event.clientName} logo`}/>
            </div>
            <div className="relative flex flex-col gap-[0.75rem] sm:gap-0 sm:flex-row items-end sm:items-start">
              {showTag && (
              <div className="relative font-visbyBold px-[1rem] py-[0.5rem] bg-navySmoke text-softOpal text-[0.85rem] border border-black border-r-0 h-min rounded-l-3xl sm:mr-[-1rem] sm:pr-[1.25rem] z-0">
                In the Works
              </div>
                )}
              {event.eventType && (
                <div className="relative font-visbyBold px-[1rem] py-[0.5rem] bg-electricYellow text-black text-[0.85rem] border border-black border-r-0 h-min rounded-l-3xl z-10 w-fit">
                  {event.eventType}
                </div>
              )}
          </div>

          </div>
          <div className="pr-[0.75rem] sm:pr-[1.5rem] flex flex-col justify-between h-full gap-[1rem]">

        <div>
            <div className="overflow-hidden">
              <p
                className="overflow-ellipsis font-visbyBold text-navySmoke text-[23px] dark:text-softOpal h-[69px]"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                }}
              >
                {event.eventName}
              </p>
            </ div>
            {event.postponed && (
              <div className="text-red pt-[1rem]">
                {postponedEventText}
              </div>
            )}
        </div>
          <div className="text-navySmoke dark:text-softOpal h-[48px] overflow-hidden flex justify-between gap-[1rem]">
          <div className={`flex gap-[0.5rem] ${!event.eventCity || !event.eventLocation? "items-start":"items-center"}`}>
                <Image loading="lazy" alt="location icon" src={`/images/common/location-icon.svg`} height={60} width={40} className="max-w-[20px]"/>
                <div className="flex flex-col">
                  <div className="overflow-hidden">
                    {event.eventLocation && (
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
                    )}
                </div>
                {event.eventCity && (
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
                )}
                </div>
              </div>
            <p
                className="overflow-ellipsis max-w-[100px]"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                  }}
          >
                {event.firstDayOfEvent ? event.firstDayOfEvent : event.timeOfYear? event.timeOfYear : ""}{!!event.lastDayOfEvent && ` - ${event.lastDayOfEvent}`}
            </p>
            
        </div>
          <div className="flex items-center flex-wrap gap-x-[1.5rem] gap-y-[1rem]">
            {event.eventButtonTextOne && event.eventButtonLinkOne && (
            <EventButton text={event.eventButtonTextOne} link={event.eventButtonLinkOne} bg="electricYellow" />
            )}
            {event.eventButtonTextTwo && event.eventButtonLinkTwo && (
              <EventButton text={event.eventButtonTextTwo} link={event.eventButtonLinkTwo} bg="mauvelous" />
            )}
            {!event.eventButtonTextOne && !event.eventButtonLinkTwo && (
              <EventButton text="Get Email Updates" link="/signup4emails" bg="electricYellow"/>
            )}
        </div>
        </div>
        </div>
    </div>
    )
}