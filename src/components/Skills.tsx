import { SlideIn, StaggerContainer, StaggerItem } from "./motion";
import { SiPython, SiMysql, SiPostgresql, SiPhp, SiR, SiScikitlearn, SiPandas, SiNumpy, SiStreamlit, SiFlask, SiGit, SiGithub, SiJupyter, SiDocker } from "react-icons/si";
import { TbBrain, TbChartBar, TbLanguage, TbCloud, TbPresentation, TbTable } from "react-icons/tb";
import type { ReactNode } from "react";

const S = "w-3.5 h-3.5";
const iconMap: Record<string, ReactNode> = {
  Python: <SiPython className={S} />, MySQL: <SiMysql className={S} />, PostgreSQL: <SiPostgresql className={S} />, PHP: <SiPhp className={S} />, R: <SiR className={S} />,
  "Scikit-Learn": <SiScikitlearn className={S} />, Pandas: <SiPandas className={S} />, Numpy: <SiNumpy className={S} />, Matplotlib: <TbChartBar className={S} />, Seaborn: <TbChartBar className={S} />, Streamlit: <SiStreamlit className={S} />, Flask: <SiFlask className={S} />,
  Git: <SiGit className={S} />, GitHub: <SiGithub className={S} />, "Jupyter Notebook": <SiJupyter className={S} />, Docker: <SiDocker className={S} />, "Power BI": <TbPresentation className={S} />, Tableau: <TbTable className={S} />,
  "Machine Learning": <TbBrain className={S} />, "Data Science": <TbBrain className={S} />, "Data Analysis": <TbChartBar className={S} />, NLP: <TbLanguage className={S} />, "Statistical Analysis": <TbChartBar className={S} />, "Cloud Fundamentals": <TbCloud className={S} />,
};

const categories = [
  { title: "Languages & Databases", items: ["Python", "MySQL", "PostgreSQL", "PHP", "R"] },
  { title: "Libraries & Frameworks", items: ["Scikit-Learn", "Pandas", "Numpy", "Matplotlib", "Seaborn", "Streamlit", "Flask"] },
  { title: "Tools & Platforms", items: ["Git", "GitHub", "Jupyter Notebook", "Docker", "Power BI", "Tableau"] },
  { title: "Domains", items: ["Machine Learning", "Data Science", "Data Analysis", "NLP", "Statistical Analysis", "Cloud Fundamentals"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-20">
          <div className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start mb-12 lg:mb-0">
            <SlideIn direction="left"><span className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--accent-1)" }}>02 / Skills</span></SlideIn>
            <SlideIn direction="left" delay={0.1}><h2 className="font-[Lobster] text-4xl sm:text-5xl font-light mt-4 mb-6 text-text-heading">Tools of the <span className="accent-text">trade</span></h2></SlideIn>
            <SlideIn direction="left" delay={0.2}><p className="text-text-secondary leading-relaxed">Technologies and frameworks I use to extract insights and build data-driven solutions.</p></SlideIn>
          </div>
          <div className="lg:w-2/3">
            <StaggerContainer className="grid sm:grid-cols-2 gap-4">
              {categories.map((cat) => (
                <StaggerItem key={cat.title}>
                  <div className="card neu rounded-2xl p-6 h-full">
                    <h3 className="text-sm tracking-[0.15em] uppercase mb-5" style={{ color: "var(--accent-1)" }}>{cat.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <span key={item} className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg text-text-secondary transition-colors" style={{ background: "var(--bg-glass)", border: "1px solid var(--border-primary)" }}>
                          <span className="opacity-70" style={{ color: "var(--accent-1)" }}>{iconMap[item]}</span>{item}
                        </span>
                      ))}
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
