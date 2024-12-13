'use client';

import React, { useEffect } from 'react';
import ServiceCard from './ServiceCard';

type ServicesProps = {
  servicesCarouselTitle: string;
  sevicesCarouselCards: {
    cardTitle: string;
    cardDescription: string;
    cardImageSrc: string;
    cardImageSrcDarkMode: string;
    cardImageAlt: string;
    cardLinkText: string;
    cardLink: string;
  }[];
};

export default function Services({ services }: { services: ServicesProps }) {
  const { servicesCarouselTitle, sevicesCarouselCards } = services;

  useEffect(() => {
    const Flickity = require('flickity-imagesloaded');
    const flkty = new Flickity('.services-carousel', {
      contain: true,
      imagesLoaded: true,
      prevNextButtons: false,
      percentPosition: false,
    });

    // Modify Flickity's event listeners to be passive for improved scroll performance
    const carouselElement = document.querySelector('.services-carousel');
    if (carouselElement) {
      carouselElement.addEventListener('touchstart', () => {}, {
        passive: true,
      });
      carouselElement.addEventListener('touchmove', () => {}, {
        passive: true,
      });
      carouselElement.addEventListener('wheel', () => {}, { passive: true });
    }

    // Cleanup event listeners and destroy Flickity instance on component unmount
    return () => {
      flkty.destroy();
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="bg-mauvelous dark:bg-navySmoke py-[2.5rem] flex justify-center">
      <div className="flex flex-col gap-[2.5rem] justify-center w-full max-w-[85.75rem] mx-[0.625rem] md:mx-[1.5625rem] overflow-hidden">
        <h1 className="font-visbyBold text-navySmoke dark:text-softOpal text-center">
          {servicesCarouselTitle}
        </h1>
        <div className="services-carousel">
          {sevicesCarouselCards.map((c) => (
            <ServiceCard key={c.cardTitle} serviceCard={c} />
          ))}
        </div>
      </div>
    </div>
  );
}
