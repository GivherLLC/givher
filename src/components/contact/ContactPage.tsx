import React from "react";
import { getAssetPath } from "@/utils/assetPath";
import Link from "next/link";
import { ContactPageData } from "@/app/contact/page";

type ContactPageProps = {
    contactData: ContactPageData;
}

export default function ContactPage({contactData}:ContactPageProps){
    return (
        <div className="bg-mauvelous dark:bg-navySmoke py-[1rem] md:py-[2.5rem] flex justify-center min-h-[calc(100vh-679px)] md:min-h-[calc(100vh-410px)]">
            <div className="max-w-[85.75rem] flex flex-col gap-[1.5rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <div className="flex flex-col lg:flex-row w-full">
                    <div className="flex flex-col items-center gap-[2rem] mt-[2rem] mx-auto">
                        <h1 className="font-visbyBold text-navySmoke dark:text-softOpal">{contactData.contactPageTitle}</h1>
                        <Link href="tel:+916-296-4656" className="text-navySmoke dark:text-softOpal">
                            <p>{contactData.contactPhoneNumber}</p>
                        </Link>
                        <Link href="mailto:alina@givher.com" className="text-navySmoke dark:text-softOpal">
                            <p>{contactData.contactEmail}</p>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center items-end flex-1">
                    <img loading="eager" src={getAssetPath("/images/geometric-pattern.png")} alt="geometric pattern" width={1000} height={294} className="w-full md:w-[60%]"/>
                </div>
            </div>
        </div>
    )
}