import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { cn, formatPrice } from '../lib/utils';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
  onAddToCart: () => void;
}

export function ProductCard({
  name,
  description,
  price,
  image,
  stock,
  onAddToCart
}: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xl font-bold text-green-600">{formatPrice(price)}</span>
          <span className={cn(
            "text-sm",
            stock > 10 ? "text-green-600" : stock > 0 ? "text-orange-500" : "text-red-600"
          )}>
            {stock > 10 ? "En stock" : stock > 0 ? "Pocas unidades" : "Agotado"}
          </span>
        </div>
        <div className="mt-4 flex gap-2">
          <button
            onClick={onAddToCart}
            disabled={stock === 0}
            className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <ShoppingCart size={20} />
            <span>Añadir</span>
          </button>
          <button className="p-2 text-gray-600 hover:text-red-500 border border-gray-200 rounded-md hover:border-red-200">
            <Heart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}