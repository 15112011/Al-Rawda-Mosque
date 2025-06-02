'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'ar'

type TranslationKeys = 
  // Navigation
  | 'home' | 'videos' | 'quran' | 'companions' | 'ahadith' | 'mosqueName' | 'menu' | 'close'
  // Quran Section
  | 'holyQuran' | 'surahs' | 'verses' | 'keyPoints' | 'meccan' | 'medinan' | 'share' | 'readMore'
  | 'surahDetails' | 'revelationType' | 'totalVerses' | 'mainThemes'
  // Companions Section
  | 'tenPromisedParadise' | 'companions' | 'keyAchievements' | 'title' | 'description' | 'achievements'
  | 'virtues' | 'viewDetails' | 'companionDetails' | 'earlyLife' | 'contributions' | 'legacy'
  // Common
  | 'loading' | 'error' | 'back' | 'next' | 'previous' | 'search' | 'filter' | 'sort' | 'all' | 'more' | 'less'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations: Record<Language, Record<TranslationKeys, string>> = {
  en: {
    // Navigation
    home: 'Home',
    videos: 'Videos',
    quran: 'Quran',
    companions: 'Companions',
    ahadith: 'Ahadith',
    mosqueName: 'Al-Rawda Mosque',
    menu: 'Menu',
    close: 'Close',

    // Quran Section
    holyQuran: 'The Holy Quran',
    surahs: 'Surahs',
    verses: 'verses',
    keyPoints: 'Key Points',
    meccan: 'Meccan',
    medinan: 'Medinan',
    share: 'Share',
    readMore: 'Read More',
    surahDetails: 'Surah Details',
    revelationType: 'Revelation Type',
    totalVerses: 'Total Verses',
    mainThemes: 'Main Themes',

    // Companions Section
    tenPromisedParadise: 'The Ten Promised Paradise',
    keyAchievements: 'Key Achievements',
    title: 'Title',
    description: 'Description',
    achievements: 'Achievements',
    virtues: 'Virtues',
    viewDetails: 'View Details',
    companionDetails: 'Companion Details',
    earlyLife: 'Early Life',
    contributions: 'Contributions',
    legacy: 'Legacy',

    // Common
    loading: 'Loading...',
    error: 'Error',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    search: 'Search',
    filter: 'Filter',
    sort: 'Sort',
    all: 'All',
    more: 'More',
    less: 'Less'
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    videos: 'الفيديوهات',
    quran: 'القرآن',
    companions: 'الصحابة',
    ahadith: 'الأحاديث',
    mosqueName: 'مسجد الروضة',
    menu: 'القائمة',
    close: 'إغلاق',

    // Quran Section
    holyQuran: 'القرآن الكريم',
    surahs: 'السور',
    verses: 'آيات',
    keyPoints: 'النقاط الرئيسية',
    meccan: 'مكية',
    medinan: 'مدنية',
    share: 'مشاركة',
    readMore: 'اقرأ المزيد',
    surahDetails: 'تفاصيل السورة',
    revelationType: 'نوع الوحي',
    totalVerses: 'عدد الآيات',
    mainThemes: 'المواضيع الرئيسية',

    // Companions Section
    tenPromisedParadise: 'العشرة المبشرون بالجنة',
    keyAchievements: 'الإنجازات الرئيسية',
    title: 'اللقب',
    description: 'الوصف',
    achievements: 'الإنجازات',
    virtues: 'الفضائل',
    viewDetails: 'عرض التفاصيل',
    companionDetails: 'تفاصيل الصحابي',
    earlyLife: 'الحياة المبكرة',
    contributions: 'المساهمات',
    legacy: 'الإرث',

    // Common
    loading: 'جاري التحميل...',
    error: 'خطأ',
    back: 'رجوع',
    next: 'التالي',
    previous: 'السابق',
    search: 'بحث',
    filter: 'تصفية',
    sort: 'ترتيب',
    all: 'الكل',
    more: 'المزيد',
    less: 'أقل'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      // Get the saved language from localStorage or default to 'en'
      const savedLanguage = localStorage.getItem('preferredLanguage');
      return (savedLanguage === 'en' || savedLanguage === 'ar') ? savedLanguage as Language : 'en';
    }
    return 'en';
  });

  // Effect to sync language changes with localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', language);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  }

  const t = (key: string) => {
    // Safe access to translations with fallback to the key itself
    try {
      const translation = translations[language][key as TranslationKeys];
      return translation || key;
    } catch (error) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 