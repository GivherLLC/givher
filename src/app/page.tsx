import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Script from 'next/script';

const GlobalLayout = dynamic(() => import('../components/GlobalLayout'), { ssr: false });
const Homepage = dynamic(() => import('../components/home/HomepageV2'), { ssr: false });

export default function Home() { 
  return (
    <>
      <GlobalLayout>
      <Link
          rel="stylesheet"
          href="https://unpkg.com/flickity@2/dist/flickity.min.css"
        />
        <Script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></Script>
        <Homepage/>
      </GlobalLayout>
    </>

  )
}
