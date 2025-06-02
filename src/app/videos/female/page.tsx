'use client'

import { useState, useEffect } from 'react'
import Footer from '@/app/components/Footer'
import QRCodeComponent from '@/app/components/QRCode'
import { useLanguage } from '@/app/context/LanguageContext'
import Navigation from '@/app/components/Navigation'

export default function FemaleVideosPage() {
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';

  const femaleVideoUrls = [
    'https://facebook.com/watch/?v=1694714930822217',
    'https://www.facebook.com/3laaHamed/videos/153438818942606/',
    'https://www.facebook.com/watch/?v=1882989865328055',
    'https://www.facebook.com/share/v/7JRphdtWvF5EHkPF/',
  ];

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? 'font-[\'Amiri\']' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8 flex-grow w-full">
        {/* Female Videos Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-['Cormorant_Garamond'] mb-6 text-center">
            {language === 'en' ? 'Videos for Women' : 'فيديوهات للنساء'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {femaleVideoUrls.map((videoUrl, index) => (
               <div key={index} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-4 text-center">{language === 'en' ? `Women's Lecture ${index + 1}` : `محاضرة نسائية ${index + 1}`}</h3>
                   {/* Placeholder or image for Facebook video */}
                   <div className="w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 mb-4">
                       {language === 'en' ? 'Facebook Video' : 'فيديو فيسبوك'}
                   </div>
                   <a
                     href={videoUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="block w-full text-center py-2 px-4 bg-[#1b4332] text-[#f5f5dc] rounded-lg hover:bg-opacity-90 transition-all mb-4"
                   >
                     {language === 'en' ? 'Watch on Facebook' : 'شاهد على فيسبوك'}
                   </a>
                   <QRCodeComponent url={videoUrl} size={100} />
               </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 