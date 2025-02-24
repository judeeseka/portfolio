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
        <div
        className="h-screen w-full dark:bg-slate-900 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 bottom-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-slate-900
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
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
