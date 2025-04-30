'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import PastEventModal from '../common/PastEventModal';
import { PastEventsPageData, EventType, ClientImage } from '@/types/types';

export default function PastEventsHeader({
  headerData,
  featuredPastEvents,
  clientLogos,
}: {
  headerData: PastEventsPageData;
  featuredPastEvents: EventType[];
  clientLogos: ClientImage;
}) {
  const { pastEventsPageTitle, pastEventsPageSubtitle } = headerData;

  const [activeIndex, setActiveIndex] = useState(0);
  const [showInfo, setShowInfo] = useState<EventType | null>(null);

  useEffect(() => {
    //prevent scrolling behind open bio
    if (showInfo) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showInfo]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const Flickity = require('flickity-imagesloaded');
    const flkty = new Flickity('.past-events-carousel', {
      cellAlign: 'center', // Align cells to the center
      cellSelector: '.past-carousel-cell',
      imagesLoaded: true, // Ensures images are loaded before layout
      prevNextButtons: false, // Disable default buttons (we use custom ones)
      pageDots: false, // Disable page dots
      wrapAround: true, // Enable infinite looping
      percentPosition: true, // Maintains responsive positioning
      groupCells: 1, // Move one slide at a time
      contain: true, // Ensure cells stay within the carousel bounds
      dragThreshold: 5,
      selectedAttraction: 0.2,
      friction: 0.9,
    });

    // Add e listeners to custom buttons
    const prevButton = document.querySelector('.custom-prev-button-past');
    if (prevButton) {
      prevButton.addEventListener('click', () => {
        flkty.previous();
      });
    }

    const nextButton = document.querySelector('.custom-next-button-past');
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        flkty.next();
      });
    }

    // Listen for the 'select' e
    flkty.on('select', () => {
      const activeIndex = flkty.selectedIndex;
      setActiveIndex(activeIndex);
    });

    // Cleanup e listeners and destroy Flickity instance on component unmount
    return () => {
      flkty.off('select');
      flkty.destroy();
    };
  }, [featuredPastEvents]); // Empty dependency array ensures the effect runs only once on mount

  return (
    <section className="bg-softOpal dark:bg-navySmoke pt-[2.5rem] pb-[1rem] lg:pb-[2.5rem] flex justify-center">
      <div className="flex flex-col w-full items-center justify-center gap-[1rem] lg:gap-[2.5rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
        <h1 className="font-visbyBold text-navySmoke dark:text-softOpal">
          {pastEventsPageTitle}
        </h1>
        <p className="text-navySmoke dark:text-softOpal max-w-[650px] text-center">
          {pastEventsPageSubtitle}
        </p>
        <div className="past-events-carousel w-[290px] xs:w-[350px] sm:w-[650px] sm:h-[279px] overflow-hidden">
          {featuredPastEvents.map((e, i) => {
            const priority = i === 0;
            return (
              <div
                key={`featured-past-e-${e.eventName}`}
                data-id={i}
                className="past-carousel-cell sm:h-[225px] mr-[2rem] m-[2rem]"
              >
                <div className="group cursor-pointer flex flex-col justify-between sm:flex-row rounded-xl overflow-hidden h-[222px] w-[270px] xs:w-[325px] sm:w-[625px] border border-navySmoke dark:border-softOpal shadow-custom-shadow">
                  {e.detailImage && (
                    <div className="relative w-full h-[222px] max-w-[350px]">
                      <Image
                        src={e.detailImage}
                        alt={e.eventName}
                        fill
                        priority={priority}
                        className="object-cover object-right rounded-s-xl"
                      />
                    </div>
                  )}
                  <div className="w-full sm:w-[275px] flex flex-col justify-between gap-[1.5rem] py-[1rem] pl-[1rem] border-navySmoke">
                    <div className="flex justify-between items-center gap-[1rem]">
                      <div className="text-[1.25rem] text-navySmoke dark:text-softOpal">
                        {e.firstDayOfEvent}
                        {!!e.lastDayOfEvent && ` - ${e.lastDayOfEvent}`}
                      </div>
                      <div className="font-visbyBold text-[0.85rem] px-[1rem] py-[0.5rem] text-navySmoke bg-mauvelous border border-navySmoke border-r-0 h-min rounded-l-3xl">
                        FEATURED
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <p
                        className="overflow-ellipsis font-visbyBold text-navySmoke text-[18px] dark:text-softOpal h-[60px] pr-[1rem]"
                        style={{
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 2,
                        }}
                      >
                        {e.eventName}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setShowInfo(e);
                      }}
                      tabIndex={activeIndex === i ? 0 : -1}
                      aria-hidden={activeIndex !== i}
                      className="w-fit relative transition duration-300 before:bg-black before:rounded-[12px] before:h-[calc(100%+3px)] before:w-[calc(100%+3.5px)] before:absolute before:left-0 before:top-0 before:transition before:transform before:translate-x-[2px] before:translate-y-[2px]"
                    >
                      <div
                        className={`bg-electricYellow text-navySmoke text-[0.75rem] uppercase font-visbyBold py-[10px] px-[20px] rounded-[12px] border-[3px] border-navySmoke relative z-10 block group-hover:transform group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]`}
                      >
                        Behind the Scenes
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {featuredPastEvents.length > 1 && (
          <div className="w-full flex justify-center">
            <div
              id="carousel-content-btn"
              className="self-end flex items-center gap-[120px] mb-[1rem] md:mb-[2rem]"
            >
              <div className="flex gap-[24px]">
                <button
                  type="button"
                  data-id="prev"
                  aria-label="Previous Event"
                  className="custom-prev-button-past"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="overflow-hidden transform rotate-[180deg] text-black dark:text-softOpal cursor-pointer align-middle"
                  >
                    <path
                      d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <div className="text-navySmoke dark:text-softOpal">
                  {`${activeIndex + 1} / ${featuredPastEvents.length}`}
                </div>
                <button
                  type="button"
                  data-id="next"
                  aria-label="Next Event"
                  className="custom-next-button-past"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="overflow-hidden text-black dark:text-softOpal cursor-pointer align-middle"
                  >
                    <path
                      d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        data-id="bio"
        className={`transition-opacity duration-300 ease-in-out z-[101] ${showInfo ? 'opacity-100' : 'opacity-0'}`}
      >
        {showInfo && (
          <PastEventModal
            event={showInfo}
            clientLogo={clientLogos[showInfo.clientName]}
            setShowInfo={setShowInfo}
          />
        )}
      </div>
    </section>
  );
}
