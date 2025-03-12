
import React from 'react';
import { Zap, Mail, Bot, Database, Calendar, Users, MessageCircle, LineChart } from 'lucide-react';

const serviceItems = [
  {
    icon: <Mail className="w-6 h-6 text-automation-purple-light" />,
    title: "Email Automation",
    description: "Fully customized email workflows to nurture leads and engage customers automatically."
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-automation-blue-light" />,
    title: "Whatsapp Automation",
    description: "Connect your social channels to automatically engage with mentions and messages."
  },
  {
    icon: <Bot className="w-6 h-6 text-automation-blue-light" />,
    title: "Chatbot Creation",
    description: "Smart AI-powered chatbots that handle customer inquiries and qualify leads 24/7."
  },
  {
    icon: <Database className="w-6 h-6 text-automation-purple-light" />,
    title: "Data Integration",
    description: "Seamlessly connect your business tools and create a single source of truth for your data."
  },
  {
    icon: <Calendar className="w-6 h-6 text-automation-blue-light" />,
    title: "Scheduling Workflows",
    description: "Automated appointment booking and calendar management to eliminate scheduling hassles."
  },
  {
    icon: <Users className="w-6 h-6 text-automation-purple-light" />,
    title: "Lead Management",
    description: "Automatically capture, qualify and route leads to the right teams without manual work."
  },
  {
    icon: <LineChart className="w-6 h-6 text-automation-purple-light" />,
    title: "Reporting Automation",
    description: "Generate and deliver custom reports automatically to stakeholders on schedule."
  },
  {
    icon: <Zap className="w-6 h-6 text-automation-blue-light" />,
    title: "Custom Workflows",
    description: "Tailor-made automation workflows designed specifically for your unique business needs."
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What We Can Do For You
          </h2>
          <p className="text-xl text-gray-300">
            As an AI Agent & Automation Company, We leverage <span className="font-medium text-automation-purple-light">n8n</span> to create fully automated, 
            tailored solutions that solve real business problems and save you countless hours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceItems.map((service, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="bg-white/5 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
