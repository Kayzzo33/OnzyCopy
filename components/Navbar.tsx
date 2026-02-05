import React, { useState } from 'react';
import { Menu, X, Brain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Capsule Navbar - Positioned Absolute (Only shows on Hero) */}
      <div className="absolute top-8 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="hidden md:flex items-center gap-12 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 shadow-2xl">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-copy-orange to-orange-700 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-all duration-300">
              <Brain className="text-white w-5 h-5" fill="currentColor" />
            </div>
            <span className="text-lg font-display font-bold tracking-tight text-white">
              Onzy <span className="text-copy-orange">Copy</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Funcionalidades
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Como Funciona
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 border-l border-white/10 pl-8">
            <button className="text-white hover:text-copy-orange transition-colors text-sm font-bold uppercase tracking-wider">
              Entrar
            </button>
            <button className="shiny-button bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              COMEÇAR AGORA
            </button>
          </div>

        </nav>

        {/* Mobile Nav Header */}
        <div className="md:hidden w-full flex justify-between items-center bg-black/60 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
           <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-lg bg-copy-orange flex items-center justify-center">
                <Brain className="text-white w-5 h-5" fill="currentColor" />
             </div>
             <span className="font-bold text-white">OnzyCopy</span>
           </div>
           <button onClick={() => setIsMobileMenuOpen(true)} className="text-white">
             <Menu />
           </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                 <Brain className="text-copy-orange" />
                 <span className="font-bold text-xl text-white">Menu</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2 bg-white/10 rounded-full">
                <X />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 text-lg font-medium text-center">
              <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-white py-2">Funcionalidades</a>
              <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-white py-2">Como Funciona</a>
              <a href="#" className="text-copy-orange py-2">Fazer Login</a>
              <button className="bg-white text-black py-4 rounded-xl font-bold mt-4">
                Começar Agora
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;