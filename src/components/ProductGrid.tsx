
import React, { useState } from 'react';
import ProductCard from './ProductCard';

const categories = [
  { id: 'all', name: 'Todos', icon: '🔥' },
  { id: 'discord', name: 'Discord', icon: '💬' },
  { id: 'streaming', name: 'Streaming', icon: '📺' },
  { id: 'gaming', name: 'Gaming', icon: '🎮' },
  { id: 'software', name: 'Software', icon: '💻' },
];

const products = [
  {
    id: 1,
    name: 'Discord Nitro 1 Mes',
    price: 2.99,
    originalPrice: 9.99,
    category: 'discord',
    image: '💜',
    description: 'Acceso completo a Discord Nitro por 1 mes',
    features: ['Avatar animado', 'Boost de servidor', 'Calidad HD', 'Emojis personalizados'],
    storeId: '62796',    // PON aquí tu storeId real de Sell.app
    productId: '75fFwqM', // PON aquí tu productId real de Sell.app
  },
  {
    id: 2,
    name: 'Netflix Premium 1 Mes',
    price: 4.99,
    originalPrice: 15.99,
    category: 'streaming',
    image: '🎬',
    description: 'Cuenta Netflix Premium compartida',
    features: ['4K Ultra HD', '4 pantallas', 'Sin anuncios', 'Descarga offline'],
    storeId: '62796',
    productId: '307252',
  },
  {
    id: 3,
    name: 'Discord Nitro 3 Meses',
    price: 7.99,
    originalPrice: 29.99,
    category: 'discord',
    image: '💎',
    description: 'Discord Nitro por 3 meses completos',
    features: ['Avatar animado', 'Boost de servidor', 'Calidad HD', 'Emojis personalizados'],
    storeId: '62796',
    productId: '307253',
  },
  {
    id: 4,
    name: 'Spotify Premium 1 Mes',
    price: 2.49,
    originalPrice: 9.99,
    category: 'streaming',
    image: '🎵',
    description: 'Música sin límites y sin anuncios',
    features: ['Sin anuncios', 'Descarga offline', 'Calidad alta', 'Saltos ilimitados'],
    storeId: '62796',
    productId: '307254',
  },
  {
    id: 5,
    name: 'Steam Wallet $10',
    price: 8.99,
    originalPrice: 10.00,
    category: 'gaming',
    image: '🎮',
    description: 'Crédito para tu cuenta de Steam',
    features: ['Válido globalmente', 'Entrega instantánea', 'Sin expiración', 'Activación automática'],
    storeId: '62796',
    productId: '307255',
  },
  {
    id: 6,
    name: 'Office 365 Personal',
    price: 12.99,
    originalPrice: 69.99,
    category: 'software',
    image: '📊',
    description: 'Suite completa de Office por 1 año',
    features: ['Word, Excel, PowerPoint', '1TB OneDrive', 'Soporte técnico', 'Actualizaciones'],
    storeId: '62796',
    productId: '307256',
  }
];


const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="productos" className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-electric-blue-400 to-pastel-purple-400 bg-clip-text text-transparent">
            Nuestros Productos
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Descubre nuestra selección de productos digitales premium a precios increíbles
          </p>
        </div>

        {/* Filtros de categoría */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-electric-blue-600 to-pastel-purple-600 text-white'
                  : 'glass-card hover-glow border border-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-2xl text-foreground/50">
              No se encontraron productos en esta categoría
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
