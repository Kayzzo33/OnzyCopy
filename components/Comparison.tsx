import React from 'react';
import { Check, X, Minus, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { name: "Treinado em livros de copy", onzy: true, others: false, gpt: false },
  { name: "Frameworks específicos", onzy: true, others: false, gpt: null },
  { name: "Base de conhecimento RAG", onzy: true, others: false, gpt: false },
  { name: "Templates por nicho", onzy: true, others: false, gpt: null },
  { name: "Histórico salvo por projeto", onzy: true, others: false, gpt: false },
  { name: "Copy adaptada ao Brasil", onzy: true, others: null, gpt: null },
];

const Comparison: React.FC = () => {
  return (
    <section className="px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
            <span className="text-copy-orange text-sm font-bold tracking-wider uppercase mb-2 block">
                Onzy Copy vs. Outras Plataformas
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white">
                Compare na prática
            </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            {/* Column 1: Labels (Delayed) */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="hidden md:flex flex-col bg-white/5 border border-white/10 rounded-[2rem] p-8"
            >
                <div className="h-16 flex items-center font-bold text-white text-lg border-b border-white/10 mb-2">
                    Funcionalidade
                </div>
                {features.map((f, i) => (
                    <div key={i} className="h-16 flex items-center text-gray-400 text-sm font-medium border-b border-white/5 last:border-0">
                        {f.name}
                    </div>
                ))}
            </motion.div>

            {/* Column 2: Onzy Copy (Highlighted - Appears First) */}
            <motion.div 
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="flex flex-col relative bg-gradient-to-b from-copy-orange/80 to-orange-900/80 border border-orange-400/50 rounded-[2rem] p-8 shadow-[0_0_50px_rgba(255,107,53,0.3)] z-10"
            >
                {/* Glow Effect */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-white/50" />
                
                <div className="h-16 flex items-center gap-2 font-bold text-white text-lg border-b border-white/20 mb-2">
                    <Zap className="fill-white w-5 h-5" />
                    Onzy Copy
                </div>
                {features.map((f, i) => (
                    <div key={i} className="h-16 flex items-center justify-start md:justify-center border-b border-white/10 last:border-0">
                         {/* Mobile Label */}
                         <span className="md:hidden text-white/80 text-sm mr-auto">{f.name}</span>
                         
                         <div className="w-8 h-8 rounded-full bg-white text-copy-orange flex items-center justify-center shadow-lg">
                            <Check className="w-5 h-5 stroke-[3]" />
                         </div>
                    </div>
                ))}
            </motion.div>

            {/* Column 3: Others (Delayed) */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                whileHover={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col bg-white/5 border border-white/10 rounded-[2rem] p-8 transition-opacity"
            >
                <div className="h-16 flex items-center font-bold text-white text-lg border-b border-white/10 mb-2">
                    Outras
                </div>
                {features.map((f, i) => (
                    <div key={i} className="h-16 flex items-center justify-start md:justify-center border-b border-white/5 last:border-0">
                        {/* Mobile Label */}
                        <span className="md:hidden text-gray-400 text-sm mr-auto">{f.name}</span>

                        {f.others === true ? (
                             <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                                <Check className="w-4 h-4 text-green-500" />
                             </div>
                        ) : f.others === false ? (
                            <div className="w-8 h-8 rounded-full border border-red-500/30 bg-red-500/10 flex items-center justify-center">
                                <X className="w-4 h-4 text-red-500" />
                            </div>
                        ) : (
                            <div className="w-8 h-8 flex items-center justify-center">
                                <Minus className="w-4 h-4 text-yellow-500" />
                            </div>
                        )}
                    </div>
                ))}
            </motion.div>

            {/* Column 4: ChatGPT (Delayed) */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                whileHover={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-col bg-white/5 border border-white/10 rounded-[2rem] p-8 transition-opacity"
            >
                <div className="h-16 flex items-center font-bold text-white text-lg border-b border-white/10 mb-2">
                    ChatGPT
                </div>
                {features.map((f, i) => (
                    <div key={i} className="h-16 flex items-center justify-start md:justify-center border-b border-white/5 last:border-0">
                         {/* Mobile Label */}
                         <span className="md:hidden text-gray-400 text-sm mr-auto">{f.name}</span>

                        {f.gpt === true ? (
                             <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                                <Check className="w-4 h-4 text-green-500" />
                             </div>
                        ) : f.gpt === false ? (
                            <div className="w-8 h-8 rounded-full border border-red-500/30 bg-red-500/10 flex items-center justify-center">
                                <X className="w-4 h-4 text-red-500" />
                            </div>
                        ) : (
                            <div className="w-8 h-8 flex items-center justify-center">
                                <Minus className="w-4 h-4 text-yellow-500" />
                            </div>
                        )}
                    </div>
                ))}
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;