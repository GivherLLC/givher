import React from "react";
import { getAssetPath } from "@/utils/assetPath";
import GoogleForm from "../GoogleForm";

export default function SignUpForEmailsForm(){
    return (
        <div className="bg-mauvelous dark:bg-navySmoke py-[2.5rem] flex justify-center h-full">
            <div className="relative flex flex-col w-full items-center justify-center max-w-[85.75rem] px-[0.625rem] lg:px-[1.5625rem]">
                <h1 className="font-ramenson text-navySmoke dark:text-softOpal">Sign Up for Emails</h1>
                <img src={getAssetPath("/images/geometric-pattern.png")} loading="lazy" alt="geometic pattern" width={2000} height={788} className="w-full max-w-[85.75rem] absolute bottom-0 z-0 hidden md:block"/>
                <GoogleForm/>
            </div>
        </div>
    )
}