import React from 'react';
import { Play, Layers, Lock, MessageSquare } from 'lucide-react';

const coupons = [
  {
    name: "CUPOM CLOAKUP - 5% OFF",
    desc: "Exclusivo para membros ONZY.",
    detail: "Garanta 5% OFF nos três primeiros meses.",
    icon: Lock
  },
  {
    name: "CUPOM BOTF.AI - 5% OFF",
    desc: "Exclusivo para membros ONZY.",
    detail: "Garanta 5% OFF em todos os meses.",
    icon: Layers
  },
  {
    name: "CUPOM ZAPFLOW - TESTE GRÁTIS",
    desc: "Exclusivo para membros ONZY.",
    detail: "Teste grátis por 7 dias.",
    icon: MessageSquare
  },
  {
    name: "CUPOM INLEAD - 10% OFF",
    desc: "Exclusivo para membros ONZY.",
    detail: "Garanta 10% OFF no primeiro mês.",
    icon: Play
  }
];

// Duplicar para criar loop infinito
const loopCoupons = [...coupons, ...coupons, ...coupons];

const CouponsSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden py-32 flex flex-col items-center">
      
      {/* Background Blobs (Specific to this section as requested) */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <div className="absolute top-[30%] left-[20%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-[0.15] animate-blob"></div>
         <div className="absolute top-[20%] right-[-100px] w-[500px] h-[500px] bg-red-600 rounded-full blur-[120px] opacity-[0.1] animate-blob animation-delay-2000"></div>
      </div>

      {/* Main Title - Behind the glass */}
      <h1 className="select-none text-center font-display font-extrabold tracking-tight text-white z-0 relative top-10 md:top-0" 
          style={{ fontSize: 'clamp(4rem, 18vw, 12rem)', lineHeight: 1, marginBottom: '-40px' }}>
          Descontos
      </h1>

      {/* Carousel Container */}
      <div className="w-full relative z-10">
        {/* Mask for fading edges */}
        <div className="w-full overflow-hidden" 
             style={{ 
               padding: '60px 0', 
               maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
               WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
             }}>
             
             {/* Scrolling Track */}
             <div className="flex gap-10 px-10 w-max animate-scroll">
                {loopCoupons.map((coupon, i) => (
                    <div key={i} className="group relative w-[340px] h-[240px] shrink-0 flex flex-col justify-start p-[35px] rounded-[28px] cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.08] hover:-translate-y-2"
                         style={{
                             background: 'rgba(255, 255, 255, 0.03)',
                             backdropFilter: 'blur(20px) saturate(160%)',
                             WebkitBackdropFilter: 'blur(20px) saturate(160%)',
                             border: '1px solid rgba(255, 255, 255, 0.1)',
                             boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4), inset 0 0 15px rgba(255, 255, 255, 0.02), 0 0 20px rgba(255, 255, 255, 0.03)'
                         }}
                    >
                        {/* Top sheen line */}
                        <div className="absolute top-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[0.5px]"></div>

                        {/* Hover styles injection via style tag for specificity if needed, or rely on Tailwind group-hover */}
                        <style>{`
                            .group:hover {
                                background: rgba(255, 255, 255, 0.06) !important;
                                border-color: rgba(255, 255, 255, 0.4) !important;
                                box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(255, 255, 255, 0.1) !important;
                                z-index: 10;
                            }
                        `}</style>

                        {/* Icon Box */}
                        <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mb-7 shadow-[0_4px_15px_rgba(0,0,0,0.2)]"
                             style={{
                                 background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                                 border: '1px solid rgba(255, 255, 255, 0.2)'
                             }}
                        >
                            <coupon.icon className="text-white w-6 h-6" />
                        </div>

                        {/* Text */}
                        <h3 className="text-white text-sm font-bold tracking-wider mb-2 uppercase">
                            {coupon.name}
                        </h3>
                        <p className="text-white/60 text-xs font-medium leading-relaxed">
                            {coupon.desc}
                            <br/>
                            {coupon.detail}
                        </p>
                    </div>
                ))}
             </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center px-8 max-w-5xl mt-8 relative z-10">
         <p className="text-base md:text-lg text-gray-400 leading-relaxed font-medium">
            Membros ONZY possuem acesso a um <span className="text-white font-semibold">clube de vantagens</span>, oferecendo <br className="hidden md:block" />
            <span className="text-white font-bold italic">menores taxas e cupons de descontos</span> exclusivos em plataformas.
         </p>
      </div>

      <style>{`
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-scroll {
            animation: scroll 40s linear infinite;
        }
        .animate-blob {
            animation: move 20s infinite alternate;
        }
        @keyframes move {
            from { transform: translate(0, 0); }
            to { transform: translate(100px, 100px); }
        }
      `}</style>

    </section>
  );
};

export default CouponsSection;