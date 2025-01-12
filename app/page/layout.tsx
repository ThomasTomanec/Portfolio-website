import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { auth } from "@/auth"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();
  return (
      <body>
      <header className="relative z-20">
        <Navbar/>
      </header>
      <main className="mainSite flex min-h-screen flex-col bg-midnight-black">
          {children}
      </main>
      <footer>
        <Footer/>
      </footer>
      </body>
  )
}
