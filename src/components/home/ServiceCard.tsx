import React from "react";
import Image from "next/image";
import ArrowLink from "../common/ArrowLink";
import { ServiceCarouselCard } from "@/types/types";

export default function ServiceCard({serviceCard}:{serviceCard:ServiceCarouselCard}){
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
        className="carousel-cell w-/2 mr-[2rem] rounded-[15px] bg-softOpal dark:bg-navySmoke overflow-hidden shadow-custom-shadow dark:shadow-custom-shadow-darkmode m-[1.5rem]"
      >
        <div className="group rounded-[15px] px-[1.5rem] py-[3rem] overflow-hidden">
          <div className="md:translate-y-0 md:group-hover:translate-y-[-100px] transition duration-400 ease-in-out">
          <Image
            data-flickity-lazyload
            src={cardImageSrc}
            alt={cardImageAlt}
            className="flickity-lazyloaded md:group-hover:scale-[0.5] transition duration-400 ease-in-out overflow-hidden max-w-[250px] md:max-w-[300px] dark:hidden"
            height={cardTitle === "Professional Fundraising" ? 700: 350}
            width={cardTitle === "Professional Fundraising" ? 700: 350}
            loading="lazy"
          />
           <Image
            data-flickity-lazyload
            src={cardImageSrcDarkMode}
            alt={cardImageAlt}
            className="flickity-lazyloaded md:group-hover:scale-[0.5] transition duration-400 ease-in-out overflow-hidden max-w-[300px] hidden dark:block"
            height={cardTitle === "Professional Fundraising" ? 700: 350}
            width={cardTitle === "Professional Fundraising" ? 700: 350}
            loading="lazy"
          />
            <h2 className={`text-black dark:text-softOpal font-visbyBold py-[1rem] ${cardTitle === "General Consulting"? "md:group-hover:translate-y-[-85px]":"md:group-hover:translate-y-[-65px]"} transition duration-400 ease-in-out`}>
              {cardTitle}
            </h2>
            </div>
          <div className={`absolute bottom-[30px] md:bottom-[unset] md:top-[250px] left-0 px-[1.5rem] ${cardTitle === "General Consulting"? "md:group-hover:translate-y-[-40px]":"md:group-hover:translate-y-[-10px]"} md:translate-y-[200px]  flex flex-col justify-end transition duration-400 ease-in-out overflow-hidden`}>
            <div className="transition duration-400 opacity-100 md:opacity-0 ease-in-out md:group-hover:opacity-100">
            <p className="text-black dark:text-softOpal mb-[1rem] leading-[1.35rem] hidden md:block">
              {cardDescription}
            </p>
            <ArrowLink text={cardLinkText} color={"black"} darkModeColor={"softOpal"} link={cardLink}/>
            </div>
          </div>
        </div>
      </div>
    )
  }