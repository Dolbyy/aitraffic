
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

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
    if (window.location.pathname === '/') {
      // If on homepage, scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home and then to contact section
      navigate('/#contact');
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-automation-dark/90 backdrop-blur-md shadow-md' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/FastrAI.svg" 
            alt="FastrAI Logo"
            className="h-10 w-10 mr-2"
          />
          <h1 className="text-xl font-bold text-white">AI Traffic</h1>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-8">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/use-cases" className="text-gray-300 hover:text-white transition-colors">Use Cases</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li>
                <Link to="/blogs" className="text-gray-300 hover:text-white transition-colors">
                  Blogs
                </Link>
              </li>
            </ul>
          </nav>
          <Button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-automation-purple to-automation-blue hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Button>
        </div>
        
        <div className="md:hidden flex items-center space-x-4">
          <Link to="/blogs" className="text-gray-300 hover:text-white transition-colors">
            Blogs
          </Link>
          <Button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-automation-purple to-automation-blue hover:opacity-90 transition-opacity"
          >
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
