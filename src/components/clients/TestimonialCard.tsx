import React from "react";
import Image from "next/image";
import { TestimonialType } from "@/types/types";

export default function TestimonialCard({testimonial}:{testimonial:TestimonialType}){
    return (
        <div className="carousel-cell w-/3 mr-[3rem] flex flex-col justify-between bg-white dark:bg-mauvelous p-[1.5rem] rounded-[25px] w-[320px] h-[421px]">
            <div className="flex justify-center">
                <Image loading="lazy" src={"/images/clients/quote-1.png"} width={245} height={40} alt="quotes with a line through them"/>
            </div>
            <q className="text-black dark:text-softOpal">
                {testimonial.quote}
            </q>
            <div>
                <p>- {testimonial.quoteeName}</p>
                <p className="text-black dark:text-softOpal font-visbyBold ml-[0.75rem]">{testimonial.organization}</p>
            </div>
        </div>
    )
}