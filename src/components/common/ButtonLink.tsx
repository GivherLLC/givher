import React from "react";
import Link from "next/link";

type ButtonLinkProps = {
    bg: 'softOpal' | 'navySmoke' | 'mauvelous'|'electricYellow' | 'transparent';
    darkModeBg: 'softOpal' | 'navySmoke' | 'mauvelous'|'electricYellow' | 'transparent';
    text: string;
    link: string;
    className?: string;
    openNewTab?: boolean;
};

export default function ButtonLink({bg, darkModeBg,text,link, className, openNewTab}:ButtonLinkProps){
    return (
        <Link href={link} {...(openNewTab ? { target: "_blank" } : {})} className={`bg-${bg} ${className} dark:bg-${darkModeBg} p-[0.75rem] min-w-[175px] rounded-[.25rem] font-medium text:black text-center bg-opacity-85 hover:bg-opacity-100 transition-opacity ease-in-out`}>
            {text}
        </Link>
    )

}