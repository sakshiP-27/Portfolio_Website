import { FadeUp, TextReveal, ScaleIn } from "./motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 px-6" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-3xl mx-auto text-center">
        <FadeUp><span className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--accent-1)" }}>05 / Contact</span></FadeUp>
        <FadeUp delay={0.1}><h2 className="font-[Lobster] text-4xl sm:text-5xl font-light mt-4 mb-6 text-text-heading">Let's build something <span className="accent-text">meaningful together.</span></h2></FadeUp>
        <TextReveal className="text-text-secondary leading-relaxed mb-12 max-w-lg mx-auto" text="I'm always open to interesting conversations, collaborations, or opportunities. Whether you have a question or just want to say hi — feel free to reach out." delay={0.2} />
        <ScaleIn delay={0.3}>
          <a href="mailto:sakshipaygude27@gmail.com" className="inline-block px-8 py-4 rounded-xl gradient-accent text-white font-medium text-sm transition-all hover:opacity-90 hover:scale-[1.02]">Say Hello →</a>
        </ScaleIn>
        <FadeUp delay={0.4}>
          <div className="flex justify-center gap-6 mt-10">
            {[
              { label: "Mail", href: "mailto:sakshipaygude27@gmail.com", icon: <Mail size={20} /> },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/sakshi-paygude/", icon: <Linkedin size={20} /> },
              { label: "GitHub", href: "https://github.com/sakshiP-27", icon: <Github size={20} /> },
            ].map((s) => (
              <a key={s.label} href={s.href} target={s.label === "Mail" ? undefined : "_blank"} rel="noopener noreferrer" aria-label={s.label} className="w-11 h-11 rounded-xl glass glass-hover flex items-center justify-center text-text-muted hover:text-accent-light transition-all">
                {s.icon}
              </a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
