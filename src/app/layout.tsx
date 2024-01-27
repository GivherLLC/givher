'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { HelmetProvider } from 'react-helmet-async'
import { Helmet } from 'react-helmet-async'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <HelmetProvider>
    <html lang="en">
      <Helmet>
        <link rel="icon" href="favicon.ico" />
        <meta name='description' content='Givher LLC is a dynamic and forward-thinking company specializing in fundraising, event development, and political hospitality.'/>
        <meta name="keywords" content="Alina Hernandez, Givher, Political Hospitality, Consultant"></meta>
      </Helmet>
      <body className={inter.className}>{children}</body>
    </html>
    </HelmetProvider>
  )
}
