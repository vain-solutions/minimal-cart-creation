
import { ChevronDown, Instagram } from "lucide-react";
import { DarkModeToggle } from "./DarkModeToggle";

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
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 bg-cream dark:bg-charcoal overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-[2px] z-10" />
        <img 
          src="/placeholder.svg" 
          alt="Background" 
          className="w-full h-full object-cover object-center animate-fade-in opacity-90"
        />
      </div>

      <DarkModeToggle />
      
      {/* Content with enhanced animations */}
      <div className="relative z-20 max-w-2xl text-center animate-fade-up mt-16 md:mt-24">
        <h1 className="h1 font-BrownSugar text-4xl md:text-6xl lg:text-7xl mb-8 text-cream animate-fade-in [text-shadow:_2px_2px_4px_rgb(0_0_0_/_40%)]">
          Arabia
        </h1>
        
        <h2 className="h2 font-serif text-cream animate-fade-in opacity-0 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]" 
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          couture
        </h2>
        
        <p className="font-sans text-lg md:text-xl text-cream/90 leading-relaxed mb-12 animate-fade-in opacity-0 px-4 sm:px-0 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Crafting timeless pieces that embody elegance and sophistication. Each creation is meticulously designed and handcrafted, reflecting our dedication to excellence and artisanal craftsmanship.
        </p>
        
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-cream/80 hover:text-cream transition-colors duration-300 mb-8 hover:scale-105 transform animate-fade-in opacity-0 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          <Instagram size={24} />
          <span>Follow us on Instagram</span>
        </a>
        
        <div 
          className="absolute bottom-12 left-0 right-0 flex justify-center animate-fade-in opacity-0" 
          style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
        >
          <button 
            onClick={scrollToCreations} 
            className="flex flex-col items-center text-cream/80 hover:text-cream transition-colors duration-300 hover:scale-105 transform group"
          >
            <span className="text-sm mb-2 group-hover:translate-y-1 transition-transform duration-300">
              Discover Our Creations
            </span>
            <ChevronDown className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
