
import { ChevronDown } from "lucide-react";

export const About = () => {
  const scrollToCreations = () => {
    const element = document.getElementById('creations');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-cream">
      <div className="max-w-2xl text-center animate-fade-up">
        <h1 className="font-serif text-4xl md:text-6xl mb-8 text-charcoal">Atelier</h1>
        <p className="font-sans text-lg md:text-xl text-stone leading-relaxed mb-16">
          Crafting timeless pieces that embody elegance and sophistication. Each creation is meticulously designed and handcrafted, reflecting our dedication to excellence and artisanal craftsmanship.
        </p>
        <button
          onClick={scrollToCreations}
          className="flex flex-col items-center text-stone hover:text-charcoal transition-colors duration-300"
        >
          <span className="text-sm mb-2">Discover Our Creations</span>
          <ChevronDown className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};
