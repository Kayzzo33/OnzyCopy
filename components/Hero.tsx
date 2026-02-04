import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Zap } from 'lucide-react';

const WORDS = ["páginas", "conteúdos", "legendas", "posts", "stories", "criativos"];

const TypewriterEffect = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => setBlink(prev => !prev), 500);
    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  useEffect(() => {
    if (index >= WORDS.length) {
      setIndex(0); // Reset loop
      return;
    }

    if (subIndex === WORDS[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500); // Wait before deleting
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex(prev => (prev + 1) % WORDS.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex(prev => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="relative inline-block min-w-[200px] text-left">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-copy-orange to-orange-300">
        {WORDS[index].substring(0, subIndex)}
      </span>
      <span 
        className={`absolute -right-1 top-0 bottom-1 w-[4px] bg-copy-orange transition-opacity ${
          blink ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </span>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto text-center z-10 space-y-8">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-copy-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-copy-orange"></span>
          </span>
          <span className="text-xs md:text-sm font-medium text-gray-300 tracking-wide uppercase">
            A Nova Era do Copywriting
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight text-white"
        >
          Escreva em segundos copys que convertem 10x mais para <br className="hidden md:block" />
          <TypewriterEffect />
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Copy humanizada que foge do padrão de IA e gera resultados reais. 
          Sem textos robóticos, sem fórmulas batidas.
        </motion.p>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4"
        >
          <button className="group relative px-8 py-4 bg-copy-orange rounded-full text-white font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,107,53,0.3)] hover:shadow-[0_0_60px_rgba(255,107,53,0.6)] flex items-center gap-3 overflow-hidden">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <Zap className="w-5 h-5 fill-current" />
            <span>Começar Agora</span>
          </button>
          
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-copy-dark overflow-hidden bg-gray-800">
                  <img src={`https://picsum.photos/seed/${i + 50}/100`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex text-yellow-400 text-xs">
                {'★★★★★'}
              </div>
              <p className="text-sm font-semibold text-gray-300">+3.000 Membros Ativos</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;