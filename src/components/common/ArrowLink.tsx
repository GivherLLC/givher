import React from "react";
import { getAssetPath } from "@/utils/assetPath";
import { getLinkPath } from "@/utils/linkPath";

type ArrowLinkProps = {
    text: string;
    color: "softOpal"|"black";
    darkModeColor: "softOpal"|"black";
    link: string;
    borderColor?:"mauvelous"|"electricYellow";
}

export default function ArrowLink({text, color, darkModeColor, link, borderColor}:ArrowLinkProps){
    return (
        <a href={getLinkPath(link)} className={`group/link flex gap-[1rem] items-center`}>
            <p className={`text-${color} dark:text-${darkModeColor} ${borderColor ? `border-b-[3px] border-${borderColor}`:""}`}>{text}</p>
            <img src={getAssetPath(`/images/common/arrow-${color}.png`)} className="dark:hidden w-[20px] group-hover/link:transform group-hover/link:transition-transform group-hover/link:ease-in-out group-hover/link:duration-300 group-hover/link:translate-x-[0.35rem]"/>
            <img src={getAssetPath(`/images/common/arrow-${darkModeColor}.png`)} className="hidden dark:block  w-[20px] group-hover/link:transform group-hover/link:transition-transform group-hover/link:ease-in-out group-hover/link:duration-300 group-hover/link:translate-x-[0.35rem]"/>
        </a>
    )
}