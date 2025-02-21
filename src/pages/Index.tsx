
import { useState } from 'react';
import { About } from '../components/About';
import { Creations } from '../components/Creations';
import { Cart } from '../components/Cart';
import { BackToTop } from '../components/BackToTop';
import { type CartItem } from '../types';

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    const existingItem = cartItems.find(
      item => item.id === product.id && item.size === product.size
    );

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id && item.size === product.size
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      ));
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const updateQuantity = (itemId: number, newQuantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (itemId: number) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <main className="bg-cream dark:bg-charcoal scroll-smooth">
      <About />
      <Creations addToCart={addToCart} hasItems={cartItems.length > 0} />
      <Cart 
        items={cartItems} 
        clearCart={clearCart} 
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />
      <BackToTop />
    </main>
  );
};

export default Index;
