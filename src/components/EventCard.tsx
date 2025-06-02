
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
    <Card className={`tech-card group cursor-pointer ${featured ? 'animate-glow-pulse' : ''}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-bold text-glacier-white group-hover:text-electric-blue transition-colors">
            {title}
          </CardTitle>
          {featured && (
            <Star className="h-5 w-5 text-electric-blue fill-current" />
          )}
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge className="bg-electric-blue/20 text-electric-blue border-electric-blue/30">
            {category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-glacier-white/80 mb-4">{description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-glacier-white/70 text-sm">
            <Calendar className="h-4 w-4 mr-2" />
            {date}
          </div>
          <div className="flex items-center text-glacier-white/70 text-sm">
            <MapPin className="h-4 w-4 mr-2" />
            {location}
          </div>
          <div className="flex items-center text-glacier-white/70 text-sm">
            <Users className="h-4 w-4 mr-2" />
            {attendees} attendees
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full tech-button">
          Register Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
