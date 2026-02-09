import React from 'react';
import { Home, CalendarCheck, HeartHandshake, ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <Home size={36} strokeWidth={1.5} />,
      title: "Tell Us About Your Home",
      description: "Share a few details about your property. It doesn't need to be perfect—we buy homes in any condition, so no repairs or cleaning are needed."
    },
    {
      icon: <HeartHandshake size={36} strokeWidth={1.5} />,
      title: "Receive a Fair Offer",
      description: "We'll review your property and present a competitive, no-obligation cash offer within 48 hours. No hidden fees, no commissions."
    },
    {
      icon: <CalendarCheck size={36} strokeWidth={1.5} />,
      title: "Close On Your Schedule",
      description: "You choose the closing date that works for your family. Whether you need 14 days or 2 months, we handle all the paperwork."
    }
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-brand-evergreen mb-4">
            Selling Made Simple
          </h2>
          <div className="h-1 w-24 bg-brand-gold mx-auto mb-6 rounded-full"></div>
          <p className="font-serif text-lg text-brand-slate leading-relaxed">
            We've removed the open houses, inspections, and uncertainties of the traditional market to give you peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-10 rounded-full"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-evergreen mb-8 relative z-10 border-2 border-brand-evergreen/5 group-hover:border-brand-gold transition-colors duration-300 shadow-sm rotate-3 group-hover:rotate-0 transform transition-transform">
                {step.icon}
                <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-brand-gold text-white rounded-full flex items-center justify-center font-sans font-bold text-lg border-4 border-white shadow-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="font-sans font-bold text-xl text-brand-evergreen mb-3 uppercase tracking-wide">
                {step.title}
              </h3>
              <p className="font-serif text-brand-slate leading-relaxed px-4 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-brand-evergreen text-white p-8 md:p-14 rounded-3xl relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 p-24 bg-white/5 rounded-full transform translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
           <div className="absolute bottom-0 left-0 p-20 bg-brand-gold/10 rounded-full transform -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
           
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
             <div>
               <h3 className="font-sans font-bold text-2xl md:text-3xl mb-3">Ready to see what your home is worth?</h3>
               <p className="font-serif text-white/80 text-lg">It's free, confidential, and there's absolutely no obligation.</p>
             </div>
             <a href="#intake" className="flex-shrink-0">
                <button className="flex items-center gap-3 px-8 py-4 bg-white text-brand-evergreen hover:bg-brand-gold hover:text-white transition-all duration-200 font-sans uppercase text-sm font-bold tracking-wide rounded-full shadow-lg">
                  Get My Free Offer <ArrowRight size={18} />
                </button>
             </a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Process;