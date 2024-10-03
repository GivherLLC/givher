import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import getFooterData from '../../lib/getFooterData';

export interface FooterData {
  footerLogo: string;
  darkModeLogoSrc: string;
  iconLinks: IconLink[];
  buttonTitle: string;
  buttonText: string;
  buttonLink: string;
  pageLinks: PageLink[];
}

export interface IconLink {
  iconImageSrc: string;
  darkmodeSrc: string;
  imageAlt: string;
  iconLink: string;
}

export interface PageLink {
  linkText: string;
  link: string;
  external: boolean;
}


const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata() {
  const dev = process.env.NODE_ENV !== 'production';
  const server = dev ? 'http://localhost:3000' : 'https://givher.com';

  return {
    metadataBase: server,
    }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const footerData = getFooterData();
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col justify-between min-h-screen bg-softOpal dark:bg-navySmoke">
          <Navbar />
          <main className="h-full min-h-[calc(100vh-408px)] flex flex-col flex-grow bg-white dark:bg-navySmoke">
          {children}
          </main>
          <Footer data={footerData}/>
        </div>
      </body>
    </html>
  )
}