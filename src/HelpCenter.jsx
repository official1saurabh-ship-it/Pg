import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const HelpCenter = () => {
  const [activeIndex, setActiveIndex] = useState(null);

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

  const categories = [
    {
      title: "Getting Started",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
      articles: ["Setting up your first PG", "Adding your staff", "Basic configuration"]
    },
    {
      title: "Rent & Payments",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
      articles: ["Automatic billing", "GST invoicing", "Partial payments"]
    },
    {
      title: "Tenant Management",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
      articles: ["Tenant KYC process", "Notice period management", "Digital agreements"]
    },
    {
      title: "Inventory & Assets",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>,
      articles: ["Room allocation", "Asset tracking", "Maintenance requests"]
    }
  ];

  const faqs = [
    {
      q: "How safe is my tenant data?",
      a: "We use bank-grade AES-256 encryption for all data at rest. Your tenant records are protected by multiple layers of security and regular backups."
    },
    {
      q: "Can I use Tenant Mitra on my mobile?",
      a: "Yes! Tenant Mitra is a responsive web application that works perfectly on all devices. We also have dedicated Android and iOS apps for owners."
    },
    {
      q: "Is there a limit on the number of tenants?",
      a: "Our pricing plans are tiered based on the number of beds/tenants. You can start with our 'Starter' plan and scale as your business grows."
    }
  ];

  return (
    <div className="relative">
      <Navbar />
      
      {/* Search Hero Section */}
      <section className="pt-32 pb-20 px-[5%] bg-ink text-paper relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[40%] h-[100%] bg-[radial-gradient(ellipse_at_top_right,rgba(21,101,192,0.15)_0%,transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[rgba(244,247,252,0.1)] border border-[rgba(244,247,252,0.1)] rounded-full text-[0.78rem] font-medium text-[rgba(244,247,252,0.7)] tracking-wide uppercase mb-6 animate-fade-up">
            <span className="w-1.5 h-1.5 bg-blue-bright rounded-full"></span>
            How can we help?
          </div>
          <h1 className="font-playfair text-[clamp(2.5rem,5vw,3.8rem)] font-black leading-[1.1] tracking-tight mb-8 animate-fade-up">
            Knowledge Base & <br />
            <em className="italic not-style text-blue-bright">Support Center.</em>
          </h1>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-20 px-[5%] bg-paper">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="reveal bg-white p-8 rounded-2xl border border-border hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center text-blue-mid mb-6 group-hover:bg-blue-mid group-hover:text-white transition-colors">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-ink mb-4">{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.articles.map((art, j) => (
                    <li key={j}>
                      <a href="#" className="text-[0.85rem] text-text-muted hover:text-blue-mid transition-colors flex items-center gap-2">
                        <span className="w-1 h-1 bg-border rounded-full"></span>
                        {art}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="font-playfair text-3xl font-bold text-ink mb-4">Frequently Asked Questions</h2>
            <p className="text-text-muted">Quick answers to common questions about our platform.</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="reveal p-6 rounded-2xl border border-border hover:bg-paper transition-all cursor-pointer overflow-hidden"
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              >
                <h3 className="font-bold text-ink text-lg mb-0 flex justify-between items-center">
                  {faq.q}
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className={`transition-transform duration-300 ${activeIndex === i ? 'rotate-180' : ''}`}
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </h3>
                <div className={`transition-all duration-300 ease-in-out ${activeIndex === i ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[0.95rem] text-text-muted leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help CTA */}
      <section className="py-24 px-[5%] bg-cream relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 reveal">
          <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-blue-mid mx-auto mb-8 shadow-sm">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-ink mb-6">Still need help?</h2>
          <p className="text-text-muted mb-10 text-lg">Our friendly support team is ready to assist you with any questions or issues.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="px-8 py-3.5 bg-blue-mid text-white border-none rounded-lg text-[0.95rem] font-semibold transition-all hover:bg-blue-bright">
              Contact Support
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HelpCenter;
