import React from "react";
import { getAssetPath } from "@/utils/assetPath";

type ArrowLinkProps = {
    text: string;
    color: "softOpal"|"black";
    darkModeColor: "softOpal"|"black";
    onClickFunction: ()=>undefined;
}

export default function ArrowButton({text, color, darkModeColor, onClickFunction}:ArrowLinkProps){
    return (
        <button onClick={()=>{onClickFunction()}} className={`group/link flex gap-[1rem] items-center`}>
            <p className={`text-${color} dark:text-${darkModeColor}`}>{text}</p>
            <img loading="lazy" src={getAssetPath(`/images/common/arrow-${color}.png`)} height={20} width={20} alt="arrow" className="dark:hidden w-[20px] group-hover/link:transform group-hover/link:transition-transform group-hover/link:ease-in-out group-hover/link:duration-300 group-hover/link:translate-x-[0.35rem]"/>
            <img loading="lazy" src={getAssetPath(`/images/common/arrow-${darkModeColor}.png`)} height={20} width={20} alt="arrow" className="hidden dark:block  w-[20px] group-hover/link:transform group-hover/link:transition-transform group-hover/link:ease-in-out group-hover/link:duration-300 group-hover/link:translate-x-[0.35rem]"/>
        </button>
    )
}