import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Search, FlaskConical } from 'lucide-react';

const FeaturesGrid: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group hover:border-white/20 transition-colors"
            >
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Como as grandes marcas vendem</h3>
                    <p className="text-gray-400 mb-8">Modelos de copy baseados nas estratégias de conversão das maiores empresas do mundo.</p>
                    <div className="grid grid-cols-4 gap-4">
                        {[1,2,3,4,5,6,7,8].map(i => (
                            <div key={i} className="aspect-square bg-white/5 rounded-xl flex items-center justify-center grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-gray-500 to-white/50" />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-panel rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group"
            >
                 <div className="absolute top-0 right-0 w-64 h-64 bg-copy-orange/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-copy-orange/30 transition-colors" />
                 <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-copy-orange flex items-center justify-center mb-6">
                        <FlaskConical className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Copy com ciência aplicada</h3>
                    <p className="text-gray-400">
                        Utilizamos princípios de neurociência e psicologia comportamental para garantir que cada palavra tenha um propósito de conversão.
                    </p>
                 </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-panel rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group"
            >
                 <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent" />
                 <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Resultados Mensuráveis</h3>
                        <p className="text-gray-400">Foque no ROI.</p>
                    </div>
                    
                    <div className="mt-8 flex items-end gap-4">
                        <div className="bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-xl">
                            <span className="text-green-500 font-bold text-xl">+ R$ 320k</span>
                        </div>
                        <TrendingUp className="text-green-500 w-8 h-8 mb-2" />
                    </div>
                 </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="glass-panel rounded-[2.5rem] p-8 md:p-12 flex items-center justify-between relative overflow-hidden group hover:bg-white/5 transition-colors"
            >
                <div>
                    <h3 className="text-2xl font-bold mb-2">Análise Profunda</h3>
                    <p className="text-gray-400 text-sm">Entendemos seu nicho.</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-white text-copy-dark flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform">
                    <Search className="w-8 h-8" />
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;