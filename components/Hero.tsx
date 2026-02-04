import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Zap } from 'lucide-react';

const WORDS = ["posts", "stories", "legendas", "páginas", "criativos", "emails"];

const TypewriterEffect = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

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
    <div className="relative inline-flex items-center mx-2 align-bottom pb-1">
      <div className="relative inline-flex">
        {/* Selection Background */}
        <span className="absolute inset-0 bg-copy-orange/20 z-0" />
        
        {/* Left Marker Line */}
        <span className="absolute left-0 top-[-10%] bottom-[-10%] w-[3px] bg-copy-orange rounded-full">
           {/* Top Dot */}
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-copy-orange rounded-full" />
        </span>

        {/* Text */}
        <span className="relative z-10 px-3 text-copy-orange font-bold min-w-[10px] whitespace-nowrap">
          {WORDS[index].substring(0, subIndex)}
        </span>

        {/* Right Marker Line */}
        <span className="absolute right-0 top-[-10%] bottom-[-10%] w-[3px] bg-copy-orange rounded-full">
           {/* Bottom Dot */}
           <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 bg-copy-orange rounded-full" />
        </span>
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-10">
      <div className="max-w-6xl mx-auto text-center z-10 space-y-10">
        
        {/* H1 - Formatting adjusted to match the print */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight text-white leading-[1.1]"
        >
          <div className="mb-2">Escreva em segundos</div>
          <div className="mb-2">copys que convertem 10x</div>
          <div className="flex flex-wrap items-center justify-center gap-x-4">
            <span>mais para</span>
            <TypewriterEffect />
          </div>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Crie páginas de vendas, criativos e storytelling sem travar,
          <br className="hidden md:block" />
          sem improvisar e sem depender de copywriter externo.
        </motion.p>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-8 pt-8"
        >
          <button className="group relative px-10 py-5 bg-gradient-to-r from-copy-orange to-[#FF8F50] rounded-full text-white font-bold text-lg md:text-xl hover:scale-105 transition-all duration-300 shadow-[0_0_50px_rgba(255,107,53,0.4)] hover:shadow-[0_0_80px_rgba(255,107,53,0.6)] flex items-center gap-3 overflow-hidden border border-white/20">
            <span>Começar agora</span>
            <Zap className="w-5 h-5 fill-white" />
          </button>
          
          {/* Social Proof below button or near it */}
          <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border border-copy-dark overflow-hidden bg-gray-800">
                  <img src={`https://picsum.photos/seed/${i + 80}/100`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-left">
               <span className="text-sm font-medium text-gray-300">+3.000 criadores</span>
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