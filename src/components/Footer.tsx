import React from "react";
import { getAssetPath } from "@/utils/assetPath";
import Link from "next/link";
import ButtonLink from "../components/common/ButtonLink";
import { FooterData } from "@/types/types";

type FooterProps = {
    data: FooterData;
}

export default function Footer({data}:FooterProps){
    return (
        <footer className="bg-softOpal dark:bg-navySmoke flex flex-col items-center">
            <div className="h-[2px] bg-gradient-to-r from-mauvelous to-navySmoke dark:to-electricYellow w-full" />
            <div className="max-w-[85.75rem] w-full py-[4rem] mx-[0.625rem] md:px-[1.5625rem] flex justify-center">
                <div className="w-full flex flex-col-reverse md:flex-row gap-[2rem] md:gap-[0rem] items-center md:items-start justify-center">
                    <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                        <img src={getAssetPath(data.footerLogo)} loading="lazy" alt="Givher Logo" className="dark:hidden max-w-[174px]" height={348} width={380}/>
                        <img src={getAssetPath(data.darkModeLogoSrc)} loading="lazy" alt="Givher Logo" className="hidden dark:block max-w-[174px]" height={348} width={380}/>
                    </div>
                    <div className="w-full md:w-1/3 flex flex-col-reverse md:flex-col items-center justify-between gap-[2rem] mb-[1rem] md:mb-[0rem]">
                        <div data-id="footer-icons" className="flex gap-[2rem]">
                            {data.iconLinks.map((i)=>(
                                <Link key={i.imageAlt} href={i.iconLink} target="_blank" rel="noopener noreferrer">
                                    <img src={getAssetPath(i.iconImageSrc)} loading="lazy" alt={i.imageAlt} height={30} width={30} className="dark:hidden hover:scale-[1.1] transition-transform ease-in-out"/>
                                    <img src={getAssetPath(i.darkmodeSrc)} loading="lazy" alt={i.imageAlt} height={30} width={30} className="hidden dark:block hover:scale-[1.1] transition-transform ease-in-out"/>
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-col items-center justify-between gap-[2rem]">
                            <h2 className="text-navySmoke dark:text-softOpal uppercase font-visbyBold text-center max-w-[375px]">{data.buttonTitle}</h2>
                            <ButtonLink bg="mauvelous" darkModeBg="electricYellow" text="Sign Up" link="/signup4emails" />
                        </div>
                    </div>
                    <div className="w-full h-full md:w-1/3 md:flex md:flex-col md:justify-between">
                        <ul className="w-full flex flex-col items-center md:items-end h-full">
                            {data.pageLinks.map((l)=>(
                                <li key={l.linkText} className="text-navySmoke dark:text-softOpal  transition ease-in-out opacity-80 hover:opacity-100 mb-[1rem] w-[110px] text-center md:text-left">
                                    <Link href={l.link} {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{l.linkText}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="text-xs text-right hidden md:flex md:justify-end text-navySmoke dark:text-softOpal whitespace-nowrap gap-[5px]">
                            Made with <span className="dark:hidden">&#128420;</span><span className=" hidden dark:block">&#x1F90D;</span> by <Link href="https://leighdahlin.com/" className="underline" target="_blank" rel="noopener noreferrer">Leigh Dahlin</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-xs mb-[1rem] text-right flex md:hidden md:justify-end text-navySmoke dark:text-softOpal whitespace-nowrap gap-[5px]">
                Made with <span className="dark:hidden">&#128420;</span><span className=" hidden dark:block">&#x1F90D;</span> by <Link href="https://leighdahlin.com/" className="underline" target="_blank" rel="noopener noreferrer">Leigh Dahlin</Link>
            </div>        
    </footer>
    )
}