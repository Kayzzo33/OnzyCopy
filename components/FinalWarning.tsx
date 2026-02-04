import React from 'react';
import { motion } from 'framer-motion';
import { Users, AlertTriangle } from 'lucide-react';

const FinalWarning: React.FC = () => {
  return (
    <section className="py-32 px-6 relative z-10 flex justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl w-full glass-panel border-white/10 rounded-[2rem] p-8 md:p-16 relative text-center"
      >
        {/* Decorative Icon */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-copy-dark border border-white/10 p-4 rounded-2xl shadow-2xl">
            <Users className="text-copy-orange w-8 h-8" />
        </div>

        <div className="space-y-8 mt-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold">Último recado antes de você entrar</h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
                <p>
                    Se você procura <strong className="text-white font-bold">dinheiro fácil</strong> ou fórmulas mágicas para ficar <strong className="text-white font-bold">milionário</strong> do dia para a noite, por favor, <span className="line-through text-red-400/70 decoration-red-500">não entre</span>.
                </p>
                <p>
                    O Copy Pocket é uma ferramenta de potência industrial para quem busca <span className="border-b border-copy-orange text-white">resultados</span> profissionais e está disposto a aplicar estratégias validadas.
                </p>
            </div>

            <div className="py-8">
                <blockquote className="text-xl md:text-2xl italic font-serif text-white opacity-90">
                    "A tecnologia deve ampliar a criatividade humana, não substituí-la."
                </blockquote>
                <p className="mt-4 text-handwriting text-copy-orange font-medium text-lg rotate-[-2deg] opacity-80">
                    - jKayzz
                </p>
            </div>

            <button className="w-full md:w-auto px-10 py-4 bg-white text-copy-dark font-bold rounded-full text-lg hover:bg-gray-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                Aceitar o Desafio
            </button>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalWarning;