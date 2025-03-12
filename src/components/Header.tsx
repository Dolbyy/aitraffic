
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-automation-dark/90 backdrop-blur-md shadow-md' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 mr-3 rounded-lg bg-gradient-to-br from-automation-purple to-automation-blue flex items-center justify-center">
            <span className="text-white font-bold text-lg">AT</span>
          </div>
          <h1 className="text-xl font-bold text-white">AI Traffic</h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-8">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#use-cases" className="text-gray-300 hover:text-white transition-colors">Use Cases</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </nav>
          <Button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-automation-purple to-automation-blue hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Button>
        </div>
        
        <Button 
          onClick={scrollToContact}
          className="md:hidden bg-gradient-to-r from-automation-purple to-automation-blue hover:opacity-90 transition-opacity"
        >
          Contact
        </Button>
      </div>
    </header>
  );
};

export default Header;
