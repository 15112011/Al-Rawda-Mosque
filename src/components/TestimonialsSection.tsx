
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, User, Building } from 'lucide-react';

const TestimonialsSection = () => {
  const studentTestimonials = [
    {
      name: "Maya Hassan",
      role: "High School Student",
      school: "Cairo International School",
      quote: "Tech Expo completely changed how I see technology. I went from being intimidated by coding to building my first AI project in just a few months! The mentors didn't just teach us—they believed in us.",
      rating: 5,
      achievement: "Built AI-powered study assistant",
      image: "/media/pic 1.jpg"
    },
    {
      name: "Ahmed Mahmoud",
      role: "Bootcamp Graduate",
      school: "STEM School Graduate",
      quote: "The hands-on approach at Tech Expo is incredible. I learned more in one weekend than in months of online tutorials. Now I'm developing mobile apps and considering a computer science major.",
      rating: 5,
      achievement: "Published 2 mobile apps",
      image: "/media/pic 2.jpg"
    },
    {
      name: "Nour Ali",
      role: "Tech Expo Ambassador",
      school: "International School of Choueifat",
      quote: "Being part of Tech Expo's community gave me the confidence to pursue computer science. The mentorship and support are unmatched. I now help organize events and inspire other students.",
      rating: 5,
      achievement: "Event organizer & CS student",
      image: "/media/pic 1.jpg"
    },
    {
      name: "Omar Farid",
      role: "Workshop Participant",
      school: "British International School",
      quote: "The AI bootcamp opened my eyes to real-world applications. I'm now working on a startup idea that uses machine learning to help students with learning disabilities.",
      rating: 5,
      achievement: "Startup founder in progress",
      image: "/media/pic 2.jpg"
    }
  ];

  const partnerTestimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Education Director",
      company: "Microsoft",
      quote: "Tech Expo's approach to youth education is revolutionary. They're not just teaching technology—they're inspiring the next generation of innovators. The quality of students we've met through their programs is exceptional.",
      logo: "/media/microsoft_logo.svg"
    },
    {
      name: "Mark Chen",
      role: "Innovation Manager",
      company: "Matrix",
      quote: "Partnering with Tech Expo has been one of our best decisions. The students show incredible passion and fresh perspectives that push our own thinking forward. It's a true win-win collaboration.",
      logo: "/media/matrix 2.svg"
    },
    {
      name: "Fatima Al-Rashid",
      role: "Head of Talent Acquisition",
      company: "Dracode",
      quote: "Tech Expo students stand out from the crowd. They don't just have technical skills—they have the mindset and problem-solving abilities we look for in future leaders. We've hired several graduates.",
      logo: "/media/dracode.svg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-[rgb(var(--rich-black-3))] to-[rgb(var(--rich-black))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">What They're Saying About Tech Expo</span>
          </h2>
          <p className="text-xl text-[rgb(var(--french-gray))]/80 max-w-2xl mx-auto mb-4">
            Real impact. Real voices. Real change.
          </p>
          <p className="text-[rgb(var(--french-gray))]/70 max-w-3xl mx-auto">
            From rising Gen Z innovators to strategic partners, here's how Tech Expo is fueling ambition, 
            unlocking tech potential, and powering meaningful collaboration.
          </p>
        </div>
        

        <div className="mb-20">
          <div className="flex items-center justify-center gap-2 mb-12">
            <User className="h-6 w-6 text-[rgb(var(--penn-blue))]" />
            <h3 className="text-3xl font-bold text-[rgb(var(--penn-blue))]">What Students Say</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentTestimonials.map((testimonial, index) => (
              <Card key={index} className="bg-[rgb(var(--rich-black))]/80 border border-[rgb(var(--penn-blue))]/30 hover:border-[rgb(var(--penn-blue))]/50 transition-all duration-300 group hover-glow animate-slide-up overflow-hidden" style={{ animationDelay: `${index * 150}ms` }}>

                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--rich-black))] to-transparent opacity-70"></div>
                  <div className="absolute bottom-2 left-2 flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <CardContent className="p-6 h-full flex flex-col">
                  <Quote className="h-6 w-6 text-[rgb(var(--penn-blue))]/50 mb-4" />
                  
                  <p className="text-[rgb(var(--french-gray))]/90 mb-6 italic flex-grow text-sm leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="border-t border-[rgb(var(--penn-blue))]/20 pt-4 mt-auto">
                    <h4 className="font-bold text-[rgb(var(--french-gray))] text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-[rgb(var(--penn-blue))] mb-1">{testimonial.role}</p>
                    <p className="text-xs text-[rgb(var(--french-gray))]/60 mb-2">{testimonial.school}</p>
                    <div className="bg-[rgb(var(--penn-blue))]/10 rounded-full px-2 py-1">
                      <p className="text-xs text-[rgb(var(--penn-blue))] font-medium">{testimonial.achievement}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        

        <div>
          <div className="flex items-center justify-center gap-2 mb-12">
            <Building className="h-6 w-6 text-[rgb(var(--penn-blue))]" />
            <h3 className="text-3xl font-bold text-[rgb(var(--penn-blue))]">What Our Partners Say</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partnerTestimonials.map((testimonial, index) => (
              <Card key={index} className="bg-[rgb(var(--rich-black))]/80 border border-[rgb(var(--penn-blue))]/30 hover:border-[rgb(var(--penn-blue))]/50 transition-all duration-300 group hover-glow animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-2">
                      <img 
                        src={testimonial.logo} 
                        alt={testimonial.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[rgb(var(--french-gray))] text-sm">{testimonial.company}</h4>
                      <p className="text-xs text-[rgb(var(--penn-blue))]">Strategic Partner</p>
                    </div>
                  </div>
                  
                  <Quote className="h-8 w-8 text-[rgb(var(--penn-blue))]/50 mb-4" />
                  
                  <p className="text-[rgb(var(--french-gray))]/90 mb-6 italic flex-grow leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="border-t border-[rgb(var(--penn-blue))]/20 pt-4 mt-auto">
                    <h4 className="font-bold text-[rgb(var(--french-gray))]">{testimonial.name}</h4>
                    <p className="text-sm text-[rgb(var(--penn-blue))]">{testimonial.role}</p>
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
