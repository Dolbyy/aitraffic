
import React from 'react';
import { Button } from '@/components/ui/button';
import { Zap, Bot, GitBranch, Network } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background with animated gradient elements */}
      <div className="absolute inset-0 bg-automation-dark z-0">
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-automation-purple/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-automation-blue/20 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <div className="flex items-center mb-4">
              <div className="flex items-center bg-white/10 rounded-full py-1 px-3 mr-2">
                <Zap size={14} className="text-automation-purple-light mr-1" />
                <span className="text-xs uppercase font-medium tracking-wider">AI Powered Automation</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              We can <span className="text-gradient">automate anything</span> for your business
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Just bring your problem – We solve it. Unlock efficiency and scale your operations with custom automation solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-automation-purple to-automation-blue hover:opacity-90 transition-opacity text-white px-8 py-6 text-lg"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-700 hover:bg-white/5 text-white px-8 py-6 text-lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-96 glass-card rounded-xl overflow-hidden animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-automation-purple/20 to-automation-blue/20"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 relative">
                  {/* Central AI Node */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-automation-purple rounded-full flex items-center justify-center z-10 shadow-lg shadow-automation-purple/50">
                    <Bot className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Branch Connections */}
                  <div className="absolute inset-0">
                    {/* Top branch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-28 bg-gradient-to-b from-automation-blue to-automation-purple"></div>
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-automation-blue rounded-full flex items-center justify-center">
                      <GitBranch className="w-5 h-5 text-white" />
                    </div>
                    
                    {/* Bottom branch */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-28 bg-gradient-to-t from-automation-blue to-automation-purple"></div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-10 h-10 bg-automation-blue rounded-full flex items-center justify-center">
                      <GitBranch className="w-5 h-5 text-white" />
                    </div>
                    
                    {/* Left branch */}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-2 w-28 bg-gradient-to-r from-automation-blue to-automation-purple"></div>
                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-automation-blue rounded-full flex items-center justify-center">
                      <Network className="w-5 h-5 text-white" />
                    </div>
                    
                    {/* Right branch */}
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-2 w-28 bg-gradient-to-l from-automation-blue to-automation-purple"></div>
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-10 h-10 bg-automation-blue rounded-full flex items-center justify-center">
                      <Network className="w-5 h-5 text-white" />
                    </div>
                    
                    {/* Diagonal branches */}
                    <div className="absolute top-14 left-14 transform -translate-x-1/2 -translate-y-1/2 w-2 h-28 bg-gradient-to-b from-automation-blue to-automation-purple rotate-45"></div>
                    <div className="absolute top-14 right-14 transform translate-x-1/2 -translate-y-1/2 w-2 h-28 bg-gradient-to-b from-automation-blue to-automation-purple -rotate-45"></div>
                    <div className="absolute bottom-14 left-14 transform -translate-x-1/2 translate-y-1/2 w-2 h-28 bg-gradient-to-t from-automation-blue to-automation-purple -rotate-45"></div>
                    <div className="absolute bottom-14 right-14 transform translate-x-1/2 translate-y-1/2 w-2 h-28 bg-gradient-to-t from-automation-blue to-automation-purple rotate-45"></div>
                    
                    {/* Additional connection nodes */}
                    <div className="absolute top-10 left-10 w-8 h-8 bg-automation-blue/80 rounded-full flex items-center justify-center">
                      <GitBranch className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute top-10 right-10 w-8 h-8 bg-automation-blue/80 rounded-full flex items-center justify-center">
                      <Network className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute bottom-10 left-10 w-8 h-8 bg-automation-blue/80 rounded-full flex items-center justify-center">
                      <Network className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute bottom-10 right-10 w-8 h-8 bg-automation-blue/80 rounded-full flex items-center justify-center">
                      <GitBranch className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  {/* Animated glowing effects */}
                  <div className="absolute top-0 left-0 w-16 h-16 bg-automation-purple/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-automation-blue/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-automation-dark via-automation-dark/80 to-transparent h-1/3"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-automation-dark-light p-4 rounded-lg glass-card">
              <div className="flex items-center">
                <Bot className="text-automation-purple mr-2" size={20} />
                <span className="text-gradient font-medium">Powered by n8n workflow automation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
