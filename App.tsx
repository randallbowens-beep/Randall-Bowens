import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import AnchorProgram from './components/AnchorProgram';
import IntakeForm from './components/IntakeForm';
import Footer from './components/Footer';
import OfferPage from './components/OfferPage';
import ResourcesPage from './components/ResourcesPage';
import InvestorPage from './components/InvestorPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'offer' | 'resources' | 'investor'>('home');

  const navigateToOffer = () => {
    window.scrollTo(0, 0);
    setCurrentPage('offer');
  };

  const navigateToHome = () => {
    window.scrollTo(0, 0);
    setCurrentPage('home');
  };
  
  const navigateToResources = () => {
    window.scrollTo(0, 0);
    setCurrentPage('resources');
  };

  const navigateToInvestor = () => {
    window.scrollTo(0, 0);
    setCurrentPage('investor');
  };

  if (currentPage === 'offer') {
    return <OfferPage onBack={navigateToHome} />;
  }

  if (currentPage === 'investor') {
    return <InvestorPage onBack={navigateToHome} />;
  }

  if (currentPage === 'resources') {
    return (
        <div className="min-h-screen flex flex-col bg-brand-cream selection:bg-brand-gold selection:text-white">
            <Navbar 
                onNavigateToOffer={navigateToOffer} 
                onNavigateToHome={navigateToHome}
                onNavigateToResources={navigateToResources}
                onNavigateToInvestor={navigateToInvestor}
            />
            <main className="flex-grow">
                <ResourcesPage onBack={navigateToHome} onGetOffer={navigateToOffer} />
            </main>
            <Footer onNavigateToInvestor={navigateToInvestor} />
        </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream selection:bg-brand-gold selection:text-white">
      <Navbar 
        onNavigateToOffer={navigateToOffer} 
        onNavigateToHome={navigateToHome}
        onNavigateToResources={navigateToResources}
        onNavigateToInvestor={navigateToInvestor}
      />
      <main className="flex-grow">
        <Hero onGetOfferClick={navigateToOffer} />
        <Process />
        <AnchorProgram 
            onGetOfferClick={navigateToOffer} 
            onNavigateToResources={navigateToResources}
        />
        <IntakeForm />
      </main>
      <Footer onNavigateToInvestor={navigateToInvestor} />
    </div>
  );
};

export default App;