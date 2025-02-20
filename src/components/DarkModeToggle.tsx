
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-6 right-6 p-2 rounded-full bg-cream dark:bg-charcoal text-charcoal dark:text-cream transition-colors duration-300"
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};
