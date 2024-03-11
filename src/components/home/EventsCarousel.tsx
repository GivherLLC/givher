import React from "react";

type EventsCarouselProps = {
    eventCarouselTitle: string;
    eventCarouselImages: {
        imageSrc: string;
        imageAlt: string;
        }[]
    
}

export default function EventsCarousel({events}:{events:EventsCarouselProps}){
    const {eventCarouselTitle, eventCarouselImages} = events;

    return (
        <div className="bg-softOpal dark:bg-navySmoke py-[2.5rem] flex justify-center">
        <div className="flex flex-col gap-[2.5rem] justify-center w-full max-w-[85.75rem] mx-[0.625rem] md:mx-[1.5625rem] overflow-hidden">
            <h1 className="font-ramenson text-navySmoke dark:text-softOpal text-center">
            {eventCarouselTitle}
            </h1>
            <div
                className="main-carousel event-carousel"
                data-flickity='{ "freeScroll": true, "contain": true, "imagesLoaded": true, "prevNextButtons": true, "percentPosition": false, "wrapAround":true }'
                >
                {eventCarouselImages.map((c, i) => (
                <div
                    key={i}
                    data-id="card"
                    className="carousel-cell w-/2 mr-[2rem]"
                    >
                    <div className="rounded-[15px]">
                        <img
                            data-flickity-lazyload
                            src={c.imageSrc}
                            alt={c.imageAlt}
                            width={297}
                            height={390}
                        />
                    </div>
                </div>                    
                ))}
            </div>   
            </div>         
        </div>
    )
}