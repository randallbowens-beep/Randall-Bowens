import React, { useState } from 'react';
import Button from './Button';
import { MapPin, Clock, Heart } from 'lucide-react';

const IntakeForm: React.FC = () => {
  const [formData, setFormData] = useState({
    address: '',
    propertyType: 'single-family',
    condition: 'good',
    timeline: 'standard',
    ownerName: '',
    email: '',
    phone: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <section id="intake" className="py-24 bg-brand-lightGray">
        <div className="container mx-auto px-4">
           <div className="max-w-2xl mx-auto bg-white p-12 shadow-md rounded-2xl border-t-8 border-brand-gold text-center">
             <div className="w-20 h-20 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
             </div>
             <h3 className="font-sans font-bold text-3xl text-brand-evergreen mb-4">We've Received Your Info!</h3>
             <p className="font-serif text-brand-slate mb-10 text-lg">
               Thank you for reaching out. A member of our local team will review your property details and give you a call within 48 hours to discuss your options.
             </p>
             <Button onClick={() => setIsSubmitted(false)} variant="outline">Submit Another Property</Button>
           </div>
        </div>
      </section>
    )
  }

  return (
    <section id="intake" className="py-24 bg-brand-lightGray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Form Context */}
          <div className="lg:w-1/3">
            <h2 className="font-sans font-bold text-3xl text-brand-evergreen mb-6">
              Get Your Free Offer
            </h2>
            <div className="h-1.5 w-16 bg-brand-gold mb-8 rounded-full"></div>
            <p className="font-serif text-brand-slate mb-8 leading-relaxed text-lg">
              Selling a home is a big decision. We're here to help you understand your options with a free, confidential valuation. No pressure, just honest answers.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl">
                <div className="mt-1 text-brand-gold bg-brand-cream p-2 rounded-full"><MapPin size={20} /></div>
                <div>
                  <h4 className="font-sans font-bold text-sm uppercase text-brand-evergreen">Where We Buy</h4>
                  <p className="font-serif text-sm text-gray-600 mt-1">We love Seattle, Bellevue, Redmond, and neighborhoods across Snohomish County.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl">
                <div className="mt-1 text-brand-gold bg-brand-cream p-2 rounded-full"><Clock size={20} /></div>
                <div>
                  <h4 className="font-sans font-bold text-sm uppercase text-brand-evergreen">Quick Response</h4>
                  <p className="font-serif text-sm text-gray-600 mt-1">We typically respond within 24-48 hours. Need to move faster? Just let us know.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl">
                <div className="mt-1 text-brand-gold bg-brand-cream p-2 rounded-full"><Heart size={20} /></div>
                <div>
                  <h4 className="font-sans font-bold text-sm uppercase text-brand-evergreen">We Care</h4>
                  <p className="font-serif text-sm text-gray-600 mt-1">We buy directly from you. That means no agent commissions and more money in your pocket.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 shadow-lg rounded-2xl border-t-8 border-brand-evergreen">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                
                {/* Property Details Section */}
                <div className="md:col-span-2">
                  <h3 className="font-sans text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Property Details</h3>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="address" className="block font-sans text-sm font-medium text-brand-slate mb-2">Property Address</label>
                  <input 
                    type="text" 
                    id="address" 
                    name="address" 
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border-gray-200 border-2 p-3 focus:ring-0 focus:border-brand-gold outline-none transition-colors rounded-xl bg-brand-lightGray/30"
                    placeholder="e.g. 123 Maple Ave, Seattle"
                  />
                </div>

                <div>
                  <label htmlFor="propertyType" className="block font-sans text-sm font-medium text-brand-slate mb-2">Property Type</label>
                  <div className="relative">
                    <select 
                      id="propertyType" 
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full border-gray-200 border-2 p-3 focus:ring-0 focus:border-brand-gold outline-none transition-colors rounded-xl bg-white appearance-none"
                    >
                      <option value="single-family">House (Single Family)</option>
                      <option value="multifamily">Duplex / Triplex / Apartment</option>
                      <option value="commercial">Commercial Building</option>
                      <option value="land">Land / Lot</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="condition" className="block font-sans text-sm font-medium text-brand-slate mb-2">Condition</label>
                  <div className="relative">
                    <select 
                      id="condition" 
                      name="condition"
                      value={formData.condition}
                      onChange={handleChange}
                      className="w-full border-gray-200 border-2 p-3 focus:ring-0 focus:border-brand-gold outline-none transition-colors rounded-xl bg-white appearance-none"
                    >
                      <option value="excellent">Move-in Ready</option>
                      <option value="good">Needs Minor Updates</option>
                      <option value="fair">Needs Some Repairs</option>
                      <option value="poor">Needs Major Work / As-Is</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="timeline" className="block font-sans text-sm font-medium text-brand-slate mb-2">When would you like to sell?</label>
                  <div className="relative">
                    <select 
                      id="timeline" 
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full border-gray-200 border-2 p-3 focus:ring-0 focus:border-brand-gold outline-none transition-colors rounded-xl bg-white appearance-none"
                    >
                      <option value="asap">As soon as possible (14-30 Days)</option>
                      <option value="standard">Standard (30-60 Days)</option>
                      <option value="flexible">I'm just browsing / No rush</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>

                {/* Owner Details Section */}
                <div className="md:col-span-2 mt-6">
                  <h3 className="font-sans text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Your Contact Info</h3>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="ownerName" className="block font-sans text-sm font-medium text-brand-slate mb-2">Name</label>
                  <input 
                    type="text" 
                    id="ownerName" 
                    name="ownerName"
                    required
                    value={formData.ownerName}
                    onChange={handleChange}
                    className="w-full border-gray-200 border-2 p-3 focus:ring-0 focus:border-brand-gold outline-none transition-colors rounded-xl bg-brand-lightGray/30"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-sans text-sm font-medium text-brand-slate mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-gray-200 border-2 p-3 focus:ring-0 focus:border-brand-gold outline-none transition-colors rounded-xl bg-brand-lightGray/30"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-sans text-sm font-medium text-brand-slate mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-gray-200 border-2 p-3 focus:ring-0 focus:border-brand-gold outline-none transition-colors rounded-xl bg-brand-lightGray/30"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="notes" className="block font-sans text-sm font-medium text-brand-slate mb-2">Anything else we should know?</label>
                  <textarea 
                    id="notes" 
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full border-gray-200 border-2 p-3 focus:ring-0 focus:border-brand-gold outline-none transition-colors rounded-xl bg-brand-lightGray/30"
                    placeholder="e.g. New roof installed in 2020, basement is unfinished, etc."
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={isSubmitting ? 'opacity-75 cursor-wait' : 'w-full md:w-auto'}
                >
                  {isSubmitting ? 'Sending...' : 'Get My Free Offer'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntakeForm;