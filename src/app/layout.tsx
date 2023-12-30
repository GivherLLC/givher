import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Givher Political Hospitality',
  description: 'Givher, a dynamic consulting firm based in California, empowers change-makers through political hospitality. Founded by a non-binary, female-presenting person of color, Givher embodies a fresh perspective and a commitment to diversity, equity, and inclusion.',
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
