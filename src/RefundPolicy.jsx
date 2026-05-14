import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const RefundPolicy = () => {
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
      title: "1. Subscription Refunds",
      content: "Tenant Mitra offers a 7-day money-back guarantee for all new monthly and annual subscriptions. If you are not satisfied with our platform within the first 7 days of your purchase, you are eligible for a full refund of your subscription fee."
    },
    {
      title: "2. Eligibility for Refund",
      content: "To be eligible for a refund, you must submit a request to our support team within the 7-day window. Refunds are not applicable for renewals or if the account has been suspended due to a violation of our Terms of Service."
    },
    {
      title: "3. Processing Refunds",
      content: "Once your refund request is approved, it will be processed within 5-7 business days. The refund will be credited back to the original payment method used during the purchase."
    },
    {
      title: "4. Rent Collection Transactions",
      content: "Tenant Mitra acts as a facilitator for rent payments between landlords and tenants. Any disputes regarding rent payments, security deposits, or refunds between landlords and tenants must be resolved directly between the parties involved. Tenant Mitra does not handle refunds for rent transactions."
    },
    {
      title: "5. Cancellation of Service",
      content: "You can cancel your subscription at any time through your account settings. Upon cancellation, you will continue to have access to the platform until the end of your current billing cycle. No partial refunds are provided for the remaining period of a billing cycle."
    },
    {
      title: "6. Changes to Policy",
      content: "We reserve the right to modify this Refund Policy at any time. Any changes will be effective immediately upon posting on our website. Continued use of the service after such changes constitutes your acceptance of the new policy."
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
            Refund <em className="italic not-style text-blue-mid">Policy.</em>
          </h1>
          <p className="text-text-muted animate-fade-up">Last Updated: May 14, 2026</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="reveal prose prose-slate">
            <p className="text-lg text-text-muted leading-relaxed mb-12">
              Our goal is to ensure you have a positive experience with Tenant Mitra. This policy explains our procedures regarding refunds for our subscription services.
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
              <h2 className="font-playfair text-2xl font-bold text-ink mb-4">Need Help?</h2>
              <p className="text-text-muted leading-relaxed">
                If you have any questions or would like to request a refund, please reach out to our billing team:
              </p>
              <div className="mt-4">
                <h4 className="font-bold text-ink mb-2">Billing & Accounts</h4>
                <p className="text-text-muted">info@biosoftech.com</p>
                <p className="text-text-muted">Available 24/7.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
