
import React from 'react';
import { CheckCircle } from 'lucide-react';

const useCases = [
  "Automated customer onboarding that saves 15+ hours per week",
  "Lead qualification workflows that increase conversion rates by 35%",
  "Data synchronization between platforms eliminating manual updates",
  "Email marketing sequences that nurture leads while you sleep",
  "Intelligent document processing that extracts and routes information automatically",
  "Customer support chatbots that handle 80% of common inquiries",
  "Social media content scheduling and publishing across multiple platforms",
  "Inventory management and automated reordering systems"
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-20 bg-gradient-to-b from-automation-dark to-automation-dark-light relative">
      <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Real-Life Business Problems, <span className="text-gradient">Solved</span>
            </h2>
            <p className="text-xl text-gray-300">
              Businesses just like yours are already saving time, reducing errors, and scaling operations with 
              custom automation solutions. Here's how:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-start p-4 glass-card rounded-xl">
                <CheckCircle className="text-automation-purple-light mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg">{useCase}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 glass-card rounded-xl bg-gradient-to-r from-automation-purple/10 to-automation-blue/10">
            <p className="text-xl font-medium text-center">
              "If you're spending hours on repetitive tasks, manually transferring data, or struggling to keep up with customer inquiries, 
              there's a better way. These are exactly the problems I solve every day."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
