import React from 'react';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
    <section className="bg-ink px-[5%] py-24 text-center relative overflow-hidden">
      {/* Decorative text background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-playfair text-[clamp(6rem,15vw,14rem)] font-black text-[rgba(200,151,58,0.05)] whitespace-nowrap pointer-events-none select-none tracking-tighter">
        Tenant Mitra
      </div>
      
      <div className="relative z-10">
        <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-blue-light mb-3">Ready to Transform Your PG?</p>
        <h2 className="font-playfair text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-tight text-paper mb-4 max-w-[700px] mx-auto">Start Managing Smarter Today</h2>
        <p className="text-base text-[rgba(249,246,240,0.6)] leading-[1.7] max-w-[600px] mx-auto mb-10">Join 500+ PG owners who've simplified operations and grown profits with Tenant Mitra. Setup takes less than 10 minutes.</p>
        
        <div className="flex gap-4 items-center justify-center flex-wrap">
          <a href="https://pg.biosoftech.in/Auth" className="px-8 py-3.5 bg-blue-bright text-white border-none rounded-lg text-[0.95rem] font-semibold cursor-pointer no-underline inline-flex items-center gap-2 transition-all shadow-[0_4px_20px_rgba(41,121,255,0.25)] hover:bg-blue-light hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(41,121,255,0.4)]">
            Get Started Free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <Link to="/contact" className="px-6 py-3.5 text-[rgba(249,246,240,0.7)] text-[0.95rem] font-medium cursor-pointer no-underline inline-flex items-center gap-2 transition-all hover:text-paper hover:gap-3">
            Schedule a Demo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
