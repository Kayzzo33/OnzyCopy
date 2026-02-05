import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AiChatSimulation from './components/AiChatSimulation';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import WhoIsItFor from './components/WhoIsItFor';
import FeaturesGrid from './components/FeaturesGrid';
import SocialProof from './components/SocialProof';
import Comparison from './components/Comparison';
import FinalWarning from './components/FinalWarning';
import VideoSalesSection from './components/VideoSalesSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen font-sans selection:bg-copy-orange selection:text-white bg-black">
      
      {/* Background Video Layer - Fixed */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
        
        {/* 
            Video injectado diretamente via HTML para garantir Autoplay em todos os navegadores.
            Isso evita bloqueios comuns do React com o atributo 'muted'.
        */}
        <div 
            className="absolute inset-0 w-full h-full z-0"
            dangerouslySetInnerHTML={{
                __html: `
                <video 
                    class="w-full h-full object-cover opacity-50" 
                    autoplay 
                    loop 
                    muted 
                    playsinline 
                    poster="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                >
                    <source src="https://res.cloudinary.com/ddxo3s8an/video/upload/v1770254726/V%C3%ADdeo-sem-t%C3%ADtulo-_-Feito-com-o-Clipchamp-_4__mct8io.webm" type="video/webm" />
                </video>
                `
            }}
        />

        {/* Overlays - z-index ensures they stay on top of video */}
        <div className="absolute inset-0 bg-black/60 z-10" /> 
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 z-10 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-10 mix-blend-overlay"></div>
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-radial-gradient-vignette z-10 opacity-70 pointer-events-none" style={{ background: 'radial-gradient(circle, transparent 20%, #050505 100%)' }}></div>
      </div>

      <Navbar />
      
      {/* Added space-y-32 for significant breathing room between sections */}
      <main className="relative z-10 space-y-32 pb-32">
        <Hero />
        <AiChatSimulation />
        <HowItWorks />
        <UseCases />
        <WhoIsItFor />
        <Comparison />
        <VideoSalesSection />
        <FeaturesGrid />
        <FAQ />
        <SocialProof />
        <FinalWarning />
      </main>

      <Footer />
    </div>
  );
};

export default App;