'use client'

import { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import QRCodeComponent from '../components/QRCode'
import { useLanguage } from '../context/LanguageContext'

const surahs = [
  {
    id: 1,
    name: 'Al-Fatiha',
    arabic: 'الفاتحة',
    english: 'The Opening',
    verses: 7,
    type: 'Meccan',
    description: 'The opening chapter of the Quran, recited in every prayer.',
    descriptionAr: 'الفصل الافتتاحي للقرآن، يُتلى في كل صلاة.',
    keyPoints: {
      en: [
        'Praise of Allah',
        'Seeking guidance',
        'The straight path'
      ],
      ar: [
        'الثناء على الله',
        'طلب الهداية',
        'الصراط المستقيم'
      ]
    },
    themes: {
      en: [
        'Tawheed (Oneness of Allah)',
        'Guidance',
        'Worship'
      ],
      ar: [
        'التوحيد',
        'الهداية',
        'العبادة'
      ]
    }
  },
  {
    id: 2,
    name: 'Al-Baqarah',
    arabic: 'البقرة',
    english: 'The Cow',
    verses: 286,
    type: 'Medinan',
    description: 'The longest chapter of the Quran, containing various laws and stories.',
    descriptionAr: 'أطول سورة في القرآن، تحتوي على قوانين وقصص متنوعة.',
    keyPoints: {
      en: [
        'The story of the cow',
        'Laws and regulations',
        'The story of Adam and Iblis'
      ],
      ar: [
        'قصة البقرة',
        'الأحكام والتشريعات',
        'قصة آدم وإبليس'
      ]
    },
    themes: {
      en: [
        'Faith',
        'Law',
        'History'
      ],
      ar: [
        'الإيمان',
        'الشريعة',
        'التاريخ'
      ]
    }
  },
  {
    id: 3,
    name: 'Al-Imran',
    arabic: 'آل عمران',
    english: 'The Family of Imran',
    verses: 200,
    type: 'Medinan',
    description: 'Discusses the family of Imran and the story of Maryam.',
    descriptionAr: 'تناقش عائلة عمران وقصة مريم.',
    keyPoints: {
      en: [
        'The family of Imran',
        'The story of Maryam',
        'The birth of Isa'
      ],
      ar: [
        'عائلة عمران',
        'قصة مريم',
        'ولادة عيسى'
      ]
    },
    themes: {
      en: [
        'Faith',
        'Prophets',
        'Divine signs'
      ],
      ar: [
        'الإيمان',
        'الأنبياء',
        'الآيات الإلهية'
      ]
    }
  },
  {
    id: 4,
    name: 'An-Nisa',
    arabic: 'النساء',
    english: 'The Women',
    verses: 176,
    type: 'Medinan',
    description: 'Contains many laws regarding women and family matters.',
    descriptionAr: 'تحتوي على العديد من القوانين المتعلقة بالنساء وشؤون الأسرة.',
    keyPoints: {
      en: [
        'Women\'s rights',
        'Family laws',
        'Inheritance'
      ],
      ar: [
        'حقوق المرأة',
        'قوانين الأسرة',
        'الميراث'
      ]
    },
    themes: {
      en: [
        'Social justice',
        'Family',
        'Rights'
      ],
      ar: [
        'العدالة الاجتماعية',
        'الأسرة',
        'الحقوق'
      ]
    }
  },
  {
    id: 5,
    name: 'Al-Ma\'idah',
    arabic: 'المائدة',
    english: 'The Table Spread',
    verses: 120,
    type: 'Medinan',
    description: 'Discusses food laws and the story of the table spread.',
    descriptionAr: 'تناقش قوانين الطعام وقصة المائدة.',
    keyPoints: {
      en: [
        'Food laws',
        'The story of the table spread',
        'Covenants and agreements'
      ],
      ar: [
        'أحكام الطعام',
        'قصة المائدة',
        'العهود والاتفاقيات'
      ]
    },
    themes: {
      en: [
        'Law',
        'Covenant',
        'Faith'
      ],
      ar: [
        'الشريعة',
        'العهد',
        'الإيمان'
      ]
    }
  }
]

export default function QuranPage() {
  const [selectedSurah, setSelectedSurah] = useState(surahs[0])
  const [searchTerm, setSearchTerm] = useState('')
  const { language, t } = useLanguage()
  const isRTL = language === 'ar'

  const filteredSurahs = surahs.filter(surah => 
    surah.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    surah.arabic.includes(searchTerm) ||
    surah.english.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? 'font-[\'Amiri\']' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8 flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl mb-4 font-['Cormorant_Garamond']">
            {t('holyQuran')}
          </h1>
          <div className="arabic-calligraphy mb-8 text-3xl">
            {language === 'en' ? 'القرآن الكريم' : 'The Holy Quran'}
          </div>
        </div>

        <div className="md:hidden mb-8">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-semibold mb-4 text-center">
              {t('surahs')}
            </h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder={t('search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
              />
            </div>
            <select
              value={selectedSurah.id}
              onChange={(e) => {
                const selected = surahs.find(s => s.id === parseInt(e.target.value));
                if (selected) setSelectedSurah(selected);
              }}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b4332] bg-[#f5f5dc]"
            >
              {filteredSurahs.map((surah) => (
                <option key={surah.id} value={surah.id}>
                  {language === 'en' ? surah.name : surah.arabic} - {surah.verses} {t('verses')}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="hidden md:block lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder={t('search')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-4 text-center">
                  {t('surahs')}
                </h2>
                <div className="space-y-2 max-h-[70vh] overflow-y-auto">
                  {filteredSurahs.map((surah) => (
                    <button
                      key={surah.id}
                      onClick={() => setSelectedSurah(surah)}
                      className={`w-full text-right p-4 rounded-lg transition-all ${
                        selectedSurah.id === surah.id
                          ? 'bg-[#1b4332] text-[#f5f5dc]'
                          : 'bg-[#f5f5dc] hover:bg-[#1b4332] hover:text-[#f5f5dc]'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-['Amiri']">{surah.arabic}</span>
                        <span className="text-lg">{surah.name}</span>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm opacity-80">{surah.english}</span>
                        <span className="text-sm opacity-80">{surah.verses} {t('verses')}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-['Cormorant_Garamond'] mb-4">
                  {selectedSurah.name}
                </h2>
                <p className="text-3xl font-['Amiri'] mb-6">
                  {selectedSurah.arabic}
                </p>
                <div className="flex justify-center gap-4 text-sm text-gray-600">
                  <span>{selectedSurah.english}</span>
                  <span>•</span>
                  <span>{selectedSurah.verses} {t('verses')}</span>
                  <span>•</span>
                  <span>{t(selectedSurah.type.toLowerCase())}</span>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-[#f5f5dc] p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4">
                    {t('description')}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {language === 'en' ? selectedSurah.description : selectedSurah.descriptionAr}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#f5f5dc] p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-4">
                      {t('keyPoints')}
                    </h3>
                    <ul className="list-disc list-inside space-y-3">
                      {selectedSurah.keyPoints[language].map((point, index) => (
                        <li key={index} className="text-gray-700 text-lg">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#f5f5dc] p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-4">
                      {t('mainThemes')}
                    </h3>
                    <ul className="list-disc list-inside space-y-3">
                      {selectedSurah.themes[language]?.map((theme, index) => (
                        <li key={index} className="text-gray-700 text-lg">
                          {theme}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex justify-center mt-8">
                  <div className="text-center">
                    {/* QRCodeComponent removed as currentUrl state is removed */}
                    {/* <QRCodeComponent
                      url={`${currentUrl}?surah=${selectedSurah.id}`}
                      size={150}
                    /> */}
                    {/* <p className="mt-2 text-gray-600">{t('share')}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 