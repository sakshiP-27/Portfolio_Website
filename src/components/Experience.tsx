import { SlideIn, StaggerContainer, StaggerItem } from "./motion";

const education = [
  { degree: "B.Sc in Data Science & Neuroscience", institution: "Keele University", location: "Keele, England, UK 🇬🇧", duration: "2022 — 2025", coursework: ["Data Science", "Machine Learning", "Advanced Databases", "Statistical Analysis", "Neural Networks"] },
  { degree: "High School (ISC) in Science", institution: "The Bishop's School", location: "Pune, Maharashtra, India 🇮🇳", duration: "2020 — 2022", coursework: ["Physics", "Chemistry", "Mathematics", "Biology"] },
];

export default function Experience() {
  return (
    <section id="education" className="py-20 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-20">
          <div className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start mb-12 lg:mb-0">
            <SlideIn direction="left"><span className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--accent-1)" }}>04 / Education</span></SlideIn>
            <SlideIn direction="left" delay={0.1}><h2 className="font-[Lobster] text-4xl sm:text-5xl font-light mt-4 mb-6 text-text-heading">Academic <span className="accent-text">journey</span></h2></SlideIn>
          </div>
          <div className="lg:w-2/3">
            <StaggerContainer className="space-y-8">
              {education.map((ed) => (
                <StaggerItem key={ed.degree}>
                  <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full" style={{ background: "linear-gradient(180deg, var(--accent-1), var(--accent-2))" }} />
                    <div className="card neu rounded-2xl p-6 sm:p-8 ml-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <div>
                          <h3 className="font-[Lobster] text-xl text-text-heading">{ed.degree}</h3>
                          <p className="text-sm mt-1" style={{ color: "var(--accent-3)" }}>{ed.institution}</p>
                          <p className="text-xs text-text-muted italic mt-0.5">{ed.location}</p>
                        </div>
                        <span className="text-sm text-text-muted shrink-0 tracking-wider">{ed.duration}</span>
                      </div>
                      <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "var(--accent-1)" }}>Relevant Coursework</p>
                      <div className="flex flex-wrap gap-2">
                        {ed.coursework.map((c) => (
                          <span key={c} className="text-xs px-3 py-1.5 rounded-lg text-text-secondary" style={{ background: "var(--bg-glass)", border: "1px solid var(--border-primary)" }}>{c}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
