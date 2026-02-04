import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2, FileText, Zap, ArrowRight, Upload } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Escolha o tipo de copy",
    description: "Stories, legendas, landing pages, criativos ou storytelling.",
    icon: MousePointer2,
    mockup: "selection"
  },
  {
    id: 2,
    title: "Descreva seu produto",
    description: "Conte brevemente sobre o que você vende e qual seu objetivo.",
    icon: FileText,
    mockup: "input"
  },
  {
    id: 3,
    title: "Copy Instantânea",
    description: "Edite, refine e publique com gatilhos validados.",
    icon: Zap,
    mockup: "result"
  }
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="how-it-works" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Como funciona</h2>
            <p className="text-gray-400">Três passos simples para a copy perfeita.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Steps List */}
            <div className="space-y-4">
                {steps.map((step) => (
                    <motion.div
                        key={step.id}
                        onClick={() => setActiveStep(step.id)}
                        className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                            activeStep === step.id 
                            ? 'bg-white border-white' 
                            : 'glass-panel border-white/5 hover:bg-white/5'
                        }`}
                    >
                        <div className="flex items-start gap-5">
                            <div className={`p-3 rounded-xl transition-colors ${
                                activeStep === step.id ? 'bg-copy-orange text-white' : 'bg-gray-800 text-gray-400'
                            }`}>
                                <step.icon size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className={`text-xl font-bold mb-1 transition-colors ${
                                    activeStep === step.id ? 'text-gray-900' : 'text-white'
                                }`}>
                                    {step.title}
                                </h3>
                                <p className={`text-sm leading-relaxed transition-colors ${
                                    activeStep === step.id ? 'text-gray-600' : 'text-gray-500'
                                }`}>
                                    {step.description}
                                </p>
                            </div>
                            <ArrowRight 
                                className={`transition-all duration-300 ${
                                    activeStep === step.id ? 'opacity-100 translate-x-0 text-copy-dark' : 'opacity-0 -translate-x-4'
                                }`} 
                            />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Visual Preview */}
            <div className="relative h-[500px] w-full glass-panel rounded-3xl border border-white/10 p-2 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-copy-orange/10 to-transparent pointer-events-none" />
                
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full flex items-center justify-center"
                    >
                        {/* Mockup Logic */}
                        {activeStep === 1 && (
                            <div className="bg-white/90 backdrop-blur w-[80%] rounded-xl shadow-2xl p-6 text-gray-800">
                                <h4 className="font-bold mb-4">O que vamos escrever hoje?</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {['Instagram Story', 'Landing Page', 'Email Marketing', 'Anúncio Facebook'].map((item) => (
                                        <div key={item} className="p-3 border rounded-lg hover:border-copy-orange hover:bg-orange-50 cursor-pointer flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-copy-orange" />
                                            <span className="text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeStep === 2 && (
                             <div className="bg-white/90 backdrop-blur w-[80%] rounded-xl shadow-2xl p-6 text-gray-800 space-y-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase">Nome do Produto</label>
                                    <div className="h-10 bg-gray-100 rounded-lg w-full" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase">Público Alvo</label>
                                    <div className="h-10 bg-gray-100 rounded-lg w-full" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase">Tom de voz</label>
                                    <div className="flex gap-2">
                                        <span className="px-3 py-1 bg-copy-dark text-white rounded-full text-xs">Descontraído</span>
                                        <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs">Profissional</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeStep === 3 && (
                             <div className="bg-white/90 backdrop-blur w-[80%] rounded-xl shadow-2xl overflow-hidden text-gray-800">
                                <div className="bg-green-50 p-4 border-b border-green-100 flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-green-600 fill-current" />
                                    <span className="text-xs font-bold text-green-700">Copy Gerada com Sucesso</span>
                                </div>
                                <div className="p-6 space-y-3">
                                    <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                                    <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                                    <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
                                    <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                                </div>
                                <div className="p-4 border-t bg-gray-50 flex justify-end">
                                    <button className="px-4 py-2 bg-copy-dark text-white text-xs font-bold rounded-lg">Copiar Texto</button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;