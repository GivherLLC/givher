import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="favicon.ico" />
        <meta property='og:image' content="https://www.givher.com/images/preview-link-image.png"/>
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="Alina Hernandez, Givher, Political Hospitality, Consultant"></meta>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}