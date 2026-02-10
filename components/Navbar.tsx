import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

interface NavbarProps {
  onNavigateToOffer?: () => void;
  onNavigateToResources?: () => void;
  onNavigateToHome?: () => void;
  onNavigateToInvestor?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateToOffer, onNavigateToResources, onNavigateToHome, onNavigateToInvestor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (onNavigateToHome && window.location.pathname !== '/') {
        onNavigateToHome();
        setTimeout(() => {
             const element = document.querySelector(href);
             if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
             }
        }, 100);
        return;
    }

    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    } else if (onNavigateToHome) {
        // If element not found (we might be on Resources page), go home then scroll
        onNavigateToHome();
        setTimeout(() => {
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
  };

  const navLinks = [
    { name: 'How It Works', href: '#process' },
    { name: 'Resources', action: onNavigateToResources },
    { name: 'Investors', action: onNavigateToInvestor },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" onClick={(e) => { e.preventDefault(); if(onNavigateToHome) onNavigateToHome(); }} className="flex items-center gap-3 group">
              <img 
                src="/logo.png" 
                alt="Jacobs Parcel - Seattle Real Estate Liquidity" 
                className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  e.currentTarget.nextElementSibling?.classList.add('flex');
                }}
              />
              {/* Fallback if image fails to load */}
              <div className="hidden flex-col">
                 <span className={`font-sans font-bold tracking-widest text-lg uppercase leading-none ${scrolled ? 'text-brand-evergreen' : 'text-white'}`}>
                  Jacobs Parcel
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.href ? (
                <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className={`font-sans text-sm font-medium uppercase tracking-wide transition-colors cursor-pointer ${
                    scrolled ? 'text-brand-slate hover:text-brand-gold' : 'text-white/90 hover:text-white text-shadow-sm'
                    }`}
                >
                    {link.name}
                </a>
              ) : (
                <button
                    key={link.name}
                    onClick={link.action}
                    className={`font-sans text-sm font-medium uppercase tracking-wide transition-colors cursor-pointer ${
                    scrolled ? 'text-brand-slate hover:text-brand-gold' : 'text-white/90 hover:text-white text-shadow-sm'
                    }`}
                >
                    {link.name}
                </button>
              )
            ))}
            <div onClick={onNavigateToOffer}>
              <Button variant={scrolled ? 'primary' : 'primary'} className={scrolled ? '' : 'bg-brand-gold text-white border-none shadow-lg'}>
                Get My Offer
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                scrolled ? 'text-brand-slate' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-4 flex flex-col space-y-4 border-t border-gray-100 rounded-b-2xl">
          {navLinks.map((link) => (
            link.href ? (
                <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="block font-sans text-brand-slate hover:text-brand-gold font-medium py-2 px-2 rounded-lg hover:bg-gray-50"
                >
                {link.name}
                </a>
            ) : (
                <button
                key={link.name}
                onClick={() => { link.action && link.action(); setIsOpen(false); }}
                className="block w-full text-left font-sans text-brand-slate hover:text-brand-gold font-medium py-2 px-2 rounded-lg hover:bg-gray-50"
                >
                {link.name}
                </button>
            )
          ))}
          <div onClick={() => { setIsOpen(false); if (onNavigateToOffer) onNavigateToOffer(); }}>
            <Button className="w-full justify-center">Get My Offer</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;