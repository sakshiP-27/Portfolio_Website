import { Navbar } from "@/section/Navbar";
import { Hero } from "@/section/Hero";
import { About } from "@/section/About";
import { Education } from "@/section/Education";
import { Skills } from "@/section/Skills";
import { Projects } from "@/section/Projects";
import { Footer } from "@/section/Footer";

import './App.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-br from-[#fdf6f0] via-[#f7e4e1] to-[#edd7f3]">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App