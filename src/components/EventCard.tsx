
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
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  date,
  location,
  attendees,
  category,
  featured = false
}) => {
  return (
    <Card className={`bg-[rgb(var(--rich-black))]/80 border border-[rgb(var(--penn-blue))]/30 hover:border-[rgb(var(--penn-blue))]/50 transition-all duration-300 group hover-glow ${featured ? 'glow-effect' : ''}`}>
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
