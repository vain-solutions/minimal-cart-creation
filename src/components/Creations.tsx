
import { useState } from 'react';
import { ShoppingBag, ChevronDown } from 'lucide-react';
import { type Product } from '../types';

const products: Product[] = [
  {
    id: 1,
    name: "The Essential Blazer",
    description: "A timeless piece crafted from Italian wool, featuring clean lines and expert tailoring.",
    price: 890,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Silk Evening Dress",
    description: "Elegant silk dress with minimalist draping and subtle details.",
    price: 1290,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Tailored Pants",
    description: "High-waisted pants with perfect proportions and exceptional fit.",
    price: 590,
    image: "/placeholder.svg"
  }
];

interface Props {
  addToCart: (product: Product) => void;
  hasItems: boolean;
}

export const Creations = ({ addToCart, hasItems }: Props) => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const scrollToCart = () => {
    const element = document.getElementById('cart');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="creations" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-white">
      <div className="w-full max-w-6xl">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16 text-charcoal">Our Creations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="aspect-[3/4] bg-cream overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {hoveredProduct === product.id && (
                <div className="absolute inset-0 bg-charcoal bg-opacity-90 flex flex-col items-center justify-center p-6 text-white animate-fade-in">
                  <h3 className="font-serif text-2xl mb-3">{product.name}</h3>
                  <p className="text-sm text-center mb-4">{product.description}</p>
                  <p className="font-serif text-xl mb-6">${product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="flex items-center gap-2 px-6 py-2 border border-white hover:bg-white hover:text-charcoal transition-colors duration-300"
                  >
                    <ShoppingBag size={18} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {hasItems && (
          <div className="flex flex-col items-center animate-fade-up">
            <button
              onClick={scrollToCart}
              className="flex flex-col items-center text-stone hover:text-charcoal transition-colors duration-300"
            >
              <span className="text-sm mb-2">View Cart</span>
              <ChevronDown className="animate-bounce" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
