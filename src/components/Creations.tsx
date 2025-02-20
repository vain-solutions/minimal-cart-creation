
import { useState } from 'react';
import { ShoppingBag, ChevronDown, Plus, Minus } from 'lucide-react';
import { type Product, type ProductSize, type CartItem } from '../types';

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
  addToCart: (product: CartItem) => void;
  hasItems: boolean;
}

export const Creations = ({ addToCart, hasItems }: Props) => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [selectedSize, setSelectedSize] = useState<ProductSize>('M');
  const [quantity, setQuantity] = useState(1);

  const scrollToCart = () => {
    const element = document.getElementById('cart');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      ...product,
      size: selectedSize,
      quantity: quantity
    });
    setSelectedSize('M');
    setQuantity(1);
  };

  return (
    <section id="creations" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-white dark:bg-charcoal">
      <div className="w-full max-w-6xl">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16 text-charcoal dark:text-cream">Our Creations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="aspect-[3/4] bg-cream dark:bg-stone/10 overflow-hidden">
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
                  
                  <div className="flex gap-4 mb-4">
                    {(['S', 'M', 'L', 'XL'] as ProductSize[]).map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-8 h-8 flex items-center justify-center border ${
                          selectedSize === size ? 'border-white bg-white/20' : 'border-white/50'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1 hover:bg-white/20 rounded"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="w-8 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-1 hover:bg-white/20 rounded"
                    >
                      <Plus size={18} />
                    </button>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
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
              className="flex flex-col items-center text-stone hover:text-charcoal dark:hover:text-cream transition-colors duration-300"
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
