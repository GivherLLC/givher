import React from "react";
import EventButton from "./EventButton";
import { EventType } from "@/types/types";

export default function EventCard({event, postponedEventText, showClientName}:{event:EventType, postponedEventText:string, showClientName: boolean}){
    return (
      <div className={`flex flex-col gap-[1.5rem] sm:gap-[0rem] border border-navySmoke dark:border-softOpal rounded-[10px] py-[2.5rem] px-[1.5rem] h-content w-full max-w-[400px] sm:h-[400px] sm:w-[400px] shadow-custom-shadow dark:shadow-custom-shadow-darkmode`}>
        <div className="flex flex-col justify-between h-full gap-[1rem]">
        <div>
            <div className="overflow-hidden">
              <p
                className="overflow-ellipsis font-visbyBold text-navySmoke text-[23px] dark:text-softOpal h-[103.5px]"
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
            <div className="flex flex-col">
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
            <p
                className="overflow-ellipsis max-w-[100px]"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 1,
                  }}
          >
                {event.firstDayOfEvent}{!!event.lastDayOfEvent && ` - ${event.lastDayOfEvent}`}
            </p>
            
        </div>

        {showClientName && (
            <p className="uppercase text-navySmoke font-bold text-sm dark:text-softOpal max-w-[250px]">
            {event.clientName}
            </p>
          )}
          <div className="flex items-center flex-wrap gap-x-[1.5rem] gap-y-[1rem]">
          <EventButton text="Event Details" link={`/events/detail/${event.slug}`} bg="mauvelous" />
        </div>
        </div>
    </div>
    )
}