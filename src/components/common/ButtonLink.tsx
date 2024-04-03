import React from "react";
import Link from "next/link";

type ButtonLinkProps = {
    type: 'flat' | '3d';
    bg: 'softOpal' | 'navySmoke' | 'mauvelous'|'electricYellow' | 'transparent';
    darkModeBg: 'softOpal' | 'navySmoke' | 'mauvelous'|'electricYellow' | 'transparent';
    text: string;
    link: string;
    className?: string;
};

export default function ButtonLink({type, bg, darkModeBg,text,link, className}:ButtonLinkProps){
    if(type === "flat"){
        return(
            <Link className={`bg-${bg} ${className} dark:bg-${darkModeBg} ${bg === "navySmoke" ? "text-softOpal dark:text-black":"text-black"} p-[0.75rem] min-w-[175px] rounded-[.25rem] font-medium text-center bg-opacity-85 hover:bg-opacity-100 transition-opacity ease-in-out`} href={link}>
                {text}
            </Link>
        )
    }
    return (
        <Link className={`bg-${bg} ${className} dark:bg-${darkModeBg} p-[0.75rem] min-w-[175px] rounded-[.25rem] font-medium text:black text-center bg-opacity-85 hover:bg-opacity-100 transition-opacity ease-in-out`} href={link}>
            {text}
        </Link>
    )

}