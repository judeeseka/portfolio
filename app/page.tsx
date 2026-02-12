import About from "@/components/common/about";
import Contact from "@/components/common/contact";
import Footer from "@/components/common/footer";
import Hero from "@/components/common/hero";
import Projects from "@/components/common/projects";
import TechStack from "@/components/common/tech-stack";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

const Home = () => {
  return (
    <main className="relative min-h-screen bg-slate-950 flex justify-center items-center flex-col overflow-x-hidden mx-auto px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-6xl">
        <div
          className={cn(
            "fixed inset-0 pointer-events-none bg-slate-950",
            "bg-size-[100px_100px]",
            "bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_3px,transparent_3px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_3px,transparent_3px)]",
          )}
        />

        <div className="absolute pointer-events-none inset-0 mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,255,255,0.05),transparent)]" />
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
