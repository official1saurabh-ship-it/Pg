import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import emailjs from '@emailjs/browser';

// EMAILJS CONFIGURATION
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID_ORG = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ORG;
const EMAILJS_TEMPLATE_ID_USER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SITE_NAME = "Tenant Mitra";

// Initialize EmailJS
if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pgName: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const now = new Date().toLocaleString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    // Parameters for Admin Notification
    const ownerParams = {
      to_email: "ansh@biosoftech.com", // Keeping the recipient from reference or can be configurable
      cc_email: "kishan@biosoftech.com",
      owner_name: formData.name,
      hotel_name: formData.pgName, // Map pgName to hotel_name for template compatibility
      user_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      date_time: now,
      site_name: SITE_NAME,
    };

    // Parameters for User Confirmation
    const userParams = {
      owner_name: formData.name,
      user_email: formData.email,
      site_name: SITE_NAME,
      company_name: "Biosoftech Solutions",
      support_email: "info@biosoftech.com",
      to_email: formData.email
    };

    try {
      // Basic validation
      if (!EMAILJS_SERVICE_ID || EMAILJS_SERVICE_ID.includes('YOUR_')) {
        console.warn('EmailJS Service ID is missing');
      }

      // 1. Send Email to Admin
      if (EMAILJS_TEMPLATE_ID_ORG) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID_ORG,
          ownerParams,
          EMAILJS_PUBLIC_KEY
        );
      }

      // 2. Send Confirmation Email to User
      if (EMAILJS_TEMPLATE_ID_USER) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID_USER,
          userParams,
          EMAILJS_PUBLIC_KEY
        );
      }

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      setFormData({ name: '', email: '', phone: '', pgName: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  const contactDetails = [
    {
      title: "Email Us",
      value: "info@biosoftech.com",
      desc: "Our support team usually responds within 2 hours.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
    },
    {
      title: "Call Us",
      value: "+91 90444 25858",
      desc: "Available 24/7.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.81 12.81 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
    },
    {
      title: "Support",
      value: "+91 62096 88930",
      desc: "Available for technical queries.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
    }
  ];

  return (
    <div className="relative">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-[5%] bg-paper relative overflow-hidden">
        <div className="absolute -right-[10%] top-[10%] w-[50%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(21,101,192,0.08)_0%,transparent_70%)] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cream border border-border rounded-full text-[0.78rem] font-medium text-text-muted tracking-wide uppercase mb-6 animate-fade-up">
            <span className="w-1.5 h-1.5 bg-blue-mid rounded-full"></span>
            Contact Us
          </div>
          <h1 className="font-playfair text-[clamp(2.5rem,5vw,4rem)] font-black leading-[1.1] tracking-tight text-ink mb-6 animate-fade-up">
            We’d Love to Hear <br />
            <em className="italic not-style text-blue-mid">From You.</em>
          </h1>
          <p className="text-[1.1rem] text-text-muted leading-[1.7] animate-fade-up">
            Have questions about Tenant Mitra? Whether you're an owner or a developer, <br className="hidden md:block" />
            our team is here to help you manage better.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="reveal">
              <div className="bg-paper p-8 md:p-10 rounded-3xl border border-border shadow-sm">
                <h2 className="font-playfair text-2xl font-bold text-ink mb-2">Send us a message</h2>
                <p className="text-text-muted text-[0.95rem] mb-8">Fill out the form below and we'll get back to you shortly.</p>
                
                <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[0.85rem] font-bold text-ink uppercase tracking-wider">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-5 py-3.5 rounded-xl border border-border focus:outline-none focus:border-blue-mid text-[0.95rem] bg-white transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[0.85rem] font-bold text-ink uppercase tracking-wider">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-5 py-3.5 rounded-xl border border-border focus:outline-none focus:border-blue-mid text-[0.95rem] bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[0.85rem] font-bold text-ink uppercase tracking-wider">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 90000 00000"
                        className="w-full px-5 py-3.5 rounded-xl border border-border focus:outline-none focus:border-blue-mid text-[0.95rem] bg-white transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[0.85rem] font-bold text-ink uppercase tracking-wider">PG Name</label>
                      <input 
                        type="text" 
                        name="pgName"
                        value={formData.pgName}
                        onChange={handleChange}
                        required
                        placeholder="Your PG Name"
                        className="w-full px-5 py-3.5 rounded-xl border border-border focus:outline-none focus:border-blue-mid text-[0.95rem] bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[0.85rem] font-bold text-ink uppercase tracking-wider">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="How can we help you?"
                      className="w-full px-5 py-3.5 rounded-xl border border-border focus:outline-none focus:border-blue-mid text-[0.95rem] bg-white transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl text-[1rem] font-bold transition-all shadow-lg ${
                      isSubmitting ? 'bg-text-muted cursor-not-allowed' : 
                      status.type === 'success' ? 'bg-green-600 hover:bg-green-700' : 
                      status.type === 'error' ? 'bg-red-600 hover:bg-red-700' : 
                      'bg-ink hover:bg-blue-mid hover:shadow-blue-mid/20'
                    } text-paper`}
                  >
                    {isSubmitting ? 'Sending...' : 
                     status.type === 'success' ? 'Message Sent!' : 
                     status.type === 'error' ? 'Try Again' : 
                     'Send Message'}
                  </button>

                  {status.type === 'success' && (
                    <p className="text-green-600 text-sm font-medium text-center animate-fade-up">
                      {status.message}
                    </p>
                  )}
                  {status.type === 'error' && (
                    <p className="text-red-600 text-sm font-medium text-center animate-fade-up">
                      {status.message}
                    </p>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Info & Details */}
            <div className="flex flex-col justify-center gap-10">
              <div className="space-y-8">
                {contactDetails.map((detail, i) => (
                  <div key={i} className="reveal flex gap-6">
                    <div className="w-14 h-14 bg-cream rounded-2xl flex items-center justify-center text-blue-mid shrink-0">
                      {detail.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-ink mb-1">{detail.title}</h3>
                      <p className="text-lg font-bold text-blue-mid mb-1">{detail.value}</p>
                      <p className="text-[0.9rem] text-text-muted">{detail.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links / Others */}
              <div className="reveal pt-10 border-t border-border">
                <h4 className="text-[0.85rem] font-bold text-ink uppercase tracking-wider mb-6">Follow Us</h4>
                <div className="flex flex-wrap gap-4">
                  <a href="https://pg.biosoftech.in/Auth" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg border border-border text-[0.9rem] font-medium text-ink hover:bg-cream transition-colors">
                    Login
                  </a>
                  <a href="https://www.facebook.com/people/Tenant-Mitra/61589333006695/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg border border-border text-[0.9rem] font-medium text-ink hover:bg-cream transition-colors">
                    Facebook
                  </a>
                  <a href="https://www.instagram.com/tenantmitra/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg border border-border text-[0.9rem] font-medium text-ink hover:bg-cream transition-colors">
                    Instagram
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-[5%] bg-paper">
        <div className="max-w-6xl mx-auto">
          <div className="reveal overflow-hidden rounded-3xl border border-border shadow-sm">
            <div className="aspect-[21/9] w-full">
              <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(0.5) contrast(1.2)' }} 
                loading="lazy" 
                allowFullScreen 
                src="https://maps.google.com/maps?q=Matiyari,Lucknow&t=&z=15&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
            <div className="bg-white p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="text-blue-mid">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-ink">Find us in Lucknow</h3>
                  <p className="text-text-muted">3rd Floor, Office No-624F/20A, Kotwali Rd, Matiyari, Chinhat, Lucknow, Uttar Pradesh-226028</p>
                </div>
              </div>
              <a 
                href="https://maps.google.com/maps?q=Matiyari,Lucknow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-ink text-paper rounded-xl text-[0.9rem] font-bold hover:bg-blue-mid transition-all shadow-lg hover:shadow-blue-mid/20"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
