import { FloatingNav } from "@/components/ui/floating-navbar"
import { Hero } from "@/section/Hero";
import { Education } from "@/section/Education";
import './App.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-br from-[#fdf6f0] via-[#f7e4e1] to-[#edd7f3]">
      <FloatingNav navItems={
        [
          { name: "Home", link: "#home" },
          { name: "About", link: "#about" },
          { name: "Education", link: "#experience"},
          { name: "Skills", link: "#skills" },
          { name: "Projects", link: "#projects" },
          { name: "Contact", link: "#contact" },
        ]
      }/>
      <Hero />
      <Education />
      {/* Add other sections like About, Skills, Projects, Contact here */}
    </div>
  );
}

export default App