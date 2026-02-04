import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AiChatSimulation from './components/AiChatSimulation';
import HowItWorks from './components/HowItWorks';
import FeaturesGrid from './components/FeaturesGrid';
import SocialProof from './components/SocialProof';
import FinalWarning from './components/FinalWarning';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen font-sans selection:bg-copy-orange selection:text-white">
      {/* Background Video Layer */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <div className="absolute inset-0 bg-copy-dark/60 z-10" /> {/* Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-copy-dark/30 via-copy-dark/80 to-copy-dark z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://res.cloudinary.com/ddxo3s8an/video/upload/v1770237236/9a20e99c6d1209941825f9c0c761ea11_720w_lz9xvi.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <AiChatSimulation />
        <HowItWorks />
        <FeaturesGrid />
        <SocialProof />
        <FinalWarning />
      </main>

      <Footer />
    </div>
  );
};

export default App;