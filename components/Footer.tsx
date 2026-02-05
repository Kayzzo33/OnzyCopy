import React from 'react';
import { Brain, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24">
            
            {/* Brand Column */}
            <div className="space-y-6 max-w-sm">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-copy-orange to-orange-700 flex items-center justify-center">
                        <Brain className="text-white w-5 h-5" fill="currentColor" />
                    </div>
                    <span className="text-xl font-display font-bold tracking-tight text-white">
                        ONZY <br/> COPY <span className="text-[8px] align-top">©</span>
                    </span>
                </div>
                <div className="text-gray-500 text-xs space-y-2">
                    <p>ONZY COPY 2025 ©</p>
                    <p>Todos os direitos reservados.</p>
                    <p>CNPJ: 55.887.903/0001-28, com sede na Rua Emanuel Kant, Sala 817, Curitiba, Paraná.</p>
                </div>
                <div className="flex gap-3">
                    <div className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/10 cursor-pointer">
                        <Instagram size={18} className="text-white" />
                    </div>
                    <div className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/10 cursor-pointer">
                        <Linkedin size={18} className="text-white" />
                    </div>
                </div>
            </div>

            {/* Links Columns */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
                <div className="space-y-4">
                    <h4 className="font-bold text-white text-sm">LINKS</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className="hover:text-white cursor-pointer transition-colors">Termo de Adesão</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Política de Privacidade</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Perguntas Frequentes</li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="font-bold text-white text-sm">ONZY</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className="hover:text-white cursor-pointer transition-colors">Entrar</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Método</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Assinatura</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="font-bold text-white text-sm">CANAIS</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className="hover:text-white cursor-pointer transition-colors">Suporte</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Instagram</li>
                    </ul>
                </div>
            </div>
        </div>
        
    
      </div>
    </footer>
  );
};

export default Footer;