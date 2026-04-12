import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} className="relative w-10 h-10 rounded-xl glass glass-hover flex items-center justify-center transition-all">
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div key="sun" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
            <Sun size={18} className="text-accent-light" />
          </motion.div>
        ) : (
          <motion.div key="moon" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
            <Moon size={18} className="text-accent-2" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
