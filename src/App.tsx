import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBand from './components/TrustBand';
import ProblemSolution from './components/ProblemSolution';
import Benefit from './components/Benefit';
import Offer from './components/Offer';
import Install from './components/Install';
import Process from './components/Process';

import CrossSell from './components/CrossSell';
import Community from './components/Community';
import Warning from './components/Warning';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Lightweight CTA tracking hook
    const handleCtaClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-cta]');
      if (target) {
        const placement = (target as HTMLElement).dataset.cta;
        window.dispatchEvent(new CustomEvent('awc:cta', { detail: { placement } }));
      }
    };

    document.addEventListener('click', handleCtaClick);
    return () => document.removeEventListener('click', handleCtaClick);
  }, []);

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <TrustBand />
        <ProblemSolution />
        <Benefit />
        <Offer />
        <Install />
        <Process />

        <CrossSell />
        <Community />
        <Warning />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default App;
