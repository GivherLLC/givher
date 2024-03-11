import React from "react";
import ServiceCard from "./ServiceCard";

type ServicesProps = {
    servicesCarouselTitle: string;
    sevicesCarouselCards: {
        cardTitle: string;
        cardDescription: string;
        cardImageSrc: string;
        cardImageAlt: string;
        cardLinkText: string;
        cardLink:string;
    }[]
}

export default function Services({services}:{services:ServicesProps}){
    const {servicesCarouselTitle, sevicesCarouselCards} = services;

    return (
        <div className="bg-mauvelous dark:bg-navySmoke py-[2.5rem] flex justify-center">
        <div className="flex flex-col gap-[2.5rem] justify-center w-full max-w-[85.75rem] mx-[0.625rem] md:mx-[1.5625rem] overflow-hidden">
            <h1 className="font-ramenson text-softOpal text-center">
            {servicesCarouselTitle}
            </h1>
            <div
                className="main-carousel services-carousel"
                data-flickity='{ "freeScroll": true, "contain": true, "imagesLoaded": true, "prevNextButtons": false, "percentPosition": false }'
                >
                {sevicesCarouselCards.map((c) => (
                    <ServiceCard key={c.cardTitle} serviceCard={c}/>
                    ))}
            </div>   
            </div>         
        </div>
    )
}