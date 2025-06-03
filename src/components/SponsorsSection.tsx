
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Award, Target } from 'lucide-react';

const SponsorsSection = () => {
  const sponsors = [
    { 
      name: 'Microsoft', 
      logo: '/media/microsoft_logo.svg', 
      tier: 'Gold',
      description: 'Leading technology solutions provider',
      partnership: 'Event Sponsorship & Mentorship'
    },
    { 
      name: 'Matrix', 
      logo: '/media/matrix 2.svg', 
      tier: 'Silver',
      description: 'Research & Development Hub',
      partnership: 'Workshop Facilitation'
    },
    { 
      name: 'Dracode', 
      logo: '/media/dracode.svg', 
      tier: 'Silver',
      description: 'Artificial Intelligence Specialists',
      partnership: 'AI Bootcamp Support'
    },
    { 
      name: 'Dragons', 
      logo: '/media/dragons.svg', 
      tier: 'Bronze',
      description: 'Next-gen networking solutions',
      partnership: 'Technical Resources'
    },
    { 
      name: 'FIL Business', 
      logo: '/media/fil business.svg', 
      tier: 'Bronze',
      description: 'Business solutions platform',
      partnership: 'Curriculum Development'
    },
    { 
      name: 'IPM', 
      logo: '/media/ipm.svg', 
      tier: 'Bronze',
      description: 'Project management solutions',
      partnership: 'Project Management Training'
    },
    { 
      name: 'Scholar X', 
      logo: '/media/scholar x.svg', 
      tier: 'Silver',
      description: 'Educational technology platform',
      partnership: 'Educational Resources'
    },
  ];

  const partnershipBenefits = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Direct Student Access",
      description: "Connect with 600+ engaged tech enthusiasts"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Brand Recognition",
      description: "Showcase your company at premier tech events"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Talent Pipeline",
      description: "Identify and nurture future tech leaders"
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Gold': return 'from-yellow-400 to-yellow-600';
      case 'Silver': return 'from-gray-300 to-gray-500';
      case 'Bronze': return 'from-orange-400 to-orange-600';
      default: return 'from-blue-400 to-blue-600';
    }
  };

  return (
    <section id="sponsors" className="py-20 bg-gradient-to-b from-[rgb(var(--rich-black-2))] to-[rgb(var(--rich-black-3))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Strategic Partners</span>
          </h2>
          <p className="text-xl text-[rgb(var(--french-gray))]/80 max-w-3xl mx-auto mb-4">
            From student-driven innovation to real-world impact, Tech Expo's journey is powered by 
            leading industry players shaping the future of technology.
          </p>
          <p className="text-[rgb(var(--french-gray))]/70 max-w-2xl mx-auto">
            Together, we're building the next generation of tech leaders through meaningful partnerships 
            and collaborative innovation.
          </p>
        </div>
        
        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sponsors.map((sponsor, index) => (
            <Card key={index} className="bg-[rgb(var(--rich-black))]/80 border border-[rgb(var(--penn-blue))]/30 hover:border-[rgb(var(--penn-blue))]/50 transition-all duration-300 group hover-glow animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-[rgb(var(--rich-black-3))] rounded-xl flex items-center justify-center overflow-hidden border border-[rgb(var(--penn-blue))]/20">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <Badge className={`absolute -top-2 -right-2 bg-gradient-to-r ${getTierColor(sponsor.tier)} text-white border-none text-xs px-2 py-1`}>
                    {sponsor.tier}
                  </Badge>
                </div>
                
                <h3 className="font-bold text-xl text-[rgb(var(--french-gray))] mb-2 group-hover:text-[rgb(var(--penn-blue))] transition-colors">
                  {sponsor.name}
                </h3>
                <p className="text-sm text-[rgb(var(--french-gray))]/70 mb-3">{sponsor.description}</p>
                <p className="text-xs text-[rgb(var(--penn-blue))] font-medium">{sponsor.partnership}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-gradient">Why Partner With Us?</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {partnershipBenefits.map((benefit, index) => (
              <Card key={index} className="bg-[rgb(var(--rich-black))]/60 border border-[rgb(var(--penn-blue))]/20 hover:border-[rgb(var(--penn-blue))]/40 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[rgb(var(--penn-blue))]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[rgb(var(--penn-blue))]">
                    {benefit.icon}
                  </div>
                  <h4 className="font-semibold text-[rgb(var(--french-gray))] mb-2">{benefit.title}</h4>
                  <p className="text-sm text-[rgb(var(--french-gray))]/70">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-[rgb(var(--rich-black))]/80 border border-[rgb(var(--penn-blue))]/30 hover-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[rgb(var(--french-gray))] mb-4">
                Ready to Co-Build the Future?
              </h3>
              <p className="text-[rgb(var(--french-gray))]/80 mb-6">
                Join us in shaping the next generation of tech leaders. Together, we can inspire innovation 
                and create lasting impact in the technology landscape.
              </p>
              <Button className="bg-[rgb(var(--penn-blue))] hover:bg-[rgb(var(--penn-blue))]/80 text-[rgb(var(--french-gray))] text-lg px-8 py-4">
                <ArrowRight className="h-5 w-5 mr-2" />
                Partner with Us
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
