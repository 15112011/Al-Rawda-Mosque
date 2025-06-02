
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu, User, Settings, LogIn } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-blue-800/30">
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Made bigger with mobile-first approach */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center flex-shrink-0">
              <img 
                src="/lovable-uploads/51c7f215-ef50-402d-b365-9c2787c2eaf3.png" 
                alt="Tech Expo Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-400 whitespace-nowrap">Tech Expo</span>
          </div>

          {/* Navigation Links - Hidden on mobile, shown on larger screens */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#events" className="text-gray-200 hover:text-blue-400 transition-colors text-sm xl:text-base">
              Events
            </a>
            <a href="#members" className="text-gray-200 hover:text-blue-400 transition-colors text-sm xl:text-base">
              Members
            </a>
            <a href="#sponsors" className="text-gray-200 hover:text-blue-400 transition-colors text-sm xl:text-base">
              Sponsors
            </a>
            <a href="#future" className="text-gray-200 hover:text-blue-400 transition-colors text-sm xl:text-base">
              Future Plans
            </a>
          </div>

          {/* Action Buttons - Responsive sizing */}
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
