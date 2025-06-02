
import React from 'react';
import { Button } from "@/components/ui/button";
import { Rocket, Code, Users, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-tech-gradient overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-electric-blue/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-cyber-cyan/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-neon-purple/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="neon-text">Tech Expo</span>
            <br />
            <span className="text-glacier-white">Nexus</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-glacier-white/80 mb-8 max-w-2xl mx-auto">
            Where innovation meets collaboration. Create, learn, and showcase cutting-edge technology with fellow students and industry experts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="tech-button text-lg px-8 py-4">
              <Rocket className="h-5 w-5 mr-2" />
              Join Bootcamp
            </Button>
            <Button className="cyber-button text-lg px-8 py-4">
              <Code className="h-5 w-5 mr-2" />
              Explore Projects
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="tech-card text-center">
              <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-electric-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-glacier-white">Collaborative Learning</h3>
              <p className="text-glacier-white/70">Connect with peers and mentors in real-time collaborative environments</p>
            </div>

            <div className="tech-card text-center">
              <div className="w-16 h-16 bg-cyber-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-cyber-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-glacier-white">Rich Content Creation</h3>
              <p className="text-glacier-white/70">Advanced markdown editor with live preview and media integration</p>
            </div>

            <div className="tech-card text-center">
              <div className="w-16 h-16 bg-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-neon-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-glacier-white">Cutting-Edge Tech</h3>
              <p className="text-glacier-white/70">Experience the latest in web technologies and AI-powered features</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
