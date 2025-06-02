
import React from 'react';
import EventCard from './EventCard';

const EventsSection = () => {
  const events = [
    {
      title: "AI & Machine Learning Bootcamp",
      description: "Dive deep into artificial intelligence and machine learning concepts with hands-on projects and industry mentors.",
      date: "June 15-30, 2025",
      location: "Tech Hub Campus",
      attendees: 156,
      category: "Bootcamp",
      featured: true,
    },
    {
      title: "Blockchain Development Workshop",
      description: "Learn to build decentralized applications and smart contracts on various blockchain platforms.",
      date: "July 8-10, 2025",
      location: "Innovation Center",
      attendees: 89,
      category: "Workshop",
    },
    {
      title: "Mobile App Design Sprint",
      description: "From ideation to prototype in 48 hours. Create stunning mobile experiences with cross-platform tools.",
      date: "July 22-24, 2025",
      location: "Design Studio",
      attendees: 124,
      category: "Hackathon",
    },
    {
      title: "Cybersecurity Fundamentals",
      description: "Essential security practices for modern applications. Learn about threats, vulnerabilities, and defense strategies.",
      date: "August 5-7, 2025",
      location: "Security Lab",
      attendees: 67,
      category: "Course",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[rgb(var(--rich-black-2))] to-[rgb(var(--rich-black-3))]/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Upcoming Events</span>
          </h2>
          <p className="text-xl text-[rgb(var(--french-gray))]/80 max-w-2xl mx-auto">
            Join our community events, bootcamps, and workshops designed to accelerate your tech journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
