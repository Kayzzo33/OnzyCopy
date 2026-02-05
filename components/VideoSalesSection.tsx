import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const VideoSalesSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays on mount
    if (videoRef.current) {
        videoRef.current.play().catch(e => console.error("Video play error:", e));
    }
  }, []);

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-[3rem] bg-black border border-white/10 p-8 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            
            {/* Left Content */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-8 relative z-10"
            >
                <div className="text-copy-orange font-bold text-sm tracking-wider uppercase">
                    TESTE AGORA
                </div>
                
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-[1.1]">
                    Pare de perder vendas por causa de copy fraca.
                </h2>
                
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                    Comece hoje e veja suas conversões aumentarem usando técnicas dos maiores copywriters da história.
                </p>

                <div className="pt-4">
                    <button className="group relative px-10 py-5 bg-gradient-to-r from-[#FF9A62] to-copy-orange rounded-full text-white font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,107,53,0.3)] hover:shadow-[0_0_50px_rgba(255,107,53,0.5)] border border-white/20 flex items-center gap-2">
                        Começar agora
                        <Sparkles className="w-5 h-5 fill-white animate-pulse" />
                    </button>
                    {/* Button Glow backing */}
                    <div className="absolute left-10 bottom-10 w-40 h-20 bg-copy-orange/30 blur-[60px] pointer-events-none" />
                </div>
            </motion.div>

            {/* Right Video Card */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 w-full max-w-[500px]"
            >
                <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-gray-800 to-black border border-white/10 shadow-2xl aspect-square md:aspect-[4/5]">
                     
                    <video 
                        ref={videoRef}
                        autoPlay
                        loop 
                        muted 
                        playsInline
                        className="w-full h-full object-cover"
                        src="https://res.cloudinary.com/ddxo3s8an/video/upload/v1770250169/Anime_a_imagem_mantendo_exatamente_os_mesmos_dedos_segurando_o_cart_o_futurista_eygpuj.webm"
                    />
                     
                     {/* Overlay gradient for aesthetics */}
                     <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent pointer-events-none mix-blend-overlay" />
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VideoSalesSection;