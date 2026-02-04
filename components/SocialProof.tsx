import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: "Ana Silva", role: "Marketing Digital", text: "Minhas conversões dobraram depois que parei de usar o ChatGPT puro e mudei pro Onzy Copy.", img: "https://picsum.photos/seed/1/100" },
  { name: "Carlos Mendes", role: "Ecommerce Owner", text: "A copy de produto gerada foi tão boa que usei sem editar uma vírgula.", img: "https://picsum.photos/seed/2/100" },
  { name: "Julia Santos", role: "Influencer", text: "As legendas dos meus stories nunca tiveram tanto engajamento.", img: "https://picsum.photos/seed/3/100" },
  { name: "Pedro Costa", role: "Copywriter", text: "Uso como base para todos os meus clientes. Acelera meu trabalho em 10x.", img: "https://picsum.photos/seed/4/100" },
  { name: "Lucas Ferreira", role: "SaaS Founder", text: "A landing page que criamos com o Onzy Copy está convertendo 4.5% a mais.", img: "https://picsum.photos/seed/5/100" },
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden relative z-10 glass-section">
        <div className="mb-12 text-center px-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">O que dizem os membros</h2>
        </div>

        <div className="flex w-full overflow-hidden mask-linear-fade">
            <motion.div 
                className="flex gap-6 px-6"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
                {[...testimonials, ...testimonials].map((t, i) => (
                    <div 
                        key={i} 
                        className="w-[350px] shrink-0 bg-white rounded-2xl p-6 text-gray-900 shadow-xl hover:scale-[1.02] transition-transform duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                            <div>
                                <h4 className="font-bold text-sm">{t.name}</h4>
                                <p className="text-xs text-gray-500">{t.role}</p>
                            </div>
                            <div className="ml-auto flex text-orange-400 text-xs">★★★★★</div>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-600">"{t.text}"</p>
                    </div>
                ))}
            </motion.div>
        </div>
        
        {/* CSS Mask for fade effect on edges */}
        <style>{`
            .mask-linear-fade {
                mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }
        `}</style>
    </section>
  );
};

export default SocialProof;