import React from 'react';
import { Zap, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 glass-section pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
            
            {/* Brand */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Zap className="text-copy-orange w-6 h-6" fill="currentColor" />
                    <span className="text-xl font-display font-bold">
                        Onzy <span className="text-copy-orange">Copy</span>
                    </span>
                </div>
                <p className="text-gray-400 text-sm">
                    Revolucionando a maneira como você escreve para a internet. Sem robôs, apenas resultados.
                </p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <h4 className="font-bold mb-4 text-white">Produto</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li className="hover:text-copy-orange cursor-pointer transition-colors">Features</li>
                        <li className="hover:text-copy-orange cursor-pointer transition-colors">Preços</li>
                        <li className="hover:text-copy-orange cursor-pointer transition-colors">Showcase</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4 text-white">Legal</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li className="hover:text-copy-orange cursor-pointer transition-colors">Termos</li>
                        <li className="hover:text-copy-orange cursor-pointer transition-colors">Privacidade</li>
                    </ul>
                </div>
            </div>

            {/* Social */}
            <div>
                <h4 className="font-bold mb-4 text-white">Social</h4>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-copy-orange hover:text-white transition-all">
                        <Instagram size={18} className="text-gray-300" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-copy-orange hover:text-white transition-all">
                        <Linkedin size={18} className="text-gray-300" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-copy-orange hover:text-white transition-all">
                        <Twitter size={18} className="text-gray-300" />
                    </a>
                </div>
            </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">© 2024 Onzy Copy. Todos os direitos reservados.</p>
            <p className="text-xs text-gray-500 hover:text-copy-orange transition-colors cursor-default">
                Desenvolvido por jKayzz
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;