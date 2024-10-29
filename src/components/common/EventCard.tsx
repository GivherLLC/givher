import React from "react";
import EventButton from "./EventButton";
import { EventType } from "@/types/types";

export default function EventCard({event, postponedEventText, showClientName}:{event:EventType, postponedEventText:string, showClientName: boolean}){
    return (
      <div className={`flex flex-col gap-[1.5rem] sm:gap-[0rem] border border-navySmoke dark:border-softOpal rounded-[10px] px-[1.5rem] h-content w-full max-w-[375px] ${showClientName? "sm:h-[375px] sm:w-[375px] py-[2.5rem]":"sm:h-[350px] sm:w-[375px] py-[3.5rem]"} shadow-custom-shadow dark:shadow-custom-shadow-darkmode`}>
        <div className="flex flex-col justify-between h-full gap-[1rem]">
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
                className="max-w-[100px]"
          >
                {event.firstDayOfEvent}{!!event.lastDayOfEvent && ` - ${event.lastDayOfEvent}`}
            </p>
            
        </div>

        {showClientName && (
            <p className="uppercase text-navySmoke font-visbyBold text-sm dark:text-softOpal max-w-[250px]">
            {event.clientName}
            </p>
          )}
          <div className="flex items-center flex-wrap gap-x-[1.5rem] gap-y-[1rem]">
          <EventButton text="Inside the Event" link={`/events/detail/${event.slug}`} bg="mauvelous" />
        </div>
        </div>
    </div>
    )
}