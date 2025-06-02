
import React from 'react';
import { Button } from "@/components/ui/button";
import { Rocket, Users, Zap, Globe, ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 tech-gradient"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[rgb(var(--tech-cyan))]/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-[rgb(var(--penn-blue))]/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-[rgb(var(--tech-purple))]/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-20 right-1/3 w-20 h-20 bg-[rgb(var(--tech-cyan))]/15 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(var(--penn-blue)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto container-padding text-center relative z-10">
        <div className="max-w-5xl mx-auto animate-fade-in-scale">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[rgb(var(--rich-black))]/60 backdrop-blur-sm border border-[rgb(var(--penn-blue))]/30 rounded-full px-6 py-3 mb-8">
            <Sparkles className="h-4 w-4 text-[rgb(var(--tech-cyan))]" />
            <span className="text-sm font-medium text-[rgb(var(--french-gray))]">Student-Led Tech Revolution</span>
          </div>

          <h1 className="heading-xl mb-8 leading-tight">
            <span className="text-[rgb(var(--french-gray-light))]">Where</span>
            <br />
            <span className="text-gradient">Gen Z meets real tech</span>
          </h1>
          
          <p className="text-body text-[rgb(var(--french-gray))]/90 mb-6 max-w-4xl mx-auto">
            Tech Expo doesn't just talk tech — it builds it. A student-led revolution powering the next wave of tech creators. 
            From raw potential to real impact, this is where the next generation starts building the future.
          </p>

          <p className="text-lg text-[rgb(var(--french-gray))]/70 mb-12 max-w-3xl mx-auto">
            Every day, we empower high schoolers to discover their spark, create real solutions, and prove what they're capable of.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button className="btn-primary text-[rgb(var(--french-gray))] text-lg px-8 py-4 h-auto">
              <Rocket className="h-5 w-5 mr-2" />
              Join Our Mission
            </Button>
            <Button className="btn-secondary text-lg px-8 py-4 h-auto">
              <ArrowRight className="h-5 w-5 mr-2" />
              Claim Your Opportunity
            </Button>
          </div>

          {/* Enhanced Why Tech Expo Section */}
          <div className="card-gradient card-hover rounded-xl p-8 lg:p-12 mb-16 hover-glow">
            <h2 className="heading-md mb-6 text-[rgb(var(--french-gray-light))]">
              More Than a Platform. <span className="text-gradient-alt">It's a Movement Led by You</span>
            </h2>
            <p className="text-body text-[rgb(var(--french-gray))]/90 mb-8 max-w-3xl mx-auto">
              Tech Expo exists to empower high school students like you to lead in tech—not just learn it. 
              We believe Gen Z has the potential to shape the future, and we're here to help you get there.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[rgb(var(--penn-blue))]/20 to-[rgb(var(--tech-cyan))]/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-[rgb(var(--tech-cyan))]" />
                </div>
                <h3 className="text-xl font-semibold text-[rgb(var(--french-gray-light))] mb-3">Mindset First</h3>
                <p className="text-[rgb(var(--french-gray))]/80">Spark confidence, creativity, and purpose</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[rgb(var(--tech-purple))]/20 to-[rgb(var(--penn-blue))]/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-[rgb(var(--tech-purple))]" />
                </div>
                <h3 className="text-xl font-semibold text-[rgb(var(--french-gray-light))] mb-3">Youth-Powered</h3>
                <p className="text-[rgb(var(--french-gray))]/80">Built for students, led by students</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[rgb(var(--tech-green))]/20 to-[rgb(var(--penn-blue))]/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-8 w-8 text-[rgb(var(--tech-green))]" />
                </div>
                <h3 className="text-xl font-semibold text-[rgb(var(--french-gray-light))] mb-3">Real-World Ready</h3>
                <p className="text-[rgb(var(--french-gray))]/80">From AI to robotics, we bring learning to life</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
