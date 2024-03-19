'use client'

import React, {useEffect} from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  useEffect(() => {
    function toggleDarkMode() {
      const now = new Date();
      const hour = now.getHours();
      const isNightTime = hour < 6 || hour >= 18; // Assume night time between 6pm and 6am

      if (isNightTime) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    toggleDarkMode(); // Call toggleDarkMode() when the component mounts

    // Optionally, call toggleDarkMode() periodically to update dark mode based on the time
    const intervalId = setInterval(toggleDarkMode, 60000); // Update every minute

    return () => {
      clearInterval(intervalId); // Clear interval when component unmounts
    };
  }, []);

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="favicon.ico" />
        <title>Givher Political Hospitality</title>
        <meta name='description' content='Givher LLC is a dynamic and forward-thinking company specializing in fundraising, event development, and political hospitality.'/>
        <meta property='og:title' content='Givher'/>
        <meta property='og:description' content="Givher LLC is a dynamic and forward-thinking company specializing in fundraising, event development, and political hospitality."/>
        <meta property='og:image' content="https://www.givher.com/images/preview-link-image.png"/>
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property='og:url' content='https://www.givher.com/'/>
        <meta property="og:type" content="website" />
        <meta name="keywords" content="Alina Hernandez, Givher, Political Hospitality, Consultant"></meta>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}