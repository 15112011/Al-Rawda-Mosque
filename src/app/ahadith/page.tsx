'use client'

import { useState, useEffect } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import QRCodeComponent from '../components/QRCode'

const ahadithCategories = [
  {
    id: 'charity',
    title: 'Charity (الصدقة)',
    arabic: 'الصدقة',
    ahadith: [
      {
        arabic: 'مَثَلُ الْمُنْفِقِ وَالْبَخِيلِ مَثَلُ رَجُلَيْنِ عَلَيْهِمَا جُبَّتَانِ مِنْ حَدِيدٍ مِنْ ثَدْيَيْهِمَا إِلَى تَرَاقِيهِمَا فَأَمَّا الْمُنْفِقُ فَلَا يُنْفِقُ إِلَّا سَبَغَتْ أَوْ وَفَرَتْ عَلَى جِلْدِهِ حَتَّى تُخْفِيَ بَنَانَهُ وَتَعْفُوَ أَثَرَهُ',
        translation: 'The example of those who spend their wealth in the way of Allah is like a seed which grows seven spikes, in each spike is a hundred grains. And Allah multiplies His reward for whom He wills.',
        reference: 'Sahih al-Bukhari 1413',
      },
      {
        arabic: 'الصَّدَقَةُ تَدْفَعُ مِيتَةَ السُّوءِ',
        translation: 'Charity extinguishes the bad death.',
        reference: 'Sunan al-Tirmidhi 664',
      },
    ],
  },
  {
    id: 'knowledge',
    title: 'Knowledge (العلم)',
    arabic: 'العلم',
    ahadith: [
      {
        arabic: 'طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ',
        translation: 'Seeking knowledge is obligatory upon every Muslim.',
        reference: 'Sunan Ibn Majah 224',
      },
      {
        arabic: 'مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ',
        translation: 'Whoever takes a path in search of knowledge, Allah will make easy for him a path to Paradise.',
        reference: 'Sahih Muslim 2699',
      },
    ],
  },
  {
    id: 'manners',
    title: 'Good Manners (الأدب)',
    arabic: 'الأدب',
    ahadith: [
      {
        arabic: 'إِنَّمَا بُعِثْتُ لِأُتَمِّمَ مَكَارِمَ الْأَخْلَاقِ',
        translation: 'I was sent to perfect good character.',
        reference: 'Musnad Ahmad 8729',
      },
      {
        arabic: 'الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ',
        translation: 'A Muslim is one from whose tongue and hand the Muslims are safe.',
        reference: 'Sahih al-Bukhari 10',
      },
    ],
  },
]

export default function AhadithPage() {
  const [selectedCategory, setSelectedCategory] = useState(ahadithCategories[0])
  const [currentUrl, setCurrentUrl] = useState('')

  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f5dc] flex flex-col">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8 flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl mb-4 font-['Cormorant_Garamond']">
            Ahadith Collection
          </h1>
          <div className="arabic-calligraphy mb-8">
            أحاديث النبي صلى الله عليه وسلم
          </div>
        </div>

        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {ahadithCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg transition-colors ${
                selectedCategory.id === category.id
                  ? 'bg-[#1b4332] text-[#f5f5dc]'
                  : 'bg-white text-[#1b4332] hover:bg-[#1b4332] hover:text-[#f5f5dc]'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Selected Category Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Ahadith List */}
          <div className="space-y-6">
            {selectedCategory.ahadith.map((hadith, index) => (
              <div key={index} className="card">
                <div className="arabic-text text-2xl mb-4 text-right">
                  {hadith.arabic}
                </div>
                <p className="text-gray-700 mb-4">{hadith.translation}</p>
                <p className="text-sm text-gray-500">{hadith.reference}</p>
                <div className="mt-4 flex justify-end">
                  <QRCodeComponent
                    url={`${currentUrl}?hadith=${index + 1}`}
                    size={64}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* QR Code Section */}
          <div className="card">
            <h2 className="text-2xl mb-4">Share This Section</h2>
            <div className="flex flex-col items-center">
              <QRCodeComponent
                url={`${currentUrl}?category=${selectedCategory.id}`}
                size={200}
              />
              <p className="text-center text-gray-600 mt-4">
                Scan to share this section
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 