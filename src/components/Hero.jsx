import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [occWidth, setOccWidth] = useState('0%');

  useEffect(() => {
    const timer = setTimeout(() => setOccWidth('92%'), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-[5%] pt-28 pb-16 gap-16 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -right-[10%] top-[10%] w-[55%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(21,101,192,0.1)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="hero-content z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cream border border-border rounded-full text-[0.78rem] font-medium text-text-muted tracking-wide uppercase mb-6 animate-fade-up">
          <span className="w-1.5 h-1.5 bg-blue-mid rounded-full"></span>
          Trusted by 500+ PG Owners Across India
        </div>
        <h1 className="font-playfair text-[clamp(2.8rem,5vw,4.4rem)] font-black leading-[1.05] tracking-tight text-ink mb-6 animate-fade-up">
          Manage Your PG<br />
          Like a <em className="italic not-style text-blue-mid relative after:absolute after:bottom-[2px] after:left-0 after:right-0 after:h-0.5 after:bg-blue-mid after:opacity-20 after:rounded-sm">Pro.</em><br />
          Effortlessly.
        </h1>
        <p className="text-[1.05rem] font-normal text-text-muted leading-[1.7] max-w-[480px] mb-10 animate-fade-up">
          Tenant Mitra is the all-in-one PG management platform for landlords and hostel owners. From rent billing to maintenance — everything in one place.
        </p>
        <div className="flex gap-4 items-center flex-wrap mb-12 animate-fade-up">
          <a href="https://pg.biosoftech.in/Auth" className="px-8 py-3.5 bg-blue-mid text-white border-none rounded-lg text-[0.95rem] font-semibold cursor-pointer no-underline inline-flex items-center gap-2 transition-all shadow-[0_4px_20px_rgba(21,101,192,0.25)] hover:bg-blue-bright hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(41,121,255,0.35)]">
            Get Started Free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <a href="#features" className="px-6 py-3.5 text-ink text-[0.95rem] font-medium cursor-pointer no-underline inline-flex items-center gap-2 transition-all hover:gap-3">
            Explore Features
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
        <div className="flex items-center gap-4 animate-fade-up">
          <div className="flex -space-x-2">
            {['RK', 'AM', 'SK', 'PJ'].map((initials, i) => (
              <span key={i} className="w-8 h-8 bg-cream border-2 border-paper rounded-full grid place-items-center text-[0.7rem] font-bold text-ink">
                {initials}
              </span>
            ))}
          </div>
          <p className="text-[0.82rem] text-text-muted"><strong>500+ owners</strong> saving 10+ hours/week</p>
        </div>
      </div>

      <div className="hidden lg:block relative animate-fade-right">
        <div className="absolute -top-4 -right-6 bg-white border border-border rounded-lg px-3.5 py-2 text-[0.78rem] font-semibold shadow-[0_4px_16px_rgba(13,17,23,0.1)] flex items-center gap-1.5 animate-float">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3d6b5c" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
          Rent Collected ₹42,500
        </div>
        <div className="absolute bottom-8 -left-8 bg-white border border-border rounded-lg px-3.5 py-2 text-[0.78rem] font-semibold shadow-[0_4px_16px_rgba(13,17,23,0.1)] flex items-center gap-1.5 animate-float delay-1500">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c8973a" strokeWidth="2.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
          92% Occupancy Rate
        </div>

        <div className="bg-white rounded-[16px] p-7 shadow-[0_20px_60px_rgba(13,17,23,0.12),0_4px_16px_rgba(13,17,23,0.06)] border border-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-playfair text-[1.1rem] font-bold">Dashboard Overview</h3>
            <span className="px-2.5 py-1 bg-[#ecfdf5] text-sage rounded text-[0.75rem] font-semibold">Live</span>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-paper rounded-xl p-4 border border-border">
              <div className="text-[0.75rem] text-text-muted font-medium mb-1">Total Beds</div>
              <div className="font-playfair text-2xl font-bold text-ink">120</div>
              <div className="text-[0.72rem] text-sage font-medium">↑ 8 added this month</div>
            </div>
            <div className="bg-ink rounded-xl p-4 border border-ink">
              <div className="text-[0.75rem] text-[rgba(249,246,240,0.6)] font-medium mb-1">Monthly Collection</div>
              <div className="font-playfair text-2xl font-bold text-gold">₹3.6L</div>
              <div className="text-[0.72rem] text-[rgba(249,246,240,0.5)] font-medium">May 2026</div>
            </div>
            <div className="bg-paper rounded-xl p-4 border border-border">
              <div className="text-[0.75rem] text-text-muted font-medium mb-1">Active Tenants</div>
              <div className="font-playfair text-2xl font-bold text-ink">110</div>
              <div className="text-[0.72rem] text-sage font-medium">3 in notice period</div>
            </div>
            <div className="bg-paper rounded-xl p-4 border border-border">
              <div className="text-[0.75rem] text-text-muted font-medium mb-1">Pending Rent</div>
              <div className="font-playfair text-2xl font-bold text-ink">₹18k</div>
              <div className="text-[0.72rem] text-sage font-medium">4 invoices</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-[0.78rem] text-text-muted mb-2">
              <span>Bed Occupancy</span>
              <span>92%</span>
            </div>
            <div className="h-2 bg-cream rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-sage to-blue-bright rounded-full transition-all duration-1500"
                style={{ width: occWidth }}
              ></div>
            </div>
          </div>
          <div className="mt-4 border-t border-border pt-2">
            {[
              { name: 'Rajesh Kumar', room: 'Room 204 · A Wing', amount: '₹8,500' },
              { name: 'Anita Singh', room: 'Room 108 · B Wing', amount: '₹7,200' },
              { name: 'Mehul Shah', room: 'Room 312 · C Wing', amount: '₹9,000' }
            ].map((p, i) => (
              <div key={i} className="flex items-center justify-between py-2.5 border-b border-border last:border-b-0">
                <div>
                  <div className="text-[0.85rem] font-medium">{p.name}</div>
                  <div className="text-[0.75rem] text-text-muted">{p.room}</div>
                </div>
                <div className="font-semibold text-[0.88rem] text-sage">{p.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
