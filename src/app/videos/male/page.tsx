'use client'

import { useState, useEffect } from 'react'
import Footer from '@/app/components/Footer'
import QRCodeComponent from '@/app/components/QRCode'
import { useLanguage } from '@/app/context/LanguageContext'
import Navigation from '@/app/components/Navigation'

export default function MaleVideosPage() {
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';

  const maleVideoUrls = [
    'https://www.youtube.com/embed/nK80lNjgNEM',
    'https://www.youtube.com/embed/qp_D50aWH6s',
    'https://www.youtube.com/embed/Da6E63hdR4s',
    'https://www.youtube.com/embed/zfeb2ISe7eM',
    'https://www.youtube.com/embed/faLOaCoWE2E',
    'https://www.youtube.com/embed/rdt8PpDegNw',
    'https://www.youtube.com/embed/jF0tNyr8cxM',
    'https://www.youtube.com/embed/nvMF8w1RcZo',
    'https://www.youtube.com/embed/no8cKGqTXME',
  ];

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? 'font-[\'Amiri\']' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8 flex-grow w-full">
        {/* Male Videos Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-['Cormorant_Garamond'] mb-6 text-center">
            {language === 'en' ? 'Videos for Men' : 'فيديوهات للرجال'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {maleVideoUrls.map((videoUrl, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-4 text-center">{language === 'en' ? `Islamic Lecture ${index + 1}` : `محاضرة إسلامية ${index + 1}`}</h3>
                <div className="w-full aspect-video mb-4">
                   <iframe className="w-full h-full rounded-lg" src={videoUrl} allowFullScreen></iframe>
                </div>
                <a
                  href={videoUrl.replace('/embed/', '/watch?v=')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2 px-4 bg-[#1b4332] text-[#f5f5dc] rounded-lg hover:bg-opacity-90 transition-all mb-4"
                >
                  {language === 'en' ? 'Watch on YouTube' : 'شاهد على يوتيوب'}
                </a>
                 <QRCodeComponent url={videoUrl.replace('/embed/', '/watch?v=')} size={100} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 