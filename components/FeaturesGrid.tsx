import React, { useState } from 'react';
import { motion } from 'framer-motion';

const featureImages = [
  "https://res.cloudinary.com/ddxo3s8an/image/upload/v1770310147/Design_sem_nome_61_fgohpf.png", // Brand
  "https://res.cloudinary.com/ddxo3s8an/image/upload/v1770310147/Design_sem_nome_59_jmb3cv.png", // Ciência
  "https://res.cloudinary.com/ddxo3s8an/image/upload/v1770310151/Design_sem_nome_60_da41wd.png", // Resultados
  "https://res.cloudinary.com/ddxo3s8an/image/upload/v1770310151/Design_sem_nome_58_bkbifh.png"  // Análise
];

const FeaturesGrid: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="features" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div 
            className="grid md:grid-cols-2 gap-6"
            onMouseLeave={() => setHoveredIndex(null)}
        >
            {featureImages.map((imgSrc, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    className="relative rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-500 ease-out"
                    style={{
                        // Se houver hover em algum item (hoveredIndex !== null) E não for este (i), aplica o efeito.
                        // Caso contrário, mantém normal.
                        filter: hoveredIndex !== null && hoveredIndex !== i 
                            ? 'blur(4px) grayscale(100%) opacity-50' 
                            : 'blur(0px) grayscale(0%) opacity-100',
                        transform: hoveredIndex === i ? 'scale(1.02)' : 'scale(1)',
                        zIndex: hoveredIndex === i ? 10 : 1
                    }}
                >
                    <img 
                        src={imgSrc} 
                        alt={`Feature ${i + 1}`} 
                        className="w-full h-auto object-cover border border-white/10 rounded-[2.5rem]"
                        draggable="false"
                    />
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;