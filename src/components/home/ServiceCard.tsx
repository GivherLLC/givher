import React from 'react';
import Image from 'next/image';
import ArrowLink from '../common/ArrowLink';
import { ServiceCarouselCard } from '@/types/types';

export default function ServiceCard({
  serviceCard,
}: {
  serviceCard: ServiceCarouselCard;
}) {
  const {
    cardTitle,
    cardDescription,
    cardImageSrc,
    cardImageSrcDarkMode,
    cardImageAlt,
    cardLinkText,
    cardLink,
  } = serviceCard;

  return (
    <div
      data-id="card"
      className="carousel-cell w-/2 mr-[1rem] md:mr-[2rem] rounded-[15px] bg-softOpal dark:bg-navySmoke overflow-hidden shadow-custom-shadow dark:shadow-custom-shadow-darkmode m-[1.5rem]"
    >
      <div className="group rounded-[15px] px-[1.5rem] pt-[3rem] pb-[2rem] overflow-hidden">
        <div className="md:translate-y-0 md:group-hover:translate-y-[-100px] transition duration-400 ease-in-out">
          <Image
            data-flickity-lazyload
            src={cardImageSrc}
            alt={cardImageAlt}
            className="flickity-lazyloaded md:group-hover:scale-[0.5] transition duration-400 ease-in-out overflow-hidden max-w-[250px] md:max-w-[300px] dark:hidden"
            height={cardTitle === 'Professional Fundraising' ? 700 : 350}
            width={cardTitle === 'Professional Fundraising' ? 700 : 350}
            loading="lazy"
          />
          <Image
            data-flickity-lazyload
            src={cardImageSrcDarkMode}
            alt={cardImageAlt}
            className="flickity-lazyloaded md:group-hover:scale-[0.5] transition duration-400 ease-in-out overflow-hidden max-w-[300px] hidden dark:block"
            height={cardTitle === 'Professional Fundraising' ? 700 : 350}
            width={cardTitle === 'Professional Fundraising' ? 700 : 350}
            loading="lazy"
          />
          <h2
            className={`text-black text-center md:text-left text-[1.25rem] md:text-[1.5rem] md:group-hover:text-[1.25rem] dark:text-softOpal font-visbyBold py-[1rem] md:group-hover:translate-y-[-65px] transition duration-400 ease-in-out`}
          >
            {cardTitle}
          </h2>
        </div>
        <div
          className={`md:absolute bottom-[30px] md:bottom-[unset] md:top-[250px] left-0 md:px-[1.5rem] md:group-hover:translate-y-[-20px] md:translate-y-[200px]  flex flex-col justify-end transition duration-400 ease-in-out overflow-hidden`}
        >
          <div className="transition duration-400 opacity-100 md:opacity-0 ease-in-out md:group-hover:opacity-100">
            <p className="text-black text-[0.9rem] dark:text-softOpal mb-[0.5rem] leading-[1.35rem] hidden md:block">
              {cardDescription}
            </p>
            <ArrowLink
              text={cardLinkText}
              color={'black'}
              darkModeColor={'softOpal'}
              link={cardLink}
              className="justify-center md:justify-start text-[0.9rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
