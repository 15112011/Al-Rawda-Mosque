import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const CompanionsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <section id="companions" className={`py-16 bg-[#f5f5dc] text-[#1b4332] text-center ${isRTL ? 'font-[\'Amiri\']' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 font-['Cormorant_Garamond']">
        {t('companions')}
      </h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        {t('tenPromisedParadise')}
      </p>
      {/* You can add some featured companions here or a button to the main companions page */}
      <Link href="/companions" className="inline-block bg-[#1b4332] text-[#f5f5dc] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#0a2b1c] transition-colors mt-4">
        {t('viewDetails')}
      </Link>
    </section>
  );
};

export default CompanionsSection; 