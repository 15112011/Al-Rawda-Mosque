
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Target, Lightbulb, Users } from 'lucide-react';

const FuturePlansSection = () => {
  const plans = [
    {
      title: "AI Ethics Workshop Series",
      description: "Monthly workshops exploring the ethical implications of artificial intelligence in society.",
      timeline: "Q2 2025",
      status: "Planning",
      icon: Lightbulb,
      category: "Education"
    },
    {
      title: "Tech Impact Documentary",
      description: "Collaborative documentary project showcasing technology's effects on different communities.",
      timeline: "Q3 2025",
      status: "Research",
      icon: Target,
      category: "Media"
    },
    {
      title: "Youth Coding Bootcamp",
      description: "Free coding bootcamp for underserved youth, focusing on technology's social applications.",
      timeline: "Q4 2025",
      status: "Funding",
      icon: Users,
      category: "Outreach"
    },
    {
      title: "Global Tech Summit",
      description: "International conference bringing together volunteers, researchers, and tech leaders.",
      timeline: "2026",
      status: "Vision",
      icon: Calendar,
      category: "Event"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Planning": return "bg-blue-600/20 text-blue-400 border-blue-600/30";
      case "Research": return "bg-yellow-600/20 text-yellow-400 border-yellow-600/30";
      case "Funding": return "bg-orange-600/20 text-orange-400 border-orange-600/30";
      case "Vision": return "bg-purple-600/20 text-purple-400 border-purple-600/30";
      default: return "bg-gray-600/20 text-gray-400 border-gray-600/30";
    }
  };

  return (
    <section id="future" className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Future Plans</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our roadmap for expanding technology education and awareness
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <Card key={index} className="bg-slate-800/50 border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <plan.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-gray-200 group-hover:text-blue-400 transition-colors">
                        {plan.title}
                      </CardTitle>
                      <p className="text-sm text-gray-400">{plan.timeline}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(plan.status)}>
                    {plan.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-300 mb-3">{plan.description}</p>
                <Badge variant="outline" className="border-blue-600/30 text-blue-400">
                  {plan.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-slate-800/50 border border-blue-800/30 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-200 mb-4">Join Our Vision</h3>
            <p className="text-gray-300 mb-6">
              We're always looking for passionate volunteers to help us explore and understand technology's impact on society. 
              Whether you're a developer, researcher, designer, or simply curious about tech's role in our world, there's a place for you on our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                Volunteer With Us
              </button>
              <button className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-colors">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturePlansSection;
