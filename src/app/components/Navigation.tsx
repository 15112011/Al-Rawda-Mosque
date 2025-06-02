'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useLanguage } from '../context/LanguageContext'

const sections = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'videos',
    path: '/videos',
  },
  {
    name: 'quran',
    path: '/quran',
  },
  {
    name: 'companions',
    path: '/companions',
  },
  {
    name: 'ahadith',
    path: '/ahadith',
  }
]

export default function Navigation() {
  const pathname = usePathname()
  const { language, toggleLanguage, t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isRTL = language === 'ar'

  return (
    <nav className={`bg-[#1b4332] text-[#f5f5dc] py-4 ${isRTL ? 'font-[\'Amiri\']' : ''}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Remove NovaWeb logo image */}
            {/* <Image src="/images/novaweb-logo.png" alt="NovaWeb" width={80} height={20} className="inline-block" /> */}
            <Link href="/" className="text-2xl font-['Cormorant_Garamond']">
              {t('mosqueName')}
            </Link>
          </div>
          
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 rounded-lg bg-[#2d6a4f] hover:bg-[#40916c] transition-colors"
          >
            {language === 'en' ? 'عربي' : 'English'}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <Link
                key={section.path}
                href={section.path}
                className={`flex flex-col items-center hover:text-white transition-colors ${
                  pathname === section.path ? 'text-white' : 'text-[#f5f5dc]'
                }`}
              >
                <span className="text-sm">{t(section.name)}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {sections.map((section) => (
              <Link
                key={section.path}
                href={section.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg hover:bg-[#2d6a4f] transition-colors ${
                  pathname === section.path ? 'bg-[#2d6a4f]' : ''
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>{t(section.name)}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
} 