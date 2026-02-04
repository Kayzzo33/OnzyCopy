import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(5, 5, 5, 0)', 'rgba(5, 5, 5, 0.8)']
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(12px)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter: backdropBlur }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        isScrolled ? 'border-white/10' : 'border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-copy-orange to-orange-700 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-all duration-300">
            <Zap className="text-white w-6 h-6" fill="currentColor" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight">
            Onzy <span className="text-copy-orange">Copy</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
            Funcionalidades
          </a>
          <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
            Como Funciona
          </a>
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-copy-orange transition-colors text-sm font-medium border border-white/20 rounded-full px-5 py-2">
              Entrar
            </button>
            <button className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,107,53,0.5)]">
              Começar Agora
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-copy-dark/95 border-b border-white/10 p-6 flex flex-col gap-4 backdrop-blur-xl"
        >
          <a href="#features" className="text-gray-300 py-2">Funcionalidades</a>
          <a href="#how-it-works" className="text-gray-300 py-2">Como Funciona</a>
          <div className="h-px bg-white/10 my-2" />
          <button className="text-left text-white py-2">Entrar</button>
          <button className="bg-copy-orange text-white w-full py-3 rounded-xl font-bold">
            Começar Agora
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;