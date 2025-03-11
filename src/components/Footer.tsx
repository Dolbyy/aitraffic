
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-automation-dark-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-8 h-8 mr-2 rounded-lg bg-gradient-to-br from-automation-purple to-automation-blue flex items-center justify-center">
              <span className="text-white font-bold text-sm">VJ</span>
            </div>
            <p className="text-gray-400">
              © {currentYear} FastrAI.com. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="#use-cases" className="text-gray-400 hover:text-white transition-colors">Use Cases</a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
