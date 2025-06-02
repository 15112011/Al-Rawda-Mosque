
import React from 'react';
import { Button } from "@/components/ui/button";
import { Rocket, Users, Zap, Globe } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[rgb(var(--rich-black-2))] via-[rgb(var(--penn-blue))] to-[rgb(var(--rich-black))] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[rgb(var(--penn-blue))]/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-[rgb(var(--penn-blue))]/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-[rgb(var(--penn-blue))]/15 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Tech Expo</span>
            <br />
            <span className="text-[rgb(var(--french-gray))]">Volunteer Team</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[rgb(var(--french-gray))]/80 mb-8 max-w-2xl mx-auto">
            Exploring technology's impact on society through innovation, education, and community engagement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-[rgb(var(--penn-blue))] hover:bg-[rgb(var(--penn-blue))]/80 text-[rgb(var(--french-gray))] text-lg px-8 py-4">
              <Rocket className="h-5 w-5 mr-2" />
              Join Our Mission
            </Button>
            <Button variant="outline" className="border-[rgb(var(--penn-blue))] text-[rgb(var(--penn-blue))] hover:bg-[rgb(var(--penn-blue))] hover:text-[rgb(var(--french-gray))] text-lg px-8 py-4">
              <Globe className="h-5 w-5 mr-2" />
              Explore Impact
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-[rgb(var(--rich-black))]/50 border border-[rgb(var(--penn-blue))]/30 rounded-lg p-6 hover:border-[rgb(var(--penn-blue))]/50 transition-all duration-300 hover-glow">
              <div className="w-16 h-16 bg-[rgb(var(--penn-blue))]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[rgb(var(--penn-blue))]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--french-gray))]">Volunteer Community</h3>
              <p className="text-[rgb(var(--french-gray))]/70">Passionate volunteers working together to explore technology's societal impact</p>
            </div>

            <div className="bg-[rgb(var(--rich-black))]/50 border border-[rgb(var(--penn-blue))]/30 rounded-lg p-6 hover:border-[rgb(var(--penn-blue))]/50 transition-all duration-300 hover-glow">
              <div className="w-16 h-16 bg-[rgb(var(--penn-blue))]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-[rgb(var(--penn-blue))]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--french-gray))]">Interactive Demos</h3>
              <p className="text-[rgb(var(--french-gray))]/70">20+ JavaScript plugins showcasing technology's real-world applications</p>
            </div>

            <div className="bg-[rgb(var(--rich-black))]/50 border border-[rgb(var(--penn-blue))]/30 rounded-lg p-6 hover:border-[rgb(var(--penn-blue))]/50 transition-all duration-300 hover-glow">
              <div className="w-16 h-16 bg-[rgb(var(--penn-blue))]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-[rgb(var(--penn-blue))]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--french-gray))]">Global Impact</h3>
              <p className="text-[rgb(var(--french-gray))]/70">Understanding how technology shapes our world and future society</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
