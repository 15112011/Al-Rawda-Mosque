
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Twitter, Discord, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tech-dark border-t border-electric-blue/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-electric-blue to-cyber-cyan rounded-lg flex items-center justify-center">
                <span className="text-tech-dark font-bold text-sm">TE</span>
              </div>
              <span className="text-xl font-bold neon-text">Tech Expo Nexus</span>
            </div>
            <p className="text-glacier-white/70 mb-4">
              Empowering the next generation of tech innovators through collaborative learning and hands-on experience.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="text-glacier-white hover:text-electric-blue">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-glacier-white hover:text-electric-blue">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-glacier-white hover:text-electric-blue">
                <Discord className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-glacier-white hover:text-electric-blue">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-glacier-white mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-glacier-white/70 hover:text-electric-blue transition-colors">Events</a></li>
              <li><a href="#" className="text-glacier-white/70 hover:text-electric-blue transition-colors">Projects</a></li>
              <li><a href="#" className="text-glacier-white/70 hover:text-electric-blue transition-colors">Bootcamps</a></li>
              <li><a href="#" className="text-glacier-white/70 hover:text-electric-blue transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-glacier-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-glacier-white/70 hover:text-electric-blue transition-colors">Documentation</a></li>
              <li><a href="#" className="text-glacier-white/70 hover:text-electric-blue transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-glacier-white/70 hover:text-electric-blue transition-colors">API Reference</a></li>
              <li><a href="#" className="text-glacier-white/70 hover:text-electric-blue transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-glacier-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-glacier-white/70 hover:text-electric-blue transition-colors">About</a></li>
              <li><a href="#" className="text-glacier-white/70 hover:text-electric-blue transition-colors">Careers</a></li>
              <li><a href="#" className="text-glacier-white/70 hover:text-electric-blue transition-colors">Privacy</a></li>
              <li><a href="#" className="text-glacier-white/70 hover:text-electric-blue transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-electric-blue/20 mt-8 pt-8 text-center">
          <p className="text-glacier-white/60">
            © 2025 Tech Expo Nexus. All rights reserved. Built with ❤️ by the community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
