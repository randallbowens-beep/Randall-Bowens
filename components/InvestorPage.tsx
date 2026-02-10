import React, { useState } from 'react';
import { ArrowLeft, Check, Lock } from 'lucide-react';

interface InvestorPageProps {
  onBack: () => void;
}

const InvestorPage: React.FC<InvestorPageProps> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
       <div className="min-h-screen bg-brand-cream flex items-center justify-center p-4 font-serif">
        <div className="max-w-xl w-full bg-white rounded-sm shadow-xl p-12 text-center border-t-4 border-brand-gold">
          <div className="w-16 h-16 bg-brand-evergreen/10 text-brand-evergreen rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={32} />
          </div>
          <h2 className="font-sans font-bold text-2xl text-brand-evergreen mb-4">Registration Received</h2>
          <p className="text-lg text-brand-slate mb-8">
            Thank you. Our acquisitions team will review your buy-box criteria. If your credentials can be verified, you will receive an access link within 24 hours.
          </p>
          <button 
            onClick={onBack}
            className="text-brand-gold font-sans font-bold uppercase tracking-widest text-xs hover:text-brand-evergreen transition-colors"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-cream font-serif text-brand-slate selection:bg-brand-gold selection:text-white">
        <header className="bg-brand-evergreen py-6 px-4 md:px-8 border-b-2 border-brand-gold">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <button onClick={onBack} className="text-white/50 hover:text-white transition-colors flex items-center gap-2">
                        <ArrowLeft size={18} /> <span className="hidden sm:inline font-sans text-xs font-bold uppercase tracking-wider">Back</span>
                    </button>
                    <div className="flex items-baseline space-x-2">
                        <span className="text-white font-bold text-xl tracking-tight font-sans">JACOBS PARCEL</span>
                        <span className="text-brand-gold font-light text-lg uppercase tracking-widest font-sans">CAPITAL</span>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-2 text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] font-sans">
                    <Lock size={12} /> Authorized Access Only
                </div>
            </div>
        </header>

        <section className="bg-brand-slate text-white py-16 px-6 border-b border-gray-700">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="font-sans text-3xl md:text-5xl font-bold mb-4 leading-tight">Seattle Off-Market Inventory</h1>
                <p className="text-brand-gold italic text-lg">Direct-to-seller contracts for vetted principals.</p>
            </div>
        </section>

        <section className="py-12 px-6 pb-24">
            <div className="max-w-xl mx-auto bg-white p-8 md:p-12 shadow-2xl rounded-sm -mt-20 relative z-10">
                <h2 className="text-2xl font-bold text-brand-evergreen mb-2 font-sans">Acquisition Criteria</h2>
                <p className="text-sm text-gray-500 mb-8 font-sans">Register your buy-box to receive vetted investment opportunities.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 font-sans">Contact Name</label>
                            <input type="text" name="name" required className="w-full border-b-2 border-gray-200 py-2 focus:border-brand-gold outline-none transition-all font-sans bg-transparent" />
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 font-sans">Entity / LLC</label>
                            <input type="text" name="company" required className="w-full border-b-2 border-gray-200 py-2 focus:border-brand-gold outline-none transition-all font-sans bg-transparent" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 font-sans">Email Address</label>
                        <input type="email" name="email" required className="w-full border-b-2 border-gray-200 py-2 focus:border-brand-gold outline-none transition-all font-sans bg-transparent" />
                    </div>

                    <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 font-sans">Target Asset Class</label>
                        <select name="buy_box" className="w-full border-b-2 border-gray-200 py-2 bg-transparent outline-none font-serif text-brand-slate">
                            <option>SFR Fix & Flip ($700k+ ARV)</option>
                            <option>Multi-Family (2-4 Units)</option>
                            <option>Urban Infill / Development (RSL/LR)</option>
                            <option>Long-Term Rental</option>
                        </select>
                    </div>

                    <div className="bg-brand-lightGray p-4 border-l-4 border-brand-gold">
                        <label className="flex items-start space-x-3 cursor-pointer">
                            <input type="checkbox" required className="mt-1 h-4 w-4 accent-brand-evergreen" />
                            <span className="text-xs leading-relaxed text-gray-600 italic">
                                I am a principal buyer. I acknowledge that Jacobs Parcel Capital requires Proof of Funds for 7-14 day closings.
                            </span>
                        </label>
                    </div>

                    <button type="submit" className="w-full bg-brand-evergreen hover:bg-brand-slate text-white font-bold py-4 tracking-widest uppercase text-xs transition-all shadow-lg hover:shadow-xl font-sans">
                        Request Inventory Access
                    </button>
                </form>
            </div>
        </section>

        <footer className="py-12 text-center border-t border-brand-evergreen/10">
            <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-sans">
                &copy; {new Date().getFullYear()} Jacobs Parcel Capital<br className="md:hidden" /> <span className="hidden md:inline">|</span> Seattle, Washington | Principals Only
            </p>
        </footer>
    </div>
  );
};

export default InvestorPage;