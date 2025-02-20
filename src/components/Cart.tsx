
import { useState } from 'react';
import { toast } from '../components/ui/use-toast';
import { type Product } from '../types';

interface Props {
  items: Product[];
  clearCart: () => void;
}

export const Cart = ({ items, clearCart }: Props) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    instagram: ''
  });

  const total = items.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would send data to a backend
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
      instagram: ''
    });
  };

  if (items.length === 0) return null;

  return (
    <section id="cart" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-cream">
      <div className="w-full max-w-2xl">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16 text-charcoal">Your Selection</h2>
        
        <div className="bg-white p-8 mb-8 animate-fade-up">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center py-4 border-b border-cream last:border-0">
              <div>
                <h3 className="font-serif text-lg text-charcoal">{item.name}</h3>
                <p className="text-stone text-sm">${item.price}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center pt-6 font-serif text-xl">
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
