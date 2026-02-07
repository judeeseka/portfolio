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
      className="py-20 relative z-10 border-t border-slate-800/60"
    >
      <p className="mb-2 text-lg text-center text-slate-300">
        How I approach frontend engineering
      </p>
      <h2 className="text-3xl md:text-5xl text-center font-semibold">
        Engineering focus
      </h2>

      <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
        {bullets.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 text-sm md:text-base leading-relaxed"
          >
            <p className="text-slate-200">• {item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EngineeringFocus;

