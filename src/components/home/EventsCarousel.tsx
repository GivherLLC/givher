'use client'

import React, { useEffect } from "react";

type EventsCarouselProps = {
    eventCarouselTitle: string;
    eventCarouselImages: {
        imageSrc: string;
        imageAlt: string;
    }[]
}

export default function EventsCarousel({events}:{events:EventsCarouselProps}){
    const {eventCarouselTitle, eventCarouselImages} = events;

    useEffect(() => {
        const Flickity = require('flickity-imagesloaded');
        const flkty = new Flickity('.event-carousel', {
          cellAlign: "left",
          contain: true,
          imagesLoaded: true,
          prevNextButtons: true,
          percentPosition: false,
          wrapAround: true,
        });

        // Modify Flickity's event listeners to be passive for improved scroll performance
        const carouselElement = document.querySelector('.event-carousel');
        if (carouselElement) {
            carouselElement.addEventListener('touchstart', () => {}, { passive: true });
            carouselElement.addEventListener('touchmove', () => {}, { passive: true });
            carouselElement.addEventListener('wheel', () => {}, { passive: true });
        }
    
        // Cleanup event listeners and destroy Flickity instance on component unmount
        return () => {
          flkty.destroy();
        };
      }, []); // Empty dependency array ensures the effect runs only once on mount


    return (
        <div className="bg-softOpal dark:bg-navySmoke py-[2.5rem] flex justify-center">
        <div className="flex flex-col gap-[2.5rem] justify-center w-full max-w-[85.75rem] mx-[0.625rem] md:mx-[1.5625rem] overflow-hidden">
            <h1 className="font-visbyBold text-navySmoke dark:text-softOpal text-center">
            {eventCarouselTitle}
            </h1>
            <div className="event-carousel relative">
                {eventCarouselImages.map((c, i) => (
                <div
                    key={i}
                    data-id="card"
                    className="carousel-cell w-/2 mr-[2rem]"
                    >
                    <div className="rounded-[15px]">
                        <img
                            src={`${c.imageSrc}?w=297&h=390&q=75`}
                            alt={c.imageAlt}
                            width={297}
                            height={390}
                            className="rounded-[15px] flickity-lazyloaded"
                        />
                    </div>
                </div>                    
                ))}
            </div>   
            </div>         
        </div>
    )
}