import React from "react";
import EventButton from "../common/EventButton";
import { EventType, ComingSoonEventType } from "@/types/types";
import eventsData from "../../data/events.json";

type EventCardProps = EventType | ComingSoonEventType;

type ComingSoonEventCardComponentProps = {
    event: ComingSoonEventType;
  };

// Type guard to differentiate between EventType and ComingSoonEventType
const isEventType = (event: EventCardProps): event is EventType => {
  return 'firstDayOfEvent' in event && 'eventCity' in event;
};

// Common card styling
const commonCardStyles = (type: string) =>
  `flex flex-col gap-[1.5rem] sm:gap-[0rem] border border-navySmoke dark:border-softOpal rounded-[10px] py-[2.5rem] px-[1.5rem] h-content w-full max-w-[400px] ${
    type !== "homepage" ? "sm:min-h-[300px]" : "sm:h-[400px]"
  } sm:w-[400px] shadow-custom-shadow dark:shadow-custom-shadow-darkmode`;

// Coming Soon Card
const ComingSoonCard = ({ event }: ComingSoonEventCardComponentProps) => (
    <div className={commonCardStyles("coming-soon")}>
    <div className="lg:h-[80%] flex flex-col gap-[1rem]">
    <div className="h-[56px] overflow-hidden">
        <p
            className="font-visbyBold text-navySmoke text-xl dark:text-softOpal"
            style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            }}
        >
            {event.eventName}
        </p>
        </div>
      {/* Render date and location only for EventType */}
      {isEventType(event) && (
        <div className="pl-[1rem] text-navySmoke dark:text-softOpal h-[75px] overflow-hidden">
            <p
                className="truncate overflow-hidden"
                style={{
                display: "block",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                }}
            >
                {event.firstDayOfEvent} | {event.eventCity}
            </p>
            <span className="text-red">
              {event.postponed && `${eventsData.postponedEventText}`}
            </span>
        </div>
      )}
      <p className="uppercase text-navySmoke font-bold dark:text-softOpal pb-[0.25rem]">
        {event.clientName}
      </p>
    </div>
    <div className="h-[20%] flex items-center flex-wrap gap-x-[1.5rem] gap-y-[1rem]">
      <EventButton text={event.eventButtonText} link={event.eventButtonLink} bg="electricYellow" />
    </div>
  </div>
);

// Main Component to Switch between Types
export default function EventCard({
  event,
  type,
}: {
  event: ComingSoonEventType;
  type: "all-events" | "homepage" | "detail-page" | "coming-soon";
}) {
  const path = event.eventName.replace(/\s+/g, "-").toLowerCase();

  switch (type) {
    case "coming-soon":
      return <ComingSoonCard event={event} />;
    default:
      return null;
  }
}

