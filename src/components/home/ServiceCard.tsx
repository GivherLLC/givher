import React from "react";
// import dynamic from "next/dynamic";
import ArrowLink from "../common/ArrowLink";
// const ArrowLink = dynamic(() => import('../common/ArrowLink'), { ssr: false });


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
        className="carousel-cell w-/2 mr-[2rem]"
      >
        <div className="group relative overflow-hidden rounded-[15px]">
          <img
            data-flickity-lazyload
            src={cardImageSrc}
            alt={cardImageAlt}
            className="group-hover:scale-[1.1] transition duration-400 ease-in-out overflow-hidden"
            height={545}
            width={430}
          />
          <div className="absolute top-[250px] left-0 p-5 translate-y-[200px] group-hover:translate-y-0 flex flex-col justify-end transition duration-400 ease-in-out">
            <h2 className="text-softOpal font-semibold pb-2">
              {cardTitle}
            </h2>
            <div className="transition duration-400 opacity-0 ease-in-out group-hover:opacity-100">
            <p className="text-softOpal mb-[1rem] leading-[1.35rem]">
              {cardDescription}
            </p>
            <ArrowLink text={cardLinkText} color={"softOpal"} darkModeColor={"black"} link={cardLink}/>

            </div>
          </div>
        </div>
      </div>
    )
  }