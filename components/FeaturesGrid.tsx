import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlowingEffect from './GlowingEffect';

const featureImages = [
  "https://res.cloudinary.com/ddxo3s8an/image/upload/v1770310147/Design_sem_nome_61_fgohpf.png", // Card 1
  "https://res.cloudinary.com/ddxo3s8an/image/upload/v1770310147/Design_sem_nome_59_jmb3cv.png", // Card 2
  "https://res.cloudinary.com/ddxo3s8an/image/upload/v1770310151/Design_sem_nome_60_da41wd.png", // Card 3
  "https://res.cloudinary.com/ddxo3s8an/image/upload/v1770310151/Design_sem_nome_58_bkbifh.png"  // Card 4
];

const FeaturesGrid: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="features" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-6">
             <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                Como as grandes marcas vendem
             </h2>
             <p className="text-lg text-gray-400">
                Modelos de copy baseados nas estratégias de conversão das maiores empresas do mundo.
             </p>
        </div>

        <div 
            className="grid md:grid-cols-2 gap-8"
            onMouseLeave={() => setHoveredIndex(null)}
        >
            {featureImages.map((imgSrc, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    className="relative rounded-[2rem] cursor-pointer transition-all duration-500 ease-out"
                    style={{
                        // Se houver hover em algum item (hoveredIndex !== null) E não for este (i), aplica o efeito de desfoque e cinza.
                        // Caso contrário (este é o item ou nenhum selecionado), mantém totalmente visível.
                        filter: hoveredIndex !== null && hoveredIndex !== i 
                            ? 'blur(4px) grayscale(100%) opacity-50' 
                            : 'blur(0px) grayscale(0%) opacity-100',
                        transform: hoveredIndex === i ? 'scale(1.02)' : 'scale(1)',
                        zIndex: hoveredIndex === i ? 10 : 1,
                    }}
                >
                    {/* Efeito RGB (Glowing Effect) */}
                    {/* disabled={false} ativa o listener do mouse */}
                    <div className="absolute -inset-1 rounded-[2.1rem]">
                        <GlowingEffect
                            spread={40}
                            glow={true}
                            disabled={false}
                            proximity={64}
                            inactiveZone={0.01}
                            borderWidth={3}
                            className="rounded-[2.1rem]"
                        />
                    </div>

                    {/* Conteúdo do Card (Imagem) */}
                    <div className="relative z-10 rounded-[2rem] overflow-hidden bg-black shadow-2xl h-full border border-white/10">
                        <img 
                            src={imgSrc} 
                            alt={`Feature Card ${i + 1}`} 
                            className="w-full h-auto object-cover"
                            draggable="false"
                        />
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;