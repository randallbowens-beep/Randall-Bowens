import React, { useState } from 'react';
import { ArrowLeft, Check, Home, User, FileText, ChevronRight } from 'lucide-react';
import Button from './Button';

interface OfferPageProps {
  onBack: () => void;
}

const OfferPage: React.FC<OfferPageProps> = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    address: '',
    zip: '',
    propertyType: 'single-family',
    condition: 'good',
    timeline: 'standard',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsComplete(true);
    }, 2000);
  };

  // Completion View
  if (isComplete) {
    return (
      <div className="min-h-screen bg-brand-cream flex items-center justify-center p-4">
        <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center border-t-8 border-brand-gold">
          <div className="w-20 h-20 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <Check size={40} strokeWidth={3} />
          </div>
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-brand-evergreen mb-4">Assessment Received</h2>
          <p className="font-serif text-lg text-brand-slate mb-8">
            Thank you, {formData.firstName}. We have started your property file. A Senior Analyst from our Seattle office will contact you at <span className="font-semibold">{formData.phone}</span> within 24 hours to discuss your valuation.
          </p>
          <button 
            onClick={onBack}
            className="text-brand-evergreen font-sans font-bold uppercase tracking-widest text-sm hover:text-brand-gold transition-colors"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-brand-lightGray">
      {/* Simple Header */}
      <header className="bg-white py-4 px-6 shadow-sm flex justify-between items-center sticky top-0 z-50">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-brand-slate hover:text-brand-gold transition-colors font-sans text-xs font-bold uppercase tracking-wider"
        >
          <ArrowLeft size={16} /> Back
        </button>
        <div className="flex items-center gap-2">
           <span className="font-sans font-bold text-brand-evergreen tracking-widest uppercase text-sm">Jacobs Parcel</span>
        </div>
        <div className="w-16"></div> {/* Spacer for centering */}
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 max-w-2xl">
        
        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold font-sans text-brand-gold uppercase tracking-widest">Step {step} of {totalSteps}</span>
            <span className="text-xs font-serif text-gray-400 italic">Confidential Assessment</span>
          </div>
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-brand-gold transition-all duration-500 ease-out" 
              style={{ width: `${(step / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Property Basics */}
            {step === 1 && (
              <div className="p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-brand-evergreen mb-6">
                  <Home size={24} />
                </div>
                <h1 className="font-serif text-3xl text-brand-slate mb-6">Where is the property located?</h1>
                
                <div className="space-y-6">
                  <div>
                    <label className="block font-sans text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Street Address</label>
                    <input 
                      type="text" 
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="e.g. 1234 Rainier Ave S"
                      className="w-full text-lg p-4 border-2 border-gray-100 rounded-xl focus:border-brand-gold focus:ring-0 outline-none transition-colors"
                      autoFocus
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Zip Code</label>
                    <input 
                      type="text" 
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      placeholder="e.g. 98118"
                      className="w-full text-lg p-4 border-2 border-gray-100 rounded-xl focus:border-brand-gold focus:ring-0 outline-none transition-colors md:w-1/2"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Property Type</label>
                    <select 
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full text-lg p-4 border-2 border-gray-100 rounded-xl focus:border-brand-gold focus:ring-0 outline-none transition-colors bg-white"
                    >
                      <option value="single-family">Single Family Home</option>
                      <option value="condo">Condo / Townhome</option>
                      <option value="multifamily">Multi-Family (Duplex+)</option>
                      <option value="land">Land</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Details */}
            {step === 2 && (
              <div className="p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-brand-evergreen mb-6">
                  <FileText size={24} />
                </div>
                <h1 className="font-serif text-3xl text-brand-slate mb-6">Tell us a bit more.</h1>
                
                <div className="space-y-6">
                  <div>
                    <label className="block font-sans text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Estimated Condition</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {['Excellent', 'Good', 'Fair', 'Poor'].map((c) => (
                        <div 
                          key={c}
                          onClick={() => setFormData({...formData, condition: c.toLowerCase()})}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            formData.condition === c.toLowerCase() 
                            ? 'border-brand-evergreen bg-brand-evergreen text-white' 
                            : 'border-gray-100 hover:border-brand-gold text-brand-slate'
                          }`}
                        >
                          <span className="font-sans font-medium">{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Timeline to Sell</label>
                    <select 
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full text-lg p-4 border-2 border-gray-100 rounded-xl focus:border-brand-gold focus:ring-0 outline-none transition-colors bg-white"
                    >
                      <option value="asap">ASAP (14-30 Days)</option>
                      <option value="standard">Standard (30-60 Days)</option>
                      <option value="longterm">60+ Days</option>
                      <option value="curious">Just Curious</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contact */}
            {step === 3 && (
              <div className="p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-brand-evergreen mb-6">
                  <User size={24} />
                </div>
                <h1 className="font-serif text-3xl text-brand-slate mb-6">Where should we send your offer?</h1>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">First Name</label>
                      <input 
                        type="text" 
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full text-lg p-4 border-2 border-gray-100 rounded-xl focus:border-brand-gold focus:ring-0 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Last Name</label>
                      <input 
                        type="text" 
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full text-lg p-4 border-2 border-gray-100 rounded-xl focus:border-brand-gold focus:ring-0 outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full text-lg p-4 border-2 border-gray-100 rounded-xl focus:border-brand-gold focus:ring-0 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(206) 555-0123"
                      className="w-full text-lg p-4 border-2 border-gray-100 rounded-xl focus:border-brand-gold focus:ring-0 outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Footer Buttons */}
            <div className="p-8 border-t border-gray-100 flex items-center justify-between bg-gray-50">
               {step > 1 ? (
                 <button 
                   type="button" 
                   onClick={handleBack}
                   className="text-brand-slate font-sans font-bold uppercase tracking-wider text-xs hover:text-brand-evergreen px-4 py-2"
                 >
                   Back
                 </button>
               ) : (
                 <div></div> 
               )}

               {step < totalSteps ? (
                 <button 
                   type="button" 
                   onClick={handleNext}
                   className="flex items-center gap-2 bg-brand-evergreen text-white px-8 py-3 rounded-full font-sans font-bold uppercase tracking-wider text-xs hover:bg-brand-slate transition-colors"
                 >
                   Next Step <ChevronRight size={16} />
                 </button>
               ) : (
                 <button 
                   type="submit" 
                   disabled={isSubmitting}
                   className="flex items-center gap-2 bg-brand-gold text-white px-8 py-3 rounded-full font-sans font-bold uppercase tracking-wider text-xs hover:bg-brand-goldHover transition-colors shadow-lg disabled:opacity-70 disabled:cursor-wait"
                 >
                   {isSubmitting ? 'Calculating...' : 'Get My Offer'}
                 </button>
               )}
            </div>
          </form>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400 font-sans max-w-md mx-auto">
            <span className="font-bold">Privacy Guarantee:</span> Your information is kept strictly confidential. We do not sell data to third-party list brokers.
          </p>
        </div>
      </main>
    </div>
  );
};

export default OfferPage;