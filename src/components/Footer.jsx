import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cream border-t border-border px-[5%] pt-12 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-10">
        <div className="lg:col-span-2">
          <Link to="/" className="text-xl font-black font-playfair text-ink mb-4 block">Tenant Mitra</Link>
          <p className="text-[0.85rem] text-text-muted leading-[1.65] max-w-[280px]">
            The complete PG management platform for modern Indian landlords. Manage smarter, earn better.
          </p>
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
