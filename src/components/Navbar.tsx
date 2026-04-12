import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="group relative font-[Lobster] text-3xl text-text-heading transition-all hover:opacity-80">
          SP
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 rounded-full" style={{ background: "var(--gradient-accent)" }} />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => <a key={l.href} href={l.href} className="text-sm text-text-secondary hover:text-accent-light transition-colors">{l.label}</a>)}
          <a href="https://drive.google.com/file/d/14BB9DxRiSBRHhswDEP7-iNTYf4Vs0RyO/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2 rounded-lg glass glass-hover text-text-secondary hover:text-text-primary transition-all">Resume</a>
          <ThemeToggle />
        </div>
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="text-text-secondary hover:text-text-primary" aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden border-t" style={{ borderColor: "var(--border-primary)" }}>
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-text-secondary hover:text-accent-light transition-colors">{l.label}</a>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
