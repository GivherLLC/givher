import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import { getImagePath } from '@/utils/imagePath'

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
        <meta property='og:title' content='Givher - Political Hospitality'/>
        <meta property='og:description' content="Givher LLC is a dynamic and forward-thinking company specializing in fundraising, event development, and political hospitality."/>
        <meta property='og:image' content="https://leighdahlin.github.io/givher/images/preview-link-image.png"/>
        <meta property='og:url' content='https://www.givher.com'/>
        <meta property="og:type" content="website" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
