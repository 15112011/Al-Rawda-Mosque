
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, User, Settings, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'bg-slate-900/95' : 'bg-slate-900/80'} backdrop-blur-md border-b border-blue-800/30 transition-all duration-300`}>
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center flex-shrink-0">
              <img 
                src="/media/logo kamel.svg" 
                alt="Tech Expo Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>


          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#hero" onClick={scrollToSection('hero')} className="text-gray-200 hover:text-[rgb(var(--tech-cyan-bright))] transition-colors text-sm xl:text-base">
              Home
            </a>
            <a href="#timeline" onClick={scrollToSection('timeline')} className="text-gray-200 hover:text-[rgb(var(--tech-cyan-bright))] transition-colors text-sm xl:text-base">
              Timeline
            </a>
            <a href="#events" onClick={scrollToSection('events')} className="text-gray-200 hover:text-[rgb(var(--tech-cyan-bright))] transition-colors text-sm xl:text-base">
              Events
            </a>
            <a href="#members" onClick={scrollToSection('members')} className="text-gray-200 hover:text-[rgb(var(--tech-cyan-bright))] transition-colors text-sm xl:text-base">
              Members
            </a>
            <a href="#testimonials" onClick={scrollToSection('testimonials')} className="text-gray-200 hover:text-[rgb(var(--tech-cyan-bright))] transition-colors text-sm xl:text-base">
              Testimonials
            </a>
            <a href="#sponsors" onClick={scrollToSection('sponsors')} className="text-gray-200 hover:text-[rgb(var(--tech-cyan-bright))] transition-colors text-sm xl:text-base">
              Sponsors
            </a>
          </div>



          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-200 hover:text-blue-400 w-8 h-8 sm:w-10 sm:h-10 hidden sm:flex">
              <User className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-200 hover:text-blue-400 w-8 h-8 sm:w-10 sm:h-10 hidden sm:flex">
              <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 h-8 sm:h-auto">
              <LogIn className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Join Us</span>
              <span className="sm:hidden">Join</span>
            </Button>

            <Button variant="ghost" size="icon" className="lg:hidden text-gray-200 w-8 h-8 sm:w-10 sm:h-10">
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
