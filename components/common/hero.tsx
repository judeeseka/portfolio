import { FileDown } from "lucide-react";
import { Spotlight } from "../ui/spotlight-new";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const Hero = () => {
  return (
    <section
      className="pb-10 sm:pb-24 pt-24 md:pt-32 h-screen sm:h-full"
      id="home"
    >
      <Spotlight />

      <div className="flex justify-center relative my-16 md:my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100">
            Modern Web Platforms, Built for Scale
          </p>

          <TextGenerateEffect
            words="Designing and Engineering Production Ready Frontend Systems"
            className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Jude, a React & Next.js Frontend Engineer.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center">
            <button className="h-12 px-6 items-center justify-center rounded-md font-medium text-white bg-emerald-600/90 hover:bg-emerald-500/90 border border-emerald-500/30 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400/50">
              <a href="#projects">View Projects</a>
            </button>

            <button className="h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-size-[200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <a
                href="./Jude_Eseka_Resume.pdf"
                download
                className="flex gap-2 justify-center items-center"
              >
                Download Resume
                <span>
                  <FileDown />
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
