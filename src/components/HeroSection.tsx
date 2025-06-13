
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue-500/10 to-pastel-purple-500/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-electric-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pastel-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-electric-blue-400 via-pastel-purple-400 to-electric-blue-400 bg-clip-text text-transparent">
            Productos Digitales
          </span>
          <br />
          <span className="text-foreground">
            Premium
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
          Discord Nitro, cuentas de Netflix, juegos y más servicios digitales a precios increíbles. 
          Calidad garantizada y entrega instantánea.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{animationDelay: '0.4s'}}>
          <button className="group px-8 py-4 bg-gradient-to-r from-electric-blue-600 to-pastel-purple-600 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-electric-blue-500/25">
            Ver Productos
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </button>
          
          <button className="px-8 py-4 glass-card rounded-xl font-semibold hover-glow border border-white/20">
            Explorar Categorías
          </button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="glass-card p-6 rounded-2xl hover-glow animate-slide-up" style={{animationDelay: '0.6s'}}>
            <div className="w-12 h-12 bg-gradient-to-br from-electric-blue-500 to-electric-blue-600 rounded-xl mb-4 flex items-center justify-center">
              ⚡
            </div>
            <h3 className="text-xl font-semibold mb-2">Entrega Instantánea</h3>
            <p className="text-foreground/70">Recibe tus productos al momento de la compra</p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl hover-glow animate-slide-up" style={{animationDelay: '0.8s'}}>
            <div className="w-12 h-12 bg-gradient-to-br from-pastel-purple-500 to-pastel-purple-600 rounded-xl mb-4 flex items-center justify-center">
              🛡️
            </div>
            <h3 className="text-xl font-semibold mb-2">100% Seguro</h3>
            <p className="text-foreground/70">Garantía total en todos nuestros productos</p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl hover-glow animate-slide-up" style={{animationDelay: '1s'}}>
            <div className="w-12 h-12 bg-gradient-to-br from-electric-blue-500 to-pastel-purple-500 rounded-xl mb-4 flex items-center justify-center">
              💎
            </div>
            <h3 className="text-xl font-semibold mb-2">Precios Premium</h3>
            <p className="text-foreground/70">Los mejores precios del mercado</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
