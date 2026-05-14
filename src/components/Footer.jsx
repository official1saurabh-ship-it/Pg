import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cream border-t border-border px-[5%] pt-12 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-10">
        <div className="lg:col-span-2">
          <Link to="/" className="text-xl font-black font-playfair text-ink mb-4 block">Tenant Mitra</Link>
          <p className="text-[0.85rem] text-text-muted leading-[1.65] max-w-[280px] mb-6">
            The complete PG management platform for modern Indian landlords. Manage smarter, earn better.
          </p>
          <div className="flex gap-4 items-center">
            <a href="https://www.facebook.com/people/Tenant-Mitra/61589333006695/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border grid place-items-center text-text-muted hover:text-blue-mid hover:border-blue-mid transition-all" aria-label="Facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.instagram.com/tenantmitra/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border grid place-items-center text-text-muted hover:text-blue-mid hover:border-blue-mid transition-all" aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://pg.biosoftech.in/Auth" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border grid place-items-center text-text-muted hover:text-blue-mid hover:border-blue-mid transition-all" aria-label="LinkedIn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-[0.85rem] font-bold text-ink mb-4 tracking-wide">Product</h4>
          <ul className="flex flex-col gap-2.5">
            <li><a href="/#features" className="text-[0.83rem] text-text-muted hover:text-ink transition-colors">Features</a></li>
            <li><a href="/#pricing" className="text-[0.83rem] text-text-muted hover:text-ink transition-colors">Pricing</a></li>
            <li><a href="/#modules" className="text-[0.83rem] text-text-muted hover:text-ink transition-colors">Modules</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[0.85rem] font-bold text-ink mb-4 tracking-wide">Company</h4>
          <ul className="flex flex-col gap-2.5">
            <li><Link to="/about" className="text-[0.83rem] text-text-muted hover:text-ink transition-colors">About Us</Link></li>
            <li><Link to="/careers" className="text-[0.83rem] text-text-muted hover:text-ink transition-colors">Careers</Link></li>
            <li><Link to="/contact" className="text-[0.83rem] text-text-muted hover:text-ink transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[0.85rem] font-bold text-ink mb-4 tracking-wide">Support</h4>
          <ul className="flex flex-col gap-2.5">
            <li><Link to="/help" className="text-[0.83rem] text-text-muted hover:text-ink transition-colors">Help Centre</Link></li>
            <li><Link to="/privacy" className="text-[0.83rem] text-text-muted hover:text-ink transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-[0.83rem] text-text-muted hover:text-ink transition-colors">Terms of Service</Link></li>
            <li><Link to="/refund" className="text-[0.83rem] text-text-muted hover:text-ink transition-colors">Refund Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="pt-6 border-t border-border flex flex-col sm:row items-center justify-between gap-4 sm:flex-row">
        <p className="text-[0.8rem] text-text-muted text-center sm:text-left">
          © 2026 Tenant Mitra. Built with care by <a href="#" className="text-gold">Biosoftech</a>.
        </p>
        <p className="text-[0.8rem] text-text-muted">Made in 🇮🇳 India</p>
      </div>
    </footer>
  );
};

export default Footer;
