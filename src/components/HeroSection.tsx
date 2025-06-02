
import React from 'react';
import { Button } from "@/components/ui/button";
import { Rocket, Users, Zap, Globe, ArrowRight } from 'lucide-react';

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
            <span className="text-[rgb(var(--french-gray))]">Where</span>
            <br />
            <span className="text-gradient">Gen Z meets real tech</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[rgb(var(--french-gray))]/80 mb-8 max-w-3xl mx-auto">
            Tech Expo doesn't just talk tech — it builds it. A student-led revolution powering the next wave of tech creators. From raw potential to real impact, this is where the next generation starts building the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-[rgb(var(--penn-blue))] hover:bg-[rgb(var(--penn-blue))]/80 text-[rgb(var(--french-gray))] text-lg px-8 py-4">
              <Rocket className="h-5 w-5 mr-2" />
              Join Our Mission
            </Button>
            <Button variant="outline" className="border-[rgb(var(--penn-blue))] text-[rgb(var(--penn-blue))] hover:bg-[rgb(var(--penn-blue))] hover:text-[rgb(var(--french-gray))] text-lg px-8 py-4">
              <ArrowRight className="h-5 w-5 mr-2" />
              Claim Your Opportunity
            </Button>
          </div>

          {/* Why Tech Expo Section */}
          <div className="bg-[rgb(var(--rich-black))]/50 border border-[rgb(var(--penn-blue))]/30 rounded-lg p-8 mb-16 hover:border-[rgb(var(--penn-blue))]/50 transition-all duration-300 hover-glow">
            <h2 className="text-2xl font-bold mb-4 text-[rgb(var(--french-gray))]">
              More Than a Platform. <span className="text-gradient">It's a Movement Led by You</span>
            </h2>
            <p className="text-[rgb(var(--french-gray))]/80 mb-6 max-w-2xl mx-auto">
              Tech Expo exists to empower high school students like you to lead in tech—not just learn it. We believe Gen Z has the potential to shape the future, and we're here to help you get there.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[rgb(var(--penn-blue))]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-[rgb(var(--penn-blue))]" />
                </div>
                <h3 className="font-semibold text-[rgb(var(--french-gray))] mb-2">Mindset First</h3>
                <p className="text-sm text-[rgb(var(--french-gray))]/70">Spark confidence, creativity, and purpose</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[rgb(var(--penn-blue))]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-[rgb(var(--penn-blue))]" />
                </div>
                <h3 className="font-semibold text-[rgb(var(--french-gray))] mb-2">Youth-Powered</h3>
                <p className="text-sm text-[rgb(var(--french-gray))]/70">Built for students, led by students</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[rgb(var(--penn-blue))]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="h-6 w-6 text-[rgb(var(--penn-blue))]" />
                </div>
                <h3 className="font-semibold text-[rgb(var(--french-gray))] mb-2">Real-World Ready</h3>
                <p className="text-sm text-[rgb(var(--french-gray))]/70">From AI to robotics, we bring learning to life</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
