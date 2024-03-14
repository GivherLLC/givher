import React from "react";
import { getAssetPath } from "@/utils/assetPath";
import ArrowLink from "../common/ArrowLink";

type ServiceCardProps = {
    cardTitle: string;
    cardDescription: string;
    cardImageSrc: string;
    cardImageAlt: string;
    cardLinkText: string;
    cardLink: string;
}

export default function ServiceCard({serviceCard}:{serviceCard:ServiceCardProps}){
    const {    
        cardTitle,
        cardDescription,
        cardImageSrc,
        cardImageAlt,
        cardLinkText,
        cardLink,
    } = serviceCard;
  
    return (
        <div
        data-id="card"
        className="carousel-cell w-/2 mr-[2rem] bg-black rounded-[15px]"
      >
        <div className="group relative overflow-hidden rounded-[15px]">
          <img
            data-flickity-lazyload
            src={getAssetPath(cardImageSrc)}
            alt={cardImageAlt}
            className="flickity-lazyloaded md:group-hover:scale-[1.1] transition duration-400 ease-in-out overflow-hidden"
            height={545}
            width={430}
          />
          <div className="absolute bottom-[50px] md:bottom-[unset] md:top-[250px] left-0 p-5 md:translate-y-[200px] md:group-hover:translate-y-0 flex flex-col justify-end transition duration-400 ease-in-out">
            <h2 className="text-softOpal font-semibold pb-2">
              {cardTitle}
            </h2>
            <div className="transition duration-400 opacity-100 md:opacity-0 ease-in-out md:group-hover:opacity-100">
            <p className="text-softOpal mb-[1rem] leading-[1.35rem] hidden md:block">
              {cardDescription}
            </p>
            <ArrowLink text={cardLinkText} color={"softOpal"} darkModeColor={"softOpal"} link={cardLink}/>
            </div>
          </div>
        </div>
      </div>
    )
  }