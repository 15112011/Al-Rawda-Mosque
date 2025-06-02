
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EventsSection from '@/components/EventsSection';
import ProjectShowcase from '@/components/ProjectShowcase';
import MarkdownEditor from '@/components/MarkdownEditor';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-tech-dark">
      <Navbar />
      <HeroSection />
      <EventsSection />
      <ProjectShowcase />
      
      {/* Editor Demo Section */}
      <section className="py-16 bg-tech-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="neon-text">Create & Collaborate</span>
            </h2>
            <p className="text-xl text-glacier-white/80 max-w-2xl mx-auto">
              Use our advanced markdown editor to create rich content, document your projects, and collaborate with your team.
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
