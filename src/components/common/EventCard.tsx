import React from "react";
import EventButton from "../common/EventButton";
import { EventType, ComingSoonEventType } from "@/types/types";
import eventsData from "../../data/events.json";

type EventCardProps = EventType | ComingSoonEventType;

export default function EventCard({event,type}:{event:EventCardProps, type:"all-events"|"homepage"|"detail-page"|"coming-soon"}){
    const path = event.eventName.replace(/\s+/g, '-').toLowerCase();
    return (
        <div className={`flex flex-col gap-[1.5rem] sm:gap-[0rem] border border-navySmoke dark:border-softOpal rounded-[10px] py-[2.5rem] px-[1.5rem] h-content w-full max-w-[400px] max-h-[429px] ${type === "detail-page" || type === "coming-soon" ? "sm:h-[300px]":"sm:h-[400px]"} sm:w-[400px] shadow-custom-shadow dark:shadow-custom-shadow-darkmode`}>
            <div className="lg:h-[50%] flex flex-col gap-[1rem]">
                <div className="h-[56px] overflow-hidden">
                    <p className="overflow-ellipsis font-ramenson text-navySmoke text-xl dark:text-softOpal" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2 }}>
                        {event.eventName}
                    </p>
                </div>
                {type !== "coming-soon" && 'eventDateString' in event && 'eventCity' in event && (
                    <div className="pl-[1rem] text-navySmoke dark:text-softOpal h-[48px] overflow-hidden">
                        <p className="overflow-ellipsis" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2 }}>
                        {event.eventDateString} | {event.eventCity} <span className="text-red">{event.postponed && `${eventsData.postponedEventText}`}</span>
                        </p>
                    </div>                
                    )}
                {type !== "detail-page" && <p className="uppercase text-navySmoke font-bold dark:text-softOpal">{event.clientName}</p>}
            </div>
            <div className="h-[50%] flex items-center flex-wrap gap-x-[1.5rem] gap-y-[1rem]">
                {type !== "all-events" &&  (<EventButton text={event.eventButtonText} link={event.eventButtonLink} bg="electricYellow"/>)}
                {type !== "coming-soon" &&<EventButton text={type === "all-events"? "View Details":"Event Details"} link={`/events/detail/${path}`} bg="mauvelous"/>}
            </div>
        </div>
    )
}