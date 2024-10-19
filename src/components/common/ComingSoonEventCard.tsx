import React from "react";
import EventButton from "./EventButton";
import { ComingSoonEventType } from "@/types/types";

export default function ComingSoonEventCard({event, postponedEventText, showTag, showClientName }:{event:ComingSoonEventType, postponedEventText:string, showTag: boolean, showClientName: boolean}){
    return (
      <div className={`flex flex-col gap-[1.5rem] sm:gap-[0rem] border border-navySmoke dark:border-softOpal rounded-[10px] py-[2.5rem] px-[1.5rem] h-content w-full max-w-[375px] sm:h-[375px] sm:w-[375px] shadow-custom-shadow dark:shadow-custom-shadow-darkmode`}>
        <div className="flex flex-col justify-between h-full gap-[1rem]">
         {showTag &&  <p className="self-end text-navySmoke bg-mauvelous px-[1.25rem] py-[0.5rem] rounded-lg text-[0.75rem] uppercase font-visbyBold">Coming Soon</p>}
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
            <p
                className="overflow-ellipsis max-w-[240px]"
                style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                    }}
            >
                {event.eventCity && event.eventCity}

            </p>
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
          {showClientName && (
            <p className="uppercase text-navySmoke font-visbyBold text-sm dark:text-softOpal max-w-[250px]">
              {event.clientName}
            </p>          
          )}
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
    )
}