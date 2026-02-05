import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, FileText, TrendingUp, Layout } from 'lucide-react';

const cards = [
  {
    icon: MessageCircle,
    title: "Stories: Caixinha de perguntas",
    description: "Transforme perguntas simples em respostas estratégicas que demonstram expertise, geram conexão emocional e aplicam storytelling.",
    cta: "Testar stories agora"
  },
  {
    icon: FileText,
    title: "Storytelling: Reels e TikTok",
    description: "Narrativas que prendem nos primeiros 3 segundos. Crie roteiros usando frameworks virais com hooks magnéticos e retenção alta.",
    cta: "Criar roteiro virtual"
  },
  {
    icon: TrendingUp,
    title: "Legenda reflexiva para posts",
    description: "Copy completa + estrutura de landing page otimizada: headline com valor claro e bullets de benefício que amplificam desejo.",
    cta: "Criar minha landing page"
  },
  {
    icon: Layout,
    title: "Criativos: Alta conversão",
    description: "Copy para anúncios pagos otimizada para conversão: headlines testadas (4U's) e offer stack que maximiza valor percebido.",
    cta: "Criar copy de anúncio"
  }
];

const UseCases: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force play on mount
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.error("Video play error:", e));
    }
  }, []);

  return (
    <section className="relative z-10 pt-20 pb-32 overflow-hidden">
      
      {/* Background Video (Brain Animation) */}
      {/* 
          mix-blend-screen removes black.
          contrast-125 / brightness-110 makes the black "blacker" so it disappears better.
          mask-image fades the edges so we don't see a square video frame.
      */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[800px] z-0 pointer-events-none"
        style={{
            maskImage: 'radial-gradient(circle, black 40%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)'
        }}
      >
        <div className="w-full h-full relative">
            <video 
                ref={videoRef}
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-contain mix-blend-screen opacity-90 contrast-125 brightness-110"
                src="https://res.cloudinary.com/ddxo3s8an/video/upload/v1770251913/Anime_somente_o_c_rebro_de_pedra_acima_da_base._Apenas_o_c_rebro_deve_se_mover__realizando_uma_leve__seed1083103812_ld7zru.mp4"
            />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title - Centered */}
        <div className="text-center mb-[350px] md:mb-[400px]"> {/* Large margin bottom to clear the animation */}
            <h2 className="text-4xl md:text-6xl font-display font-medium text-white tracking-tight drop-shadow-2xl">
                O que você pode criar
            </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group flex flex-col items-start p-8 md:p-10 rounded-[2rem] border border-orange-500/20 bg-gradient-to-b from-[#3f1606] to-[#080808] transition-all duration-500
                ${hoveredIndex !== null && hoveredIndex !== i ? 'blur-[2px] opacity-40 grayscale-[0.5] scale-[0.98]' : 'opacity-100 scale-100 hover:border-orange-500/40 shadow-2xl'}
              `}
            >
              <div className="mb-6">
                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-900/40">
                    <card.icon className="text-white w-6 h-6" />
                 </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                {card.title}
              </h3>

              <p className="text-gray-300 leading-relaxed mb-10 text-sm md:text-base font-light">
                {card.description}
              </p>

              <button className="mt-auto bg-white text-copy-dark px-8 py-3 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg shadow-black/20">
                {card.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;