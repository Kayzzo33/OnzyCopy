import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const FeaturesGrid: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
            
            {/* Card 1: Brands */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group rounded-[2.5rem] p-8 md:p-12 border border-white/10 bg-black/30 backdrop-blur-lg hover:bg-black/40 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Como as grandes marcas vendem</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Modelos de copy baseados nas estratégias de conversão das maiores empresas do mundo.
              </p>
              <div className="grid grid-cols-4 gap-4 opacity-40 group-hover:opacity-60 transition-opacity grayscale hover:grayscale-0">
                {/* Brand Logos Placeholder */}
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-12 border border-white/10 rounded flex items-center justify-center text-xs font-bold text-white/50 bg-white/5">Brand</div>
                ))}
              </div>
            </motion.div>

            {/* Card 2: Science */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group rounded-[2.5rem] p-8 md:p-12 border border-white/10 bg-gradient-to-br from-gray-900/40 to-black/40 backdrop-blur-lg hover:border-white/20 transition-all duration-500 relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 p-32 bg-orange-600/10 rounded-full blur-[80px] group-hover:bg-orange-600/20 transition-all"></div>
              <h3 className="text-2xl font-bold mb-4 text-white">Copy com ciência aplicada</h3>
              <p className="text-gray-400 leading-relaxed z-10 relative">
                Utilizamos princípios de neurociência e psicologia comportamental para garantir que cada palavra tenha um propósito de conversão.
              </p>
              <div className="mt-8 flex justify-end">
                  <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center relative">
                      <div className="w-24 h-24 rounded-full border border-dashed border-orange-500/50 animate-[spin_10s_linear_infinite]"></div>
                      <Zap className="absolute text-orange-500" />
                  </div>
              </div>
            </motion.div>

            {/* Card 3: Value/ROI */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-[2.5rem] p-8 md:p-12 border border-white/10 bg-black/30 backdrop-blur-lg flex flex-col justify-between group overflow-hidden"
            >
               <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Resultados Mensuráveis</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Foque no ROI.
                  </p>
               </div>
               <div className="mt-8 relative h-32 w-full bg-gradient-to-t from-green-500/10 to-transparent rounded-xl border border-green-500/20 flex items-end p-4">
                  <svg className="w-full h-full absolute bottom-0 left-0 text-green-500 stroke-current stroke-2 fill-none" viewBox="0 0 100 50" preserveAspectRatio="none">
                      <path d="M0 50 C 20 40, 40 45, 60 20 S 80 10, 100 5" vectorEffect="non-scaling-stroke" />
                  </svg>
                  <div className="absolute top-4 right-4 bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded border border-green-500/30 font-bold">+ R$ 320k</div>
               </div>
            </motion.div>

            {/* Card 4: Analysis */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-[2.5rem] p-8 md:p-12 border border-white/10 bg-black/30 backdrop-blur-lg flex items-center justify-between gap-6"
            >
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4 text-white">Análise Profunda</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Entendemos seu nicho.
                  </p>
                </div>
                <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-2xl bg-gradient-to-br from-white/10 to-black border border-white/10 flex items-center justify-center relative shadow-lg">
                    <div className="absolute bottom-[-10px] right-[-10px] bg-white text-black p-2 rounded-full shadow-lg">
                        <Check size={20} strokeWidth={3} />
                    </div>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;