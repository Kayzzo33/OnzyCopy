import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Sparkles, CheckCircle2, Star } from 'lucide-react';

type Phase = 'typing' | 'loading' | 'result' | 'idle';

const AiChatSimulation: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('typing');
  const [key, setKey] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
        timer = setTimeout(() => setPhase('loading'), 3000); // Simulated typing duration
    } else if (phase === 'loading') {
      timer = setTimeout(() => setPhase('result'), 2500);
    } else if (phase === 'result') {
      timer = setTimeout(() => setPhase('idle'), 8000);
    } else if (phase === 'idle') {
      timer = setTimeout(() => {
        setKey(prev => prev + 1);
        setPhase('typing');
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [phase]);

  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-copy-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-copy-orange/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-copy-orange/30 bg-copy-orange/10 text-copy-orange font-bold text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-copy-orange"></span>
              COPY HUMANIZADA
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              Sua copy é a <span className="text-copy-orange">principal escolha</span> do seu cliente?
            </h2>

            <div className="glass-panel p-6 rounded-2xl">
              <p className="text-gray-300 text-lg leading-relaxed">
                Diga adeus aos textos genéricos que todo mundo percebe que foi feito por robô. 
                Nossa tecnologia <span className="text-white font-semibold">Human Touch Copy™</span> analisa padrões emocionais reais para criar textos que conectam e vendem.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-white text-copy-dark rounded-full font-bold hover:scale-105 transition-transform">
                    Ver Metodologia
                </button>
                <button className="px-8 py-3 glass-panel rounded-full font-bold hover:bg-white/10 transition-colors">
                    Comparar Resultados →
                </button>
            </div>

            <div className="pt-8 border-t border-white/10">
                <p className="text-sm text-gray-500 mb-4">Confiado por profissionais de:</p>
                <div className="flex gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder logos */}
                    <span className="text-lg font-bold text-white">Hotmart</span>
                    <span className="text-lg font-bold text-white">Kiwify</span>
                    <span className="text-lg font-bold text-white">Eduzz</span>
                    <span className="text-lg font-bold text-white">Monetizze</span>
                </div>
            </div>
          </motion.div>

          {/* Right Column - Chat Simulation */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative"
          >
            <div className="relative bg-white rounded-[2.5rem] shadow-2xl overflow-hidden min-h-[600px] border-4 border-gray-100/10">
              
              {/* Fake UI Header */}
              <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-b border-gray-100">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
                  engine_active
                </div>
              </div>

              {/* Chat Area */}
              <div className="p-6 md:p-8 flex flex-col gap-6 bg-gray-50/50 h-full min-h-[540px]">
                <AnimatePresence mode="wait">
                    {/* User Message */}
                    {(phase !== 'idle') && (
                        <motion.div
                            key={`user-${key}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex gap-4 items-end self-end max-w-[90%]"
                        >
                            <div className="bg-copy-dark text-white p-4 rounded-2xl rounded-tr-sm shadow-lg text-sm md:text-base">
                                <p>Preciso de uma copy para vender meu curso de inglês sem parecer "vendedor de curso". Algo natural.</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center shrink-0">
                                <User size={16} className="text-gray-600" />
                            </div>
                        </motion.div>
                    )}

                    {/* AI Thinking Bubble */}
                    {(phase === 'loading') && (
                        <motion.div
                            key={`loading-${key}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="flex gap-4 items-end max-w-[80%]"
                        >
                            <div className="w-8 h-8 rounded-full bg-copy-orange flex items-center justify-center shrink-0 shadow-lg shadow-copy-orange/30">
                                <Sparkles size={16} className="text-white" />
                            </div>
                            <div className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-md flex gap-1">
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                            </div>
                        </motion.div>
                    )}

                    {/* AI Result */}
                    {(phase === 'result') && (
                        <motion.div
                            key={`result-${key}`}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="flex gap-4 items-start max-w-[100%]"
                        >
                            <div className="w-8 h-8 rounded-full bg-copy-orange flex items-center justify-center shrink-0 shadow-lg shadow-copy-orange/30 mt-2">
                                <Sparkles size={16} className="text-white" />
                            </div>
                            <div className="flex-1 bg-white rounded-2xl rounded-tl-sm shadow-xl border border-orange-100 overflow-hidden">
                                {/* Result Header */}
                                <div className="bg-gradient-to-r from-orange-50 to-white p-4 border-b border-orange-100 flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-gray-800 text-sm">Onzy Copy™</span>
                                        <CheckCircle2 size={14} className="text-blue-500" />
                                    </div>
                                    <div className="flex items-center gap-1 bg-green-100 px-2 py-0.5 rounded-full">
                                        <Star size={10} className="fill-green-600 text-green-600" />
                                        <span className="text-[10px] font-bold text-green-700">99.8% Humano</span>
                                    </div>
                                </div>
                                {/* Result Body */}
                                <div className="p-5 space-y-3">
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        "Sabe quando você tenta aprender inglês há anos, mas trava na hora de falar? A culpa não é sua. O método tradicional foca em regras, nós focamos em conversas..."
                                    </p>
                                    <div className="h-px bg-gray-100 w-full" />
                                    <div className="flex gap-2">
                                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Gatilhos:</div>
                                        <div className="flex gap-1 flex-wrap">
                                            <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-gray-600">Empatia</span>
                                            <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-gray-600">Quebra de Objeção</span>
                                            <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-gray-600">Storytelling</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
              </div>
            </div>

            {/* Decoration Elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-copy-orange/30 rounded-full blur-[50px] pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AiChatSimulation;