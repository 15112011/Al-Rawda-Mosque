
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu, User, Settings, LogIn } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-tech-dark/90 backdrop-blur-md border-b border-electric-blue/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-electric-blue to-cyber-cyan rounded-lg flex items-center justify-center">
              <span className="text-tech-dark font-bold text-sm">TE</span>
            </div>
            <span className="text-xl font-bold neon-text">Tech Expo Nexus</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-glacier-white hover:text-electric-blue transition-colors">
              Events
            </a>
            <a href="#" className="text-glacier-white hover:text-electric-blue transition-colors">
              Projects
            </a>
            <a href="#" className="text-glacier-white hover:text-electric-blue transition-colors">
              Bootcamps
            </a>
            <a href="#" className="text-glacier-white hover:text-electric-blue transition-colors">
              Community
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-glacier-white hover:text-electric-blue">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-glacier-white hover:text-electric-blue">
              <Settings className="h-5 w-5" />
            </Button>
            <Button className="tech-button">
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-glacier-white">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
