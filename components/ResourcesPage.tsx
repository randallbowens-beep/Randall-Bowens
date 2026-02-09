import React, { useEffect, useState } from 'react';
import { Anchor, Shield, Home, Gavel, Wrench, ExternalLink, LifeBuoy, ChevronRight, Menu, Phone } from 'lucide-react';
import Button from './Button';

interface ResourcesPageProps {
  onBack: () => void;
  onGetOffer: () => void;
}

const ResourcesPage: React.FC<ResourcesPageProps> = ({ onBack, onGetOffer }) => {
  const [activeSection, setActiveSection] = useState('prevention');

  // Handle Scroll Spy for Sticky TOC
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['prevention', 'tax', 'repair', 'legal'];
      const scrollPosition = window.scrollY + 150; // Offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const categories = [
    { id: 'prevention', label: 'Foreclosure Prevention', icon: <Anchor size={18} /> },
    { id: 'tax', label: 'Property Tax & Financial Aid', icon: <Home size={18} /> },
    { id: 'repair', label: 'Home Repair & Safety', icon: <Wrench size={18} /> },
    { id: 'legal', label: 'Legal Defense & Probate', icon: <Gavel size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-brand-cream font-serif">
      {/* Institutional Header */}
      <header className="bg-brand-evergreen text-white py-12 md:py-16 relative overflow-hidden">
         <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full transform translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
         <div className="container mx-auto px-4 relative z-10">
           <div className="max-w-4xl">
             <div className="flex items-center gap-3 mb-6 opacity-80">
                <button onClick={onBack} className="flex items-center gap-1 hover:text-brand-gold transition-colors font-sans text-sm font-bold uppercase tracking-wider">
                   Home
                </button>
                <ChevronRight size={14} />
                <span className="font-sans text-sm font-bold uppercase tracking-wider text-brand-gold">Resources</span>
             </div>
             <h1 className="font-sans font-bold text-4xl md:text-5xl mb-4">The Anchor Program</h1>
             <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light max-w-2xl">
               A comprehensive directory of Seattle & King County resources to help you keep your home. A cash sale should be your last resort.
             </p>
           </div>
         </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sticky TOC Sidebar */}
          <aside className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-28 bg-white p-6 rounded-xl shadow-sm border border-brand-evergreen/10">
              <h3 className="font-sans font-bold text-brand-evergreen uppercase tracking-widest text-xs mb-6">Directory Index</h3>
              <nav className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => scrollToSection(cat.id)}
                    className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-sans font-medium ${
                      activeSection === cat.id 
                      ? 'bg-brand-evergreen text-white shadow-md' 
                      : 'text-brand-slate hover:bg-brand-lightGray'
                    }`}
                  >
                    {cat.icon}
                    {cat.label}
                  </button>
                ))}
              </nav>
              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-xs text-gray-500 font-sans mb-4">Need immediate help?</p>
                <Button onClick={onGetOffer} className="w-full text-xs py-2 px-4">Get A Fair Offer</Button>
              </div>
            </div>
          </aside>

          {/* Mobile TOC (Horizontal Scroll) */}
          <div className="lg:hidden -mx-4 px-4 overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-3 min-w-max">
               {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => scrollToSection(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-sans font-bold whitespace-nowrap border ${
                      activeSection === cat.id 
                      ? 'bg-brand-evergreen text-white border-brand-evergreen' 
                      : 'bg-white text-brand-slate border-gray-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
            </div>
          </div>

          {/* Main Content */}
          <main className="lg:w-3/4 space-y-16">
            
            {/* Category A */}
            <section id="prevention" className="scroll-mt-28">
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-brand-evergreen/20">
                <div className="p-3 bg-brand-evergreen text-white rounded-lg"><Anchor size={24} /></div>
                <h2 className="font-sans font-bold text-2xl md:text-3xl text-brand-evergreen">Foreclosure Prevention & Mediation</h2>
              </div>
              <div className="grid gap-6">
                <ResourceCard 
                  title="Washington Homeownership Resource Center (WHRC)" 
                  desc="The official state-sponsored hotline providing housing counseling and foreclosure prevention services. They connect you with certified counselors."
                  link="https://www.homeownership-wa.org"
                  linkText="www.homeownership-wa.org"
                  phone="1-877-894-4663"
                />
                <ResourceCard 
                  title="WA Dept. of Financial Institutions" 
                  desc="Offers a mediation program to help homeowners open communication with lenders and negotiate alternatives to foreclosure."
                  link="https://dfi.wa.gov/homeownership"
                  linkText="dfi.wa.gov"
                />
                <ResourceCard 
                  title="HUD Approved Housing Counselors" 
                  desc="A federal database of free or low-cost housing counselors in King County authorized to assist with default resolution."
                  link="https://www.hud.gov/offices/hsg/sfh/hcc/hcs"
                  linkText="hud.gov"
                />
              </div>
            </section>

            {/* Category B */}
            <section id="tax" className="scroll-mt-28">
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-brand-evergreen/20">
                <div className="p-3 bg-brand-evergreen text-white rounded-lg"><Home size={24} /></div>
                <h2 className="font-sans font-bold text-2xl md:text-3xl text-brand-evergreen">Property Tax & Financial Aid</h2>
              </div>
              <div className="grid gap-6">
                <ResourceCard 
                  title="King County Senior & Disabled Exemption" 
                  desc="Reduces the amount of property taxes you pay. Eligibility is based on age (61+), disability status, and disposable income."
                  link="https://kingcounty.gov/depts/assessor/TaxRelief.aspx"
                  linkText="kingcounty.gov/assessor"
                />
                <ResourceCard 
                  title="WA State Property Tax Deferral" 
                  desc="Allows qualified homeowners with limited income to postpone payment of property taxes and special assessments until the home is sold."
                  link="https://dor.wa.gov/taxes-rates/property-tax/property-tax-deferrals"
                  linkText="dor.wa.gov"
                />
                <ResourceCard 
                  title="Byrd Barr Place" 
                  desc="Provides energy assistance (LIHEAP) and emergency financial grants for Seattle residents to prevent utility shut-offs."
                  link="https://byrdbarrplace.org/"
                  linkText="byrdbarrplace.org"
                />
                <ResourceCard 
                  title="Seattle City Light Bill Assistance" 
                  desc="Discount programs (UDP) for low-income homeowners to reduce electricity bills by up to 60%."
                  link="https://www.seattle.gov/city-light/residential-services/billing-and-account/bill-assistance"
                  linkText="seattle.gov/city-light"
                />
              </div>
            </section>

            {/* Category C */}
            <section id="repair" className="scroll-mt-28">
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-brand-evergreen/20">
                <div className="p-3 bg-brand-evergreen text-white rounded-lg"><Wrench size={24} /></div>
                <h2 className="font-sans font-bold text-2xl md:text-3xl text-brand-evergreen">Home Repair & Safety</h2>
              </div>
              <div className="grid gap-6">
                <ResourceCard 
                  title="City of Seattle Home Repair Loan" 
                  desc="Provides low-to-no interest loans for critical repairs like roofing, sewer lines, and heating systems for low-income homeowners."
                  link="https://www.seattle.gov/housing/homeowners/home-repair"
                  linkText="seattle.gov/housing"
                />
                <ResourceCard 
                  title="Habitat for Humanity King County" 
                  desc="Their 'Critical Home Repair' program helps seniors and veterans handle major repairs to age in place safely."
                  link="https://www.habitatskc.org/"
                  linkText="habitatskc.org"
                />
                <ResourceCard 
                  title="Sound Generations" 
                  desc="Offers a Minor Home Repair program for safety and accessibility modifications (ramps, rails) for seniors."
                  link="https://soundgenerations.org/"
                  linkText="soundgenerations.org"
                />
              </div>
            </section>

            {/* Category D */}
            <section id="legal" className="scroll-mt-28">
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-brand-evergreen/20">
                <div className="p-3 bg-brand-evergreen text-white rounded-lg"><Gavel size={24} /></div>
                <h2 className="font-sans font-bold text-2xl md:text-3xl text-brand-evergreen">Legal Defense & Probate</h2>
              </div>
              <div className="grid gap-6">
                <ResourceCard 
                  title="Northwest Justice Project" 
                  desc="Provides civil legal aid for low-income residents facing foreclosure, eviction, or other housing instability issues."
                  link="https://nwjustice.org/home"
                  linkText="nwjustice.org"
                />
                <ResourceCard 
                  title="King County Bar Association" 
                  desc="Operates Neighborhood Legal Clinics offering free 30-minute consultations with volunteer attorneys."
                  link="https://www.kcba.org/"
                  linkText="kcba.org"
                />
                <ResourceCard 
                  title="Washington Law Help" 
                  desc="Self-help legal packets and forms for handling probate, quiet title actions, and inheritance disputes without a lawyer."
                  link="https://www.washingtonlawhelp.org/"
                  linkText="washingtonlawhelp.org"
                />
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* The Pivot Section */}
      <section className="bg-brand-slate py-20 mt-12 text-center md:text-left">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white/5 rounded-3xl p-8 md:p-16 border border-white/10 shadow-2xl backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row items-center gap-12">
               <div className="lg:w-2/3">
                 <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                    <LifeBuoy className="text-brand-gold animate-pulse" size={32} />
                    <h2 className="font-sans font-bold text-3xl text-white">When the Anchor Drags: <br/><span className="text-brand-gold">The Safety Net Option</span></h2>
                 </div>
                 <p className="font-serif text-lg text-white/90 leading-relaxed mb-6">
                   We hope these resources help you stabilize your ship. However, government programs have waiting lists, and banks aren't always willing to negotiate.
                 </p>
                 <p className="font-serif text-lg text-white/90 leading-relaxed">
                   If you have exhausted these options and <strong className="text-white underline decoration-brand-gold underline-offset-4">need to liquidate immediately to protect your credit or equity</strong>, Jacobs Parcel is your safety net.
                 </p>
               </div>
               <div className="lg:w-1/3 flex-shrink-0 w-full">
                 <div onClick={onGetOffer}>
                   <Button className="w-full py-5 text-sm md:text-base bg-brand-gold hover:bg-brand-goldHover text-white shadow-xl border-none">
                     I Reviewed My Options — <br/> Get Me a Cash Offer Now
                   </Button>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

// Sub-component for consistent card styling
const ResourceCard = ({ title, desc, link, linkText, phone }: { title: string, desc: string, link: string, linkText: string, phone?: string }) => (
  <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
      <h3 className="font-sans font-bold text-xl text-brand-slate group-hover:text-brand-evergreen transition-colors">{title}</h3>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center gap-2 text-brand-evergreen font-sans font-bold text-sm bg-brand-lightGray px-4 py-2 rounded-full hover:bg-brand-evergreen hover:text-white transition-colors self-start md:self-auto"
      >
        Visit Website <ExternalLink size={14} />
      </a>
    </div>
    <p className="font-serif text-brand-slate/80 leading-relaxed mb-4">{desc}</p>
    <div className="flex flex-wrap gap-4 text-sm font-sans font-medium">
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline underline-offset-4">
        {linkText}
      </a>
      {phone && (
        <span className="text-gray-400 flex items-center gap-2">
           • <Phone size={14} /> {phone}
        </span>
      )}
    </div>
  </div>
);

export default ResourcesPage;