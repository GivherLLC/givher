'use client'

import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import GlobalLayout from '@/components/GlobalLayout';
import Homepage from '@/components/home/HomepageV2';

export default function Home() { 
  return (
    <>
      <head>
        <Link
              rel="stylesheet"
              href="https://unpkg.com/flickity@2/dist/flickity.min.css"
            />
            <Script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></Script>

      </head>
      <GlobalLayout>
        <Homepage/>
      </GlobalLayout>
    </>

  )
}
