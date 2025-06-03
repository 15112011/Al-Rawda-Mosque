
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Rocket, Heart, ArrowRight, Code, Megaphone, Lightbulb, Camera } from 'lucide-react';

const JoinTeamSection = () => {
  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Build Real Impact",
      description: "Work on projects that shape the future of technology education for your peers and community"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Develop Skills",
      description: "Gain hands-on experience in leadership, event planning, tech innovation, and project management"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Create Community",
      description: "Connect with like-minded students passionate about technology, innovation, and positive change"
    }
  ];

  const roles = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Tech Development",
      description: "Build our platform, create interactive demos, and develop educational tools",
      skills: ["React", "Python", "AI/ML", "Web Development"],
      commitment: "5-10 hrs/week"
    },
    {
      icon: <Megaphone className="h-6 w-6" />,
      title: "Marketing & Outreach",
      description: "Spread the word, manage social media, and grow our community",
      skills: ["Social Media", "Content Creation", "Design", "Communication"],
      commitment: "3-8 hrs/week"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Event Planning",
      description: "Organize workshops, bootcamps, and tech events that inspire students",
      skills: ["Project Management", "Public Speaking", "Coordination", "Logistics"],
      commitment: "4-12 hrs/week"
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Content Creation",
      description: "Create educational content, tutorials, and documentation for our community",
      skills: ["Writing", "Video Editing", "Photography", "Curriculum Design"],
      commitment: "3-6 hrs/week"
    }
  ];

  const stats = [
    { number: "150+", label: "Active Members" },
    { number: "600+", label: "Students Reached" },
    { number: "15+", label: "Partner Companies" },
    { number: "8", label: "Major Events" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[rgb(var(--penn-blue))]/10 via-[rgb(var(--rich-black-2))] to-[rgb(var(--rich-black-3))]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">JOIN THE MOVEMENT</span>
          </h2>
          <p className="text-xl text-[rgb(var(--french-gray))]/80 max-w-3xl mx-auto mb-8">
            Be part of one of the fastest-growing youth-led tech communities shaping the future of education
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[rgb(var(--penn-blue))] mb-2">{stat.number}</div>
                <div className="text-sm text-[rgb(var(--french-gray))]/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-[rgb(var(--rich-black))]/80 border border-[rgb(var(--penn-blue))]/30 hover:border-[rgb(var(--penn-blue))]/50 transition-all duration-300 hover-glow animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[rgb(var(--penn-blue))]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[rgb(var(--penn-blue))]">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[rgb(var(--french-gray))] mb-4">{benefit.title}</h3>
                <p className="text-[rgb(var(--french-gray))]/80 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Available Roles */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">Open Positions</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {roles.map((role, index) => (
              <Card key={index} className="bg-[rgb(var(--rich-black))]/80 border border-[rgb(var(--penn-blue))]/30 hover:border-[rgb(var(--penn-blue))]/50 transition-all duration-300 hover-glow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[rgb(var(--penn-blue))]/20 rounded-lg flex items-center justify-center text-[rgb(var(--penn-blue))] flex-shrink-0">
                      {role.icon}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xl font-bold text-[rgb(var(--french-gray))] mb-2">{role.title}</h4>
                      <p className="text-[rgb(var(--french-gray))]/80 mb-4">{role.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-[rgb(var(--penn-blue))] mb-2">Skills Needed:</p>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill, idx) => (
                        <Badge key={idx} className="bg-[rgb(var(--penn-blue))]/20 text-[rgb(var(--penn-blue))] border-[rgb(var(--penn-blue))]/30 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[rgb(var(--french-gray))]/70">
                      <strong>Time Commitment:</strong> {role.commitment}
                    </span>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      Open
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-3xl mx-auto bg-[rgb(var(--rich-black))]/80 border border-[rgb(var(--penn-blue))]/30 hover-glow">
            <CardContent className="p-10">
              <h3 className="text-3xl font-bold text-[rgb(var(--french-gray))] mb-6">Ready to Make a Difference?</h3>
              <p className="text-[rgb(var(--french-gray))]/80 mb-8 text-lg leading-relaxed">
                Join a team of passionate students who are shaping the future of technology education. 
                Whether you're interested in event planning, content creation, tech development, or community outreach, 
                there's a place for you at Tech Expo. Together, we're building something extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[rgb(var(--penn-blue))] hover:bg-[rgb(var(--penn-blue))]/80 text-[rgb(var(--french-gray))] text-lg px-8 py-4">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Apply to Join
                </Button>
                <Button variant="outline" className="border-[rgb(var(--penn-blue))]/50 text-[rgb(var(--penn-blue))] hover:bg-[rgb(var(--penn-blue))]/10 text-lg px-8 py-4">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JoinTeamSection;
