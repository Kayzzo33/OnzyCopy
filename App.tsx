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
    <div className="relative min-h-screen font-sans selection:bg-copy-orange selection:text-white overflow-x-hidden">
      
      {/* 
          BACKGROUND LAYER 
          Positioned as fixed to stay in place while scrolling.
          z-0 ensures it is at the base level.
      */}
      <div className="fixed inset-0 w-full h-full z-0 bg-black">
        
        {/* 
            VIDEO ELEMENT
            Using dangerouslySetInnerHTML for robust browser autoplay support.
            Added 'blur-[3px]' for the requested smooth blur effect.
            Added 'object-cover' to ensure it fills the screen regardless of aspect ratio.
        */}
        <div 
            className="absolute inset-0 w-full h-full"
            dangerouslySetInnerHTML={{
                __html: `
                <video 
                    class="w-full h-full object-cover opacity-60 blur-[3px] scale-105" 
                    autoplay 
                    loop 
                    muted 
                    playsinline 
                    poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                >
                    <source src="https://res.cloudinary.com/ddxo3s8an/video/upload/v1770254726/V%C3%ADdeo-sem-t%C3%ADtulo-_-Feito-com-o-Clipchamp-_4__mct8io.webm" type="video/webm" />
                </video>
                `
            }}
        />

        {/* Dark Overlay to ensure text readability over the video */}
        <div className="absolute inset-0 bg-black/70 z-10" /> 
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 z-20 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-20 mix-blend-overlay"></div>
        
        {/* Vignette for cinematic focus */}
        <div className="absolute inset-0 bg-radial-gradient-vignette z-20 opacity-80 pointer-events-none" style={{ background: 'radial-gradient(circle, transparent 20%, #050505 100%)' }}></div>
      </div>

      {/* 
          CONTENT LAYER 
          Relative + z-10 ensures all content sits ON TOP of the fixed background video.
      */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Added space-y-32 for significant breathing room between sections */}
        <main className="space-y-32 pb-32">
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
    </div>
  );
};

export default App;