
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Check, Gift, Zap, Users, Calendar } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const benefits = [
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Early Access",
      description: "Be first to know about upcoming events and workshops"
    },
    {
      icon: <Gift className="h-5 w-5" />,
      title: "Exclusive Resources",
      description: "Access to premium learning materials and guides"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Latest Tech Insights",
      description: "Weekly updates on cutting-edge technology trends"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Community Access",
      description: "Join our private Discord with 600+ tech enthusiasts"
    }
  ];

  const stats = [
    { number: "5K+", label: "Subscribers" },
    { number: "98%", label: "Open Rate" },
    { number: "Weekly", label: "Updates" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[rgb(var(--penn-blue))]/10 to-[rgb(var(--rich-black-3))]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-[rgb(var(--rich-black))]/90 border border-[rgb(var(--penn-blue))]/30 hover-glow overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left Side - Content */}
                <div className="p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 bg-[rgb(var(--penn-blue))]/20 rounded-2xl flex items-center justify-center">
                      <Mail className="h-8 w-8 text-[rgb(var(--penn-blue))]" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">
                        <span className="text-gradient">Stay in the Loop</span>
                      </h2>
                      <Badge className="bg-[rgb(var(--penn-blue))]/20 text-[rgb(var(--penn-blue))] border-[rgb(var(--penn-blue))]/30 mt-1">
                        Join 5K+ Tech Enthusiasts
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-[rgb(var(--french-gray))]/90 mb-6 text-lg leading-relaxed">
                    Want early access to events, exclusive resources, and the latest in tech? 
                    Subscribe to our newsletter and be the first to know what's happening in the world of innovation.
                  </p>
                  
                  <p className="text-[rgb(var(--french-gray))]/70 mb-8">
                    When you join our community, you're not just getting updates, you're stepping into a world 
                    of opportunities that could shape your future in tech.
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-[rgb(var(--penn-blue))]">{stat.number}</div>
                        <div className="text-xs text-[rgb(var(--french-gray))]/70">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {isSubmitted ? (
                    <div className="flex items-center justify-center gap-3 text-green-400 bg-green-400/10 rounded-lg p-4">
                      <Check className="h-6 w-6" />
                      <div>
                        <p className="font-medium">Welcome to the community!</p>
                        <p className="text-sm text-green-400/80">Check your email for confirmation and exclusive resources.</p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="flex-1 bg-[rgb(var(--rich-black-3))] border-[rgb(var(--penn-blue))]/30 text-[rgb(var(--french-gray))] placeholder:text-[rgb(var(--french-gray))]/50 h-12"
                        />
                        <Button 
                          type="submit"
                          className="bg-[rgb(var(--penn-blue))] hover:bg-[rgb(var(--penn-blue))]/80 text-[rgb(var(--french-gray))] px-8 h-12 font-medium"
                        >
                          Sign Up Now
                        </Button>
                      </div>
                      <p className="text-xs text-[rgb(var(--french-gray))]/60">
                        No spam, unsubscribe at any time. We respect your privacy.
                      </p>
                    </form>
                  )}
                </div>
                
                {/* Right Side - Benefits */}
                <div className="bg-[rgb(var(--penn-blue))]/5 p-10 border-l border-[rgb(var(--penn-blue))]/20">
                  <h3 className="text-xl font-bold text-[rgb(var(--french-gray))] mb-6">What You'll Get:</h3>
                  <div className="space-y-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[rgb(var(--penn-blue))]/20 rounded-lg flex items-center justify-center text-[rgb(var(--penn-blue))] flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-[rgb(var(--french-gray))] mb-1">{benefit.title}</h4>
                          <p className="text-sm text-[rgb(var(--french-gray))]/70">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-[rgb(var(--penn-blue))]/10 rounded-lg border border-[rgb(var(--penn-blue))]/20">
                    <p className="text-sm text-[rgb(var(--penn-blue))] font-medium mb-1">🎯 Special Bonus</p>
                    <p className="text-xs text-[rgb(var(--french-gray))]/80">
                      New subscribers get instant access to our "Tech Career Roadmap" guide and exclusive Discord invite!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
