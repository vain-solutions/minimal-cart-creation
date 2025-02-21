
import { useState } from 'react';
import { Plus, Minus, X } from 'lucide-react';
import { toast } from '../components/ui/use-toast';
import { type CartItem } from '../types';

interface Props {
  items: CartItem[];
  clearCart: () => void;
  updateQuantity: (itemId: number, newQuantity: number) => void;
  removeItem: (itemId: number) => void;
}

export const Cart = ({ items, clearCart, updateQuantity, removeItem }: Props) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    instagram: ''
  });

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.phone.match(/^\+?[\d\s-]{8,}$/)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number.",
        variant: "destructive"
      });
      return;
    }
    
    console.log('Order submitted:', { items, formData });
    
    toast({
      title: "Order Submitted Successfully",
      description: "A member of our team will contact you shortly.",
    });
    
    clearCart();
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      instagram: ''
    });
  };

  if (items.length === 0) return null;

  return (
    <section id="cart" className="min-h-screen flex flex-col items-center px-6 py-20 bg-cream dark:bg-charcoal">
      <div className="w-full max-w-2xl mt-16">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16 text-charcoal dark:text-cream">Your Selection</h2>
        
        <div className="bg-white dark:bg-stone/10 p-8 mb-8 animate-fade-up">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center py-4 border-b border-cream dark:border-stone/20 last:border-0">
              <div>
                <h3 className="font-serif text-lg text-charcoal dark:text-cream">{item.name}</h3>
                <p className="text-stone dark:text-stone/80 text-sm">Size: {item.size}</p>
                <p className="text-stone dark:text-stone/80 text-sm">${item.price}</p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  className="p-1 hover:bg-cream dark:hover:bg-stone/20 rounded transition-colors text-charcoal dark:text-cream"
                >
                  <Minus size={18} />
                </button>
                <span className="w-8 text-center text-charcoal dark:text-cream">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 hover:bg-cream dark:hover:bg-stone/20 rounded transition-colors text-charcoal dark:text-cream"
                >
                  <Plus size={18} />
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-1 hover:bg-cream dark:hover:bg-stone/20 rounded transition-colors ml-2 text-charcoal dark:text-cream"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center pt-6 font-serif text-xl text-charcoal dark:text-cream">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              required
              className="w-full px-4 py-2 bg-white border border-stone focus:outline-none focus:border-charcoal transition-colors"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              className="w-full px-4 py-2 bg-white border border-stone focus:outline-none focus:border-charcoal transition-colors"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 bg-white border border-stone focus:outline-none focus:border-charcoal transition-colors"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Address"
            required
            className="w-full px-4 py-2 bg-white border border-stone focus:outline-none focus:border-charcoal transition-colors"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="City"
              required
              className="w-full px-4 py-2 bg-white border border-stone focus:outline-none focus:border-charcoal transition-colors"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            />
            <input
              type="text"
              placeholder="Postal Code"
              required
              className="w-full px-4 py-2 bg-white border border-stone focus:outline-none focus:border-charcoal transition-colors"
              value={formData.postalCode}
              onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
            />
          </div>
          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full px-4 py-2 bg-white border border-stone focus:outline-none focus:border-charcoal transition-colors"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <input
            type="text"
            placeholder="Instagram Username"
            required
            className="w-full px-4 py-2 bg-white border border-stone focus:outline-none focus:border-charcoal transition-colors"
            value={formData.instagram}
            onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
          />
          <button
            type="submit"
            className="w-full py-3 bg-charcoal text-white hover:bg-black transition-colors duration-300"
          >
            Complete Order
          </button>
        </form>
      </div>
    </section>
  );
};
