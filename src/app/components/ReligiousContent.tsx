'use client'

import { useEffect, useRef } from 'react'

const religiousContent = [
  {
    type: 'quran',
    arabic: 'إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ وَالْعَامِلِينَ عَلَيْهَا وَالْمُؤَلَّفَةِ قُلُوبُهُمْ وَفِي الرِّقَابِ وَالْغَارِمِينَ وَفِي سَبِيلِ اللَّهِ وَابْنِ السَّبِيلِ فَرِيضَةً مِنَ اللَّهِ وَاللَّهُ عَلِيمٌ حَكِيمٌ',
    translation: 'Charities are only for the poor and the needy, and those who collect them, and those whose hearts are to be reconciled, and to free the captives and the debtors, and for the cause of Allah, and for the wayfarer; a duty imposed by Allah. Allah is Knower, Wise.',
    reference: 'Quran 9:60',
  },
  {
    type: 'hadith',
    arabic: 'مَثَلُ الْمُنْفِقِ وَالْبَخِيلِ مَثَلُ رَجُلَيْنِ عَلَيْهِمَا جُبَّتَانِ مِنْ حَدِيدٍ مِنْ ثَدْيَيْهِمَا إِلَى تَرَاقِيهِمَا فَأَمَّا الْمُنْفِقُ فَلَا يُنْفِقُ إِلَّا سَبَغَتْ أَوْ وَفَرَتْ عَلَى جِلْدِهِ حَتَّى تُخْفِيَ بَنَانَهُ وَتَعْفُوَ أَثَرَهُ',
    translation: 'The example of those who spend their wealth in the way of Allah is like a seed which grows seven spikes, in each spike is a hundred grains. And Allah multiplies His reward for whom He wills.',
    reference: 'Sahih al-Bukhari 1413',
  },
  {
    type: 'quran',
    arabic: 'وَمَا تُنْفِقُوا مِنْ خَيْرٍ يُوَفَّ إِلَيْكُمْ وَأَنْتُمْ لَا تُظْلَمُونَ',
    translation: 'And whatever you spend in good, it will be repaid to you in full, and you will not be wronged.',
    reference: 'Quran 2:272',
  },
]

export default function ReligiousContent() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect()
        const scroll = window.scrollY
        if (top < window.innerHeight && top > -sectionRef.current.offsetHeight) {
          sectionRef.current.style.transform = `translateY(${scroll * 0.1}px)`
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-[#f5f5dc] parallax">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl mb-4 font-['Cormorant_Garamond']">
            Words of Wisdom
          </h2>
          <div className="arabic-calligraphy mb-8">
            الحكمة ضالة المؤمن
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {religiousContent.map((content, index) => (
            <div key={index} className="card parallax-content">
              <div className="arabic-text text-2xl mb-4 text-right">
                {content.arabic}
              </div>
              <p className="text-gray-700 mb-4">{content.translation}</p>
              <p className="text-sm text-gray-500">{content.reference}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 