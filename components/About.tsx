import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 relative z-10 border-t border-slate-800/60">
      <p className="mb-2 text-lg text-center">Introduction</p>
      <h2 className="text-5xl text-center">About me</h2>

      <div className="mt-8 max-w-3xl mx-auto text-sm md:text-base leading-relaxed text-slate-200 space-y-3 px-4 md:px-0">
        <p>
          I&apos;ve spent the last few years building and maintaining production
          frontends for SaaS products, internal tools, and multi-role
          platforms.
        </p>
        <p>
          Most of my work sits at the intersection of UI and systems — taking
          messy workflows, edge cases, and real constraints and turning them
          into interfaces teams can rely on every day.
        </p>
        <p>
          I work best in close collaboration with product, design, and backend
          engineers, and I&apos;m comfortable owning a feature from rough idea
          through implementation, iteration, and long-term maintenance.
        </p>
        <p>
          I&apos;ve led frontend efforts on smaller teams, set patterns others
          could follow, and I care a lot about leaving codebases in a better,
          more understandable state than I found them.
        </p>
      </div>
    </section>
  );
};

export default About;
