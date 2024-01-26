import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Givher Political Hospitality',
  description: 'Givher LLC is a dynamic and forward-thinking company specializing in fundraising, event development, and political hospitality.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
