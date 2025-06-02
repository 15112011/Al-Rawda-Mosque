'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import DonationSection from './components/DonationSection'
import ReligiousContent from './components/ReligiousContent'

export default function Home() {
  const [showGenderSelection, setShowGenderSelection] = useState(true)
  const router = useRouter()

  const handleGenderSelection = (gender: 'male' | 'female') => {
    setShowGenderSelection(false)
    router.push(`/videos/${gender}`)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/islamic-pattern.svg')] opacity-10"></div>
        <div className="text-center animate-fade-in relative z-10">
          <h1 className="text-4xl md:text-6xl mb-8 font-['Cormorant_Garamond']">
            Welcome to Al-Rawda Mosque
          </h1>
          <div className="arabic-calligraphy mb-12">
            بسم الله الرحمن الرحيم
          </div>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in supporting our community through your generous donations.
            Every contribution helps us serve better.
          </p>
          {showGenderSelection ? (
            <div className="space-y-4">
              <p className="text-lg">
                Please select your gender to access the appropriate content:
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => handleGenderSelection('male')}
                  className="btn-primary"
                  aria-label="Select male content"
                >
                  Male
                </button>
                <button
                  onClick={() => handleGenderSelection('female')}
                  className="btn-primary"
                  aria-label="Select female content"
                >
                  Female
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-xl">Redirecting...</p>
            </div>
          )}
        </div>
      </section>

      {/* Donation Section */}
      <DonationSection />

      {/* Religious Content Section */}
      <ReligiousContent />
    </div>
  )
} 