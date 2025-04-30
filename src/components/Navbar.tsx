'use client';

import React, { useState, useEffect, useRef } from 'react';
import useIsMobile from '@/hooks/useIsMobile';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile(1024);
  const firstNavLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (navOpen && !isMobile) {
      setNavOpen(false);
    }
  }, [isMobile, navOpen]);

  useEffect(() => {
    //prevent scrolling behind the nav on mobile
    if (navOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [navOpen]);

  useEffect(() => {
    function toggleDarkMode() {
      const storedDarkMode = localStorage.getItem('darkMode');
      const isNightTime = () => {
        const now = new Date();
        const hour = now.getHours();
        return hour < 6 || hour >= 18; // Assume night time between 6pm and 6am
      };

      if (
        storedDarkMode === 'true' ||
        (storedDarkMode === null && isNightTime())
      ) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    }

    toggleDarkMode(); // Call toggleDarkMode() when the component mounts

    // Optionally, call toggleDarkMode() periodically to update dark mode based on the time
    const intervalId = setInterval(toggleDarkMode, 60000); // Update every minute

    return () => {
      clearInterval(intervalId); // Clear interval when component unmounts
    };
  }, []);

  useEffect(() => {
    setMounted(true); // Set mounted to true after component mounts
  }, []);

  useEffect(() => {
    // Update local storage when dark mode changes
    if (mounted) {
      localStorage.setItem('darkMode', darkMode.toString());
      // Apply or remove 'dark' class from <body> based on darkMode state
      document.body.classList.toggle('dark', darkMode);
    }
  }, [darkMode, mounted]);

  useEffect(() => {
    if (navOpen && firstNavLinkRef.current) {
      firstNavLinkRef.current.focus();
    }
  }, [navOpen]);

  return (
    <header className="sticky top-0 z-40 shadow-lg bg-softOpal dark:bg-navySmoke flex justify-center">
      <div className="max-w-[85.75rem] w-full flex flex-row justify-between py-[1rem] mx-[0.625rem] lg:mx-[1.5625rem] relative">
        <Link
          href="/"
          aria-label="Givher Home"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-mauvelous rounded"
        >
          <Image
            src={'/images/givher-logo-navySmoke.png'}
            alt="Givher Logo"
            width={210}
            height={92}
            className="dark:hidden w-auto h-[50px] image-rendering-crisp-edges"
            priority={true}
          />
          <Image
            src={'/images/givher-logo-electricYellow.png'}
            alt="Dark Mode Givher Logo"
            width={210}
            height={92}
            className="hidden dark:block w-auto h-[50px] image-rendering-crisp-edges"
            priority={true}
          />
        </Link>
        <div
          data-id="dark mode toggle web"
          className="hidden lg:flex justify-center items-center gap-[1rem]"
        >
          <input
            type="checkbox"
            id="dark-mode-web"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="sr-only"
            aria-label="Toggle Dark Mode"
          />
          <label
            htmlFor="dark-mode-web"
            className="relative inline-block w-[60px] h-[34px] cursor-pointer"
          >
            <span className="sr-only">Toggle Dark Mode</span>
            <span
              className={`absolute rounded-[34px] top-0 left-0 right-0 bottom-0 transition before:absolute before:h-[26px] before:w-[26px] before:left-[4px] before:bottom-[4px] before:transition-all before:rounded-[50%] ${
                darkMode
                  ? 'bg-softOpal before:bg-mauvelous before:translate-x-[26px]'
                  : 'bg-grey before:bg-softOpal'
              }`}
            />
          </label>
          <p className="text-black dark:text-softOpal">Dark Mode</p>
        </div>
        <nav className="flex flex-row gap-[1rem] font-medium items-center">
          <ul className="hidden lg:flex justify-center items-center gap-[3rem]">
            <li className="w-[66px] flex justify-center">
              <Link
                href="/clients/"
                className="text-navySmoke dark:text-electricYellow font-visbyBold opacity-85 hover:opacity-100 transition-font duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-mauvelous rounded"
              >
                Clients
              </Link>
            </li>
            <li className="w-[66px] flex justify-center">
              <Link
                href="/events/"
                className="text-navySmoke dark:text-electricYellow font-visbyBold opacity-85 hover:opacity-100 duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-mauvelous rounded"
              >
                Events
              </Link>
            </li>
            <li className="w-[66px] flex justify-center">
              <Link
                href="/gallery/"
                className="text-navySmoke dark:text-electricYellow font-visbyBold opacity-85 hover:opacity-100 duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-mauvelous rounded"
              >
                Gallery
              </Link>
            </li>
            <li className="w-[66px] flex justify-center">
              <Link
                href="/team/"
                className="text-navySmoke dark:text-electricYellow font-visbyBold opacity-85 hover:opacity-100 duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-mauvelous rounded"
              >
                Team
              </Link>
            </li>
            <li className="w-[66px] flex justify-center">
              <Link
                href="/contact/"
                className="text-navySmoke dark:text-electricYellow font-visbyBold opacity-85 hover:opacity-100 duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-mauvelous rounded"
              >
                Contact
              </Link>
            </li>
          </ul>
          <button
            type="button"
            onClick={() => {
              setNavOpen(!navOpen);
            }}
            className="flex lg:hidden relative flex-col items-center justify-between h-[50px] w-[50px] p-0 ml-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-mauvelous rounded"
            aria-label="Open/Close Menu"
            aria-expanded={navOpen}
          >
            <div
              className={`h-[2px] w-full bg-navySmoke dark:bg-electricYellow absolute right-[50%] max-w-[20px] top-[50%] transition-all duration-250 ease-in ${navOpen ? 'transform -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] mt-0' : 'mt-[-5px]'}`}
            />
            <div
              className={`h-[2px] w-full bg-navySmoke dark:bg-electricYellow absolute right-[50%] max-w-[20px] top-[50%] transition-all duration-250 ease-in ${navOpen ? 'opacity-0' : ''}`}
            />
            <div
              className={`h-[2px] w-full bg-navySmoke dark:bg-electricYellow absolute right-[50%] max-w-[20px] top-[50%] transition-all duration-250 ease-in ${navOpen ? 'transform -translate-x-1/2 -translate-y-1/2 rotate-45 mt-[0px]' : 'mt-[5px]'}`}
            />
          </button>
        </nav>
      </div>
      {navOpen && (
        <div className="fixed top-[82px] h-screen w-screen bg-softOpal dark:bg-navySmoke">
          <nav>
            <ul className="flex flex-col items-center font-visbyBold gap-10 px-5 py-10">
              <li>
                <Link
                  href="/clients/"
                  ref={firstNavLinkRef}
                  className="text-center px-3 py-2 text-navySmoke dark:text-electricYellow font-visbyBold hover:text-navySmoke focus:outline-none focus-visible:ring-2 focus-visible:ring-mauvelous rounded"
                  aria-label="Navigate to Clients page"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/events/"
                  className="text-center px-3 py-2 text-navySmoke dark:text-electricYellow font-visbyBold hover:text-navySmoke focus:outline-none focus-visible:ring-2 focus-visible:ring-mauvelous rounded"
                  aria-label="Navigate to Clients page"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery/"
                  className="text-center px-3 py-2 text-navySmoke dark:text-electricYellow font-visbyBold hover:text-navySmoke focus:outline-none focus-visible:ring-2 focus-visible:ring-mauvelous rounded"
                  aria-label="Navigate to Clients page"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/team/"
                  className="text-center px-3 py-2 text-navySmoke dark:text-electricYellow font-visbyBold hover:text-navySmoke focus:outline-none focus-visible:ring-2 focus-visible:ring-mauvelous rounded"
                  aria-label="Navigate to Clients page"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/"
                  className="text-center px-3 py-2 text-navySmoke dark:text-electricYellow font-visbyBold hover:text-navySmoke focus:outline-none focus-visible:ring-2 focus-visible:ring-mauvelous rounded"
                  aria-label="Navigate to Clients page"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div
            data-id="dark mode toggle mobile"
            className="flex justify-center items-center gap-[1rem] mt-[1rem]"
          >
            <input
              type="checkbox"
              id="dark-mode-mobile"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="sr-only"
              aria-label="Toggle Dark Mode"
            />
            <label
              htmlFor="dark-mode-mobile"
              className="relative inline-block w-[60px] h-[34px] cursor-pointer"
            >
              <span className="sr-only">Toggle Dark Mode</span>
              <span
                className={`absolute rounded-[34px] top-0 left-0 right-0 bottom-0 transition before:absolute before:h-[26px] before:w-[26px] before:left-[4px] before:bottom-[4px] before:transition-all before:rounded-[50%] ${
                  darkMode
                    ? 'bg-softOpal before:bg-mauvelous before:translate-x-[26px]'
                    : 'bg-grey before:bg-softOpal'
                }`}
              />
            </label>
            <p className="text-black dark:text-softOpal">Dark Mode</p>
          </div>
        </div>
      )}
    </header>
  );
}
