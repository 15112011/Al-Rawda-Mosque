
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, MapPin, Zap } from 'lucide-react';

const TimelineSection = () => {
  const timelineEvents = [
    {
      date: "June 1, 2024",
      title: "Tech Expo Launch",
      description: "Establishment of Tech Expo to bridge the gap between students and real-world technologies. A Next gen driven EdTech startup built to empower youth through innovative, hands-on experiences in tech fields.",
      type: "milestone",
      attendees: null,
      location: null,
      color: "tech-purple"
    },
    {
      date: "August 16, 2024",
      title: "Unleash the Power of Technology",
      description: "Introductory sessions covering multiple fields of technology, designed to ignite curiosity and foundational knowledge.",
      type: "event",
      attendees: "150+",
      location: "Maadi Public Library",
      color: "tech-cyan"
    },
    {
      date: "February 1, 2025",
      title: "AI Bootcamp",
      description: "Interactive talks focused on AI in daily life, content creation, and personal growth through digital innovation.",
      type: "event",
      attendees: "600+",
      location: "Ivy STEM International school",
      color: "tech-green"
    },
    {
      date: "Coming Soon",
      title: "Next Upgrade Loading...",
      description: "The journey continues. Upcoming events and workshops are in progress. Stay tuned for exciting announcements.",
      type: "upcoming",
      attendees: null,
      location: "To be announced",
      color: "tech-orange"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'tech-purple': return 'from-[rgb(var(--tech-purple-bright))]/25 to-[rgb(var(--tech-cyan-bright))]/25 text-[rgb(var(--tech-purple-bright))]';
      case 'tech-cyan': return 'from-[rgb(var(--tech-cyan-bright))]/25 to-[rgb(var(--tech-green-bright))]/25 text-[rgb(var(--tech-cyan-bright))]';
      case 'tech-green': return 'from-[rgb(var(--tech-green-bright))]/25 to-[rgb(var(--tech-orange-bright))]/25 text-[rgb(var(--tech-green-bright))]';
      case 'tech-orange': return 'from-[rgb(var(--tech-orange-bright))]/25 to-[rgb(var(--tech-pink))]/25 text-[rgb(var(--tech-orange-bright))]';
      default: return 'from-[rgb(var(--tech-cyan-bright))]/25 to-[rgb(var(--tech-purple-bright))]/25 text-[rgb(var(--tech-cyan-bright))]';
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-[rgb(var(--rich-black))] to-[rgb(var(--rich-black-2))]">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[rgb(var(--rich-black))]/70 backdrop-blur-sm border-2 border-[rgb(var(--tech-cyan-bright))]/40 rounded-full px-6 py-3 mb-6 hover-glow">
            <Zap className="h-4 w-4 text-[rgb(var(--tech-cyan-bright))] animate-pulse-glow" />
            <span className="text-sm font-medium text-[rgb(var(--french-gray-light))]">Our Story</span>
          </div>
          <h2 className="heading-lg mb-6">
            <span className="text-gradient animate-color-shift">Our Journey</span>
          </h2>
          <p className="text-body text-[rgb(var(--french-gray-light))]/85 max-w-3xl mx-auto">
            From a bold idea to a growing movement, here's how Tech Expo began transforming tech education for Gen Z.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Enhanced timeline line with gradient */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-[rgb(var(--tech-cyan-bright))]/40 via-[rgb(var(--tech-purple-bright))]/60 to-[rgb(var(--tech-green-bright))]/40 rounded-full"></div>
            
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12 last:mb-0`}>
                {/* Enhanced timeline dot with glow */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-[rgb(var(--rich-black))] z-10 bg-gradient-to-br ${getColorClasses(event.color).split(' ').slice(0, 2).join(' ')} animate-pulse-glow`}></div>
                
                {/* Content card with enhanced styling */}
                <Card className={`w-5/12 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} card-gradient card-hover hover-glow animate-slide-up border-2 border-[rgb(var(--tech-cyan))]/30`} style={{ animationDelay: `${index * 200}ms` }}>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className={`bg-gradient-to-r ${getColorClasses(event.color)} border-2 border-current text-xs px-3 py-1.5 font-bold`}>
                        {event.type === 'milestone' ? 'Launch' : event.type === 'upcoming' ? 'Coming Soon' : 'Event'}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-[rgb(var(--french-gray-light))]/80">
                        <Calendar className="h-4 w-4 text-[rgb(var(--tech-cyan-bright))]" />
                        {event.date}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[rgb(var(--french-gray-light))] mb-4">{event.title}</h3>
                    <p className="text-[rgb(var(--french-gray-light))]/90 mb-6 leading-relaxed">{event.description}</p>
                    
                    {(event.attendees || event.location) && (
                      <div className="flex flex-wrap gap-4 text-sm">
                        {event.location && (
                          <div className="flex items-center gap-2 text-[rgb(var(--french-gray-light))]/85">
                            <MapPin className="h-4 w-4 text-[rgb(var(--tech-cyan-bright))]" />
                            {event.location}
                          </div>
                        )}
                        {event.attendees && (
                          <div className="flex items-center gap-2 text-[rgb(var(--french-gray-light))]/85">
                            <Users className="h-4 w-4 text-[rgb(var(--tech-green-bright))]" />
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
