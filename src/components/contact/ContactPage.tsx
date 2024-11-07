import React from "react";
import Link from "next/link";
import { ContactPageData } from "@/types/types";
import MailChimpForm from "./MailChimpForm";

type ContactPageProps = {
    contactData: ContactPageData;
}

export default function ContactPage({contactData}:ContactPageProps){
    return (
        <>
        <div className="bg-mauvelous dark:bg-navySmoke py-[3rem] md:py-[4.5rem] flex justify-center">
            <div className="max-w-[85.75rem] flex flex-col gap-[1.5rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <div className="flex flex-col lg:flex-row w-full">
                    <div className="flex flex-col items-center text-center gap-[2rem] mx-auto max-w-[750px]">
                        <h1 className="font-visbyBold text-navySmoke dark:text-softOpal">{contactData.contactPageTitle}</h1>
                        <p className="text-navySmoke dark:text-softOpal">{contactData.contactPageSubTitle1}</p>
                        <p className="text-navySmoke dark:text-softOpal">{contactData.contactPageSubTitle2}</p>
                        <div className="flex gap-[1rem]">
                        <Link href={`tel:+1${contactData.contactPhoneNumber}`} className="text-navySmoke dark:text-softOpal">
                            <p className="text-navySmoke dark:text-softOpal hover:underline">{contactData.contactPhoneNumber}</p>
                        </Link>
                        <div className="text-navySmoke dark:text-softOpal">|</div>
                        <Link href={`mailto:${contactData.contactEmail}`} className="text-navySmoke dark:text-softOpal hover:underline">
                            <p className="text-navySmoke dark:text-softOpal">{contactData.contactEmail}</p>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-softOpal dark:bg-navySmoke py-[1rem] md:py-[2.5rem] flex justify-center">
            <div className="w-full max-w-[950px] flex flex-col gap-[1.5rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <MailChimpForm/>
            </div>
        </div>
        </>
    )
}