import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Hulubanner } from './hulubanner'

import App from './_app'
import Footer from "./footer";
import { AppProps } from "next/app";
import Layout from "./layout";
const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Hulu',
  description: 'Hulu',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
           <body className={inter.className}>
      <main>
        <nav>
        
        </nav>
      </main>
        {children}
      </body>
      
    </html>
  )
}

