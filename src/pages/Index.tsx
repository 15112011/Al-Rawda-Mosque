
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TimelineSection from '@/components/TimelineSection';
import EventsSection from '@/components/EventsSection';
import PastEventsSection from '@/components/PastEventsSection';
import MembersSection from '@/components/MembersSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SponsorsSection from '@/components/SponsorsSection';
import JoinTeamSection from '@/components/JoinTeamSection';
import NewsletterSection from '@/components/NewsletterSection';
import FuturePlansSection from '@/components/FuturePlansSection';
import InteractiveTechDemo from '@/components/InteractiveTechDemo';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <HeroSection />
        <TimelineSection />
        <EventsSection />
        <PastEventsSection />
        <MembersSection />
        <TestimonialsSection />
        <SponsorsSection />
        <JoinTeamSection />
        <NewsletterSection />
        <FuturePlansSection />
        <InteractiveTechDemo />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
