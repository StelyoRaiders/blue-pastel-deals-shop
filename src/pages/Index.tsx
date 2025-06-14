
import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section id="inicio">
        <HeroSection />
      </section>
      <section id="productos">
        <ProductGrid />
      </section>
      <section id="categorias" className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-electric-blue-400 to-pastel-purple-400 bg-clip-text text-transparent">
            Categorías
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl hover-glow">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold mb-2">Gaming</h3>
              <p className="text-foreground/70">Discord Nitro, Steam, Epic Games</p>
            </div>
            <div className="glass-card p-8 rounded-2xl hover-glow">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-semibold mb-2">Entretenimiento</h3>
              <p className="text-foreground/70">Netflix, Spotify, YouTube Premium</p>
            </div>
            <div className="glass-card p-8 rounded-2xl hover-glow">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-2">Productividad</h3>
              <p className="text-foreground/70">Office 365, Adobe, Canva Pro</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contacto" className="py-16 px-6 bg-gradient-to-r from-electric-blue-900/20 to-pastel-purple-900/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-electric-blue-400 to-pastel-purple-400 bg-clip-text text-transparent">
            Contacto
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-foreground/70 mb-8">
              ¿Tienes alguna pregunta? Estamos aquí para ayudarte las 24 horas del día.
            </p>
            <div className="flex justify-center space-x-6">
              <div className="glass-card p-6 rounded-xl hover-glow">
                <div className="text-2xl mb-2">📧</div>
                <p className="text-sm text-foreground/70">Email</p>
                <p className="text-electric-blue-400">soporte@gamefuel.com</p>
              </div>
              <div className="glass-card p-6 rounded-xl hover-glow">
                <div className="text-2xl mb-2">💬</div>
                <p className="text-sm text-foreground/70">Discord</p>
                <p className="text-electric-blue-400">GameFuel#1234</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
