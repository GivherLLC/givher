'use client'

import React, { useState } from "react";
import teamData from "../../data/team.json";
import { getAssetPath } from "@/utils/assetPath";
import ArrowButton from "../common/ArrowButton";
import Link from "next/link";

export default function TeamPage(){
    const {title, alina, jay} = teamData;
    const [showBio, setShowBio] = useState<null | 'Alina' | 'Jay'>(null);
    const [hoverActivated, setHoverActivated] = useState(false);

    const handleMouseEnter = (bio:'Alina' | 'Jay') => {
        if(!showBio){
            setShowBio(bio)
            setHoverActivated(true);
        }
    };
  
    const handleMouseLeave = () => {
    if(hoverActivated){
        setShowBio(null);
        setHoverActivated(false);  
    }
    };

    return (
        <div className="bg-white dark:bg-navySmoke py-[2.5rem] flex justify-center">
            <div className="relative flex flex-col w-full items-center justify-center gap-[2.5rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
                <h1 className="font-ramenson text-navySmoke dark:text-softOpal">{title}</h1>
                <div className="w-full flex flex-col xl:flex-row justify-between gap-[5rem] py-[2rem]">
                    <div data-id="alina" className="flex flex-col md:flex-row xl:flex-col justify-center items-center gap-[2rem] xl:gap-[1rem] w-full xl:w-1/2">
                        <img onMouseEnter={()=>{handleMouseEnter('Alina')}} onMouseLeave={handleMouseLeave} src={getAssetPath("/images/team/alina-headshot.png")} height={420} width={420} alt="Alina Hernandez headshot" className="w-[60%] max-w-[420px] mb-[1rem]"/>
                        <div className="flex flex-col gap-[1rem] justify-center items-center">
                            <h2 className="font-ramenson text-navySmoke dark:text-electricYellow text-[2rem] text-center">Alina<br/>Hernandez</h2>
                            <p className="text-mauvelous dark:text-softOpal text-[1.5rem] text-center font-semibold">{alina.title}</p>
                            <div className="h-[3px] w-[50px] bg-navySmoke dark:bg-electricYellow"/>
                            <div data-id="alina-icons" className="flex gap-[2rem] mb-[1rem]">
                                {alina.iconLinks.map((i)=>(
                                    <Link key={i.iconImageAlt} href={i.iconLink}>
                                        <img src={getAssetPath(i.iconImageSrc)} alt={i.iconImageAlt} height={27} width={27} className="dark:hidden hover:scale-[1.1] transition-transform ease-in-out"/>
                                        <img src={getAssetPath(i.darkmodeSrc)} alt={i.iconImageAlt} height={27} width={27} className="hidden dark:block hover:scale-[1.1] transition-transform ease-in-out"/>
                                    </Link>
                                ))}
                        </div>
                        <ArrowButton text="View Bio" color="black" darkModeColor="softOpal" onClickFunction={()=>{setShowBio('Alina')}}/>

                        </div>
                    </div>
                    <div data-id="jay" className="flex flex-col md:flex-row xl:flex-col justify-center items-center gap-[2rem] xl:gap-[1rem] w-full xl:w-1/2">
                        <img onMouseEnter={()=>{handleMouseEnter('Jay')}} onMouseLeave={handleMouseLeave} src={getAssetPath("/images/team/jay-headshot.png")} height={420} width={420} alt="Jay Franco headshot" className=" w-[60%] max-w-[420px] mb-[1rem]"/>
                        <div className="flex flex-col gap-[1rem] justify-center items-center">
                            <h2 className="font-ramenson text-navySmoke dark:text-electricYellow text-[2rem] text-center">Jay<br/>Franco</h2>
                            <p className="text-mauvelous dark:text-softOpal text-[1.5rem] text-center font-semibold">{jay.title}</p>
                            <div className="h-[3px] w-[50px] bg-navySmoke dark:bg-electricYellow"/>
                            <div data-id="jay-icons" className="flex gap-[2rem] mb-[1rem]">
                                {jay.iconLinks.map((i)=>(
                                    <Link key={i.iconImageAlt} href={i.iconLink}>
                                        <img src={getAssetPath(i.iconImageSrc)} alt={i.iconImageAlt} height={27} width={27} className="dark:hidden hover:scale-[1.1] transition-transform ease-in-out"/>
                                        <img src={getAssetPath(i.darkmodeSrc)} alt={i.iconImageAlt} height={27} width={27} className="hidden dark:block hover:scale-[1.1] transition-transform ease-in-out"/>
                                    </Link>
                                ))}
                            </div>
                            <ArrowButton text="View Bio" color="black" darkModeColor="softOpal" onClickFunction={()=>{setShowBio('Jay')}}/>
                        </div>
                    </div>
                </div>
                <div data-id="bio" className={`${showBio ? "opacity-100":"opacity-0"} transition-opacity duration-300 ease-in-out`}>
                    {showBio && (
                        <div className={`absolute  flex flex-col w-full xl:w-[45%] h-min xl:h-[calc(100%-8rem)] xl:top-[6rem] p-[1rem] pb-[2rem] rounded-[25px] bg-navySmoke dark:border-[1px] dark:border-softOpal dark:shadow-custom-shadow-darkmode ${showBio == "Alina" ? "top-[5rem] right-0 xl:right-[5%]":"left-0 bottom-0 xl:bottom-[unset] xl:left-[5%]"}`}>
                            <button type="button" data-id="Close Button" onClick={()=>{setShowBio(null)}} className={`${hoverActivated ? "invisible":"visible"} self-end flex relative flex-col items-center justify-between h-[50px] w-[50px] p-0 transition-transform`}>
                                <div className={`h-[2px] w-full bg-softOpal absolute md:right-[50%] max-w-[20px] top-[50%] transform -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] mt-0`}/>
                                <div className={`h-[2px] w-full bg-softOpal absolute md:right-[50%] max-w-[20px] top-[50%] transform -translate-x-1/2 -translate-y-1/2 rotate-45 mt-0`}/>
                            </button>

                             <h2 className="font-ramenson text-softOpal text-[1.5rem] md:mx-[1.5rem]">About {showBio}</h2>
                            <div className={` flex flex-col gap-[1.5rem] md:px-[2rem] pt-[1rem]`}>                               
                                {showBio == "Alina" ? (
                                    
                                    alina.bio.map((p,i)=>(
                                        <p key={i} className="text-softOpal text-sm md:text-base">{p}</p>
                                    ))
                                ):(
                                    jay.bio.map((p,i)=>(
                                        <p key={i} className="text-softOpal text-sm md:text-base">{p}</p>
                                    ))
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}