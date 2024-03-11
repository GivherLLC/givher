'use client'

import React, { useState, useEffect } from "react";
import useScreenSize from '../hooks/useScreenSize';
import Link from "next/link";

export default function Navbar(){
    const screenSize = useScreenSize();
    const [navOpen, setNavOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

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
                    {screenSize.width > 640 ? (
                        <ul className="flex justify-center items-center gap-[1rem]">
                            <li><button className="text:softOpal dark:text-electricYellow hover:font-bold w-[64px] transition ease-in-out">About</button></li>
                            <li><button className="text:softOpal dark:text-electricYellow hover:font-bold w-[64px] transition ease-in-out">Team</button></li>
                            <li><button className="text:softOpal dark:text-electricYellow hover:font-bold w-[64px] transition ease-in-out">Contact</button></li>
                        </ul>
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