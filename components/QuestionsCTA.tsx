import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const QuestionsCTA: React.FC = () => {
  return (
    <section className="py-32 px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
        >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                Ficou alguma dúvida?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                Você pode visitar nossa página de Perguntas Frequentes ou falar diretamente com nosso suporte. O que você prefere?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="shiny-button px-8 py-3 bg-white text-black font-bold text-sm rounded-full flex items-center justify-center gap-2">
                    PERGUNTAS FREQUENTES
                    <ArrowUpRight size={16} />
                </button>
                <button className="px-8 py-3 bg-white/10 border border-white/10 text-white font-bold text-sm rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                    FALAR COM SUPORTE
                    <ArrowUpRight size={16} />
                </button>
            </div>
        </motion.div>
    </section>
  );
};

export default QuestionsCTA;