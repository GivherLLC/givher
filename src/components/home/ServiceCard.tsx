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
    <div className="max-w-[400px] lg:w-1/3 xl:w-[unset] xl:h-[450px] relative rounded-[15px] xl:bg-softOpal dark:bg-navySmoke overflow-hidden xl:shadow-custom-shadow xl:dark-shadow-custom-shadow-darkmode m-[1.5rem]">
      <div className="h-full group rounded-[15px] xl:px-[1.5rem] xl:pt-[3rem] xl:pb-[2rem] overflow-hidden">
        <div className="xl:translate-y-0 xl:group-hover:translate-y-[-100px] xl:group-focus-visible:translate-y-[-100px] transition duration-400 ease-in-out">
          <Image
            src={cardImageSrc}
            alt={cardImageAlt}
            className="w-full xl:group-hover:scale-[0.45] xl:group-focus-visible:scale-[0.45] transition duration-400 ease-in-out overflow-hidden max-w-[400px] lg:max-w-full xl:max-w-[275px] bg-softOpal rounded-[25px] p-[3rem] dark:hidden"
            height={cardTitle === 'Professional Fundraising' ? 700 : 350}
            width={cardTitle === 'Professional Fundraising' ? 700 : 350}
            loading="lazy"
          />
          <Image
            src={cardImageSrcDarkMode}
            alt={cardImageAlt}
            className="w-full xl:group-hover:scale-[0.45] xl:group-focus-visible:scale-[0.45] transition duration-400 ease-in-out overflow-hidden max-w-[400px] lg:max-w-full xl:max-w-[275px] p-[3rem] hidden dark:block"
            height={cardTitle === 'Professional Fundraising' ? 700 : 350}
            width={cardTitle === 'Professional Fundraising' ? 700 : 350}
            loading="lazy"
          />
          <h3
            className={`text-black text-left text-[1.25rem] xl:text-[1.5rem] xl:group-hover:text-[1.25rem] xl:group-focus-visible:text-[1.25rem] dark:text-softOpal font-visbyBold py-[2rem] xl:group-hover:translate-y-[-85px] xl:group-focus-visible:translate-y-[-85px] transition duration-400 ease-in-out`}
          >
            {cardTitle}
          </h3>
        </div>
        <div
          className={`xl:absolute xl:top-[225px] left-0 xl:px-[1.5rem] xl:group-hover:translate-y-[-20px] xl:group-focus-visible:translate-y-[-20px] xl:translate-y-[250px] flex flex-col justify-end transition duration-400 ease-in-out overflow-hidden`}
        >
          <div className="transition duration-400 ease-in-out xl:group-hover:opacity-100 xl:group-focus-visible:opacity-100">
            <p className="text-black text-[0.9rem] dark:text-softOpal mb-[0.5rem] leading-[1.35rem]">
              {cardDescription}
            </p>
            <ArrowLink
              text={cardLinkText}
              color={'black'}
              darkModeColor={'softOpal'}
              link={cardLink}
              className="text-[0.9rem] font-visbyBold"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
