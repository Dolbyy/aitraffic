
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Phone, User, Send } from 'lucide-react';
import { useContactForm } from '@/hooks/useContactForm';

const ContactForm = () => {
  const { formData, errors, isSubmitting, handleChange, handleSubmit } = useContactForm();

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">
            <span className="flex items-center gap-2">
              <User size={16} className="text-automation-purple-light" />
              Your Name
            </span>
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={`bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} focus:border-automation-purple-light`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            <span className="flex items-center gap-2">
              <Mail size={16} className="text-automation-purple-light" />
              Email Address
            </span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={`bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} focus:border-automation-purple-light`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-white">
            <span className="flex items-center gap-2">
              <Phone size={16} className="text-automation-purple-light" />
              Phone Number
            </span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 12345 67890"
            className={`bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} focus:border-automation-purple-light`}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full py-6 bg-gradient-to-r from-automation-purple to-automation-blue hover:opacity-90"
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
              <span>Sending...</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Send size={18} />
              <span>Get Started</span>
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
