import { FadeUp, SlideIn, ScaleIn, TextReveal } from "./motion";

const achievements = [
  { type: "Achievement", title: "First Place Holder", subtitle: "BCS Lovelace Colloquium", points: ["Won the 18th BCSWomen Lovelace Colloquium, April 2025 poster competition in the Final Year Category held at the University of Glasgow.", "The poster was based on the research / projects students have implemented in their respective year of study."] },
  { type: "Responsibility", title: "Lead Student Voice Rep", subtitle: "Keele University", points: ["As the Lead Student Voice Representative at Keele University, I work to ensure students' feedback is heard and valued.", "My goal is to create a positive impact on campus by collaborating with students and staff to improve the Keele experience for everyone."] },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 px-6" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto">
        <FadeUp><span className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--accent-1)" }}>01 / About</span></FadeUp>
        <FadeUp delay={0.1}><h2 className="font-[Lobster] text-4xl sm:text-5xl mt-4 mb-16 text-text-heading">Turning data into <span className="accent-text">meaningful insight</span></h2></FadeUp>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
          <div className="space-y-6">
            <SlideIn direction="left" delay={0.2}>
              <TextReveal className="text-text-secondary leading-relaxed text-lg" text="I am a passionate data scientist with a keen interest in data analysis and machine learning algorithms. Over the course of my academic journey, I have developed a strong foundation in Python, SQL and various data visualization and analysis tools." delay={0.1} />
            </SlideIn>
            <FadeUp delay={0.3}><p className="text-text-secondary leading-relaxed">Passionate about Data Analysis, Machine Learning and Artificial Intelligence in general. Open to exciting opportunities in data based roles.</p></FadeUp>
            <FadeUp delay={0.4}>
              <div className="flex gap-4 pt-2">
                <a href="https://drive.google.com/file/d/14BB9DxRiSBRHhswDEP7-iNTYf4Vs0RyO/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-sm tracking-[0.15em] uppercase rounded-lg glass glass-hover transition-all" style={{ color: "var(--accent-1)" }}>My Resume</a>
                <a href="https://www.linkedin.com/in/sakshi-paygude/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-sm tracking-[0.15em] uppercase rounded-lg gradient-accent text-white transition-all hover:opacity-90">Let's Connect</a>
              </div>
            </FadeUp>
            <FadeUp delay={0.5}>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[{ l: "University", v: "Keele, UK 🇬🇧" }, { l: "Degree", v: "B.Sc Data Science" }, { l: "Focus", v: "ML · Analytics · NLP" }, { l: "Status", v: "Open to Opportunities" }].map((item, i) => (
                  <ScaleIn key={item.l} delay={0.5 + i * 0.08}><div className="glass neu rounded-xl p-4"><p className="text-xs text-text-muted mb-1">{item.l}</p><p className="text-sm text-text-primary">{item.v}</p></div></ScaleIn>
                ))}
              </div>
            </FadeUp>
          </div>

          <div className="space-y-6">
            <FadeUp delay={0.3}>
              <h3 className="text-sm tracking-[0.3em] uppercase mb-4" style={{ color: "var(--accent-1)" }}>Achievements & Responsibilities</h3>
            </FadeUp>
            {achievements.map((item, i) => (
              <ScaleIn key={item.title} delay={0.4 + i * 0.15}>
                <div className="card neu rounded-2xl p-6">
                  <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-2">{item.type}</p>
                  <h4 className="font-[Lobster] text-xl text-text-heading mb-1">{item.title}</h4>
                  <p className="text-sm italic mb-4" style={{ color: "var(--accent-3)" }}>{item.subtitle}</p>
                  <ul className="space-y-2">
                    {item.points.map((p, j) => <li key={j} className="text-sm text-text-secondary flex items-start gap-2"><span style={{ color: "var(--accent-1)" }} className="mt-0.5 shrink-0">—</span>{p}</li>)}
                  </ul>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
