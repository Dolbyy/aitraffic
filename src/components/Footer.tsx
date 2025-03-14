
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-automation-dark-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src="/FastrAI.svg" alt="AI Traffic Logo" className="h-8 w-8 mr-2" />
              <span className="text-white font-semibold">AI Traffic</span>
            </Link>
            <p className="text-gray-400 ml-2">
              © {currentYear} aitraffic.in. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
            <Link to="/use-cases" className="text-gray-400 hover:text-white transition-colors">Use Cases</Link>
            <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link>
            <Link to="/blogs" className="text-gray-400 hover:text-white transition-colors">Blogs</Link>
            <Link to="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
