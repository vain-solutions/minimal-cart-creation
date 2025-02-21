
import { ChevronDown, Instagram } from "lucide-react";

export const About = () => {
  const scrollToCreations = () => {
    const element = document.getElementById('creations');
    if (element) {
      const yOffset = -50;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 bg-cream dark:bg-charcoal">
      <div className="max-w-2xl text-center animate-fade-up mt-16 md:mt-24">
        <h1 className="h1 font-BrownSugar text-4xl md:text-6xl lg:text-7xl mb-8 text-charcoal dark:text-cream animate-fade-in">Arabia</h1>
        <h2 className="h2 font-serif text-charcoal dark:text-cream animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>couture</h2>
        <p className="font-sans text-lg md:text-xl text-stone dark:text-stone/80 leading-relaxed mb-12 animate-fade-in opacity-0 px-4 sm:px-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Crafting timeless pieces that embody elegance and sophistication. Each creation is meticulously designed and handcrafted, reflecting our dedication to excellence and artisanal craftsmanship.
        </p>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-stone hover:text-charcoal dark:hover:text-cream transition-colors duration-300 mb-8 hover:scale-105 transform animate-fade-in opacity-0"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          <Instagram size={24} />
          <span>Follow us on Instagram</span>
        </a>
        <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <button 
            onClick={scrollToCreations} 
            className="flex flex-col items-center text-stone hover:text-charcoal dark:hover:text-cream transition-colors duration-300 hover:scale-105 transform"
          >
            <span className="text-sm mb-2">Discover Our Creations</span>
            <ChevronDown className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
