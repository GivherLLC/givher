import React from "react";
import { getAssetPath } from "@/utils/assetPath";
import Link from "next/link";

type ArrowLinkProps = {
    text: string;
    color: "softOpal"|"black";
    darkModeColor: "softOpal"|"black";
    link: string;
    borderColor?:"mauvelous"|"electricYellow";
    openNewTab?: boolean;
}

export default function ArrowLink({text, color, darkModeColor, link, borderColor, openNewTab} : ArrowLinkProps){
    return (
        <Link href={link} className={`group/link flex gap-[1rem] items-center`} {...(openNewTab ? { target: "_blank" } : {})}>
            <p className={`text-${color} dark:text-${darkModeColor} ${borderColor ? `border-b-[3px] border-${borderColor}`:""}`}>{text}</p>
            <img loading="lazy" src={getAssetPath(`/images/common/arrow-${color}.png`)} height={20} width={20} alt="arrow" className="dark:hidden w-[20px] group-hover/link:transform group-hover/link:transition-transform group-hover/link:ease-in-out group-hover/link:duration-300 group-hover/link:translate-x-[0.35rem]"/>
            <img loading="lazy" src={getAssetPath(`/images/common/arrow-${darkModeColor}.png`)} height={20} width={20} alt="arrow" className="hidden dark:block  w-[20px] group-hover/link:transform group-hover/link:transition-transform group-hover/link:ease-in-out group-hover/link:duration-300 group-hover/link:translate-x-[0.35rem]"/>
        </Link>
    )
}