import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "O Onzy Copy serve para quem não é copywriter profissional?",
    answer: "Sim! O Onzy Copy foi criado justamente para empreendedores e profissionais de marketing que precisam de copies de alta conversão sem contratar copywriters caros ou ter anos de experiência – nossa IA treinada com milhares de copys vencedoras entrega textos persuasivos em segundos, mesmo se você nunca escreveu copy na vida."
  },
  {
    question: "Que tipo de copy eu consigo criar com o Onzy Copy?",
    answer: "Você pode criar praticamente qualquer tipo de texto para vendas: Legendas para Instagram, Roteiros para Reels/TikTok, E-mails de Vendas, Landing Pages completas, Anúncios (Ads), VSLs (Vídeo Sales Letters) e muito mais."
  },
  {
    question: "A copy gerada é adaptada ao meu produto e público?",
    answer: "Absolutamente. Nossa inteligência artificial não apenas completa frases, ela entende o contexto do seu produto, as dores do seu público-alvo e o tom de voz da sua marca para gerar textos personalizados e altamente persuasivos."
  },
  {
    question: "Posso usar as copys geradas sem ajustes?",
    answer: "Sim, muitas vezes as copys saem prontas para uso. No entanto, recomendamos sempre uma leitura rápida para dar aquele toque final pessoal, caso deseje."
  },
  {
    question: "O Onzy Copy substitui um copywriter humano?",
    answer: "O Onzy Copy atua como um copywriter sênior na sua equipe. Ele acelera a produção em 10x e eleva a qualidade, mas a estratégia final e a decisão de publicação continuam sendo suas. É a ferramenta perfeita para quem não pode pagar R$ 5.000+ em um freelancer."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
        
        {/* Left Column: Title & Support */}
        <div className="lg:col-span-5 space-y-8">
            <div>
                <h2 className="text-5xl md:text-7xl font-display font-medium text-white tracking-tight leading-[1.1]">
                    Perguntas<br />
                    Frequentes
                </h2>
            </div>
            
            <div className="pt-8">
                <p className="text-gray-400 text-lg mb-6">
                    Não encontrou sua dúvida aqui? Tente falar com nosso suporte.
                </p>
                <button className="flex items-center gap-2 border border-white/20 rounded-full px-8 py-3 text-white hover:bg-white hover:text-black transition-all duration-300 group">
                    <span className="font-medium">Falar com suporte</span>
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
            </div>
        </div>

        {/* Right Column: Accordion */}
        <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => (
                <div 
                    key={index}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                        activeIndex === index 
                        ? 'bg-black border-white/40' 
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                >
                    <button
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left"
                    >
                        <span className={`text-lg font-medium transition-colors ${activeIndex === index ? 'text-white' : 'text-gray-400'}`}>
                            {faq.question}
                        </span>
                        <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'bg-white text-black rotate-180' : 'text-gray-400'}`}>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                    </button>

                    <AnimatePresence>
                        {activeIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="px-6 pb-6 pt-0">
                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base border-t border-white/10 pt-4">
                                        {faq.answer}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;