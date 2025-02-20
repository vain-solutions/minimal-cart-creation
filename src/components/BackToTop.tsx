
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-charcoal dark:bg-cream text-cream dark:text-charcoal shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Back to top"
    >
      <ArrowUp size={24} />
    </button>
  ) : null;
};
