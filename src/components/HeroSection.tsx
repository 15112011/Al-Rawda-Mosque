
import React from 'react';
import { Button } from "@/components/ui/button";
import { Rocket, Users, Zap, Globe, ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-b from-[rgb(var(--rich-black))] to-[rgb(var(--rich-black-2))] overflow-hidden pt-24 md:pt-28 no-overflow">

      <div className="absolute inset-0 tech-gradient"></div>
      

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 sm:left-1/4 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-[rgb(var(--tech-cyan-bright))]/15 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/6 sm:right-1/4 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-[rgb(var(--tech-purple-bright))]/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-[rgb(var(--tech-green-bright))]/12 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-20 right-1/3 w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-[rgb(var(--tech-orange-bright))]/18 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-18 h-18 sm:w-28 sm:h-28 lg:w-36 lg:h-36 bg-[rgb(var(--tech-pink))]/15 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>


      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(var(--tech-cyan)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto container-padding relative z-10 no-overflow">
        <div className="max-w-6xl mx-auto animate-fade-in-scale flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          <div className="lg:w-1/2 text-center lg:text-left">

            <div className="inline-flex items-center gap-2 bg-[rgb(var(--rich-black))]/70 backdrop-blur-sm border-2 border-[rgb(var(--tech-cyan-bright))]/40 rounded-full px-3 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 hover-glow">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-[rgb(var(--tech-cyan-bright))] animate-pulse-glow" />
              <span className="text-xs sm:text-sm font-medium text-[rgb(var(--french-gray-light))]">Student-Led Tech Revolution</span>
            </div>

            <h1 className="heading-xl mb-6 sm:mb-8 leading-tight">
              <span className="text-[rgb(var(--french-gray-light))]">Where</span>
              <br />
              <span className="text-gradient animate-color-shift">Gen Z meets real tech</span>
            </h1>
            
            <p className="text-body text-[rgb(var(--french-gray-light))]/95 mb-4 sm:mb-6 max-w-4xl lg:mx-0 mx-auto">
              Tech Expo doesn't just talk tech — it builds it. A student-led revolution powering the next wave of tech creators. 
              From raw potential to real impact, this is where the next generation starts building the future.
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-[rgb(var(--french-gray))]/80 mb-8 sm:mb-12 max-w-3xl lg:mx-0 mx-auto">
              Every day, we empower high schoolers to discover their spark, create real solutions, and prove what they're capable of.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-12 sm:mb-16">
              <Button className="btn-primary text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto font-semibold w-full sm:w-auto">
                <Rocket className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Join Our Mission
              </Button>
              <Button className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto font-semibold w-full sm:w-auto">
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Claim Your Opportunity
              </Button>
            </div>
          </div>
          

          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="relative">

              <div className="relative rounded-2xl overflow-hidden border-4 border-[rgb(var(--tech-cyan))]/30 shadow-xl hover-glow transition-all duration-500 transform hover:scale-[1.02] max-w-md">
                <img 
                  src="/media/pic 1.jpg" 
                  alt="Tech Expo Students" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--rich-black))] via-transparent to-transparent opacity-60"></div>
              </div>
              

              <div className="absolute -bottom-10 -right-10 w-36 h-36 sm:w-48 sm:h-48 rounded-xl overflow-hidden border-4 border-[rgb(var(--tech-purple))]/30 shadow-lg hover-glow z-10 hidden sm:block">
                <img 
                  src="/media/pic 2.jpg" 
                  alt="Tech Innovation" 
                  className="w-full h-full object-cover"
                />
              </div>
              

              <div className="absolute -top-6 -left-6 w-16 h-16 bg-[rgb(var(--tech-cyan-bright))]/20 rounded-full blur-md animate-float"></div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-[rgb(var(--tech-cyan))]/30 filter blur-xl rounded-full"></div>
            </div>
          </div>
        </div>
        

        <div className="max-w-6xl mx-auto">
          <div className="card-gradient card-hover rounded-xl p-4 sm:p-6 lg:p-8 xl:p-12 mb-12 sm:mb-16 hover-glow border-gradient">
            <h2 className="heading-md mb-4 sm:mb-6 text-center text-[rgb(var(--french-gray-light))]">
              More Than a Platform. <span className="text-gradient-alt">It's a Movement Led by You</span>
            </h2>
            <p className="text-body text-[rgb(var(--french-gray-light))]/90 mb-6 sm:mb-8 max-w-3xl mx-auto text-center">
              Tech Expo exists to empower high school students like you to lead in tech—not just learn it. 
              We believe Gen Z has the potential to shape the future, and we're here to help you get there.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[rgb(var(--tech-cyan-bright))]/25 to-[rgb(var(--tech-purple-bright))]/25 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 glow-cyan border border-[rgb(var(--tech-cyan))]/30">
                  <Users className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-[rgb(var(--tech-cyan-bright))]" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[rgb(var(--french-gray-light))] mb-2 sm:mb-3">Mindset First</h3>
                <p className="text-sm sm:text-base text-[rgb(var(--french-gray))]/85">Spark confidence, creativity, and purpose</p>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[rgb(var(--tech-purple-bright))]/25 to-[rgb(var(--tech-green-bright))]/25 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 glow-purple border border-[rgb(var(--tech-purple))]/30">
                  <Zap className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-[rgb(var(--tech-purple-bright))]" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[rgb(var(--french-gray-light))] mb-2 sm:mb-3">Youth-Powered</h3>
                <p className="text-sm sm:text-base text-[rgb(var(--french-gray))]/85">Built for students, led by students</p>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[rgb(var(--tech-green-bright))]/25 to-[rgb(var(--tech-orange-bright))]/25 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 glow-green border border-[rgb(var(--tech-green))]/30">
                  <Globe className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-[rgb(var(--tech-green-bright))]" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[rgb(var(--french-gray-light))] mb-2 sm:mb-3">Real-World Ready</h3>
                <p className="text-sm sm:text-base text-[rgb(var(--french-gray))]/85">From AI to robotics, we bring learning to life</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
