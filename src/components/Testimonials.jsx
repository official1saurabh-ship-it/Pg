import React from 'react';

const testimonials = [
  {
    text: '"Earlier rent collection used to take 5 days of running around. Now I generate all invoices in one click and payments are tracked automatically. Tenant Mitra saved my sanity."',
    name: 'Ramesh Krishnamurthy',
    role: 'PG Owner, Bangalore • 3 Branches',
    initials: 'RK'
  },
  {
    text: '"The occupancy view is brilliant — I can see at a glance which beds are empty and fill them faster. My occupancy went from 78% to 95% in 2 months after switching."',
    name: 'Priya Sharma',
    role: 'Hostel Owner, Pune • 120 Beds',
    initials: 'PS'
  },
  {
    text: '"The P&L report gave me clarity I never had before. I discovered I was spending 30% more on maintenance than needed. Now I run a much tighter, profitable operation."',
    name: 'Amit Joshi',
    role: 'PG Chain Owner, Hyderabad • 5 Branches',
    initials: 'AJ'
  }
];

const Testimonials = () => {
  return (
    <section className="bg-paper px-[5%] py-24" id="testimonials">
      <div className="text-center mb-12">
        <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-blue-mid mb-3">Testimonials</p>
        <h2 className="font-playfair text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-tight text-ink mb-4">PG Owners Love Tenant Mitra</h2>
        <p className="text-base text-text-muted leading-[1.7] max-w-[520px] mx-auto">Real stories from real hostel and PG owners across India.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-cream border border-border rounded-[14px] p-7 transition-all duration-300">
            <div className="text-blue-mid text-[0.85rem] mb-4 tracking-[0.1em]">★★★★★</div>
            <p className="text-[0.9rem] text-ink leading-[1.7] mb-5 italic">{t.text}</p>
            <div className="flex items-center gap-3">
              <div className="w-[38px] h-[38px] rounded-full bg-ink grid place-items-center text-[0.82rem] font-bold text-paper shrink-0">
                {t.initials}
              </div>
              <div>
                <div className="text-[0.88rem] font-semibold text-ink">{t.name}</div>
                <div className="text-[0.76rem] text-text-muted">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
