
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Let's Solve Your Business Challenges</h2>
      <p className="text-gray-300 mb-8">
        Take the first step toward automating your business processes. 
        Fill out this form, and I'll get back to you to discuss how we can work together.
      </p>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-white/10 p-3 rounded-lg mr-4">
            <Mail className="text-automation-purple-light" size={24} />
          </div>
          <div>
            <h4 className="text-lg font-medium">Email</h4>
            <p className="text-gray-400">venkataprasanth6@gmail.com</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-white/10 p-3 rounded-lg mr-4">
            <Phone className="text-automation-purple-light" size={24} />
          </div>
          <div>
            <h4 className="text-lg font-medium">Phone</h4>
            <p className="text-gray-400">+91 9003451965</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
