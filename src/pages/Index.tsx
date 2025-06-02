
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EventsSection from '@/components/EventsSection';
import MembersSection from '@/components/MembersSection';
import SponsorsSection from '@/components/SponsorsSection';
import FuturePlansSection from '@/components/FuturePlansSection';
import InteractiveTechDemo from '@/components/InteractiveTechDemo';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <HeroSection />
        <EventsSection />
        <MembersSection />
        <SponsorsSection />
        <FuturePlansSection />
        <InteractiveTechDemo />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
