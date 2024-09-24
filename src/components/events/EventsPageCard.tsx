import React from "react";
import { EventType } from "@/types/types";
import Link from "next/link";

export default function EventsPageCard({event, postponedEventText, showClientName}:{event:EventType, postponedEventText:string, showClientName: boolean}){
    return (
      <Link href={`/events/detail/${event.slug}`}>
        <div className={`group flex flex-col gap-[1.5rem] sm:gap-[0rem] border border-navySmoke dark:border-softOpal rounded-[10px] py-[2rem] px-[1.5rem] h-content w-full ${showClientName ? "sm:h-[400px] sm:w-[400px] max-w-[400px]":"sm:h-[300px] sm:w-[350px] max-w-[350px]"} shadow-custom-shadow dark:shadow-custom-shadow-darkmode`}>
          <div className={`flex flex-col h-full justify-between gap-[1rem]`}>
            <div>
            <div className="overflow-hidden">
              <p
                className="overflow-ellipsis font-visbyBold text-navySmoke text-[23px] dark:text-softOpal"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: showClientName? 3 : 2,
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
                  {event.eventLocation} | {event.eventCity}
              </p>
              <p
                  className="overflow-ellipsis max-w-[100px]"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                    }}
            >
                  {event.firstDayOfEvent}{!!event.lastDayOfEvent && ` - ${event.lastDayOfEvent}`}
              </p>
          </div>
          <div className="flex flex-col gap-[1rem]">
          {showClientName && (
            <p className="uppercase text-navySmoke font-bold text-sm dark:text-softOpal max-w-[250px]">
            {event.clientName}
            </p>
          )}
          <div className="flex items-center flex-wrap gap-x-[1.5rem] gap-y-[1rem]">
              <div className="group relative transition duration-350 before:bg-black before:rounded-[12px] before:h-[calc(100%+3px)] before:w-[calc(100%+3.5px)] before:absolute before:left-0 before:top-0 before:transition before:transform before:translate-x-[2px] before:translate-y-[2px]">
                  <div className={`bg-mauvelous text-navySmoke text-[0.75rem] uppercase font-bold py-[10px] px-[20px] rounded-[12px] border-[3px] border-black relative z-10 block group-hover:transform group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]`}>
                      View Details
                  </div>
              </div> 
            </div>
          </div>

          </div>
      </div>
    </Link>
    )
}
