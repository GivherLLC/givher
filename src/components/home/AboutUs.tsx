import React from "react";
import { getAssetPath } from "@/utils/assetPath";

type AboutUsProps = {
    aboutTitle: string;
    aboutUsSections:{
        sectionTitle:string;
        sectionText:string;
        sectionImageSrc:string;
        sectionImageSrcDarkMode:string;
        sectionImageAlt:string;
    }[]
}

export default function AboutUs({aboutInfo}:{aboutInfo:AboutUsProps}){
    const {aboutTitle, aboutUsSections} = aboutInfo;
    return (
        <div className="bg-white dark:bg-navySmoke py-[2.5rem] flex justify-center">
            <div className="flex flex-col w-full items-center justify-center gap-[2.5rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <h1 className="font-ramenson text-navySmoke dark:text-softOpal">{aboutTitle}</h1>
                <div className="flex flex-col gap-[4rem] lg:gap-[8rem] w-full">
                    {aboutUsSections.map((s,i)=>{
                        const even = i % 2 === 0;
                        return (
                            <div key={s.sectionTitle} className={`w-full flex gap-[1rem] lg:gap-[4rem] flex-col-reverse ${even ? "lg:flex-row":"lg:flex-row-reverse"} justify-between mx-auto lg:mx-0`}>
                                <div className={`flex flex-col gap-[1rem] max-w-[500px] lg:mt-[2rem] items-start mx-auto lg:mx-0`}>
                                    <h2 className="inline  pb-[1rem] border-b-[15px] border-mauvelous dark:border-electricYellow text-black dark:text-softOpal">{s.sectionTitle}</h2>
                                    <p className="h-full flex items-center text-black dark:text-softOpal">{s.sectionText}</p>
                                </div>
                                <div className={`w-full flex justify-center items-center ${even ? "lg:justify-end":"lg:justify-start"}`}>
                                    <img loading="lazy" src={getAssetPath(s.sectionImageSrc)} alt={s.sectionImageAlt} height={237.5} width={500} className="sm:max-w-[300px] lg:max-w-[500px] xl:max-w-[600px] max-h-[285px] dark:hidden"/>
                                    <img loading="lazy" src={getAssetPath(s.sectionImageSrcDarkMode)} alt={s.sectionImageAlt} height={237.5} width={500} className="max-w-[300px] lg:max-w-[500px] xl:max-w-[600px] max-h-[285px] hidden dark:block"/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}