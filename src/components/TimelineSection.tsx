
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, MapPin } from 'lucide-react';

const TimelineSection = () => {
  const timelineEvents = [
    {
      date: "June 1, 2024",
      title: "Tech Expo Launch",
      description: "Establishment of Tech Expo to bridge the gap between students and real-world technologies. A Next gen driven EdTech startup built to empower youth through innovative, hands-on experiences in tech fields.",
      type: "milestone",
      attendees: null,
      location: null
    },
    {
      date: "August 16, 2024",
      title: "Unleash the Power of Technology",
      description: "Introductory sessions covering multiple fields of technology, designed to ignite curiosity and foundational knowledge.",
      type: "event",
      attendees: "150+",
      location: "Maadi Public Library"
    },
    {
      date: "February 1, 2025",
      title: "AI Bootcamp",
      description: "Interactive talks focused on AI in daily life, content creation, and personal growth through digital innovation.",
      type: "event",
      attendees: "600+",
      location: "Ivy STEM International school"
    },
    {
      date: "Coming Soon",
      title: "Next Upgrade Loading...",
      description: "The journey continues. Upcoming events and workshops are in progress. Stay tuned for exciting announcements.",
      type: "upcoming",
      attendees: null,
      location: "To be announced"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[rgb(var(--rich-black))] to-[rgb(var(--rich-black-2))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Our Journey</span>
          </h2>
          <p className="text-xl text-[rgb(var(--french-gray))]/80 max-w-2xl mx-auto">
            From a bold idea to a growing movement, here's how Tech Expo began.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-[rgb(var(--penn-blue))]/30"></div>
            
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[rgb(var(--penn-blue))] rounded-full border-4 border-[rgb(var(--rich-black))] z-10"></div>
                
                {/* Content card */}
                <Card className={`w-5/12 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} bg-[rgb(var(--rich-black-3))]/80 border border-[rgb(var(--penn-blue))]/30 hover:border-[rgb(var(--penn-blue))]/50 transition-all duration-300 hover-glow`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={`${
                        event.type === 'milestone' ? 'bg-[rgb(var(--penn-blue))]/20 text-[rgb(var(--penn-blue))]' :
                        event.type === 'upcoming' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      } border-current/30`}>
                        {event.type === 'milestone' ? 'Launch' : event.type === 'upcoming' ? 'Coming Soon' : 'Event'}
                      </Badge>
                      <span className="text-sm text-[rgb(var(--french-gray))]/70">{event.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[rgb(var(--french-gray))] mb-3">{event.title}</h3>
                    <p className="text-[rgb(var(--french-gray))]/80 mb-4">{event.description}</p>
                    
                    {(event.attendees || event.location) && (
                      <div className="flex flex-wrap gap-4 text-sm text-[rgb(var(--french-gray))]/70">
                        {event.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {event.location}
                          </div>
                        )}
                        {event.attendees && (
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {event.attendees} attendees
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
