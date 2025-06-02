'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function DonationSection() {
  const [copied, setCopied] = useState(false)
  const vodafoneCashNumber = '+20 102 470 5502' // Updated phone number

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(vodafoneCashNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl mb-4 font-['Cormorant_Garamond']">
            Support Our Mosque
          </h2>
          <div className="flex justify-center mb-4">
            <Image src="/images/novaweb-logo.png" alt="NovaWeb" width={120} height={30} className="mx-auto" />
          </div>
          <div className="arabic-calligraphy mb-8">
            الصدقة تطفئ الخطيئة كما يطفئ الماء النار
          </div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Your generous donations help us maintain and expand our services to the community.
            Every contribution makes a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Vodafone Cash */}
          <div className="card">
            <h3 className="text-2xl mb-4">Vodafone Cash</h3>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xl font-mono">{vodafoneCashNumber}</span>
              <button
                onClick={handleCopyNumber}
                className="btn-primary text-sm"
                aria-label="Copy Vodafone Cash number"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          {/* InstaPay */}
          <div className="card">
            <h3 className="text-2xl mb-4">InstaPay</h3>
            <div className="aspect-square relative max-w-[200px] mx-auto mb-4">
              {/* Replace with actual QR code */}
              <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">QR Code</p>
              </div>
            </div>
            <a
              href="#"
              className="btn-primary block text-center"
              aria-label="Open InstaPay link"
            >
              Open InstaPay
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">
            May Allah reward you for your generosity
          </p>
          <div className="arabic-calligraphy mt-4">
            جزاكم الله خيراً
          </div>
        </div>
      </div>
    </section>
  )
} 