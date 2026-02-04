import React, { useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AiChatSimulation from './components/AiChatSimulation';
import HowItWorks from './components/HowItWorks';
import FeaturesGrid from './components/FeaturesGrid';
import SocialProof from './components/SocialProof';
import FinalWarning from './components/FinalWarning';
import Footer from './components/Footer';

const App: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force play on mount to help with browser policies
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen font-sans selection:bg-copy-orange selection:text-white bg-black">
      {/* Background Video Layer */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-copy-dark">
        <div className="absolute inset-0 bg-copy-dark/60 z-10" /> {/* Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-10 mix-blend-overlay"></div>
        {/* Vignette */}
        <div className="absolute inset-0 bg-radial-gradient-vignette z-10 opacity-70 pointer-events-none" style={{ background: 'radial-gradient(circle, transparent 20%, #050505 100%)' }}></div>
        
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-70"
          poster="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
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