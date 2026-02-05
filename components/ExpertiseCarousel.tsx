import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const experts = [
  {
    name: "Eugene Schwartz",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop", // Placeholder stylized
    description: "Consciência de mercado, desejo e timing da mensagem. A copy certa, para a pessoa certa, no momento certo."
  },
  {
    name: "Alex Hormozi",
    image: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1000&auto=format&fit=crop", // Placeholder stylized
    description: "Estrutura de oferta, clareza de valor e copy orientada a conversão real. Nada de promessas vagas. Tudo gira em torno de resultado mensurável."
  },
  {
    name: "Russell Brunson",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop", // Placeholder stylized
    description: "Storytelling, funis e narrativa de vendas. Copy que conduz o leitor passo a passo até a decisão."
  },
  {
    name: "Gary Halbert",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop", // Placeholder stylized
    description: "Linguagem simples, direta e focada em resposta imediata. Sem distração. Apenas persuasão bruta."
  },
  {
    name: "David Ogilvy",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
    description: "A Big Idea. Pesquisa exaustiva e títulos que valem 80% do seu anúncio."
  }
];

const ExpertiseCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-display font-medium text-white tracking-tight leading-[1.1] mb-6">
            Embasada em quem<br/>
            vendeu bilhões com<br/>
            palavras
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            O copy.pocket não foi treinado em frases genéricas. Ele é baseado nos frameworks, estruturas e princípios dos maiores nomes do copywriting e marketing direto: pessoas que realmente venderam utilizando o poder da escrita persuasiva.
          </p>
        </div>

        <div className="flex gap-4">
          <button onClick={() => scroll('left')} className="p-4 rounded-full border border-white/10 hover:bg-white/10 transition-colors text-white">
            <ChevronLeft size={24} />
          </button>
          <button onClick={() => scroll('right')} className="p-4 rounded-full border border-white/10 hover:bg-white/10 transition-colors text-white">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {experts.map((expert, i) => (
          <motion.div 
            key={i}
            className="min-w-[320px] md:min-w-[400px] snap-start bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 flex flex-col gap-6 hover:border-copy-orange/30 transition-colors group"
          >
             <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-orange-500 shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                <img 
                    src={expert.image} 
                    alt={expert.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 sepia"
                />
                <div className="absolute inset-0 bg-orange-500/20 mix-blend-overlay"></div>
             </div>

             <div>
                <h3 className="text-xl font-bold text-white mb-3">{expert.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {expert.description}
                </p>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseCarousel;