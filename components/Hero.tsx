import { FileDown, Github } from "lucide-react";
import { Spotlight } from "./ui/spotlight-new";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <section className="pb-24 pt-36 max-h-screen" id="home">
      <Spotlight />

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Frontend engineer for production SaaS & data-heavy UIs
          </p>

          <TextGenerateEffect
            words="I design and ship reliable frontends for real products, not demos."
            className="text-center text-[40px] md:text-5xl lg:text-6xl max-w-3xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            I&apos;m Jude, a React / Next.js frontend engineer who has owned complex
            flows, multi-role experiences, and internal tools end to end.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="#projects"
              className="inline-flex gap-3 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              View projects
            </a>

            <a
              href="/Resume - Jude Eseka.pdf"
              download
              className="inline-flex gap-3 h-12 items-center justify-center rounded-md border border-slate-700 bg-slate-900/60 px-6 font-medium text-slate-200 hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span>Download CV</span>
              <FileDown className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/judeeseka"
              target="_blank"
              rel="noreferrer"
              className="inline-flex gap-2 h-12 items-center justify-center rounded-md border border-slate-700 bg-transparent px-4 text-sm font-medium text-slate-300 hover:bg-slate-800/60 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;