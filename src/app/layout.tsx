import type { Metadata } from 'next'
import './globals.css'
import 'animate.css'
import Provider from './Provider'


export const metadata: Metadata = {
  title: 'Reddit',
  description: 'Reddit clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <Provider>
        <body>

          {children}
        </body>
      </Provider>
    </html>
  )
}
