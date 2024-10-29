import React from "react";
import GoogleForm from "../GoogleForm";
import { SignUpForEmailsData } from "@/types/types";

type SignUpForEmailsProps = {
    data: SignUpForEmailsData
}

export default function SignUpForEmailsForm({data}:SignUpForEmailsProps){
    return (
        <div className="bg-mauvelous dark:bg-navySmoke py-[2.5rem] flex justify-center h-full">
            <div className="relative flex flex-col w-full items-center justify-center max-w-[85.75rem] px-[0.625rem] lg:px-[1.5625rem]">
                <h1 className="font-visbyBold text-navySmoke dark:text-softOpal">{data.signupTitle}</h1>
                <img src={"/images/geometric-pattern.svg"} loading="eager" alt="geometic pattern" width={2000} height={788} className="w-full max-w-[85.75rem] absolute bottom-0 z-0 hidden md:block"/>
                <GoogleForm formLink={data.googleFormLink}/>
            </div>
        </div>
    )
}