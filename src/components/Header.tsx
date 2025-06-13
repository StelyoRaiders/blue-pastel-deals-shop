import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-electric-blue-400 to-pastel-purple-400 rounded-lg"></div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-electric-blue-400 to-pastel-purple-400 bg-clip-text text-transparent">
              GameFuel Store
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
          
          <div>
            <a
              href="https://blackshop.sell.app/customer-portal"
              className="px-5 py-2 rounded-xl font-semibold bg-gradient-to-r from-electric-blue-600 to-pastel-purple-600 text-white hover:scale-105 transition-all duration-300 shadow hover:shadow-xl"
            >
              Panel de clientes
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
