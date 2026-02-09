import React from 'react';
import { Anchor, Gavel, Wrench, Shield, ArrowRight, LifeBuoy } from 'lucide-react';
import Button from './Button';

interface AnchorProgramProps {
  onGetOfferClick?: () => void;
  onNavigateToResources?: () => void;
}

const AnchorProgram: React.FC<AnchorProgramProps> = ({ onGetOfferClick, onNavigateToResources }) => {
  const resources = [
    {
      icon: <Anchor size={32} />,
      title: "Stop the Auction",
      description: "Official state mediators who can pause foreclosure proceedings and help you negotiate with lenders."
    },
    {
      icon: <Gavel size={32} />,
      title: "Fight Tax Liens",
      description: "Exemptions and deferrals are available for seniors, disabled residents, and those on fixed incomes."
    },
    {
      icon: <Wrench size={32} />,
      title: "Fix It Without Selling",
      description: "Access low-interest loans and municipal grants designed to fund critical home repairs to keep you safe."
    },
    {
      icon: <Shield size={32} />,
      title: "Legal Defense Shield",
      description: "Free or low-cost legal aid to resolve complex probate issues, title disputes, and heirship challenges."
    }
  ];

  return (
    <section className="bg-brand-cream py-24 border-t border-brand-evergreen/5">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-brand-evergreen/5 rounded-full text-brand-evergreen mb-6">
            <Anchor size={28} />
          </div>
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-brand-evergreen mb-6">
            The Anchor Program
          </h2>
          <p className="font-serif text-lg md:text-xl text-brand-slate leading-relaxed mb-6">
            Resources to help Seattle homeowners hold their ground. A cash sale should be your last resort, not your only option.
          </p>
          <button 
            onClick={onNavigateToResources}
            className="inline-flex items-center gap-2 text-brand-gold font-sans font-bold uppercase tracking-wider text-sm hover:text-brand-goldHover transition-colors border-b-2 border-transparent hover:border-brand-gold pb-1"
          >
            Access the Full Resource Directory <ArrowRight size={16} />
          </button>
        </div>

        {/* Resource Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-brand-evergreen/10 shadow-sm hover:shadow-md transition-shadow duration-300 opacity-90 hover:opacity-100">
              <div className="text-brand-gold mb-6">{resource.icon}</div>
              <h3 className="font-sans font-bold text-xl text-brand-evergreen mb-3">
                {resource.title}
              </h3>
              <p className="font-serif text-brand-slate text-base">
                {resource.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-20">
             <Button onClick={onNavigateToResources} variant="outline">
                View All Community Resources
             </Button>
        </div>

        {/* The Pivot (Safety Net) */}
        <div className="max-w-5xl mx-auto bg-brand-slate rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
            <div className="lg:w-2/3">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                 <LifeBuoy className="text-brand-gold" size={28} />
                 <h3 className="font-sans font-bold text-2xl text-white uppercase tracking-wider">What if the Anchor Drags?</h3>
              </div>
              <p className="font-serif text-white/90 text-lg leading-relaxed mb-6">
                Government programs take time. Lenders don't always negotiate. If you have explored the options above and discovered that <span className="text-white font-semibold underline decoration-brand-gold underline-offset-4 decoration-2">selling is the only way to protect your equity</span>, we are your safety net.
              </p>
              <p className="font-sans text-white/70 text-sm">
                We can pay off arrears, buy the home "as-is," and close in as little as 7 days.
              </p>
            </div>
            <div className="lg:w-1/3 flex-shrink-0">
              <div onClick={onGetOfferClick}>
                <Button className="w-full py-4 text-xs md:text-sm bg-brand-gold hover:bg-brand-goldHover text-white shadow-xl border-none">
                  I Can't Save It — <br className="md:hidden"/> Get Me a Safety Net Offer
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AnchorProgram;