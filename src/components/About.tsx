
import { ChevronDown, Instagram } from "lucide-react";

export const About = () => {
  const scrollToCreations = () => {
    const element = document.getElementById('creations');
    if (element) {
      const yOffset = -50; // Adjusts the final scroll position
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-cream dark:bg-charcoal">
      <div className="max-w-2xl text-center animate-fade-up mt-16"> {/* Added margin-top */}
        <h1 className="h1 font-BrownSugar text-4xl md:text-6xl mb-8 text-charcoal dark:text-cream">Arabia</h1>
        <h2 className="h2 font-serif text-charcoal dark:text-cream">couture</h2>
        <p className="font-sans text-lg md:text-xl text-stone dark:text-stone/80 leading-relaxed mb-12">
          Crafting timeless pieces that embody elegance and sophistication. Each creation is meticulously designed and handcrafted, reflecting our dedication to excellence and artisanal craftsmanship.
        </p>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-stone hover:text-charcoal dark:hover:text-cream transition-colors duration-300 mb-8">
          <Instagram size={24} />
          <span>Follow us on Instagram</span>
        </a>
        <div className="absolute bottom-12 left-0 right-0 flex justify-center">
          <button 
            onClick={scrollToCreations} 
            className="flex flex-col items-center text-stone hover:text-charcoal dark:hover:text-cream transition-colors duration-300"
          >
            <span className="text-sm mb-2">Discover Our Creations</span>
            <ChevronDown className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
