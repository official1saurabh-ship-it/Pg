import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const AboutUs = () => {
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
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-[5%] bg-paper relative overflow-hidden">
        <div className="absolute -left-[10%] top-[10%] w-[50%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(21,101,192,0.08)_0%,transparent_70%)] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cream border border-border rounded-full text-[0.78rem] font-medium text-text-muted tracking-wide uppercase mb-6 animate-fade-up">
            <span className="w-1.5 h-1.5 bg-blue-mid rounded-full"></span>
            Our Story
          </div>
          <h1 className="font-playfair text-[clamp(2.5rem,5vw,4rem)] font-black leading-[1.1] tracking-tight text-ink mb-6 animate-fade-up">
            Empowering PG Owners with <br />
            <em className="italic not-style text-blue-mid">Modern Technology.</em>
          </h1>
          <p className="text-[1.1rem] text-text-muted leading-[1.7] animate-fade-up">
            At Tenant Mitra, we are on a mission to simplify the lives of PG and hostel owners across India. 
            We believe that managing a property shouldn't be a source of stress.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h2 className="font-playfair text-3xl font-bold text-ink mb-6">Our Mission</h2>
            <p className="text-text-muted leading-[1.8] mb-6">
              Founded in 2024, Tenant Mitra was born out of a simple observation: Indian PG owners were spending 
              too much time on manual calculations, paper records, and follow-ups. We wanted to build a 
              platform that feels natural, intuitive, and powerful enough to handle every aspect of PG management.
            </p>
            <p className="text-text-muted leading-[1.8]">
              Today, we help hundreds of owners automate their daily operations, from rent collection and 
              tenant onboarding to maintenance tracking and financial reporting.
            </p>
          </div>
          <div className="reveal relative">
            <div className="aspect-video bg-cream rounded-2xl overflow-hidden border border-border shadow-lg flex items-center justify-center p-8">
               <div className="text-center">
                  <div className="font-playfair text-5xl font-black text-blue-mid mb-2">500+</div>
                  <div className="text-ink font-semibold">Active Owners</div>
               </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-mid opacity-10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-[5%] bg-paper">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="font-playfair text-3xl font-bold text-ink mb-4">The Values We Live By</h2>
            <p className="text-text-muted max-w-2xl mx-auto">These core principles guide everything we build and every interaction we have.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Simplicity First', 
                desc: 'We design for the end-user. If it’s not easy to use, it’s not Tenant Mitra.',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" /><path d="M8 12L11 15L16 10" /></svg>
              },
              { 
                title: 'Security & Trust', 
                desc: 'Your data is precious. We use bank-grade security to keep your financial and tenant records safe.',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
              },
              { 
                title: 'Customer-Centric', 
                desc: 'We listen to our users. Most of our features are born from direct feedback from landlords.',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
              }
            ].map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-border reveal hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center text-blue-mid mb-6">
                  {v.icon}
                </div>
                <h3 className="font-bold text-ink mb-3">{v.title}</h3>
                <p className="text-[0.9rem] text-text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/CTA Section */}
      <section className="py-24 px-[5%] bg-ink text-paper relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[40%] h-[60%] bg-[radial-gradient(ellipse_at_bottom_right,rgba(21,101,192,0.15)_0%,transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 reveal">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Ready to transform your PG management?</h2>
          <p className="text-[rgba(244,247,252,0.7)] mb-10 text-lg">Join 500+ smart owners who trust Tenant Mitra every day.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://pg.biosoftech.in/Auth" className="px-8 py-3.5 bg-blue-mid text-white border-none rounded-lg text-[0.95rem] font-semibold cursor-pointer no-underline inline-flex items-center gap-2 transition-all hover:bg-blue-bright">
              Start Your Free Trial
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
