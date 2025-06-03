
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Star } from 'lucide-react';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
  attendees: number;
  category: string;
  featured?: boolean;
  image?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  date,
  location,
  attendees,
  category,
  featured = false,
  image = '/media/pic 2.jpg' // Default image if none provided
}) => {
  return (
    <Card className={`overflow-hidden bg-[rgb(var(--rich-black))]/80 border border-[rgb(var(--penn-blue))]/30 hover:border-[rgb(var(--penn-blue))]/50 transition-all duration-300 group hover-glow ${featured ? 'glow-effect' : ''}`}>
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--rich-black))] to-transparent opacity-70"></div>
        {featured && (
          <div className="absolute top-2 right-2 bg-[rgb(var(--tech-cyan))]/80 rounded-full p-1">
            <Star className="h-5 w-5 text-white fill-current" />
          </div>
        )}
        <div className="absolute bottom-2 left-2">
          <Badge className="bg-[rgb(var(--tech-purple))]/80 text-white border-none">
            {category}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-bold text-[rgb(var(--french-gray))] group-hover:text-[rgb(var(--penn-blue))] transition-colors">
            {title}
          </CardTitle>
          {featured && (
            <Star className="h-5 w-5 text-[rgb(var(--penn-blue))] fill-current" />
          )}
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge className="bg-[rgb(var(--penn-blue))]/20 text-[rgb(var(--penn-blue))] border-[rgb(var(--penn-blue))]/30">
            {category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-[rgb(var(--french-gray))]/80 mb-4">{description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-[rgb(var(--french-gray))]/70 text-sm">
            <Calendar className="h-4 w-4 mr-2" />
            {date}
          </div>
          <div className="flex items-center text-[rgb(var(--french-gray))]/70 text-sm">
            <MapPin className="h-4 w-4 mr-2" />
            {location}
          </div>
          <div className="flex items-center text-[rgb(var(--french-gray))]/70 text-sm">
            <Users className="h-4 w-4 mr-2" />
            {attendees} attendees
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full bg-[rgb(var(--penn-blue))] hover:bg-[rgb(var(--penn-blue))]/80 text-[rgb(var(--french-gray))]">
          Register Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
