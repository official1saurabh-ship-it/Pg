import React, { useState } from 'react';

const allModules = [
  {
    cat: 'property',
    title: 'Branch Management',
    desc: 'Add & manage multiple PG branches from one account',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
  },
  {
    cat: 'property',
    title: 'Floors & Rooms',
    desc: 'Map your entire property floor, room, and bed structure',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" /><line x1="9" y1="9" x2="9" y2="21" /></svg>
  },
  {
    cat: 'property',
    title: 'Bed Management',
    desc: 'Track occupancy status of every individual bed in real time',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 9V3h20v6" /><path d="M2 9a1 1 0 0 0 0 2h20a1 1 0 0 0 0-2" /><path d="M2 15v6h20v-6" /></svg>
  },
  {
    cat: 'property',
    title: 'Occupancy View',
    desc: 'Visual grid view of all beds and their current occupancy',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
  },
  {
    cat: 'tenant',
    title: 'Tenant Onboarding',
    desc: 'Add tenants with all details, documents, and bed assignment',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
  },
  {
    cat: 'tenant',
    title: 'Tenant Ledger',
    desc: 'Complete payment & dues history for each individual tenant',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
  },
  {
    cat: 'tenant',
    title: 'Tenant History',
    desc: 'Access complete records of all past and vacated tenants',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
  },
  {
    cat: 'finance',
    title: 'Rent Generation',
    desc: 'Auto-generate monthly invoices for all active tenants in bulk',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
  },
  {
    cat: 'finance',
    title: 'Payment Collection',
    desc: 'Record cash, UPI, or bank payments and update tenant ledgers',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
  },
  {
    cat: 'finance',
    title: 'Expense Tracking',
    desc: 'Log all property expenses and categorize for financial clarity',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
  },
  {
    cat: 'reports',
    title: 'P&L Report',
    desc: 'Monthly profit and loss breakdown across income and expenses',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
  },
  {
    cat: 'reports',
    title: 'Occupancy Report',
    desc: 'Analyse bed occupancy trends across branches and time periods',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
  }
];

const Modules = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredModules = activeTab === 'all' 
    ? allModules 
    : allModules.filter(m => m.cat === activeTab);

  return (
    <section className="bg-paper px-[5%] py-24" id="modules">
      <div className="mb-12">
        <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-blue-mid mb-3">Complete Feature Set</p>
        <h2 className="font-playfair text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-tight text-ink mb-4">Every Module You Need</h2>
        <p className="text-base text-text-muted leading-[1.7] max-w-[520px]">A comprehensive suite of tools covering every aspect of PG management — nothing missing.</p>
      </div>

      <div className="flex gap-2 mb-12 flex-wrap">
        {['all', 'property', 'tenant', 'finance', 'reports'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-[1.1rem] py-[0.55rem] rounded-md border-[1.5px] text-[0.85rem] font-medium transition-all duration-200 capitalize ${
              activeTab === tab 
                ? 'bg-ink border-ink text-paper' 
                : 'bg-transparent border-border text-text-muted hover:border-ink hover:text-ink'
            }`}
          >
            {tab === 'all' ? 'All Modules' : tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredModules.map((m, i) => (
          <div key={i} className="bg-cream border border-border rounded-xl p-5 transition-all duration-200 cursor-default hover:bg-ink group">
            <div className="w-9 h-9 bg-ink rounded-lg grid place-items-center mb-3.5 transition-colors duration-200 group-hover:bg-gold text-white">
              <div className="w-4 h-4">{m.icon}</div>
            </div>
            <div className="text-[0.88rem] font-semibold text-ink mb-1 group-hover:text-paper transition-colors duration-200">{m.title}</div>
            <div className="text-[0.78rem] text-text-muted leading-[1.5] group-hover:text-[rgba(249,246,240,0.6)] transition-colors duration-200">{m.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Modules;
