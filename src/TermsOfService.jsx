import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const TermsOfService = () => {
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

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using Tenant Mitra, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all landlords, property managers, and tenants who use the platform."
    },
    {
      title: "2. Description of Service",
      content: "Tenant Mitra provides a cloud-based property management platform designed for PG and hostel owners. Our services include tenant onboarding, rent collection, invoice generation, and maintenance tracking."
    },
    {
      title: "3. User Accounts",
      content: "You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate and complete information when creating an account and to update your information as necessary."
    },
    {
      title: "4. Payment Terms",
      content: "Subscription fees for Tenant Mitra are billed in advance on a monthly or annual basis. All fees are non-refundable unless otherwise stated in our Refund Policy. Landlords are responsible for any transaction fees associated with rent collection."
    },
    {
      title: "5. Prohibited Conduct",
      content: "You agree not to use Tenant Mitra for any unlawful purpose or in any way that could damage, disable, or impair our services. This includes attempting to gain unauthorized access to our systems or other users' data."
    },
    {
      title: "6. Limitation of Liability",
      content: "Tenant Mitra shall not be liable for any indirect, incidental, or consequential damages arising out of your use of our services. We do not guarantee that our services will be uninterrupted or error-free."
    },
    {
      title: "7. Modifications to Terms",
      content: "We reserve the right to modify these Terms of Service at any time. We will notify users of any significant changes by posting a notice on our website or sending an email notification."
    }
  ];

  return (
    <div className="relative">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-[5%] bg-paper relative overflow-hidden text-center">
        <div className="absolute -right-[10%] top-[10%] w-[50%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(21,101,192,0.08)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cream border border-border rounded-full text-[0.78rem] font-medium text-text-muted tracking-wide uppercase mb-6 animate-fade-up">
            Legal
          </div>
          <h1 className="font-playfair text-[clamp(2.5rem,5vw,3.5rem)] font-black leading-[1.1] tracking-tight text-ink mb-6 animate-fade-up">
            Terms of <em className="italic not-style text-blue-mid">Service.</em>
          </h1>
          <p className="text-text-muted animate-fade-up">Last Updated: May 14, 2026</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="reveal prose prose-slate">
            <p className="text-lg text-text-muted leading-relaxed mb-12">
              Please read these Terms of Service carefully before using the Tenant Mitra platform. These terms govern your access to and use of our website and services.
            </p>
            
            <div className="space-y-12">
              {sections.map((section, i) => (
                <div key={i} className="reveal">
                  <h2 className="font-playfair text-2xl font-bold text-ink mb-4">{section.title}</h2>
                  <p className="text-text-muted leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-10 border-t border-border reveal">
              <h2 className="font-playfair text-2xl font-bold text-ink mb-4">Questions?</h2>
              <p className="text-text-muted leading-relaxed">
                If you have any questions regarding these Terms of Service, please contact us at:
              </p>
              <div className="mt-4">
                <h4 className="font-bold text-ink mb-2">Tenant Mitra Legal Team</h4>
                <p className="text-text-muted">info@biosoftech.com</p>
                <p className="text-text-muted">3rd Floor, Office No-624F/20A, Kotwali Rd, Matiyari, Chinhat, Lucknow, Uttar Pradesh-226028</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
