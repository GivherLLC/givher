import React from "react";
import { getAssetPath } from "@/utils/assetPath";
import GoogleForm from "../GoogleForm";
import contactData from "../../data/contactInfo.json";
import Link from "next/link";

export default function ContactPage(){
    return (
        <div className="bg-mauvelous dark:bg-navySmoke py-[2.5rem] flex justify-center">
            <div className="relative w-full flex flex-col w-full items-center justify-center gap-[2.5rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <img src={getAssetPath("/images/geometric-pattern.png")} alt="geometric pattern" width={1000} height={294} className="w-full max-w-[85.75rem] absolute bottom-0 z-0 hidden md:block"/>
                <div className="flex flex-col lg:flex-row w-full">
                    <div className="w-full lg:w-1/2 flex flex-col items-center gap-[2rem] mt-[2rem]">
                        <h1 className="font-ramenson text-navySmoke dark:text-softOpal">{contactData.contactPageTitle}</h1>
                        <Link href="tel:+916-296-4656" className="text-navySmoke dark:text-softOpal">
                            <p>{contactData.contactPhoneNumber}</p>
                        </Link>
                        <Link href="mailto:alina@givher.com" className="text-navySmoke dark:text-softOpal">
                            <p>{contactData.contactEmail}</p>
                        </Link>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <GoogleForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}