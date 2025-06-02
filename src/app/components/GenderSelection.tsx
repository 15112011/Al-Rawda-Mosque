import React from 'react';
import { useRouter } from 'next/navigation';

const GenderSelection: React.FC = () => {
  const router = useRouter();

  const handleGenderSelect = (gender: 'male' | 'female') => {
    router.push(`/videos/${gender}`);
  };

  return (
    <section id="gender" className="py-16 bg-[#f5f5dc] text-[#1b4332] text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 font-['Cormorant_Garamond']">
        Select Gender to View Content
      </h2>
      <div className="flex justify-center gap-8">
        <button
          onClick={() => handleGenderSelect('male')}
          className="bg-[#1b4332] text-[#f5f5dc] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#0a2b1c] transition-colors"
        >
          Male
        </button>
        <button
          onClick={() => handleGenderSelect('female')}
          className="bg-[#1b4332] text-[#f5f5dc] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#0a2b1c] transition-colors"
        >
          Female
        </button>
      </div>
    </section>
  );
};

export default GenderSelection; 