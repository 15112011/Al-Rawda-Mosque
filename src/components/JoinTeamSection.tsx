
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Rocket, Heart, ArrowRight } from 'lucide-react';

const JoinTeamSection = () => {
  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Build Real Impact",
      description: "Work on projects that shape the future of technology education for your peers"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Develop Skills",
      description: "Gain hands-on experience in leadership, event planning, and tech innovation"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Create Community",
      description: "Connect with like-minded students passionate about technology and change"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[rgb(var(--penn-blue))]/10 via-[rgb(var(--rich-black-2))] to-[rgb(var(--rich-black-3))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">JOIN THE MOVEMENT</span>
          </h2>
          <p className="text-xl text-[rgb(var(--french-gray))]/80 max-w-2xl mx-auto">
            Be part of one of the fastest-growing youth-led tech communities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-[rgb(var(--rich-black))]/80 border border-[rgb(var(--penn-blue))]/30 hover:border-[rgb(var(--penn-blue))]/50 transition-all duration-300 hover-glow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[rgb(var(--penn-blue))]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[rgb(var(--penn-blue))]">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[rgb(var(--french-gray))] mb-3">{benefit.title}</h3>
                <p className="text-[rgb(var(--french-gray))]/80">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-[rgb(var(--rich-black))]/80 border border-[rgb(var(--penn-blue))]/30 hover-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[rgb(var(--french-gray))] mb-4">Ready to Make a Difference?</h3>
              <p className="text-[rgb(var(--french-gray))]/80 mb-6">
                Join a team of passionate students who are shaping the future of technology education. 
                Whether you're interested in event planning, content creation, tech development, or community outreach, 
                there's a place for you at Tech Expo.
              </p>
              <Button className="bg-[rgb(var(--penn-blue))] hover:bg-[rgb(var(--penn-blue))]/80 text-[rgb(var(--french-gray))] text-lg px-8 py-4">
                <ArrowRight className="h-5 w-5 mr-2" />
                Join the Team
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JoinTeamSection;
