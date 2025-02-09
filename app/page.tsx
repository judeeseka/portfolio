import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/constants";

export default function Home() {
  return (
    <main className="relative bg-slate-900 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
