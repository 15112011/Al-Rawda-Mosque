
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail } from 'lucide-react';

const MembersSection = () => {
  const members = [
    {
      name: "Alex Rodriguez",
      role: "Team Lead",
      specialization: "AI & Machine Learning",
      bio: "Passionate about exploring AI's societal impact and ethical implications.",
      avatar: "👨‍💻",
    },
    {
      name: "Sarah Chen",
      role: "Frontend Developer",
      specialization: "Interactive Demos",
      bio: "Creates engaging visualizations to demonstrate technology concepts.",
      avatar: "👩‍💻",
    },
    {
      name: "Marcus Thompson",
      role: "Research Coordinator",
      specialization: "Tech Ethics",
      bio: "Researches the social and economic impacts of emerging technologies.",
      avatar: "👨‍🔬",
    },
    {
      name: "Emily Davis",
      role: "Event Organizer",
      specialization: "Community Outreach",
      bio: "Coordinates events and builds partnerships with educational institutions.",
      avatar: "👩‍🎓",
    },
    {
      name: "Jordan Kim",
      role: "Content Creator",
      specialization: "Digital Storytelling",
      bio: "Crafts compelling narratives about technology's role in our daily lives.",
      avatar: "🎨",
    },
    {
      name: "Taylor Johnson",
      role: "Data Analyst",
      specialization: "Impact Metrics",
      bio: "Analyzes data to measure technology's effects on various communities.",
      avatar: "📊",
    },
  ];

  return (
    <section id="members" className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Our Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the passionate volunteers driving our mission forward
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <Card key={index} className="bg-slate-800/50 border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <CardTitle className="text-gray-200 group-hover:text-blue-400 transition-colors">
                  {member.name}
                </CardTitle>
                <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30">
                  {member.role}
                </Badge>
              </CardHeader>
              
              <CardContent>
                <div className="mb-3">
                  <h4 className="font-semibold text-blue-400 text-sm mb-1">Specialization</h4>
                  <p className="text-gray-300 text-sm">{member.specialization}</p>
                </div>
                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                
                <div className="flex justify-center space-x-2">
                  <button className="p-2 rounded-full bg-slate-700 hover:bg-blue-600 text-gray-400 hover:text-white transition-colors">
                    <Github className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded-full bg-slate-700 hover:bg-blue-600 text-gray-400 hover:text-white transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded-full bg-slate-700 hover:bg-blue-600 text-gray-400 hover:text-white transition-colors">
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
