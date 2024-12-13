import React from "react";
import Image from "next/image";
import { EventType } from "@/types/types";
import ButtonLink from "../common/ButtonLink";

export default function DetailHeader({
  event,
  postponedEventText,
  clientImage,
}: {
  event: EventType;
  postponedEventText: string;
  clientImage: string;
}) {
  const {
    eventName,
    eventCity,
    eventButtonTextOne,
    eventButtonLinkOne,
    eventLocation,
    firstDayOfEvent,
    lastDayOfEvent,
    eventTime,
    eventEndTime,
  } = event;

  return (
    <div className="bg-navySmoke py-[2.5rem] flex justify-center">
      <div className="flex flex-col lg:flex-row w-full items-center justify-between gap-[2.5rem] max-w-[615px] lg:max-w-[1200px] mx-[0.625rem] lg:mx-[1.5625rem]">
        <div className="w-full lg:w-1/2 flex flex-col gap-[1rem]">
          <div className="flex flex-col gap-[0.5rem]"></div>
          <p className="flex justify-center lg:justify-start gap-[1rem] flex-wrap">
            <span className="text-softOpal">
              {firstDayOfEvent}
              {!!lastDayOfEvent && ` - ${lastDayOfEvent}`}
            </span>
            <span className="text-electricYellow">{eventLocation}</span>
          </p>
          {event.postponed && (
            <div className="text-red">{postponedEventText}</div>
          )}
          <h1 className="font-visbyBold text-softOpal mb-[2rem] text-center lg:text-left">
            {eventName}
          </h1>
          <h2 className="font-visbyBold text-softOpal text-center lg:text-left">
            {eventCity}{" "}
            {!!eventTime && (
              <span className="text-mauvelous text-2xl font-visbyBold pl-[1rem]">
                {eventTime}
              </span>
            )}
            {!!eventEndTime && (
              <span className="text-mauvelous text-2xl font-visbyBold">
                {" "}
                - {eventEndTime}
              </span>
            )}
          </h2>
          <div className="flex gap-[1rem] lg:items-center justify-center lg:justify-start">
            {eventButtonTextOne && eventButtonLinkOne && (
              <ButtonLink
                openNewTab
                bg="electricYellow"
                darkModeBg="electricYellow"
                text={eventButtonTextOne}
                link={eventButtonLinkOne}
              />
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-white h-[275px] w-[275px] sm:h-[450px] sm:w-[450px] rounded-lg flex justify-center items-center p-[1rem]">
            <Image
              priority={true}
              height={450}
              width={450}
              src={clientImage}
              alt={eventName}
              className="w-full max-w-[360px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
