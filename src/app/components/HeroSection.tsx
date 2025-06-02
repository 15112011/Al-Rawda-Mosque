import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[url('/islamic-pattern.svg')] bg-cover bg-center h-screen flex flex-col items-center justify-center text-[#f5f5dc] p-4">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 font-['Cormorant_Garamond']">
          Al-Rawda Mosque
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-['Amiri']">
          Welcome to the Al-Rawda Mosque Donation Website
        </p>
        {/* Add more elements here as needed */}
      </div>
    </section>
  );
};

export default HeroSection; 