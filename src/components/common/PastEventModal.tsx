import React from 'react';
import Image from 'next/image';
import ButtonLink from './ButtonLink';
import { EventType } from '@/types/types';

export default function PastEventModal({
  event,
  setShowInfo,
  clientLogo,
}: {
  event: EventType;
  setShowInfo: (set: null | EventType) => void;
  clientLogo: string;
}) {
  return (
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
          className="group self-end flex flex-col items-center h-[50px] w-[50px] p-0 transition-transform absolute top-[0px] right-[0px]"
        >
          <div className="h-[2px] w-full bg-grey group-hover:bg-navySmoke dark:group-hover:bg-softOpal absolute top-[50%] left-[50%] max-w-[20px] transform -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] mt-0 transition-all ease-in-out" />
          <div className="h-[2px] w-full bg-grey group-hover:bg-navySmoke dark:group-hover:bg-softOpal absolute top-[50%] left-[50%] max-w-[20px] transform -translate-x-1/2 -translate-y-1/2 rotate-45 mt-0 transition-all ease-in-out" />
        </button>
        <div className="flex flex-col lg:flex-row gap-[1.5rem]">
          <div className="flex flex-col items-center justify-center gap-[2rem] bg-navySmoke p-[1rem] lg:p-[4rem]">
            <div className="bg-white rounded-xl p-[1rem] max-w-[375px] min-h-[200px] w-full flex items-center justify-center">
              <Image
                height={450}
                width={450}
                alt={`${event.clientName} logo`}
                src={clientLogo}
                className="h-auto w-auto"
              />
            </div>
            <h2 className="text-softOpal text-[1.2rem] max-w-[375px] text-center md:text-left">
              Explore More from {event.clientName}
            </h2>
            <div className="flex gap-[1rem] items-center justify-center md:justify-between flex-wrap md:min-w-[375px]">
              <ButtonLink
                bg="electricYellow"
                darkModeBg="electricYellow"
                text="Current Events"
                link={`/events?client=${encodeURIComponent(event.clientName)}`}
              />
              <ButtonLink
                bg="mauvelous"
                darkModeBg="mauvelous"
                text="Past Events"
                link={`/past-events?client=${encodeURIComponent(event.clientName)}`}
                onClick={(e) => {
                  e.stopPropagation(); // Prevents the modal from closing due to "outside click"
                  setShowInfo(null); // Explicitly close the modal
                }}
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center lg:justify-between gap-[2rem] lg:gap-[1rem] px-[2rem] p-[2rem] lg:px-[1rem] lg:py-[2.5rem]">
            <div className="order-2 md:order-1 max-w-[500px] sm:max-w-[unset] w-full flex flex-col sm:flex-row justify-between flex-wrap gap-[1rem] lg:pr-[2rem] mb-[1rem]">
              <div className="flex gap-[0.5rem] items-center mx-auto sm:mx-0">
                <Image
                  loading="lazy"
                  alt="location icon"
                  src={`/images/common/location-icon.svg`}
                  height={60}
                  width={40}
                  className="max-w-[20px]"
                />
                <div className="flex flex-col text-navySmoke dark:text-softOpal">
                  <p>{event.eventLocation}</p>
                  <p>
                    {event.eventCity}, {event.eventState}
                  </p>
                </div>
              </div>
              <p className="text-navySmoke dark:text-softOpal w-full sm:w-[unset] text-center sm:text-left">
                {event.firstDayOfEvent}
                {!!event.lastDayOfEvent && ` - ${event.lastDayOfEvent}`}
              </p>
              <div className="w-full sm:w-fit flex justify-center sm:justify-start">
                <div className="h-fit w-fit px-[1rem] py-[0.5rem] bg-electricYellow rounded-3xl border border-x-navySmoke text-navySmoke font-visbyBold">
                  {event.eventType}
                </div>
              </div>
            </div>
            <h2 className="order-1 md:order-2 font-visbyBold text-navySmoke dark:text-softOpal text-center md:text-left max-w-[500px]">
              {event.eventName}
            </h2>
            <div className="max-w-[500px] order-3">
              <Image
                loading="lazy"
                height={385}
                width={615}
                src={event.detailImage!}
                alt={event.eventName}
                className="relative z-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
