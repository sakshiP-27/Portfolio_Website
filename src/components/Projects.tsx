import { FadeUp } from "./motion";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  { title: "Visora", description: "Full-stack AI-powered expense tracker that uses OCR and LLMs to turn receipt photos into structured, categorized expense data. Features intelligent spending insights, analytics dashboard with category breakdowns and daily trends, and AI-generated financial summaries.", tech: "Python, FastAPI, LLMs (Gemini/Groq), OCR (Mindee), Pandas, PostgreSQL, AWS ECS Fargate, Docker", image: "/visora.png", github: "https://github.com/sakshiP-27/Visora", live: "https://visora.me/" },
  { title: "NexScore", description: "AI-powered loan eligibility prediction web app. Enter your financial profile and an XGBoost model trained on 160,000 real loan records tells you whether you'd be accepted or rejected, why, and what your credit score looks like.", tech: "Python, Scikit-Learn, XGBoost, SHAP, Flask, React.js", image: "/nexscore.png", github: "https://github.com/sakshiP-27/NexScore", live: "https://nex-score-psi.vercel.app/" },
  { title: "Trailer Virality Predictor", description: "ML-driven web app that analyzes YouTube trailers and predicts early-stage virality using real-time metadata, view velocity metrics, and a custom virality scoring algorithm.", tech: "Python, ML, Scikit-Learn, Streamlit, Youtube API v3", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=340&fit=crop", live: "https://trailerviralitypredictor-sakshiii27.streamlit.app/", github: "https://github.com/sakshiP-27/Trailer_Virality_Predictor" },
  { title: "CarbonPulse", description: "Web app to help users track and reduce their carbon footprint with personalized recommendations, emission predictions, and a comprehensive dashboard.", tech: "Python, Flask, Pandas, Scikit-Learn, PostgreSQL, Docker", image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&h=340&fit=crop", github: "https://github.com/sakshiP-27/CarbonPulse" },
  { title: "Inventory Management System", description: "Full-stack system for a furniture company to manage inventory, track stock levels, employee data, stores, and suppliers with a user-friendly interface.", tech: "PHP, OracleSQL, HTML, CSS", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=340&fit=crop", github: "https://github.com/sakshiP-27/Inventory-Management-System" },
  { title: "Fake Reviews Detection", description: "ML model using Supervised Learning and NLP techniques to classify user reviews as real or fake based on textual dataset analysis.", tech: "Python, Scikit-Learn, Pandas, Numpy, Matplotlib, Seaborn", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=340&fit=crop", github: "https://github.com/sakshiP-27/Fake-Reviews-Detection" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 px-6" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto">
        <FadeUp><span className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--accent-1)" }}>03 / Projects</span></FadeUp>
        <FadeUp delay={0.1}><h2 className="font-[Lobster] text-4xl sm:text-5xl font-light mt-4 mb-16 text-text-heading">Selected <span className="accent-text">work</span></h2></FadeUp>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 50, filter: "blur(4px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}>
              <div className="card neu rounded-2xl overflow-hidden h-full flex flex-col group">
                <div className="overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-[Lobster] text-xl text-text-heading">{p.title}</h3>
                    <div className="flex gap-2 shrink-0 ml-3">
                      {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text-muted hover:text-accent-light transition-colors"><Github size={16} /></a>}
                      {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label="Live" className="text-text-muted hover:text-accent-light transition-colors"><ExternalLink size={16} /></a>}
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.split(", ").map((t) => (
                      <span key={t} className="text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-lg" style={{ background: "var(--bg-glass)", border: "1px solid var(--border-accent)", color: "var(--accent-1)" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="flex justify-center mt-12">
          <a href="https://github.com/sakshiP-27" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl glass glass-hover text-text-secondary hover:text-text-primary transition-all">
            <Github size={20} />
            <span className="text-sm tracking-wider">More projects on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
