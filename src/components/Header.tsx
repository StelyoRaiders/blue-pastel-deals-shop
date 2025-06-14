
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si no estamos en la página principal, navegamos allí primero
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/96380c5a-321d-41c9-a8f7-caf4993ab7bd.png" 
              alt="GameFuel Store Logo" 
              className="w-10 h-10 rounded-lg"
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-electric-blue-400 to-pastel-purple-400 bg-clip-text text-transparent">
              GameFuel Store
            </h1>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground/80 hover:text-electric-blue-400 transition-colors duration-300 cursor-pointer"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('productos')}
              className="text-foreground/80 hover:text-electric-blue-400 transition-colors duration-300 cursor-pointer"
            >
              Productos
            </button>
            <button 
              onClick={() => scrollToSection('categorias')}
              className="text-foreground/80 hover:text-electric-blue-400 transition-colors duration-300 cursor-pointer"
            >
              Categorías
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-foreground/80 hover:text-electric-blue-400 transition-colors duration-300 cursor-pointer"
            >
              Contacto
            </button>
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
