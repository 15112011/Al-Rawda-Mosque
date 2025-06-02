
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EventsSection from '@/components/EventsSection';
import MembersSection from '@/components/MembersSection';
import SponsorsSection from '@/components/SponsorsSection';
import FuturePlansSection from '@/components/FuturePlansSection';
import MarkdownEditor from '@/components/MarkdownEditor';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <HeroSection />
      <EventsSection />
      <MembersSection />
      <SponsorsSection />
      <FuturePlansSection />
      
      {/* Interactive Demo Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Interactive Demo</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience one of our interactive plugins - a collaborative markdown editor showcasing real-time technology collaboration.
            </p>
          </div>
          <MarkdownEditor />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
