
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const SponsorsSection = () => {
  const sponsors = [
    { name: 'TechCorp', logo: '/lovable-uploads/bf2777ac-224c-4014-b4a2-a79766bf3ddc.png', tier: 'Gold' },
    { name: 'Innovation Labs', logo: '/lovable-uploads/4077dd96-32b1-4cbd-9437-542b37fb66f2.png', tier: 'Silver' },
    { name: 'AI Solutions', logo: '/lovable-uploads/dee4aac3-86c9-46b6-b212-7d0e83491883.png', tier: 'Bronze' },
    { name: 'Future Networks', logo: '/lovable-uploads/31324b60-1014-4b09-8ae9-5be9231db6e7.png', tier: 'Bronze' },
  ];

  return (
    <section id="sponsors" className="py-16 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Our Sponsors</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Supporting our mission to explore technology's impact on society
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sponsors.map((sponsor, index) => (
            <Card key={index} className="bg-slate-700/50 border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
                  {sponsor.name}
                </h3>
                <p className="text-sm text-blue-400">{sponsor.tier} Sponsor</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
