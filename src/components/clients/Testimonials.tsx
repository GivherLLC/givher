'use client'
import React, { useEffect } from "react";
import { getAssetPath } from "@/utils/assetPath";
import TestimonialCard from "./TestimonialCard";
import { TestimonialType } from "@/types/types";

type TestimonialsProps = {
    testimonials: TestimonialType[];
    testimonalsSectionTitle: string;
}

export default function Testimonials({testimonials, testimonalsSectionTitle}:TestimonialsProps){
    useEffect(() => {
        const Flickity = require('flickity-imagesloaded');
        const flkty = new Flickity('.testimonials-carousel', {
            cellAlign: "center",
            contain: true,
            imagesLoaded: true,
            prevNextButtons: false,
            percentPosition: false,
            wrapAround: false,
            pageDots: true,
          });
    
        // Cleanup event listeners and destroy Flickity instance on component unmount
        return () => {
          flkty.destroy();
        };
      }, []); // Empty dependency array ensures the effect runs only once on mount


    return (
        <div className="bg-mauvelous dark:bg-navySmoke flex justify-center">
            <div className="relative flex flex-col w-full items-center gap-[2.5rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem] overflow-hidden">
                <h1 className="font-visbyBold text-navySmoke dark:text-softOpal pt-[2.5rem]">{testimonalsSectionTitle}</h1>
                <img loading="lazy" src={getAssetPath("/images/geometric-pattern.png")} alt="geometic pattern" width={2000} height={788} className="w-full max-w-[85.75rem] absolute bottom-0 z-0 hidden md:block"/>
                <div className="testimonials-carousel relative w-full z-10 py-[2.5rem] mb-[2rem]">
                    {testimonials.map((t,i)=>(
                        <TestimonialCard testimonial={t} key={i}/>
                    ))}
                </div>
            </div>
        </div>
    )
}