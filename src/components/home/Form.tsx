import React from "react";
import { getAssetPath } from "@/utils/assetPath";
import GoogleForm from "../GoogleForm";

export default function HomepageForm({title}:{title:string}){
    return (
        <div className="bg-mauvelous dark:bg-navySmoke py-[2.5rem] flex justify-center">
            <div className="relative flex flex-col w-full items-center justify-center gap-[2.5rem]  max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <h1 className="font-ramenson text-navySmoke dark:text-softOpal">{title}</h1>
                <img src={getAssetPath("/images/geometric-pattern.png")} width={1000} height={294} className="w-full max-w-[85.75rem] absolute bottom-0 z-0"/>
                <GoogleForm/>
            </div>
        </div>
    )
}