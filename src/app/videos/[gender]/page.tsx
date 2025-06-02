'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '../../context/LanguageContext'

// Sample video data
const videoData = {
  men: [
    {
      id: 1,
      title: 'Friday Sermon: The Importance of Prayer',
      titleAr: 'خطبة الجمعة: أهمية الصلاة',
      thumbnail: 'https://placehold.co/600x400/1b4332/f5f5dc?text=Friday+Sermon',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: '2025-05-30',
      description: 'Sheikh Abdullah discusses the importance of prayer in Islam and its benefits for the soul.',
      descriptionAr: 'يناقش الشيخ عبد الله أهمية الصلاة في الإسلام وفوائدها للروح.'
    },
    {
      id: 2,
      title: 'Ramadan Preparation Guide',
      titleAr: 'دليل الاستعداد لشهر رمضان',
      thumbnail: 'https://placehold.co/600x400/1b4332/f5f5dc?text=Ramadan+Guide',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: '2025-05-15',
      description: 'Learn how to prepare spiritually and physically for the blessed month of Ramadan.',
      descriptionAr: 'تعلم كيفية الاستعداد روحياً وجسدياً لشهر رمضان المبارك.'
    },
    {
      id: 3,
      title: 'Understanding Tawheed',
      titleAr: 'فهم التوحيد',
      thumbnail: 'https://placehold.co/600x400/1b4332/f5f5dc?text=Tawheed',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: '2025-05-01',
      description: 'An in-depth explanation of the concept of Tawheed (Oneness of Allah) in Islam.',
      descriptionAr: 'شرح متعمق لمفهوم التوحيد (وحدانية الله) في الإسلام.'
    }
  ],
  women: [
    {
      id: 1,
      title: 'Sisters\' Circle: Raising Muslim Children',
      titleAr: 'حلقة الأخوات: تربية الأطفال المسلمين',
      thumbnail: 'https://placehold.co/600x400/1b4332/f5f5dc?text=Sisters+Circle',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: '2025-05-28',
      description: 'Sister Aisha shares practical advice on raising children with Islamic values in the modern world.',
      descriptionAr: 'تشارك الأخت عائشة نصائح عملية حول تربية الأطفال بالقيم الإسلامية في العالم الحديث.'
    },
    {
      id: 2,
      title: 'Quranic Reflections for Women',
      titleAr: 'تأملات قرآنية للنساء',
      thumbnail: 'https://placehold.co/600x400/1b4332/f5f5dc?text=Quranic+Reflections',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: '2025-05-14',
      description: 'Weekly Quran study focusing on verses particularly relevant to women\'s spiritual growth.',
      descriptionAr: 'دراسة أسبوعية للقرآن تركز على الآيات ذات الصلة بشكل خاص بالنمو الروحي للمرأة.'
    },
    {
      id: 3,
      title: 'Women of Paradise',
      titleAr: 'نساء الجنة',
      thumbnail: 'https://placehold.co/600x400/1b4332/f5f5dc?text=Women+of+Paradise',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: '2025-04-30',
      description: 'Stories of the great women mentioned in the Quran and Sunnah who were promised Paradise.',
      descriptionAr: 'قصص النساء العظيمات المذكورات في القرآن والسنة اللواتي وعدن بالجنة.'
    }
  ]
}

export default function VideoGenderPage() {
  const params = useParams()
  const gender = params.gender as string
  const { language, t } = useLanguage()
  const [activeVideo, setActiveVideo] = useState<number | null>(null)
  
  const isRTL = language === 'ar'
  const videos = videoData[gender as keyof typeof videoData] || []
  
  // Reset active video when gender changes
  useEffect(() => {
    setActiveVideo(null)
  }, [gender])
  
  const handleVideoClick = (videoId: number) => {
    setActiveVideo(videoId)
  }
  
  const getOtherGender = () => gender === 'men' ? 'women' : 'men'
  
  if (!videos.length) {
    return (
      <div className="text-center py-12">
        <p className="text-xl">No videos found for this section.</p>
      </div>
    )
  }
  
  return (
    <div className={`container mx-auto px-4 py-8 ${isRTL ? 'font-[\'Amiri\'] text-right' : ''}`}>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          {gender === 'men' ? 
            (language === 'en' ? 'Men\'s Lectures' : 'دروس الرجال') : 
            (language === 'en' ? 'Women\'s Lectures' : 'دروس النساء')
          }
        </h1>
        <div className="flex justify-center mb-4">
          <Image src="/images/novaweb-logo.png" alt="NovaWeb" width={100} height={25} className="mx-auto" />
        </div>
        <Link 
          href={`/videos/${getOtherGender()}`}
          className="px-4 py-2 bg-[#1b4332] text-[#f5f5dc] rounded-lg hover:bg-[#2d6a4f] transition-colors"
        >
          {gender === 'men' ? 
            (language === 'en' ? 'Women\'s Section' : 'قسم النساء') : 
            (language === 'en' ? 'Men\'s Section' : 'قسم الرجال')
          }
        </Link>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {activeVideo ? (
          <div className="md:col-span-3">
            <div className="aspect-video w-full mb-4">
              <iframe 
                src={videos.find(v => v.id === activeVideo)?.embedUrl} 
                className="w-full h-full rounded-lg"
                title="Video Player"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                {language === 'en' 
                  ? videos.find(v => v.id === activeVideo)?.title
                  : videos.find(v => v.id === activeVideo)?.titleAr
                }
              </h2>
              <p className="text-gray-700">
                {language === 'en'
                  ? videos.find(v => v.id === activeVideo)?.description
                  : videos.find(v => v.id === activeVideo)?.descriptionAr
                }
              </p>
            </div>
            <button
              onClick={() => setActiveVideo(null)}
              className="px-4 py-2 bg-[#1b4332] text-[#f5f5dc] rounded-lg hover:bg-[#2d6a4f] transition-colors"
            >
              {language === 'en' ? 'Back to Videos' : 'العودة إلى الفيديوهات'}
            </button>
          </div>
        ) : (
          videos.map(video => (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="aspect-video relative cursor-pointer"
                onClick={() => handleVideoClick(video.id)}
              >
                <Image 
                  src={video.thumbnail} 
                  alt={language === 'en' ? video.title : video.titleAr}
                  fill
                  style={{objectFit: 'cover'}}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#1b4332]/80 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f5f5dc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">
                  {language === 'en' ? video.title : video.titleAr}
                </h3>
                <p className="text-gray-500 mb-2">{video.date}</p>
                <button
                  onClick={() => handleVideoClick(video.id)}
                  className="w-full px-4 py-2 bg-[#1b4332] text-[#f5f5dc] rounded-lg hover:bg-[#2d6a4f] transition-colors"
                >
                  {language === 'en' ? 'Watch Now' : 'شاهد الآن'}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
