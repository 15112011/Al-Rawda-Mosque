'use client'

import { useState, useEffect } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import QRCodeComponent from '../components/QRCode'
import { useLanguage } from '../context/LanguageContext'

const companions = [
  {
    id: 1,
    name: 'Abu Bakr',
    arabic: 'أبو بكر الصديق',
    title: 'The Truthful',
    titleAr: 'الصديق',
    description: 'The first Caliph and closest companion of Prophet Muhammad (peace be upon him).',
    descriptionAr: 'الخليفة الأول وأقرب صحابي للنبي محمد (صلى الله عليه وسلم).',
    achievements: {
      en: [
        'First Caliph of Islam',
        'Led the Muslim community after Prophet Muhammad',
        'Compiled the Quran into a single book',
        'Known for his unwavering faith and loyalty'
      ],
      ar: [
        'أول خليفة في الإسلام',
        'قاد المجتمع المسلم بعد النبي محمد',
        'جمع القرآن في كتاب واحد',
        'معروف بإيمانه وولائه الثابت'
      ]
    },
    virtues: {
      en: [
        'Extreme generosity',
        'Deep knowledge of Islam',
        'Exceptional leadership',
        'Unwavering faith'
      ],
      ar: [
        'الكرم الشديد',
        'المعرفة العميقة بالإسلام',
        'القيادة الاستثنائية',
        'الإيمان الثابت'
      ]
    }
  },
  {
    id: 2,
    name: 'Umar ibn Al-Khattab',
    arabic: 'عمر بن الخطاب',
    title: 'The Just',
    titleAr: 'الفاروق',
    description: 'The second Caliph known for his justice and strong leadership.',
    descriptionAr: 'الخليفة الثاني المعروف بعدله وقيادته القوية.',
    achievements: {
      en: [
        'Second Caliph of Islam',
        'Expanded Islamic territories',
        'Established the Islamic calendar',
        'Created the first Islamic treasury'
      ],
      ar: [
        'ثاني خليفة في الإسلام',
        'وسع الأراضي الإسلامية',
        'أسس التقويم الهجري',
        'أنشأ أول بيت مال للمسلمين'
      ]
    },
    virtues: {
      en: [
        'Justice and fairness',
        'Strong leadership',
        'Deep wisdom',
        'Fear of Allah'
      ],
      ar: [
        'العدل والإنصاف',
        'القيادة القوية',
        'الحكمة العميقة',
        'الخوف من الله'
      ]
    }
  },
  {
    id: 3,
    name: 'Uthman ibn Affan',
    arabic: 'عثمان بن عفان',
    title: 'The Possessor of Two Lights',
    titleAr: 'ذو النورين',
    description: 'The third Caliph known for his generosity and compilation of the Quran.',
    descriptionAr: 'الخليفة الثالث المعروف بكرمه وجمعه للقرآن.',
    achievements: {
      en: [
        'Third Caliph of Islam',
        'Standardized the Quran',
        'Expanded the Prophet\'s Mosque',
        'Known for his generosity'
      ],
      ar: [
        'ثالث خليفة في الإسلام',
        'وحد نسخ القرآن',
        'وسع المسجد النبوي',
        'معروف بكرمه'
      ]
    },
    virtues: {
      en: [
        'Extreme generosity',
        'Modesty and humility',
        'Strong faith',
        'Love for the Quran'
      ],
      ar: [
        'الكرم الشديد',
        'التواضع',
        'الإيمان القوي',
        'حب القرآن'
      ]
    }
  },
  {
    id: 4,
    name: 'Ali ibn Abi Talib',
    arabic: 'علي بن أبي طالب',
    title: 'The Lion of Allah',
    titleAr: 'أسد الله',
    description: 'The fourth Caliph and cousin of Prophet Muhammad (peace be upon him).',
    descriptionAr: 'الخليفة الرابع وابن عم النبي محمد (صلى الله عليه وسلم).',
    achievements: {
      en: [
        'Fourth Caliph of Islam',
        'First male to accept Islam',
        'Known for his bravery in battle',
        'Famous for his wisdom and knowledge'
      ],
      ar: [
        'رابع خليفة في الإسلام',
        'أول ذكر يعتنق الإسلام',
        'معروف بشجاعته في المعارك',
        'مشهور بحكمته ومعرفته'
      ]
    },
    virtues: {
      en: [
        'Bravery and courage',
        'Deep knowledge',
        'Justice and fairness',
        'Strong faith'
      ],
      ar: [
        'الشجاعة والجرأة',
        'المعرفة العميقة',
        'العدل والإنصاف',
        'الإيمان القوي'
      ]
    }
  },
  {
    id: 5,
    name: 'Talha ibn Ubaydullah',
    arabic: 'طلحة بن عبيد الله',
    title: 'The Generous',
    titleAr: 'الكريم',
    description: 'Known for his generosity and bravery in battle.',
    descriptionAr: 'معروف بكرمه وشجاعته في المعارك.',
    achievements: {
      en: [
        'One of the first converts to Islam',
        'Participated in all major battles',
        'Known for his generosity',
        'Protected Prophet Muhammad in battle'
      ],
      ar: [
        'أحد أوائل المسلمين',
        'شارك في جميع المعارك الكبرى',
        'معروف بكرمه',
        'حمى النبي محمد في المعارك'
      ]
    },
    virtues: {
      en: [
        'Generosity',
        'Bravery',
        'Loyalty',
        'Strong faith'
      ],
      ar: [
        'الكرم',
        'الشجاعة',
        'الولاء',
        'الإيمان القوي'
      ]
    }
  },
  {
    id: 6,
    name: 'Zubayr ibn Al-Awwam',
    arabic: 'الزبير بن العوام',
    title: 'The Disciple',
    titleAr: 'الحواري',
    description: 'Known for his bravery and loyalty to Islam.',
    descriptionAr: 'معروف بشجاعته وولائه للإسلام.',
    achievements: {
      en: [
        'One of the first converts to Islam',
        'Participated in all major battles',
        'Known for his bravery',
        'Strong supporter of the Prophet'
      ],
      ar: [
        'أحد أوائل المسلمين',
        'شارك في جميع المعارك الكبرى',
        'معروف بشجاعته',
        'داعم قوي للنبي'
      ]
    },
    virtues: {
      en: [
        'Bravery',
        'Loyalty',
        'Strong faith',
        'Generosity'
      ],
      ar: [
        'الشجاعة',
        'الولاء',
        'الإيمان القوي',
        'الكرم'
      ]
    }
  },
  {
    id: 7,
    name: 'Abdur-Rahman ibn Awf',
    arabic: 'عبد الرحمن بن عوف',
    title: 'The Wealthy',
    titleAr: 'الغني',
    description: 'Known for his wealth and generosity in the cause of Allah.',
    descriptionAr: 'معروف بثروته وكرمه في سبيل الله.',
    achievements: {
      en: [
        'One of the first converts to Islam',
        'Known for his business acumen',
        'Extremely generous with his wealth',
        'Participated in all major battles'
      ],
      ar: [
        'أحد أوائل المسلمين',
        'معروف بمهاراته التجارية',
        'كريم جداً بثروته',
        'شارك في جميع المعارك الكبرى'
      ]
    },
    virtues: {
      en: [
        'Generosity',
        'Business acumen',
        'Strong faith',
        'Loyalty'
      ],
      ar: [
        'الكرم',
        'الحنكة التجارية',
        'الإيمان القوي',
        'الولاء'
      ]
    }
  },
  {
    id: 8,
    name: 'Sa\'d ibn Abi Waqqas',
    arabic: 'سعد بن أبي وقاص',
    title: 'The Lion',
    titleAr: 'الأسد',
    description: 'Known for his bravery and archery skills.',
    descriptionAr: 'معروف بشجاعته ومهاراته في الرماية.',
    achievements: {
      en: [
        'One of the first converts to Islam',
        'Excellent archer',
        'Led Muslim armies to victory',
        'Participated in all major battles'
      ],
      ar: [
        'أحد أوائل المسلمين',
        'رامٍ ممتاز',
        'قاد الجيوش الإسلامية للنصر',
        'شارك في جميع المعارك الكبرى'
      ]
    },
    virtues: {
      en: [
        'Bravery',
        'Archery skills',
        'Leadership',
        'Strong faith'
      ],
      ar: [
        'الشجاعة',
        'مهارات الرماية',
        'القيادة',
        'الإيمان القوي'
      ]
    }
  },
  {
    id: 9,
    name: 'Said ibn Zayd',
    arabic: 'سعيد بن زيد',
    title: 'The Righteous',
    titleAr: 'الصالح',
    description: 'Known for his righteousness and early conversion to Islam.',
    descriptionAr: 'معروف بصلاحه واعتناقه المبكر للإسلام.',
    achievements: {
      en: [
        'One of the first converts to Islam',
        'Participated in all major battles',
        'Known for his righteousness',
        'Strong supporter of the Prophet'
      ],
      ar: [
        'أحد أوائل المسلمين',
        'شارك في جميع المعارك الكبرى',
        'معروف بصلاحه',
        'داعم قوي للنبي'
      ]
    },
    virtues: {
      en: [
        'Righteousness',
        'Strong faith',
        'Loyalty',
        'Bravery'
      ],
      ar: [
        'الصلاح',
        'الإيمان القوي',
        'الولاء',
        'الشجاعة'
      ]
    }
  },
  {
    id: 10,
    name: 'Abu Ubaydah ibn Al-Jarrah',
    arabic: 'أبو عبيدة بن الجراح',
    title: 'The Trustworthy',
    titleAr: 'الأمين',
    description: 'Known for his trustworthiness and leadership.',
    descriptionAr: 'معروف بأمانته وقيادته.',
    achievements: {
      en: [
        'One of the first converts to Islam',
        'Led Muslim armies to victory',
        'Known for his trustworthiness',
        'Participated in all major battles'
      ],
      ar: [
        'أحد أوائل المسلمين',
        'قاد الجيوش الإسلامية للنصر',
        'معروف بأمانته',
        'شارك في جميع المعارك الكبرى'
      ]
    },
    virtues: {
      en: [
        'Trustworthiness',
        'Leadership',
        'Strong faith',
        'Bravery'
      ],
      ar: [
        'الأمانة',
        'القيادة',
        'الإيمان القوي',
        'الشجاعة'
      ]
    }
  }
]

export default function CompanionsPage() {
  const [selectedCompanion, setSelectedCompanion] = useState(companions[0])
  const [currentUrl, setCurrentUrl] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const { language, t } = useLanguage()
  const isRTL = language === 'ar'

  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])

  const filteredCompanions = companions.filter(companion => 
    companion.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    companion.arabic.includes(searchTerm) ||
    companion.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? 'font-[\'Amiri\']' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8 flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl mb-4 font-['Cormorant_Garamond']">
            {t('companions')}
          </h1>
          <div className="arabic-calligraphy mb-8 text-3xl">
            {language === 'en' ? 'العشرة المبشرون بالجنة' : 'The Ten Promised Paradise'}
          </div>
        </div>

        {/* Mobile Dropdown Selector - Only visible on small screens */}
        <div className="md:hidden mb-8">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-semibold mb-4 text-center">
              {t('companions')}
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
              value={selectedCompanion.id}
              onChange={(e) => {
                const selected = companions.find(c => c.id === parseInt(e.target.value));
                if (selected) setSelectedCompanion(selected);
              }}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b4332] bg-[#f5f5dc]"
            >
              {filteredCompanions.map((companion) => (
                <option key={companion.id} value={companion.id}>
                  {language === 'en' ? companion.name : companion.arabic} - {language === 'en' ? companion.title : companion.titleAr}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Companions List - Hidden on mobile */}
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
                  {t('companions')}
                </h2>
                <div className="space-y-2 max-h-[70vh] overflow-y-auto">
                  {filteredCompanions.map((companion) => (
                    <button
                      key={companion.id}
                      onClick={() => setSelectedCompanion(companion)}
                      className={`w-full text-right p-4 rounded-lg transition-all ${
                        selectedCompanion.id === companion.id
                          ? 'bg-[#1b4332] text-[#f5f5dc]'
                          : 'bg-[#f5f5dc] hover:bg-[#1b4332] hover:text-[#f5f5dc]'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-['Amiri']">{companion.arabic}</span>
                        <span className="text-lg">{companion.name}</span>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm opacity-80">{language === 'en' ? companion.title : companion.titleAr}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Selected Companion Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-['Cormorant_Garamond'] mb-4">
                  {selectedCompanion.name}
                </h2>
                <p className="text-3xl font-['Amiri'] mb-6">
                  {selectedCompanion.arabic}
                </p>
                <div className="text-xl text-[#1b4332] font-semibold">
                  {language === 'en' ? selectedCompanion.title : selectedCompanion.titleAr}
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-[#f5f5dc] p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4">
                    {t('description')}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {language === 'en' ? selectedCompanion.description : selectedCompanion.descriptionAr}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#f5f5dc] p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-4">
                      {t('achievements')}
                    </h3>
                    <ul className="list-disc list-inside space-y-3">
                      {selectedCompanion.achievements[language].map((achievement, index) => (
                        <li key={index} className="text-gray-700 text-lg">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#f5f5dc] p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-4" data-component-name="CompanionsPage">
                      {t('virtues')}
                    </h3>
                    <ul className="list-disc list-inside space-y-3">
                      {selectedCompanion.virtues[language].map((virtue, index) => (
                        <li key={index} className="text-gray-700 text-lg">
                          {virtue}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex justify-center mt-8">
                  <div className="text-center">
                    <QRCodeComponent
                      url={`${currentUrl}?companion=${selectedCompanion.id}`}
                      size={150}
                    />
                    <p className="mt-2 text-gray-600">{t('share')}</p>
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