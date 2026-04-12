import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden px-6" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, var(--accent-1) 0.5px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-1/4 right-[5%] w-[500px] h-[500px] rounded-full blur-[150px] opacity-15" style={{ background: "var(--accent-2)" }} />
      <div className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] rounded-full blur-[150px] opacity-10" style={{ background: "var(--accent-1)" }} />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left */}
          <div className="py-20 lg:py-32">
            <motion.p initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-sm tracking-[0.3em] uppercase mb-6" style={{ color: "var(--accent-1)" }}>
              Hello, I am
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="font-[Lobster] text-6xl sm:text-7xl lg:text-8xl tracking-wide leading-[0.9] mb-8">
              <span className="text-text-heading">Sakshi</span><br />
              <span className="gradient-text">Paygude</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-text-secondary mb-8 flex-wrap">
              {["Data Scientist", "Data Analyst", "Researcher"].map((role, i) => (
                <motion.span key={role} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 + i * 0.15 }} className="flex items-center gap-3">
                  {i > 0 && <span style={{ color: "var(--accent-1)" }}>·</span>}
                  <span>{role}</span>
                </motion.span>
              ))}
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.4 }} className="text-text-secondary max-w-md leading-relaxed mb-10">
              Passionate about turning raw data into actionable insights. Open to exciting opportunities in data-driven roles.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.6 }} className="flex flex-wrap gap-4">
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href="#projects" className="px-7 py-3.5 rounded-xl gradient-accent text-white text-sm font-medium transition-all">View Projects</motion.a>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href="#contact" className="px-7 py-3.5 rounded-xl glass glass-hover text-text-secondary hover:text-text-primary text-sm font-medium transition-all">Get in Touch</motion.a>
            </motion.div>
          </div>

          {/* Right — avatar + cards */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="hidden lg:flex flex-col items-center gap-5">
            {/* Avatar placeholder — replace with <img src="/sakshi.jpg" /> when photo is available */}
            <motion.div whileHover={{ rotate: [0, -2, 2, 0], transition: { duration: 0.5 } }} className="relative">
              <div className="absolute -inset-3 rounded-2xl blur-xl opacity-20" style={{ background: "var(--gradient-accent)" }} />
              <img src="https://lh3.googleusercontent.com/d/1ttsxjf0R_Ypwf_r7h5AuMD0kTN5a88ER" alt="Sakshi Paygude" className="relative h-72 w-auto object-cover rounded-2xl" style={{ maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)" }} />
            </motion.div>

            <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
              {[
                { emoji: "🎓", label: "B.Sc Data Sci" },
                { emoji: "🏆", label: "BCS 1st Place" },
                { emoji: "📊", label: "ML & Analytics" },
              ].map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 + i * 0.15 }} whileHover={{ y: -4, transition: { duration: 0.2 } }} className="card neu rounded-xl p-3 text-center cursor-default">
                  <p className="text-lg mb-1">{item.emoji}</p>
                  <p className="text-[10px] text-text-muted leading-tight">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5" style={{ borderColor: "var(--border-primary)" }}>
          <div className="w-1 h-1.5 rounded-full" style={{ background: "var(--accent-1)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
