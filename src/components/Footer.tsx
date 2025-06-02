
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Twitter, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-blue-800/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TE</span>
              </div>
              <span className="text-xl font-bold text-blue-400">Tech Expo</span>
            </div>
            <p className="text-gray-400 mb-4">
              A volunteer team exploring technology's impact on society through education, research, and community engagement.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#events" className="text-gray-400 hover:text-blue-400 transition-colors">Events</a></li>
              <li><a href="#members" className="text-gray-400 hover:text-blue-400 transition-colors">Our Team</a></li>
              <li><a href="#sponsors" className="text-gray-400 hover:text-blue-400 transition-colors">Sponsors</a></li>
              <li><a href="#future" className="text-gray-400 hover:text-blue-400 transition-colors">Future Plans</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Partner</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Sponsor</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Donate</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Mission</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800/30 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © 2025 Tech Expo Volunteer Team. Built with passion for exploring technology's impact on society.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
