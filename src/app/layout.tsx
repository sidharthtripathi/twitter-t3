import type { Metadata } from 'next'
import './globals.css'
import 'animate.css'
import Provider from './Provider'

import { Toaster } from "@/app/components/ui/toaster"



export const metadata: Metadata = {
  title: 'Twitter',
  description: 'Twitter clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className = 'dark'>

      <Provider>
        <body className=' h-screen w-screen  dark:bg-black  dark:text-white'>
          {children}
          
          <Toaster />
        </body>
      </Provider>
    </html>
  )
}
