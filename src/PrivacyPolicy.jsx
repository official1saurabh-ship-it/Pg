import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const PrivacyPolicy = () => {
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
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us when you create an account, such as your name, email address, phone number, and PG details. We also collect information about your tenants and financial transactions as part of our management services."
    },
    {
      title: "2. How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, including processing rent payments, generating invoices, and facilitating communication between landlords and tenants."
    },
    {
      title: "3. Data Security",
      content: "We implement a variety of security measures to maintain the safety of your personal information. Your data is stored on secure servers and we use bank-grade encryption for all financial transactions."
    },
    {
      title: "4. Information Sharing",
      content: "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website and conducting our business."
    },
    {
      title: "5. Cookies",
      content: "We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future."
    },
    {
      title: "6. Your Rights",
      content: "You have the right to access, correct, or delete your personal data. You can manage your information through your account settings or by contacting our support team."
    }
  ];

  return (
    <div className="relative">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-[5%] bg-paper relative overflow-hidden text-center">
        <div className="absolute -left-[10%] top-[10%] w-[50%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(21,101,192,0.08)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cream border border-border rounded-full text-[0.78rem] font-medium text-text-muted tracking-wide uppercase mb-6 animate-fade-up">
            Legal
          </div>
          <h1 className="font-playfair text-[clamp(2.5rem,5vw,3.5rem)] font-black leading-[1.1] tracking-tight text-ink mb-6 animate-fade-up">
            Privacy <em className="italic not-style text-blue-mid">Policy.</em>
          </h1>
          <p className="text-text-muted animate-fade-up">Last Updated: May 14, 2026</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="reveal prose prose-slate">
            <p className="text-lg text-text-muted leading-relaxed mb-12">
              At Tenant Mitra, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information when you use our PG management platform.
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
              <h2 className="font-playfair text-2xl font-bold text-ink mb-4">Contact Us</h2>
              <p className="text-text-muted leading-relaxed">
                If you have any questions regarding this privacy policy, you may contact us at:
              </p>
              <div className="mt-4">
                <p className="font-bold text-ink">Tenant Mitra Legal Team</p>
                <p className="text-text-muted">info@biosoftech.com</p>
                <p className="text-text-muted">+91-9044425858</p>
                <p className="text-text-muted">+91-6209688930</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
