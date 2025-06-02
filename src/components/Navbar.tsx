
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu, User, Settings, LogIn } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-blue-800/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="/lovable-uploads/51c7f215-ef50-402d-b365-9c2787c2eaf3.png" 
                alt="Tech Expo Logo" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-blue-400">Tech Expo</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#events" className="text-gray-200 hover:text-blue-400 transition-colors">
              Events
            </a>
            <a href="#members" className="text-gray-200 hover:text-blue-400 transition-colors">
              Members
            </a>
            <a href="#sponsors" className="text-gray-200 hover:text-blue-400 transition-colors">
              Sponsors
            </a>
            <a href="#future" className="text-gray-200 hover:text-blue-400 transition-colors">
              Future Plans
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-200 hover:text-blue-400">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-200 hover:text-blue-400">
              <Settings className="h-5 w-5" />
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <LogIn className="h-4 w-4 mr-2" />
              Join Us
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-gray-200">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
