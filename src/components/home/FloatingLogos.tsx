import React from "react";
import { getAssetPath } from "@/utils/assetPath";

type FloatingLogosProps = {
    logos: {
        logoSrc: string;
        logoSrcDarkMode: string;
        logoAlt:string
    }[]
}

export default function FloatingLogos({logos}:FloatingLogosProps){
    return (
        <div className="bg-white dark:bg-navySmoke ">
          <div className="h-[1px] bg-gradient-to-r from-mauvelous to-navySmoke dark:to-electricYellow w-full" />
            <div className="py-[2.5rem] flex justify-center overflow-hidden">
                <div className="flex w-full justify-center">
                    <div className="flex flex-col w-full gap-[2.5rem] max-w-[85.75rem] overflow-hidden custom-mask">
                        <div className="flex  gap-[2rem] w-full animate-[float_20s_linear_infinite]">
                        {logos.map((l, i)=>(
                            <img loading="lazy" key={`1-${i}`} alt={l.logoAlt} width={200} height={80} src={getAssetPath(l.logoSrc)}/>
                        ))}
                        {logos.map((l, i)=>(
                            <img loading="lazy" key={`2-${i}`} alt={l.logoAlt} width={200} height={80} src={getAssetPath(l.logoSrc)}/>
                        ))}
                        {logos.map((l, i)=>(
                            <img loading="lazy" key={`3-${i}`} alt={l.logoAlt} width={200} height={80} src={getAssetPath(l.logoSrc)}/>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[1px] bg-gradient-to-r from-mauvelous to-navySmoke dark:to-electricYellow w-full" />
        </div>
    )
}