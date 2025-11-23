import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CursorProvider from '@/components/CursorProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Durga Trivedi - Portfolio',
  description: 'Full Stack Developer | Building robust, scalable, and elegant full-stack applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <CursorProvider>
          {children}
        </CursorProvider>
      </body>
    </html>
  )
}

