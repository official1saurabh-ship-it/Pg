import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Modules from './components/Modules';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

const LandingPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <div className="reveal"><Features /></div>
      <div className="reveal"><HowItWorks /></div>
      <div className="reveal"><Modules /></div>
      <div className="reveal"><Pricing /></div>
      <div className="reveal"><Testimonials /></div>
      <div className="reveal"><CTABanner /></div>
      <Footer />
    </div>
  );
};

export default LandingPage;
