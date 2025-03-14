
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import UseCasesSection from '@/components/UseCasesSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import BlogsSection from '@/components/BlogsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-automation-dark text-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <UseCasesSection />
        <PricingSection />
        <BlogsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
