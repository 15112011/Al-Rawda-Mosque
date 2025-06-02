
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Check } from 'lucide-react';

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

  return (
    <section className="py-16 bg-gradient-to-r from-[rgb(var(--penn-blue))]/10 to-[rgb(var(--rich-black-3))]">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto bg-[rgb(var(--rich-black))]/80 border border-[rgb(var(--penn-blue))]/30 hover-glow">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-[rgb(var(--penn-blue))]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-[rgb(var(--penn-blue))]" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gradient">Stay in the Loop</span>
            </h2>
            
            <p className="text-[rgb(var(--french-gray))]/80 mb-6 max-w-lg mx-auto">
              Want early access to events, exclusive resources, and the latest in tech? 
              Subscribe to our newsletter and be the first to know what's happening in the world of innovation.
            </p>
            
            <p className="text-sm text-[rgb(var(--french-gray))]/70 mb-8">
              When you join our community, you're not just getting updates, you're stepping into a world 
              of opportunities that could shape your future in tech.
            </p>
            
            {isSubmitted ? (
              <div className="flex items-center justify-center gap-2 text-green-400">
                <Check className="h-5 w-5" />
                <span>Thanks for subscribing! Check your email for confirmation.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-[rgb(var(--rich-black-3))] border-[rgb(var(--penn-blue))]/30 text-[rgb(var(--french-gray))] placeholder:text-[rgb(var(--french-gray))]/50"
                />
                <Button 
                  type="submit"
                  className="bg-[rgb(var(--penn-blue))] hover:bg-[rgb(var(--penn-blue))]/80 text-[rgb(var(--french-gray))] px-8"
                >
                  Sign Up Now
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSection;
