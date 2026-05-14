import React from 'react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    sub: 'Forever free',
    desc: 'Perfect for single-property owners getting started with digital management.',
    features: [
      '1 Branch, up to 20 Beds',
      'Tenant & Rent Management',
      'Basic Payment Tracking',
      'Occupancy Dashboard'
    ],
    featured: false,
    btnText: 'Get Started Free'
  },
  {
    name: 'Professional',
    price: '₹999',
    sub: 'per month',
    desc: 'For growing PG businesses with multiple properties and staff.',
    features: [
      'Up to 5 Branches, 200 Beds',
      'All Starter Features',
      'Advanced P&L Reports',
      'Expense Management',
      'Employee Management',
      'Priority Support'
    ],
    featured: true,
    btnText: 'Start 14-Day Trial'
  },
  {
    name: 'Enterprise',
    price: '₹2,499',
    sub: 'per month',
    desc: 'For large hostel chains with unlimited scale and dedicated support.',
    features: [
      'Unlimited Branches & Beds',
      'All Professional Features',
      'Custom Reports & Export',
      'API Access',
      'Dedicated Account Manager'
    ],
    featured: false,
    btnText: 'Contact Sales'
  }
];

const Pricing = () => {
  return (
    <section className="bg-cream px-[5%] py-24" id="pricing">
      <div className="text-center mb-14">
        <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-blue-mid mb-3">Simple Pricing</p>
        <h2 className="font-playfair text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-tight text-ink mb-4">Plans for Every PG Owner</h2>
        <p className="text-base text-text-muted leading-[1.7] max-w-[520px] mx-auto">No hidden fees. No contracts. Cancel anytime. Start free and upgrade when you're ready.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[980px] mx-auto">
        {plans.map((p, i) => (
          <div key={i} className={`rounded-2xl p-8 relative transition-transform duration-300 hover:translate-y-[-4px] border-[1.5px] ${
            p.featured ? 'bg-ink border-ink' : 'bg-paper border-border'
          }`}>
            {p.featured && (
              <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 bg-blue-mid text-white text-[0.7rem] font-bold tracking-[0.08em] uppercase px-3 py-1 rounded-full">
                Most Popular
              </div>
            )}
            <div className={`text-[0.82rem] font-semibold tracking-[0.05em] uppercase mb-3 ${p.featured ? 'text-paper' : 'text-text-muted'}`}>{p.name}</div>
            <div className={`font-playfair text-[2.4rem] font-black leading-none ${p.featured ? 'text-gold' : 'text-ink'}`}>{p.price}</div>
            <div className={`text-[0.8rem] mb-5 ${p.featured ? 'text-[rgba(249,246,240,0.5)]' : 'text-text-muted'}`}>{p.sub}</div>
            <p className={`text-[0.85rem] mb-6 leading-[1.5] ${p.featured ? 'text-[rgba(249,246,240,0.6)]' : 'text-text-muted'}`}>{p.desc}</p>
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
            {p.btnText === 'Get Started Free' ? (
              <a href="https://pg.biosoftech.in/Auth" className={`w-full py-3.5 rounded-lg text-[0.9rem] font-semibold transition-all duration-200 cursor-pointer text-center no-underline inline-block bg-transparent border-[1.5px] border-ink text-ink hover:bg-ink hover:text-paper`}>
                {p.btnText}
              </a>
            ) : (
              <Link to={p.btnText === 'Contact Sales' ? '/contact' : '/contact'} className={`w-full py-3.5 rounded-lg text-[0.9rem] font-semibold transition-all duration-200 cursor-pointer text-center no-underline inline-block ${
                p.featured 
                  ? 'bg-blue-bright text-white border-none hover:bg-blue-light' 
                  : 'bg-transparent border-[1.5px] border-ink text-ink hover:bg-ink hover:text-paper'
              }`}>
                {p.btnText}
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
