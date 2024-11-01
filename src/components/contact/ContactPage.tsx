import React from "react";
import Link from "next/link";
import { ContactPageData } from "@/types/types";

type ContactPageProps = {
    contactData: ContactPageData;
}

export default function ContactPage({contactData}:ContactPageProps){
    return (
        <div className="min-h-[calc(100vh-400px)] md:min-h-[calc(100vh-82px)] bg-mauvelous dark:bg-navySmoke py-[1rem] md:py-[2.5rem] flex justify-center">
            <div className="max-w-[85.75rem] flex flex-col gap-[1.5rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <div className="flex flex-col lg:flex-row w-full">
                    <div className="flex flex-col items-center gap-[2rem] mt-[2rem] mx-auto">
                        <h1 className="font-visbyBold text-navySmoke dark:text-softOpal">{contactData.contactPageTitle}</h1>
                        <Link href={`tel:+${contactData.contactPhoneNumber}`} className="text-navySmoke dark:text-softOpal">
                            <p>{contactData.contactPhoneNumber}</p>
                        </Link>
                        <Link href={`mailto:${contactData.contactEmail}`} className="text-navySmoke dark:text-softOpal">
                            <p>{contactData.contactEmail}</p>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center items-end flex-1">
                <img src="/images/geometric-pattern.svg" alt="geometric pattern" className="w-full md:w-[60%]" />
                </div>
            </div>
        </div>
    )
}