import React from "react";
import Link from "next/link";

type EventButtonProps = {
    text: string;
    link: string;
    bg: "mauvelous"|"electricYellow";
    scroll?:boolean;
}

export default function EventButton({text, link, bg, scroll}:EventButtonProps){
    return (
        <div className="group relative transition duration-300 before:bg-black before:rounded-[12px] before:h-[calc(100%+3px)] hover:before:h-[calc(100%+5px)] before:w-[calc(100%+3.5px)] hover:before:w-[calc(100%+5.5px)] before:absolute before:left-0 before:top-0 before:transition before:transform before:translate-x-[2px] before:translate-y-[2px]">
            <Link href={link} className={`${bg === "mauvelous"? "bg-mauvelous":"bg-electricYellow"} text-navySmoke uppercase font-bold py-[10px] px-[20px] rounded-[12px] border-[3px] border-black relative z-10 block group-hover:transform group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]`}>
                {text}
            </Link>
        </div>

    )
}