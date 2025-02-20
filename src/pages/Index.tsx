
import { useState } from 'react';
import { About } from '../components/About';
import { Creations } from '../components/Creations';
import { Cart } from '../components/Cart';
import { type Product } from '../types';

const Index = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <main className="bg-cream scroll-smooth">
      <About />
      <Creations addToCart={addToCart} hasItems={cartItems.length > 0} />
      <Cart items={cartItems} clearCart={clearCart} />
    </main>
  );
};

export default Index;
