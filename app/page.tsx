import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import EngineeringFocus from "@/components/EngineeringFocus";
import CaseStudies from "@/components/CaseStudies";
import TechStack from "@/components/TechStack";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/constants";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 flex justify-center items-center flex-col overflow-x-hidden mx-auto px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-6xl">
        <div className="fixed inset-0 pointer-events-none bg-slate-950 bg-grid-white/[0.02]" />
        <div className="absolute pointer-events-none inset-0 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,255,255,0.05),transparent)]" />
        <FloatingNav navItems={navItems} />
        <Hero />
        {/* <EngineeringFocus /> */}
        {/* <Projects /> */}
        {/* <CaseStudies /> */}
        <About />
        <TechStack />
        <Contact />
        {/* <Footer /> */}
      </div>
    </main>
  );
}
