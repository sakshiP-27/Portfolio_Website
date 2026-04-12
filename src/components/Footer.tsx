import { motion } from "motion/react";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--gradient-footer)" }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-8">
        <div className="flex items-center justify-between">
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>Built with ♡</p>
          <ThemeToggle />
        </div>
      </div>
      <div className="relative h-[clamp(5rem,12vw,14rem)] overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="footer-text text-center select-none absolute inset-x-0 top-0">
          SAKSHI
        </motion.div>
      </div>
    </footer>
  );
}
