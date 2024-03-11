import React from "react";
import { getAssetPath } from "@/utils/assetPath";
import footerData from "../data/footer.json";
import Link from "next/link";
import ButtonLink from "../components/common/ButtonLink";

export default function Footer(){
    return (
        <footer className="bg-softOpal dark:bg-navySmoke flex flex-col items-center">
            <div className="h-[2px] bg-gradient-to-r from-mauvelous to-navySmoke dark:to-electricYellow w-full" />
            <div className="max-w-[85.75rem] w-full py-[4rem] mx-[0.625rem] md:px-[1.5625rem] flex justify-center">
                <div className="w-full flex flex-col-reverse md:flex-row gap-[2rem] md:gap-[0rem] items-center md:items-start justify-center">
                    <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                        <img src={getAssetPath(footerData.logoSrc)} alt="Givher Logo" className="dark:hidden"/>
                        <img src={getAssetPath(footerData.darkModeLogoSrc)} alt="Givher Logo" className="hidden dark:block"/>
                    </div>
                    <div className="w-full md:w-1/3 flex flex-col-reverse md:flex-col items-center justify-between gap-[2rem] mb-[1rem] md:mb-[0rem]">
                        <div data-id="footer-icons" className="flex gap-[2rem]">
                            {footerData.iconLinks.map((i)=>(
                                <a key={i.iconImageAlt} href={i.iconLink}>
                                    <img src={getAssetPath(i.iconImageSrc)} alt={i.iconImageAlt} height={30} width={30} className="dark:hidden hover:scale-[1.1] transition-transform ease-in-out"/>
                                    <img src={getAssetPath(i.darkmodeSrc)} alt={i.iconImageAlt} height={30} width={30} className="hidden dark:block hover:scale-125 hover:scale-[1.1] transition-transform ease-in-out"/>
                                </a>
                            ))}
                        </div>
                        <div className="flex flex-col items-center justify-between gap-[2rem]">
                            <h2 className="text-navySmoke dark:text-softOpal uppercase font-bold text-center">SIGN UP NOw FOR EVENT UPDATES</h2>
                            <ButtonLink type="flat" bg="mauvelous" darkModeBg="electricYellow" text="Sign Up" link="/contact/" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/3">
                        <ul className="w-full flex flex-col items-center md:items-end">
                            {footerData.pageLinks.map((l)=>(
                                <li key={l.linkText} className="text-navySmoke dark:text-softOpal font-medium hover:font-bold transition ease-in-out mb-[1rem] w-[110px] text-center md:text-left">
                                    <Link href={l.link}>{l.linkText}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}