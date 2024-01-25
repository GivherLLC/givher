'use client'

import React, { useState, useEffect } from "react";
import useScreenSize from '../hooks/useScreenSize';


export default function Navbar({scrollTo}:{scrollTo:(sectionId:string)=>void}){
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
            <div className="flex flex-row justify-between p-3 bg-navySmoke relative">
                <button onClick={()=>{scrollToTop()}}>
                    <img
                        src="../images/GIVHER_Primary_ElectricYellow.png"
                        alt="Givher Logo"
                        width={75}
                        />
                </button>
                <nav className="flex flex-row space-x-8 font-visbyBold items-center">
                    {screenSize.width > 640 ? (
                        <>
                            <button onClick={()=>{scrollTo('about')}} className="text-electricYellow hover:text-softOpal">About</button>
                            <button onClick={()=>{scrollTo('team')}} className="text-electricYellow hover:text-softOpal">Team</button>
                            <button onClick={()=>{scrollTo('contact')}} className="text-electricYellow hover:text-softOpal">Contact</button>
                        </>
                    ):(
                        <button onClick={()=>{setNavOpen(!navOpen)}} className="flex flex-col items-center justify-between w-[22px] h-[20px] p-0">
                            <div className="h-[2px] w-full bg-electricYellow"/>
                            <div className="h-[2px] w-full bg-electricYellow"/>
                            <div className="h-[2px] w-full bg-electricYellow"/>
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