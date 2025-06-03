
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Eye } from 'lucide-react';

const PastEventsSection = () => {
  const pastEvents = [
    {
      title: "Unleash the Power of Technology",
      date: "August 16, 2024",
      location: "Maadi Public Library",
      attendees: "150+",
      description: "An introductory experience to emerging fields in technology. Attended by curious minds eager to explore pathways in innovation, software, hardware, robotics, and more.",
      highlights: ["Technology Overview", "Innovation Pathways", "Hands-on Demos", "Networking"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
    },
    {
      title: "AI Bootcamp: Intelligence in Everyday Life",
      date: "February 1, 2025",
      location: "IVY STEM International School",
      attendees: "600+",
      description: "A deep dive into real-world AI applications, focusing on content creation, personal branding, CV optimization, and the influence of artificial intelligence across lifestyle and work.",
      highlights: ["AI Applications", "Content Creation", "Personal Branding", "Interactive Workshops"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[rgb(var(--rich-black-2))] to-[rgb(var(--rich-black-3))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Past Events That Made an Impact</span>
          </h2>
          <p className="text-xl text-[rgb(var(--french-gray))]/80 max-w-2xl mx-auto">
            Real experiences, real learning, real impact on our community
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {pastEvents.map((event, index) => (
            <Card key={index} className="bg-[rgb(var(--rich-black))]/80 border border-[rgb(var(--penn-blue))]/30 hover:border-[rgb(var(--penn-blue))]/50 transition-all duration-300 group hover-glow overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--rich-black))]/80 to-transparent"></div>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-[rgb(var(--french-gray))] group-hover:text-[rgb(var(--penn-blue))] transition-colors">
                    {event.title}
                  </CardTitle>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center text-[rgb(var(--french-gray))]/70 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-[rgb(var(--french-gray))]/70 text-sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-[rgb(var(--french-gray))]/70 text-sm">
                    <Users className="h-4 w-4 mr-2" />
                    {event.attendees} attendees
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-[rgb(var(--french-gray))]/80 mb-4">{event.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {event.highlights.map((highlight, idx) => (
                    <Badge 
                      key={idx} 
                      className="bg-[rgb(var(--penn-blue))]/20 text-[rgb(var(--penn-blue))] border-[rgb(var(--penn-blue))]/30"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
                
                <Button className="w-full bg-[rgb(var(--penn-blue))] hover:bg-[rgb(var(--penn-blue))]/80 text-[rgb(var(--french-gray))]">
                  <Eye className="h-4 w-4 mr-2" />
                  View Highlights
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-[rgb(var(--penn-blue))] hover:bg-[rgb(var(--penn-blue))]/80 text-[rgb(var(--french-gray))] text-lg px-8 py-4">
            View Upcoming Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PastEventsSection;
