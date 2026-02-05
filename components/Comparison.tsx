import React from 'react';
import { Check, X, Minus, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { name: "Treinado em livros de copy", onzy: true, others: false, gpt: false },
  { name: "Frameworks específicos", onzy: true, others: false, gpt: null },
  { name: "Base de conhecimento RAG", onzy: true, others: true, gpt: false },
  { name: "Templates por nicho", onzy: true, others: false, gpt: null },
  { name: "Histórico salvo por projeto", onzy: true, others: false, gpt: false },
  { name: "Copy adaptada ao Brasil", onzy: true, others: null, gpt: null },
];

const Comparison: React.FC = () => {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
            <span className="text-copy-orange text-xs font-bold tracking-widest uppercase mb-4 block">
                ONZY.POCKET VS. OUTRAS PLATAFORMAS
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-white">
                Compare na prática
            </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            
            {/* Column 1: Labels */}
            <div className="hidden md:flex flex-col bg-zinc-900/50 border border-white/5 rounded-[1.5rem] p-6 backdrop-blur-sm">
                <div className="h-14 flex items-center font-medium text-white text-base border-b border-white/10 mb-4">
                    Funcionalidade
                </div>
                {features.map((f, i) => (
                    <div key={i} className="h-14 flex items-center text-gray-500 text-sm font-medium border-b border-white/5 last:border-0">
                        {f.name}
                    </div>
                ))}
            </div>

            {/* Column 2: Onzy Copy (Orange Gradient) */}
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-col bg-gradient-to-b from-[#b4532e] to-[#431e10] border border-orange-500/20 rounded-[1.5rem] p-6 relative overflow-hidden"
            >
                {/* Header */}
                <div className="h-14 flex items-center gap-2 font-medium text-white text-lg border-b border-white/20 mb-4 relative z-10">
                    <Zap className="fill-white w-5 h-5" />
                    copy.pocket
                </div>
                
                {/* Rows */}
                {features.map((f, i) => (
                    <div key={i} className="h-14 flex items-center justify-start md:justify-center border-b border-white/10 last:border-0 relative z-10">
                         <span className="md:hidden text-white/80 text-sm mr-auto">{f.name}</span>
                         <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                             <Check className="w-3.5 h-3.5 text-white stroke-[4]" />
                         </div>
                    </div>
                ))}
                
                {/* Glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-500/10 blur-[40px] pointer-events-none"></div>
            </motion.div>

            {/* Column 3: Outras plataformas */}
            <div className="flex flex-col bg-zinc-900/50 border border-white/5 rounded-[1.5rem] p-6 backdrop-blur-sm">
                <div className="h-14 flex items-center font-medium text-white text-lg border-b border-white/10 mb-4">
                    Outras plataformas
                </div>
                {features.map((f, i) => (
                    <div key={i} className="h-14 flex items-center justify-start md:justify-center border-b border-white/5 last:border-0">
                        <span className="md:hidden text-gray-400 text-sm mr-auto">{f.name}</span>

                        {f.others === true ? (
                             <div className="w-6 h-6 rounded-full border border-zinc-600 flex items-center justify-center">
                                <Check className="w-3 h-3 text-zinc-400" />
                             </div>
                        ) : f.others === false ? (
                            <div className="w-6 h-6 rounded-full border border-red-500/50 flex items-center justify-center">
                                <X className="w-3 h-3 text-red-500" />
                            </div>
                        ) : (
                            <div className="w-6 h-6 flex items-center justify-center">
                                <Minus className="w-4 h-4 text-yellow-500" />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Column 4: ChatGPT */}
            <div className="flex flex-col bg-zinc-900/50 border border-white/5 rounded-[1.5rem] p-6 backdrop-blur-sm">
                <div className="h-14 flex items-center font-medium text-white text-lg border-b border-white/10 mb-4">
                    ChatGPT
                </div>
                {features.map((f, i) => (
                    <div key={i} className="h-14 flex items-center justify-start md:justify-center border-b border-white/5 last:border-0">
                        <span className="md:hidden text-gray-400 text-sm mr-auto">{f.name}</span>

                        {f.gpt === true ? (
                             <div className="w-6 h-6 rounded-full border border-zinc-600 flex items-center justify-center">
                                <Check className="w-3 h-3 text-zinc-400" />
                             </div>
                        ) : f.gpt === false ? (
                            <div className="w-6 h-6 rounded-full border border-red-500/50 flex items-center justify-center">
                                <X className="w-3 h-3 text-red-500" />
                            </div>
                        ) : (
                            <div className="w-6 h-6 flex items-center justify-center">
                                <Minus className="w-4 h-4 text-yellow-500" />
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;