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
import ExpertiseCarousel from './components/ExpertiseCarousel';
import InfluencerCarousel from './components/InfluencerCarousel';
import SectionWrapper from './components/SectionWrapper';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen font-sans selection:bg-copy-orange selection:text-white overflow-x-hidden">
      
      {/* 
          BACKGROUND LAYER 
      */}
      <div className="fixed inset-0 w-full h-full z-0 bg-black">
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

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/70 z-10" /> 
        
        <div 
          className="absolute inset-0 z-20 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-20 mix-blend-overlay"></div>
        
        <div className="absolute inset-0 bg-radial-gradient-vignette z-20 opacity-80 pointer-events-none" style={{ background: 'radial-gradient(circle, transparent 20%, #050505 100%)' }}></div>
      </div>

      {/* 
          CONTENT LAYER 
      */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Increased vertical spacing (space-y-48 = 12rem / ~192px) */}
        <main className="space-y-48 pb-48">
          <Hero />
          
          <SectionWrapper>
             <AiChatSimulation />
          </SectionWrapper>
          
          <SectionWrapper>
            <HowItWorks />
          </SectionWrapper>
          
          <SectionWrapper parallaxOffset={-50}>
            <UseCases />
          </SectionWrapper>
          
          <SectionWrapper>
             <ExpertiseCarousel />
          </SectionWrapper>

          <SectionWrapper parallaxOffset={30}>
            <WhoIsItFor />
          </SectionWrapper>
          
          <SectionWrapper>
            <InfluencerCarousel />
          </SectionWrapper>

          <SectionWrapper>
            <Comparison />
          </SectionWrapper>
          
          <SectionWrapper>
            <VideoSalesSection />
          </SectionWrapper>
          
          <SectionWrapper>
             <FeaturesGrid />
          </SectionWrapper>
          
          <SectionWrapper>
             <FAQ />
          </SectionWrapper>
          
          <SectionWrapper>
            <SocialProof />
          </SectionWrapper>
          
          <SectionWrapper>
             <FinalWarning />
          </SectionWrapper>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;