const About = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 relative z-10 border-t border-slate-800/50"
    >
      <p className="text-center text-slate-400 text-sm font-medium tracking-wider uppercase mb-2">
        Introduction
      </p>
      <h2 className="text-3xl md:text-5xl font-semibold text-center text-white mb-10 md:mb-12">
        About me
      </h2>

      <div className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-slate-300 space-y-4 px-4 md:px-0">
        <p>
          Over the past few years, I&apos;ve built and maintained production
          frontends for SaaS products, internal tools, and multi-role platforms.
        </p>
        <p>
          My work lives at the intersection of UI and systems, translating
          complex workflows, edge cases, and real-world constraints into
          reliable interfaces teams depend on daily.
        </p>
        <p>
          I collaborate closely with product, design, and backend engineers, and
          I&apos;m comfortable owning features end-to-end — from rough concepts
          to long-term iteration and maintenance.
        </p>
        <p>
          I&apos;ve led frontend efforts on small teams, established patterns
          that scale, and I care deeply about leaving codebases clearer and more
          maintainable than I found them.
        </p>
      </div>
    </section>
  );
};

export default About;
