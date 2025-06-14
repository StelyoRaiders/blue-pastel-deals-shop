
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-electric-blue-400 to-pastel-purple-400 rounded-lg"></div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-electric-blue-400 to-pastel-purple-400 bg-clip-text text-transparent">
                GameFuel Store
              </h3>
            </div>
            <p className="text-foreground/70 mb-4">
              Tu tienda de confianza para productos digitales premium a precios increíbles.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover-glow cursor-pointer">
                📧
              </div>
              <div className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover-glow cursor-pointer">
                💬
              </div>
              <div className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover-glow cursor-pointer">
                📱
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-electric-blue-400">Productos</h4>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#" className="hover:text-electric-blue-400 transition-colors">Discord Nitro</a></li>
              <li><a href="#" className="hover:text-electric-blue-400 transition-colors">Netflix Premium</a></li>
              <li><a href="#" className="hover:text-electric-blue-400 transition-colors">Spotify Premium</a></li>
              <li><a href="#" className="hover:text-electric-blue-400 transition-colors">Gaming</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-electric-blue-400">Soporte</h4>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#" className="hover:text-electric-blue-400 transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="hover:text-electric-blue-400 transition-colors">Contacto</a></li>
              <li>
                <Link to="/terms" className="hover:text-electric-blue-400 transition-colors">
                  Términos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-electric-blue-400 transition-colors">
                  Privacidad
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-electric-blue-400">Garantías</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-electric-blue-400 rounded-full mr-3"></div>
                <span className="text-sm text-foreground/70">Entrega instantánea</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-pastel-purple-400 rounded-full mr-3"></div>
                <span className="text-sm text-foreground/70">Soporte 24/7</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-electric-blue-400 rounded-full mr-3"></div>
                <span className="text-sm text-foreground/70">Garantía total</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-foreground/50">
            © 2024 GameFuel Store. Todos los derechos reservados. Productos digitales de calidad premium.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
