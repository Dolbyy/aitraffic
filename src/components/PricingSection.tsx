
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Simple Chat Bot Automation",
    subtitle: "RAG Method",
    price: "Essentials",
    description: "Perfect for businesses looking to automate basic customer interactions",
    features: [
      "Custom chatbot with your business knowledge",
      "Integration with your website or platforms",
      "24/7 customer query handling",
      "Basic data collection and reporting"
    ],
    buttonText: "Get Started",
    highlight: false
  },
  {
    name: "Intermediate Level Automation",
    subtitle: "Business Process Optimization",
    price: "Growth",
    description: "Comprehensive automation for growing businesses with complex needs",
    features: [
      "Advanced workflow automation with n8n",
      "Multi-platform data integration",
      "Custom reporting and analytics",
      "CRM integration and lead management",
      "Email marketing automation",
      "Priority support and maintenance"
    ],
    buttonText: "Talk to an Expert",
    highlight: true
  },
  {
    name: "Enterprise Level Automation",
    subtitle: "End-to-End Solution",
    price: "Enterprise",
    description: "Completely customizable based on required modules and features",
    features: [
      "Full enterprise system integration",
      "Custom API development",
      "Advanced AI implementations",
      "Scalable infrastructure setup",
      "Dedicated support team",
      "Quarterly optimization and updates",
      "Employee training and documentation"
    ],
    buttonText: "Request Custom Quote",
    highlight: false
  }
];

const PricingSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Custom Automation Solutions
          </h2>
          <p className="text-xl text-gray-300">
            Discover tailored AI services designed to transform your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`glass-card rounded-xl p-8 flex flex-col h-full relative ${
                plan.highlight ? 'border-automation-purple' : 'border-white/10'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-max bg-gradient-to-r from-automation-purple to-automation-blue text-white py-1 px-4 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.subtitle}</p>
              </div>
              
              <div className="mb-6">
                <div className="text-3xl font-bold mb-2">{plan.price}</div>
                <p className="text-gray-400">{plan.description}</p>
              </div>
              
              <div className="flex-grow mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="text-automation-purple-light mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button
                onClick={scrollToContact} 
                className={`w-full py-6 ${
                  plan.highlight 
                    ? 'bg-gradient-to-r from-automation-purple to-automation-blue hover:opacity-90' 
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
