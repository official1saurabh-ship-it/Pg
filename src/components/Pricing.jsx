import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'

  const plans = [
    {
      name: 'Bed-Based Plan',
      monthlyPrice: '₹10',
      yearlyPrice: '₹120',
      unit: 'per bed',
      desc: 'Ideal for large hostels and PGs with multiple sharing rooms.',
      features: [
        'Pay only for active beds',
        'Complete Tenant Ledger',
        'Automatic Rent Invoices',
        'Maintenance Management',
        'Digital Onboarding'
      ],
      featured: false,
      btnText: 'Start Free Trial'
    },
    {
      name: 'Room-Based Plan',
      monthlyPrice: '₹20',
      yearlyPrice: '₹200',
      unit: 'per room',
      desc: 'Perfect for luxury PGs or apartments with private/shared rooms.',
      features: [
        'Manage full room units',
        'Multi-tenant room support',
        'Advanced P&L Reports',
        'Staff Management',
        'Dedicated Support'
      ],
      featured: true,
      btnText: 'Start Free Trial'
    }
  ];

  return (
    <section className="bg-cream px-[5%] py-24" id="pricing">
      <div className="text-center mb-10">
        <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-blue-mid mb-3">Flexible Pricing</p>
        <h2 className="font-playfair text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-tight text-ink mb-4">Pay Only for What You Use</h2>
        <p className="text-base text-text-muted leading-[1.7] max-w-[520px] mx-auto mb-10">Choose the plan that fits your PG structure. Save up to 20% with yearly billing.</p>
        
        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className={`text-[0.9rem] font-medium ${billingCycle === 'monthly' ? 'text-ink' : 'text-text-muted'}`}>Monthly</span>
          <button 
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            className="w-14 h-7 bg-ink rounded-full relative transition-colors duration-300 flex items-center p-1"
          >
            <div className={`w-5 h-5 bg-gold rounded-full transition-transform duration-300 ${billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-0'}`}></div>
          </button>
          <span className={`text-[0.9rem] font-medium ${billingCycle === 'yearly' ? 'text-ink' : 'text-text-muted'}`}>
            Yearly <span className="ml-1 text-[0.7rem] bg-[#ecfdf5] text-sage px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Save 20%</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[800px] mx-auto">
        {plans.map((p, i) => (
          <div key={i} className={`rounded-2xl p-8 relative transition-transform duration-300 hover:translate-y-[-4px] border-[1.5px] ${
            p.featured ? 'bg-ink border-ink' : 'bg-paper border-border shadow-sm'
          }`}>
            {p.featured && (
              <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 bg-blue-mid text-white text-[0.7rem] font-bold tracking-[0.08em] uppercase px-3 py-1 rounded-full">
                Most Popular
              </div>
            )}
            <div className={`text-[0.82rem] font-semibold tracking-[0.05em] uppercase mb-3 ${p.featured ? 'text-paper' : 'text-text-muted'}`}>{p.name}</div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className={`font-playfair text-[3rem] font-black leading-none ${p.featured ? 'text-gold' : 'text-ink'}`}>
                {billingCycle === 'monthly' ? p.monthlyPrice : p.yearlyPrice}
              </span>
              <span className={`text-[1.1rem] font-medium ${p.featured ? 'text-[rgba(249,246,240,0.6)]' : 'text-text-muted'}`}>
                /{billingCycle === 'monthly' ? 'mo' : 'yr'}
              </span>
            </div>
            <div className={`text-[0.85rem] font-bold mb-5 uppercase tracking-wide ${p.featured ? 'text-[rgba(249,246,240,0.5)]' : 'text-blue-mid'}`}>{p.unit}</div>
            <p className={`text-[0.85rem] mb-6 leading-[1.5] min-h-[40px] ${p.featured ? 'text-[rgba(249,246,240,0.6)]' : 'text-text-muted'}`}>{p.desc}</p>
            <div className={`h-[1px] mb-5 ${p.featured ? 'bg-[rgba(249,246,240,0.1)]' : 'bg-border'}`}></div>
            <ul className="flex flex-col gap-3 mb-8">
              {p.features.map((f, fi) => (
                <li key={fi} className={`text-[0.84rem] flex items-center gap-2 pb-3 border-b last:border-b-0 ${
                  p.featured ? 'text-[rgba(249,246,240,0.8)] border-[rgba(249,246,240,0.1)]' : 'text-text-muted border-border'
                }`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={p.featured ? '#c8973a' : '#3d6b5c'} strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/contact" className={`w-full py-4 rounded-xl text-[0.95rem] font-bold transition-all duration-200 cursor-pointer text-center no-underline inline-block ${
              p.featured 
                ? 'bg-blue-bright text-white border-none hover:bg-blue-light shadow-lg shadow-blue-mid/20' 
                : 'bg-transparent border-[1.5px] border-ink text-ink hover:bg-ink hover:text-paper'
            }`}>
              {p.btnText}
            </Link>
          </div>
        ))}
      </div>
      <p className="text-center mt-12 text-text-muted text-[0.85rem]">
        Have more than 500 beds? <Link to="/contact" className="text-blue-mid font-bold hover:underline">Contact us</Link> for custom enterprise pricing.
      </p>
    </section>
  );
};

export default Pricing;
