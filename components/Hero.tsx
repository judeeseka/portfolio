import { FileDown } from "lucide-react";
import { Spotlight } from "./ui/spotlight-new";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <section className="pb-20 pt-36 max-h-screen" id="home">
      <Spotlight />

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Crafting Engaging Web Experiences
          </p>

          <TextGenerateEffect
            words="From Vision to Reality, One Pixel at a Time"
            className="text-center text-[40px] md:text-5xl lg:text-6xl max-w-3xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Jude, a Frontend Engineer         
          </p>

        <button className="inline-flex gap-3 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <a href="/Resume - Jude Eseka.pdf" download className="inline-flex gap-3 justify-center items-center">
          Download Resume
          <span>
            <FileDown />
          </span>
          </a>
        </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;