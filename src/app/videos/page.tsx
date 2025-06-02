'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '../context/LanguageContext'
import Image from 'next/image'

export default function VideosPage() {
  const router = useRouter()
  const { language, t } = useLanguage()
  
  // Redirect to men's videos by default
  useEffect(() => {
    router.push('/videos/men')
  }, [router])

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="text-center">
        <div className="mb-6">
          <Image src="/images/novaweb-logo.png" alt="NovaWeb" width={160} height={40} className="mx-auto" />
        </div>
        <h1 className="text-3xl font-bold mb-4">{t('loading')}...</h1>
      </div>
    </div>
  )
}
