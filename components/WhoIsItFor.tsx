import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Users, ShoppingCart, Megaphone } from 'lucide-react';

const personas = [
  { icon: PenTool, label: "Social media" },
  { icon: Users, label: "Gestores de tráfego" },
  { icon: ShoppingCart, label: "Infoprodutores" },
  { icon: Megaphone, label: "Agências" },
];

const WhoIsItFor: React.FC = () => {
  return (
    <section className="py-24 relative z-10">
      {/* Orange Strip Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/95 to-copy-orange/90 backdrop-blur-md transform -skew-y-1 origin-top-left scale-110 border-y border-white/10" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 text-white">
                <div>
                    <span className="text-sm font-bold uppercase tracking-wider text-orange-100 mb-2 block">Para quem é?</span>
                    <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
                        Feito para quem vive de conversão
                    </h2>
                </div>
                
                <p className="text-lg text-orange-50 leading-relaxed font-medium">
                    O Onzy Copy atende diferentes operações de venda. Ele gera roteiros e legendas para quem cria conteúdo, 
                    anúncios e headlines para quem roda tráfego, páginas de vendas completas para quem lança ou vende produtos digitais 
                    e múltiplas copys organizadas para quem precisa escalar produção.
                </p>

                <div className="pt-4">
                    <p className="text-sm font-bold uppercase tracking-wider text-orange-100 mb-4">Perfeito para:</p>
                    <div className="flex flex-wrap gap-4">
                        {personas.map((p, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl px-5 py-3 transition-colors cursor-default"
                            >
                                <div className="p-1.5 bg-white rounded-lg text-copy-orange">
                                    <p.icon size={16} fill="currentColor" />
                                </div>
                                <span className="font-bold text-sm md:text-base">{p.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[500px] hidden lg:block rounded-[2.5rem] overflow-hidden border-4 border-white/20 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop" 
                    alt="Professional Woman Smiling" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent" />
            </div>

        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;