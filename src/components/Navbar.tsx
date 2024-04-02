'use client'

import React, { useState, useEffect } from "react";
import { getAssetPath } from "@/utils/assetPath";
import useIsMobile from "@/hooks/useIsMobile";
import Link from "next/link";

export default function Navbar(){
    const [navOpen, setNavOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);
    const isMobile = useIsMobile(768);

    const scrollToTop = () => {
        const topElement = document.body;
        topElement.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        if (navOpen && !isMobile) {
          setNavOpen(false);
        }
      }, [isMobile, navOpen]);
    

    useEffect(()=>{
        //prevent scrolling behind the nav on mobile
        if(navOpen){
            document.body.style.overflow = 'hidden';
        }
        return ()=>{
            document.body.style.overflow = 'unset';
        }
    },[navOpen])

    useEffect(() => {
        setMounted(true); // Set mounted to true after component mounts
      }, []);

    useEffect(() => {
        // Check local storage for user preference
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
      }, []);
    
      useEffect(() => {
        // Update local storage when dark mode changes
        if (mounted) {
          localStorage.setItem('darkMode', darkMode.toString());
          // Apply or remove 'dark' class from <body> based on darkMode state
          document.body.classList.toggle('dark', darkMode);
        }
      }, [darkMode, mounted]);

    return (
        <header className="sticky top-0 z-40 shadow-lg bg-softOpal dark:bg-navySmoke flex justify-center">
            <div className="max-w-[85.75rem] w-full flex flex-row justify-between py-[1rem] mx-[0.625rem] lg:mx-[1.5625rem] relative">
                <button onClick={()=>{scrollToTop()}}>
                    <Link href="/">
                    <img
                        src={getAssetPath("/images/GIVHER_Primary_NavySmoke.png")}
                        alt="Givher Logo"
                        width={75}
                        height={35}
                        className="dark:hidden"
                        />
                    <img
                        src={getAssetPath("/images/GIVHER_Primary_ElectricYellow.png")}
                        alt="Givher Logo"
                        width={75}
                        height={35}
                        className="hidden dark:block"
                        />
                    </Link>    
                </button>
                <div
                    data-id="dark mode toggle"
                    className="flex justify-center items-center gap-[1rem]"
                >

                    <label
                    id="switch"
                    className="relative inline-block w-[60px] h-[34px]"
                    >
                    <input
                        type="checkbox"
                        onChange={() => {
                        setDarkMode(!darkMode);
                        }}
                        className="h-[0px] w-[0px]"
                    />
                    <span
                        id="slider round"
                        className={`absolute cursor-pointer rounded-[34px] top-0 left-0 right-0 bottom-0 transition before:absolute before:h-[26px] before:w-[26px] before:left-[4px] before:bottom-[4px] before:transition-all before:rounded-[50%] ${
                        darkMode
                            ? 'bg-softOpal before:bg-mauvelous before:translate-x-[26px]'
                            : 'bg-grey before:bg-softOpal'
                        }`}
                    ></span>
                    
                    </label>
                    <p className="text-black dark:text-mauvelous">Dark Mode</p>
                </div>
                <nav className="flex flex-row gap-[1rem] font-medium items-center">
                    <ul className="hidden sm:flex justify-center items-center gap-[3rem]">
                        <li className="w-[66px] flex justify-center"><Link href="/clients/" className="text-navySmoke dark:text-electricYellow hover:font-bold transition-font duration-200 ease-in-out">Clients</Link></li>
                        <li className="w-[66px] flex justify-center"><Link href="/events/" className="text-navySmoke dark:text-electricYellow hover:font-bold transition-font duration-200 ease-in-out">Events</Link></li>
                        <li className="w-[66px] flex justify-center"><Link href="/team/" className="text-navySmoke dark:text-electricYellow hover:font-bold transition-font duration-200 ease-in-out">Team</Link></li>
                        <li className="w-[66px] flex justify-center"><Link href="/contact/" className="text-navySmoke dark:text-electricYellow hover:font-bold transition-font duration-200 ease-in-out">Contact</Link></li>
                    </ul>
                    <button type="button" onClick={()=>{setNavOpen(!navOpen)}} className="flex sm:hidden relative flex-col items-center justify-between h-[50px] w-[50px] p-0 ml-auto" aria-label="Open/Close Menu">
                        <div className={`h-[2px] w-full bg-navySmoke dark:bg-electricYellow absolute right-[50%] max-w-[20px] top-[50%] transition-all duration-250 ease-in ${navOpen ? "transform -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] mt-0":"mt-[-5px]"}`}/>
                        <div className={`h-[2px] w-full bg-navySmoke dark:bg-electricYellow absolute right-[50%] max-w-[20px] top-[50%] transition-all duration-250 ease-in ${navOpen ? "opacity-0":""}`}/>
                        <div className={`h-[2px] w-full bg-navySmoke dark:bg-electricYellow absolute right-[50%] max-w-[20px] top-[50%] transition-all duration-250 ease-in ${navOpen ? "transform -translate-x-1/2 -translate-y-1/2 rotate-45 mt-[0px]":"mt-[5px]"}`}/>
                    </button>
                </nav>
            </div>
            {navOpen && (
                    <div className="fixed top-[58px] h-screen w-screen bg-softOpal dark:bg-navySmoke">
                        <nav className="flex flex-col items-center font-visbyBold gap-10 px-5 py-10">
                            <Link href="/clients/" onClick={()=>{setNavOpen(!navOpen)}} className="text-navySmoke dark:text-electricYellow hover:text-navySmoke">Clients</Link>
                            <Link href="/events/" onClick={()=>{setNavOpen(!navOpen)}} className="text-navySmoke dark:text-electricYellow hover:text-navySmoke">Events</Link>
                            <Link href="/team/" onClick={()=>{setNavOpen(!navOpen)}} className="text-navySmoke dark:text-electricYellow hover:text-navySmoke">Team</Link>
                            <Link href="/contact/" onClick={()=>{setNavOpen(!navOpen)}} className="text-navySmoke dark:text-electricYellow hover:text-navySmoke">Contact</Link>
                        </nav>
                    </div>
                )}
        </header>
    )
}