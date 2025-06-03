
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Heart } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  author: string;
  tags: string[];
  likes: number;
  image?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  author,
  tags,
  likes,
  image
}) => {
  return (
    <Card className="tech-card group">
      {image && (
        <div className="h-48 bg-gradient-to-br from-electric-blue/20 to-cyber-cyan/20 rounded-t-lg flex items-center justify-center">
          <div className="text-glacier-white/50 text-6xl">📱</div>
        </div>
      )}
      
      <CardHeader>
        <CardTitle className="text-lg font-bold text-glacier-white group-hover:text-electric-blue transition-colors">
          {title}
        </CardTitle>
        <p className="text-electric-blue text-sm">by {author}</p>
      </CardHeader>
      
      <CardContent>
        <p className="text-glacier-white/80 mb-4 text-sm">{description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs bg-soft-charcoal/50 text-glacier-white border-electric-blue/30">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-glacier-white hover:text-electric-blue p-2">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-glacier-white hover:text-electric-blue p-2">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center space-x-1 text-glacier-white/70">
            <Heart className="h-4 w-4" />
            <span className="text-sm">{likes}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ProjectShowcase = () => {
  const projects = [
    {
      title: "AI Learning Assistant",
      description: "A machine learning powered study companion that adapts to individual learning styles.",
      author: "Sarah Chen",
      tags: ["AI", "Python", "TensorFlow"],
      likes: 42,
    },
    {
      title: "Sustainable Energy Monitor",
      description: "IoT dashboard for tracking renewable energy consumption in real-time.",
      author: "Marcus Rodriguez",
      tags: ["IoT", "React", "Arduino"],
      likes: 38,
    },
    {
      title: "Blockchain Voting System",
      description: "Secure, transparent voting platform using blockchain technology.",
      author: "Alex Kim",
      tags: ["Blockchain", "Solidity", "Web3"],
      likes: 56,
    },
  ];

  return (
    <section className="py-16 bg-tech-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="neon-text">Student Projects</span>
          </h2>
          <p className="text-xl text-glacier-white/80 max-w-2xl mx-auto">
            Discover innovative projects created by our community of student developers and creators.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="tech-button text-lg px-8 py-3">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
