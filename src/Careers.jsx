import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Careers = () => {
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
        <div className="absolute -left-[10%] bottom-[10%] w-[50%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(21,101,192,0.08)_0%,transparent_70%)] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cream border border-border rounded-full text-[0.78rem] font-medium text-text-muted tracking-wide uppercase mb-6 animate-fade-up">
            <span className="w-1.5 h-1.5 bg-blue-mid rounded-full"></span>
            Join Our Team
          </div>
          <h1 className="font-playfair text-[clamp(2.5rem,5vw,4rem)] font-black leading-[1.1] tracking-tight text-ink mb-6 animate-fade-up">
            Help Us Build the Future of <br />
            <em className="italic not-style text-blue-mid">Property Management.</em>
          </h1>
          <p className="text-[1.1rem] text-text-muted leading-[1.7] animate-fade-up">
            We're looking for passionate individuals to help us empower PG owners 
            and transform the rental experience across India.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Remote-First Culture",
                desc: "Work from anywhere in India. We value output over hours spent in an office.",
                icon: "🌍"
              },
              {
                title: "Growth & Ownership",
                desc: "Every team member has a direct impact on the product and our users' lives.",
                icon: "🚀"
              },
              {
                title: "Bank-Grade Benefits",
                desc: "Competitive salaries, comprehensive health insurance, and flexible leave policies.",
                icon: "🏥"
              }
            ].map((benefit, i) => (
              <div key={i} className="reveal text-center">
                <div className="text-4xl mb-6">{benefit.icon}</div>
                <h3 className="font-playfair text-xl font-bold text-ink mb-3">{benefit.title}</h3>
                <p className="text-[0.95rem] text-text-muted leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-[5%] bg-ink text-paper relative overflow-hidden">
        <div className="absolute left-0 top-0 w-[40%] h-[60%] bg-[radial-gradient(ellipse_at_top_left,rgba(21,101,192,0.15)_0%,transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 reveal">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Come work with us.</h2>
          <p className="text-[rgba(244,247,252,0.7)] mb-10 text-lg">We're building something special, and we'd love for you to be a part of it.</p>
          <div className="flex justify-center">
            <Link to="/contact" className="px-8 py-3.5 bg-blue-mid text-white rounded-lg text-[0.95rem] font-semibold transition-all hover:bg-blue-bright no-underline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
