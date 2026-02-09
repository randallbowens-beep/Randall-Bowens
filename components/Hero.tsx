import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onGetOfferClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetOfferClick }) => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop" 
          alt="Classic Modest Family Home" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-evergreen/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-4 py-2 border border-white/40 rounded-full bg-white/10 backdrop-blur-md">
            <span className="font-sans text-xs font-bold tracking-[0.15em] text-white uppercase">
              Serving Seattle Families Since 2015
            </span>
          </div>
          <h1 className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight tracking-tight shadow-sm">
            Selling Your Home, <br/> Simply & With Care.
          </h1>
          <p className="font-serif text-lg md:text-xl text-gray-50 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
            Jacobs Parcel helps homeowners move forward with confidence. We provide fair cash offers and flexible closing dates, so you can sell on your terms without the stress of listing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div onClick={onGetOfferClick} className="inline-block cursor-pointer">
              <button className="w-full sm:w-auto px-8 py-4 bg-brand-gold hover:bg-brand-goldHover text-white font-sans text-sm font-semibold tracking-wide uppercase transition-all duration-200 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
                Get A Fair Offer
              </button>
            </div>
            <a href="#process" onClick={(e) => handleSmoothScroll(e, '#process')} className="inline-block">
              <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/50 text-white hover:bg-white hover:text-brand-evergreen font-sans text-sm font-semibold tracking-wide uppercase transition-all duration-200 rounded-full hover:shadow-lg">
                How It Works
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70 hidden md:block cursor-pointer">
        <ArrowDown size={32} strokeWidth={1} onClick={(e) => {
            const el = document.querySelector('#process');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}/>
      </div>
    </section>
  );
};

export default Hero;