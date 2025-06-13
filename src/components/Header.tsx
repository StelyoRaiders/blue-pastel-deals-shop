
import React from 'react';
import { ShoppingCart, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-electric-blue-400 to-pastel-purple-400 rounded-lg"></div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-electric-blue-400 to-pastel-purple-400 bg-clip-text text-transparent">
              DigitalStore
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground/80 hover:text-electric-blue-400 transition-colors duration-300">
              Inicio
            </a>
            <a href="#productos" className="text-foreground/80 hover:text-electric-blue-400 transition-colors duration-300">
              Productos
            </a>
            <a href="#categorias" className="text-foreground/80 hover:text-electric-blue-400 transition-colors duration-300">
              Categorías
            </a>
            <a href="#contacto" className="text-foreground/80 hover:text-electric-blue-400 transition-colors duration-300">
              Contacto
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg glass-card hover-glow">
              <Search size={20} className="text-electric-blue-400" />
            </button>
            <button className="p-2 rounded-lg glass-card hover-glow relative">
              <ShoppingCart size={20} className="text-electric-blue-400" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-electric-blue-500 to-pastel-purple-500 rounded-full text-xs flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
