import React from 'react';

const steps = [
  {
    num: 1,
    title: 'Add Your Branch & Beds',
    desc: 'Set up your property structure — floors, rooms, and beds. Takes under 5 minutes.'
  },
  {
    num: 2,
    title: 'Onboard Your Tenants',
    desc: 'Add tenant details, assign beds, set rent amounts, and you\'re done. No paperwork headaches.'
  },
  {
    num: 3,
    title: 'Generate & Collect Rent',
    desc: 'Auto-generate monthly invoices and record payments. Dues are tracked automatically.'
  },
  {
    num: 4,
    title: 'View Reports & Grow',
    desc: 'Get insights from occupancy, income, and P&L reports to make smarter decisions.'
  }
];

const HowItWorks = () => {
  return (
    <section className="bg-ink px-[5%] py-24 text-paper" id="how">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-blue-light mb-3">Getting Started</p>
          <h2 className="font-playfair text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-tight text-paper mb-4">Up & Running in Under 10 Minutes</h2>
          <p className="text-base text-[rgba(249,246,240,0.6)] leading-[1.7] max-w-[520px] mb-12">No training required. No complex setup. Start managing your PG professionally from day one.</p>
          <div className="flex flex-col gap-8">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-mid text-white font-extrabold text-[0.9rem] grid place-items-center shrink-0">{s.num}</div>
                <div>
                  <h4 className="font-playfair text-[1.1rem] font-bold text-paper mb-1.5">{s.title}</h4>
                  <p className="text-[0.88rem] text-[rgba(249,246,240,0.55)] leading-[1.65]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:grid grid-cols-2 gap-4">
          <div className="bg-[rgba(249,246,240,0.06)] border border-[rgba(249,246,240,0.1)] rounded-xl p-5 col-span-2">
            <div className="text-[0.72rem] text-[rgba(249,246,240,0.4)] font-medium mb-1 uppercase tracking-[0.08em]">Total Revenue — May 2026</div>
            <div className="font-playfair text-[1.6rem] font-bold text-gold">₹3,62,500</div>
            <div className="text-[0.78rem] text-[rgba(249,246,240,0.4)] mt-1">↑ 12% vs last month</div>
            <span className="inline-block px-2 py-1 rounded bg-[rgba(41,121,255,0.15)] text-blue-light text-[0.7rem] font-semibold mt-2">On track</span>
          </div>
          <div className="bg-[rgba(249,246,240,0.06)] border border-[rgba(249,246,240,0.1)] rounded-xl p-5">
            <div className="text-[0.72rem] text-[rgba(249,246,240,0.4)] font-medium mb-1 uppercase tracking-[0.08em]">Occupancy</div>
            <div className="font-playfair text-[1.6rem] font-bold text-gold">92%</div>
            <div className="text-[0.78rem] text-[rgba(249,246,240,0.4)] mt-1">110 / 120 beds</div>
          </div>
          <div className="bg-[rgba(249,246,240,0.06)] border border-[rgba(249,246,240,0.1)] rounded-xl p-5">
            <div className="text-[0.72rem] text-[rgba(249,246,240,0.4)] font-medium mb-1 uppercase tracking-[0.08em]">Net Profit</div>
            <div className="font-playfair text-[1.6rem] font-bold text-gold">₹1.8L</div>
            <div className="text-[0.78rem] text-[rgba(249,246,240,0.4)] mt-1">After expenses</div>
          </div>
          <div className="bg-[rgba(249,246,240,0.06)] border border-[rgba(249,246,240,0.1)] rounded-xl p-5 col-span-2">
            <div className="text-[0.72rem] text-[rgba(249,246,240,0.4)] font-medium mb-1 uppercase tracking-[0.08em]">Active Tenants</div>
            <div className="font-playfair text-[1.6rem] font-bold text-gold">110</div>
            <div className="text-[0.78rem] text-[rgba(249,246,240,0.4)] mt-1">Across 3 branches</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
