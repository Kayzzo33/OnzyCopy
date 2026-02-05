import React from 'react';
import { motion } from 'framer-motion';

const AnnualAccessSection: React.FC = () => {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center mb-12">
         <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">Compre sua chave de acesso</h2>
         <p className="text-gray-400 font-light">
            Ao comprar sua chave de acesso, automaticamente você receberá o direito de entrar nos grupos, além de acesso ao software e à área de membros.
         </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card-premium rounded-[3rem] p-8 md:p-12 border-white/10 relative overflow-hidden"
        >
            <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Image/Video Side */}
                <div className="flex-1 relative w-full md:w-auto flex justify-center">
                    <div className="absolute inset-0 bg-copy-orange/30 blur-[60px] rounded-full pointer-events-none transform translate-y-10"></div>
                    
                    {/* Video Container - Diminuído para w-[180px] conforme solicitado */}
                    <div className="relative w-[180px] h-[260px] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black">
                        <video 
                            src="https://res.cloudinary.com/ddxo3s8an/video/upload/v1770308120/Anima__o_simples_de_flutua__o_suave_para_um_card_futurista_com_bordas_met_licas_e_brilho_roxo._O_car_seed1868426117_ofxq2z.mp4" 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay brilho suave interno */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-copy-orange/10 to-transparent mix-blend-overlay pointer-events-none"></div>
                    </div>
                </div>

                {/* Text Side */}
                <div className="flex-1 text-left space-y-8">
                    <h3 className="text-2xl font-extrabold text-white uppercase tracking-wider font-sans">CHAVE ANUAL</h3>
                    
                    <ul className="space-y-4 text-gray-300 text-sm font-medium">
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-copy-orange"></span>
                            Acesso à área de membros por um ano
                        </li>
                        <li className="flex items-center gap-3">
                             <span className="w-1.5 h-1.5 rounded-full bg-copy-orange"></span>
                            Acesso ao grupo exclusivo no WhatsApp por um ano
                        </li>
                        <li className="flex items-center gap-3">
                             <span className="w-1.5 h-1.5 rounded-full bg-copy-orange"></span>
                            Acesso ao Discord por um ano
                        </li>
                        <li className="flex items-center gap-3">
                             <span className="w-1.5 h-1.5 rounded-full bg-copy-orange"></span>
                            Acesso a atualizações constantes
                        </li>
                    </ul>

                    <div className="pt-4 space-y-6">
                        <div className="text-4xl font-extrabold text-white tracking-tight">
                            R$ 297<span className="text-xl text-gray-400 font-bold">/ANO</span>
                        </div>
                        
                        <button className="shiny-button w-full py-4 bg-white text-black font-extrabold rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] tracking-wide uppercase">
                            FAZER PARTE
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnnualAccessSection;