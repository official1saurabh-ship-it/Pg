import React from 'react';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#f9f6f0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
    ),
    title: 'Smart Dashboard',
    desc: 'Real-time visibility into occupancy, collections, pending dues, and profits — all from a single, beautiful screen.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#f9f6f0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    ),
    title: 'Tenant Management',
    desc: 'Onboard tenants digitally, track their history, manage notice periods, and maintain complete ledgers effortlessly.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#f9f6f0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
    ),
    title: 'Automated Billing',
    desc: 'Generate monthly invoices in one click, send payment reminders, and track dues across all branches automatically.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#f9f6f0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
    ),
    title: 'Multi-Branch Support',
    desc: 'Manage multiple PG properties from one account. Separate data, combined reports — perfect for growing portfolios.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#f9f6f0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
    ),
    title: 'Maintenance Tracking',
    desc: 'Tenants raise complaints, you resolve them. Full complaint lifecycle management with status updates and history.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#f9f6f0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
    ),
    title: 'P&L & Reports',
    desc: 'Income reports, expense tracking, collection summaries, and Profit & Loss statements — complete financial clarity.'
  }
];

const Features = () => {
  return (
    <section className="bg-cream px-[5%] py-24" id="features">
      <div className="text-center mb-16">
        <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-blue-mid mb-3">Why Choose Tenant Mitra</p>
        <h2 className="font-playfair text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-tight text-ink mb-4">Everything You Need to Run a Profitable PG</h2>
        <p className="text-base text-text-muted leading-[1.7] max-w-[520px] mx-auto">Purpose-built for Indian PG, hostel, and co-living operators. Designed for simplicity, built for scale.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={i} className="bg-paper border border-border rounded-[14px] p-8 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_12px_40px_rgba(13,17,23,0.1)] group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-mid to-blue-bright scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            <div className="w-12 h-12 bg-ink rounded-xl grid place-items-center mb-5">
              <div className="w-5.5 h-5.5">{f.icon}</div>
            </div>
            <h3 className="font-playfair text-[1.15rem] font-bold mb-2.5 text-ink">{f.title}</h3>
            <p className="text-[0.88rem] text-text-muted leading-[1.65]">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
