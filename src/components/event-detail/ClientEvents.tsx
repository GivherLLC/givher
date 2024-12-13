import React from "react";
import EventCard from "../common/EventCard";
import InTheWorksEventCard from "../common/InTheWorksEventCard";
import PastEventCard from "../common/PastEventCard";
import { EventType } from "@/types/types";

export default function ClientEvents({
  events,
  clientName,
  event,
  postponedEventText,
  clientImage,
}: {
  events: EventType[];
  clientName: string;
  event: EventType;
  postponedEventText: string;
  clientImage: string;
}) {
  const { eventName } = event;
  const shownEvents = events
    .filter((e) => e.eventName !== eventName)
    .slice(0, 3);

  return (
    <div className="bg-softOpal dark:bg-navySmoke py-[2.5rem] flex justify-center">
      <div
        className={`flex flex-col w-full items-center justify-center gap-[2.5rem] px-[0.625rem] max-w-[85.75rem] md:px-[1.5625rem]`}
      >
        <h1 className="font-visbyBold text-navySmoke dark:text-softOpal text-center lg:text-left">
          {clientName} Events
        </h1>
        <div
          className={`flex flex-col lg:flex-row ${events.length < 3 ? "" : "lg:justify-between"} gap-[2rem] items-center w-full`}
        >
          {shownEvents.map((e, i) => {
            if (e.eventStatus === "event") {
              return (
                <EventCard
                  key={`${i}-${e.clientName}-${e.eventName}-${e.firstDayOfEvent}`}
                  event={e}
                  postponedEventText={postponedEventText}
                  clientLogo={clientImage}
                />
              );
            } else if (e.eventStatus === "inTheWorks") {
              return (
                <InTheWorksEventCard
                  key={`${i}-${e.clientName}-${e.eventName}-${e.firstDayOfEvent}`}
                  event={e}
                  postponedEventText={postponedEventText}
                  clientLogo={clientImage}
                  showTag={true}
                />
              );
            } else {
              return (
                <PastEventCard
                  key={`${i}-${e.clientName}-${e.eventName}-${e.firstDayOfEvent}`}
                  event={e}
                  clientLogo={clientImage}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
