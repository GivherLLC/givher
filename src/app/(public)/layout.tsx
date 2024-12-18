import React from 'react';
import { Inter } from 'next/font/google';
import '../globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import getFooterData from '../../../lib/getFooterData';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://www.givher.com'),
    title: 'Givher Political Hospitality',
    description:
      'Givher is a dynamic and forward-thinking company specializing in fundraising, event development, and political hospitality.',
    images: [
      {
        url: 'https://www.givher.com/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Givher Political Hospitality',
      },
    ],
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
          <Footer data={footerData} />
        </div>
      </body>
    </html>
  );
}
