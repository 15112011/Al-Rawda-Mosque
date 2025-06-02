import type { Metadata } from 'next'
import { Cormorant_Garamond, Amiri } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from './context/LanguageContext'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
})

export const metadata: Metadata = {
  title: 'Al-Rawda Mosque',
  description: 'Welcome to Al-Rawda Mosque - A place of worship and community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${amiri.variable} font-sans`}>
        <LanguageProvider>
          <div className="min-h-screen bg-[#f5f5dc]">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
} 