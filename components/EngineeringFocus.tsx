import React from "react";

const bullets = [
  "Designing modular frontend architecture that can evolve with new features without turning into a ball of mud.",
  "Choosing the right state boundaries so data flows are predictable, testable, and don’t cause accidental re-renders.",
  "Building UIs that stay fast under real data volume, with thoughtful pagination, caching, and loading strategies.",
  "Optimising for clarity in complex workflows so different roles always know what they can do and what happens next.",
  "Integrating with APIs in a way that keeps the UI resilient to failures, retries, and schema changes over time.",
  "Balancing DX and UX so the codebase is maintainable while the product feels reliable to end users.",
];

const EngineeringFocus = () => {
  return (
    <section
      id="engineering-focus"
      className="py-16 md:py-24 relative z-10 border-t border-slate-800/50"
    >
      <p className="text-center text-slate-400 text-sm font-medium tracking-wider uppercase mb-2">
        How I think
      </p>
      <h2 className="text-3xl md:text-5xl font-semibold text-center text-white mb-10 md:mb-12">
        Engineering focus
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {bullets.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-4 md:p-5 text-sm md:text-base leading-relaxed text-slate-300 hover:border-slate-700/60 transition-colors"
          >
            <span className="text-emerald-400/80 mr-2">·</span>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EngineeringFocus;

