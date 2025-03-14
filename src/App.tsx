import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';

const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Lechuga Romana Orgánica',
    description: 'Lechuga romana fresca y crujiente, cultivada sin pesticidas. Perfecta para ensaladas César.',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1622205313162-be1d5712a43c?auto=format&fit=crop&q=80&w=800',
    stock: 15
  },
  {
    id: '2',
    name: 'Lechuga Iceberg Premium',
    description: 'Lechuga iceberg de hojas crujientes y frescas. Ideal para hamburguesas y wraps.',
    price: 1.99,
    image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&q=80&w=800',
    stock: 8
  },
  {
    id: '3',
    name: 'Mix de Lechugas Gourmet',
    description: 'Mezcla especial de variedades selectas: lollo rosso, hoja de roble y batavia.',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1506073881649-4e23be3e9ed0?auto=format&fit=crop&q=80&w=800',
    stock: 0
  }
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <section className="mb-12">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1595758378381-4c127f9bffa1?auto=format&fit=crop&q=80&w=2000"
                alt="Fresh lettuce field"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-transparent flex items-center">
                <div className="max-w-xl px-8">
                  <h1 className="text-4xl font-bold text-white mb-4">
                    La mejor lechuga fresca directo a tu mesa
                  </h1>
                  <p className="text-green-50 mb-6">
                    Seleccionamos las mejores variedades de lechuga, cultivadas con amor y cuidado para ofrecerte la máxima calidad y frescura.
                  </p>
                  <button className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors">
                    Explorar productos
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Productos Destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURED_PRODUCTS.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onAddToCart={() => console.log(`Added ${product.id} to cart`)}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;