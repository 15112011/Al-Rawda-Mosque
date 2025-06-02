
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const studentTestimonials = [
    {
      name: "Maya Hassan",
      role: "High School Student",
      quote: "Tech Expo completely changed how I see technology. I went from being intimidated by coding to building my first AI project in just a few months!",
      rating: 5
    },
    {
      name: "Ahmed Mahmoud",
      role: "Bootcamp Graduate",
      quote: "The hands-on approach at Tech Expo is incredible. I learned more in one weekend than in months of online tutorials.",
      rating: 5
    },
    {
      name: "Nour Ali",
      role: "Event Attendee",
      quote: "Being part of Tech Expo's community gave me the confidence to pursue computer science. The mentorship and support are unmatched.",
      rating: 5
    }
  ];

  const partnerTestimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Education Director, TechCorp",
      quote: "Tech Expo's approach to youth education is revolutionary. They're not just teaching technology—they're inspiring the next generation of innovators.",
      company: "TechCorp"
    },
    {
      name: "Mark Chen",
      role: "Innovation Manager, Future Labs",
      quote: "Partnering with Tech Expo has been one of our best decisions. The quality of students and their passion for technology is exceptional.",
      company: "Future Labs"
    }
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">What They're Saying About Tech Expo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real impact. Real voices. Real change.
          </p>
          <p className="text-gray-400 mt-2">
            From rising Gen Z innovators to strategic partners, here's how Tech Expo is fueling ambition, unlocking tech potential, and powering meaningful collaboration.
          </p>
        </div>
        
        {/* Student Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-blue-400">What Students Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentTestimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/50 border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <Quote className="h-8 w-8 text-blue-400/50 mb-4" />
                  
                  <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                  
                  <div className="border-t border-gray-700 pt-4">
                    <h4 className="font-semibold text-gray-200">{testimonial.name}</h4>
                    <p className="text-sm text-blue-400">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Partner Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-blue-400">What Our Partners Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {partnerTestimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/50 border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-blue-400/50 mb-4" />
                  
                  <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                  
                  <div className="border-t border-gray-700 pt-4">
                    <h4 className="font-semibold text-gray-200">{testimonial.name}</h4>
                    <p className="text-sm text-blue-400">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
