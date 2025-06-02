'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#1b4332] text-[#f5f5dc] py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <div className="mb-6 p-4 bg-[#2d6a4f] rounded-lg shadow-inner inline-block mx-auto">
            <p className="text-xl font-['Amiri'] leading-relaxed text-right" dir="rtl">
              فضلا و ليس امرا نرجو الدعاء لالمبرمج حمزة سمير المبرمج القائم بالمشوع من فريق 
              <span className="font-sans font-bold text-[#8a5cf6] inline-flex items-center mx-1">
                <Image src="/images/novaweb-logo.png" alt="NovaWeb" width={80} height={20} className="inline-block" />
              </span>
              و مدير العلاقات العامة و التسويق من فريق 
              <span className="font-sans font-bold text-[#8a5cf6] inline-flex items-center mx-1">
                <Image src="/images/novaweb-logo.png" alt="NovaWeb" width={80} height={20} className="inline-block" />
              </span>
              خالد حازم
            </p>
          </div>
          <div className="flex justify-center items-center mb-6">
            <Image src="/images/novaweb-logo.png" alt="NovaWeb" width={160} height={40} className="mx-auto" />
          </div>
          <div className="mt-6 pt-6 border-t border-[#f5f5dc]/20">
            <p className="text-lg font-semibold mb-2">Powered by <span className="text-[#8a5cf6]">NovaWeb</span></p>
            <p className="text-sm opacity-90">
              Building Digital Solutions with Excellence
            </p>
            <p className="text-sm mt-4">
              Contact: <a href="tel:+201024705502" className="underline hover:text-[#8a5cf6] transition-colors">+20 102 470 5502</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}