import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
