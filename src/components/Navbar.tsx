'use client'

import React, { useState, useEffect } from "react";
import useScreenSize from '../hooks/useScreenSize';
import { getImagePath } from "../utils/imagePath";

export default function Navbar(){
    const screenSize = useScreenSize();
    const [navOpen, setNavOpen] = useState(false);

    const scrollToTop = () => {
        const topElement = document.body;
        topElement.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(()=>{
        //prevent scrolling behind the nav on mobile
        if(navOpen){
            document.body.style.overflow = 'hidden';
        }
        return ()=>{
            document.body.style.overflow = 'unset';
        }
    },[navOpen])

    return (
        <header className="sticky top-0 z-40 shadow-lg">
            <div className="flex flex-row justify-between p-[1rem] bg-softOpal dark:bg-navySmoke relative">
                <button onClick={()=>{scrollToTop()}}>
                    <img
                        src="/images/GIVHER_Primary_NavySmoke.png"
                        alt="Givher Logo"
                        width={75}
                        height={35}
                        className="dark:hidden"
                        />
                    <img
                        src="/images/GIVHER_Primary_ElectricYellow.png"
                        alt="Givher Logo"
                        width={75}
                        height={35}
                        className="hidden dark:block"
                        />
                </button>
                <nav className="flex flex-row gap-[1rem] font-medium items-center">
                    {screenSize.width > 640 ? (
                        <>
                            <button className="text:softOpal dark:text-electricYellow hover:font-bold w-[64px] transition ease-in-out">About</button>
                            <button className="text:softOpal dark:text-electricYellow hover:font-bold w-[64px] transition ease-in-out">Team</button>
                            <button className="text:softOpal dark:text-electricYellow hover:font-bold w-[64px] transition ease-in-out">Contact</button>
                        </>
                    ):(
                        <button onClick={()=>{setNavOpen(!navOpen)}} className="flex flex-col items-center justify-between w-[22px] h-[20px] p-0" aria-label="Open/Close Menu">
                            <div className="h-[2px] w-full bg-navySmoke dark:bg-electricYellow"/>
                            <div className="h-[2px] w-full bg-navySmoke dark:bg-electricYellow"/>
                            <div className="h-[2px] w-full bg-navySmoke dark:bg-electricYellow"/>
                        </button>
                    )}
                </nav>
            </div>
            {navOpen && (
                    <div className="fixed top-[58px] h-screen w-screen bg-navySmoke">
                        <nav className="flex flex-col items-center font-visbyBold gap-10 p-5">
                            <a href="#about" onClick={()=>{setNavOpen(!navOpen)}} className="text-electricYellow hover:text-softOpal">About</a>
                            <a href="#team" onClick={()=>{setNavOpen(!navOpen)}} className="text-electricYellow hover:text-softOpal">Team</a>
                            <a href="#contact" onClick={()=>{setNavOpen(!navOpen)}} className="text-electricYellow hover:text-softOpal">Contact</a>

                        </nav>
                    </div>
                )}
        </header>
    )
}