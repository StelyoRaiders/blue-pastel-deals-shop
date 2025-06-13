import React from 'react';
import { ShoppingCart, Check } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  category: string;
  image: string;
  description: string;
  features: string[];
  storeId: string;    // Sell.app Store ID
  productId: string;  // Sell.app Product ID
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="glass-card rounded-2xl overflow-hidden hover-glow group border border-white/10">
      <div className="relative p-6 pb-4">
        <div className="absolute top-4 right-4 bg-gradient-to-r from-electric-blue-600 to-pastel-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          -{discount}%
        </div>
        
        <div className="w-16 h-16 bg-gradient-to-br from-electric-blue-500/20 to-pastel-purple-500/20 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {product.image}
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-electric-blue-400 transition-colors duration-300">
          {product.name}
        </h3>
        
        <p className="text-foreground/70 mb-4">
          {product.description}
        </p>
        
        <div className="space-y-2 mb-6">
          {product.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-foreground/60">
              <Check size={16} className="text-electric-blue-400 mr-2 flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-2xl font-bold text-electric-blue-400">
              ${product.price}
            </span>
            <span className="text-sm text-foreground/50 line-through ml-2">
              ${product.originalPrice}
            </span>
          </div>
          <div className="text-right">
            <p className="text-xs text-foreground/50">Ahorro</p>
            <p className="text-sm font-semibold text-pastel-purple-400">
              ${(product.originalPrice - product.price).toFixed(2)}
            </p>
          </div>
        </div>
        
        {/* Botón Sell.app */}
        <button
          data-shoppy-product="75fFwqM"  // <-- Cambia el ID por el tuyo de cada producto
          className="w-full bg-gradient-to-r from-electric-blue-600 to-pastel-purple-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-electric-blue-500/25 flex items-center justify-center group"
        >
          <ShoppingCart size={20} className="mr-2 group-hover:animate-bounce" />
          Comprar Ahora
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
