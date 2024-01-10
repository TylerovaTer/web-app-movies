import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { bodyFont } from '@/components/typography'
import { MainLayout } from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Film List Web-app',
  description: 'List of Star Wars movies with descriptions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={bodyFont.className}>
      <body className={inter.className}>
        <MainLayout>
          {children}
        </MainLayout>
        </body>
    </html>
  )
}
