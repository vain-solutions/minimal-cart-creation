
import { useState } from 'react';
import { About } from '../components/About';
import { Creations } from '../components/Creations';
import { Cart } from '../components/Cart';
import { DarkModeToggle } from '../components/DarkModeToggle';
import { type CartItem } from '../types';

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCartItems([...cartItems, product]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <main className="bg-cream dark:bg-charcoal scroll-smooth">
      <DarkModeToggle />
      <About />
      <Creations addToCart={addToCart} hasItems={cartItems.length > 0} />
      <Cart items={cartItems} clearCart={clearCart} />
    </main>
  );
};

export default Index;
