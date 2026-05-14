import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import pg from "../assets/pg.png";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Features', to: '/#features' },
    { name: 'Modules', to: '/#modules' },
    { name: 'Pricing', to: '/#pricing' },
    { name: 'About Us', to: '/about' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[150] flex items-center justify-between px-[5%] py-4 md:py-5 transition-all duration-300 ${isMenuOpen ? 'bg-paper' : isScrolled ? 'bg-paper backdrop-blur-[12px] border-b border-border shadow-[0_4px_24px_rgba(13,17,23,0.08)]' : 'bg-transparent'
          }`}
      >
        <Link to="/" onClick={closeMenu} className="flex items-center gap-[0.6rem] no-underline">
          <img src={pg} alt="Tenant Mitra" className='w-32 h-16 object-contain' />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.to ? (
                <Link
                  to={link.to}
                  className={`text-[0.88rem] xl:text-[0.9rem] font-medium transition-colors ${location.pathname === link.to ? 'text-ink font-bold' : 'text-text-muted hover:text-ink'
                    }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a href={link.href} className="text-[0.88rem] xl:text-[0.9rem] font-medium text-text-muted hover:text-ink transition-colors">
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden sm:flex items-center gap-2 md:gap-3">
            <a href="https://pg.biosoftech.in/Auth" className="px-4 md:px-5 py-2 border-[1.5px] border-ink rounded-md text-[0.82rem] md:text-[0.88rem] font-medium text-ink hover:bg-ink hover:text-paper transition-all bg-transparent cursor-pointer">
              Sign In
            </a>
            <Link to="/contact" className="px-4 md:px-5 py-2 bg-ink border-[1.5px] border-ink rounded-md text-[0.82rem] md:text-[0.88rem] font-medium text-paper hover:bg-gold hover:border-gold hover:text-ink transition-all cursor-pointer no-underline">
              Free Trial
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-ink cursor-pointer z-[130]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[120] lg:hidden transition-all duration-500 ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
      >
        <div
          className="absolute inset-0 bg-ink/20 backdrop-blur-sm"
          onClick={closeMenu}
        ></div>

        <div
          className={`absolute top-0 right-0 bottom-0 w-[80%] max-w-sm bg-paper border-l border-border transition-transform duration-500 ease-out flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="p-8 pt-36 flex flex-col gap-8 h-full">
            <ul className="flex flex-col gap-6 list-none p-0">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.to ? (
                    <Link
                      to={link.to}
                      onClick={closeMenu}
                      className={`text-xl font-bold font-playfair transition-colors ${location.pathname === link.to ? 'text-blue-mid' : 'text-ink'
                        }`}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-xl font-bold font-playfair text-ink hover:text-blue-mid transition-colors"
                      onClick={closeMenu}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-4 pb-8">
              <a href="https://pg.biosoftech.in/Auth" onClick={closeMenu} className="w-full py-4 text-center border-[1.5px] border-ink rounded-xl text-lg font-bold text-ink">
                Sign In
              </a>
              <Link to="/contact" onClick={closeMenu} className="w-full py-4 text-center bg-ink border-[1.5px] border-ink rounded-xl text-lg font-bold text-paper shadow-lg shadow-ink/20 no-underline">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
