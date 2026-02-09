import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-evergreen text-white pt-20 pb-10 rounded-t-3xl md:rounded-t-[3rem] mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
               {/* Using brightness-0 invert to make the dark logo white for the dark footer */}
               <img 
                 src="/logo.png" 
                 alt="Jacobs Parcel" 
                 className="h-16 w-auto object-contain brightness-0 invert opacity-90" 
                 onError={(e) => {
                   e.currentTarget.style.display = 'none';
                   e.currentTarget.nextElementSibling?.classList.remove('hidden');
                 }}
               />
               <span className="hidden font-sans font-bold uppercase tracking-widest text-lg">Jacobs Parcel</span>
            </div>
            <p className="font-serif text-white/80 text-base leading-relaxed mb-8">
              A local real estate investment firm dedicated to helping Seattle homeowners sell their properties with ease and confidence.
            </p>
            <div className="flex flex-col gap-4">
              <a href="mailto:hello@jacobsparcel.com" className="flex items-center gap-3 text-white/90 hover:text-brand-gold transition-colors text-sm font-sans">
                <div className="bg-white/10 p-2 rounded-full">
                  <Mail size={16} />
                </div>
                hello@jacobsparcel.com
              </a>
              <a href="tel:+12065550123" className="flex items-center gap-3 text-white/90 hover:text-brand-gold transition-colors text-sm font-sans">
                <div className="bg-white/10 p-2 rounded-full">
                  <Phone size={16} />
                </div>
                (206) 555-0123
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:pt-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-brand-gold mb-8">Company</h4>
            <ul className="space-y-4 font-sans text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-colors hover:underline decoration-brand-gold underline-offset-4">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:underline decoration-brand-gold underline-offset-4">How We Help</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:underline decoration-brand-gold underline-offset-4">Recent Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:underline decoration-brand-gold underline-offset-4">Contact Us</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:pt-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-brand-gold mb-8">Homeowners</h4>
            <ul className="space-y-4 font-sans text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-colors hover:underline decoration-brand-gold underline-offset-4">Why Sell For Cash?</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:underline decoration-brand-gold underline-offset-4">Our Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:underline decoration-brand-gold underline-offset-4">FAQ</a></li>
            </ul>
          </div>

          {/* Office */}
          <div className="md:pt-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-brand-gold mb-8">Local Office</h4>
            <address className="not-italic font-serif text-white/80 text-sm leading-relaxed flex items-start gap-3">
              <MapPin size={20} className="mt-1 flex-shrink-0 text-brand-gold" />
              <span>
                Columbia Center, Suite 4800<br />
                701 5th Avenue<br />
                Seattle, WA 98104
              </span>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="font-sans text-xs text-white/40">
              &copy; {new Date().getFullYear()} Jacobs Parcel Capital Management, LLC. All rights reserved.
            </p>
            
            <div className="max-w-xl">
              <p className="font-sans text-[10px] text-white/30 uppercase tracking-wide leading-relaxed text-justify">
                <strong>Disclosure:</strong> Jacobs Parcel is a real estate investment company. We purchase properties for our own portfolio. We are not real estate brokers or agents representing you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;