
import React from 'react';
import { Button } from "@/components/ui/button";
import { Rocket, Users, Zap, Globe } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-600/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-800/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Tech Expo</span>
            <br />
            <span className="text-gray-100">Volunteer Team</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Exploring technology's impact on society through innovation, education, and community engagement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4">
              <Rocket className="h-5 w-5 mr-2" />
              Join Our Mission
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white text-lg px-8 py-4">
              <Globe className="h-5 w-5 mr-2" />
              Explore Impact
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-slate-800/50 border border-blue-800/30 rounded-lg p-6 hover:border-blue-600/50 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Volunteer Community</h3>
              <p className="text-gray-400">Passionate volunteers working together to explore technology's societal impact</p>
            </div>

            <div className="bg-slate-800/50 border border-blue-800/30 rounded-lg p-6 hover:border-blue-600/50 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Interactive Demos</h3>
              <p className="text-gray-400">20+ JavaScript plugins showcasing technology's real-world applications</p>
            </div>

            <div className="bg-slate-800/50 border border-blue-800/30 rounded-lg p-6 hover:border-blue-600/50 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Global Impact</h3>
              <p className="text-gray-400">Understanding how technology shapes our world and future society</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
