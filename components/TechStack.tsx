import React from "react";

const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="py-16 md:py-24 relative z-10 border-t border-slate-800/50"
    >
      <p className="text-center text-slate-400 text-sm font-medium tracking-wider uppercase mb-2">
        What I use
      </p>
      <h2 className="text-3xl md:text-5xl font-semibold text-center text-white mb-10 md:mb-12">
        Technology stack
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-sm md:text-base">
        <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-5 hover:border-slate-700/60 transition-colors">
          <h3 className="font-semibold text-white mb-3">Core frontend</h3>
          <ul className="space-y-1.5 text-slate-300">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
          </ul>
        </div>

        <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-5 hover:border-slate-700/60 transition-colors">
          <h3 className="font-semibold text-white mb-3">State &amp; data</h3>
          <ul className="space-y-1.5 text-slate-300">
            <li>React Query / TanStack Query</li>
            <li>Zustand</li>
            <li>Context &amp; reducer patterns</li>
            <li>REST APIs, Appwrite, basic caching strategies</li>
          </ul>
        </div>

        <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-5 hover:border-slate-700/60 transition-colors">
          <h3 className="font-semibold text-white mb-3">UI &amp; styling</h3>
          <ul className="space-y-1.5 text-slate-300">
            <li>Tailwind CSS</li>
            <li>Aceternity UI-inspired components</li>
            <li>Responsive layouts &amp; design systems</li>
            <li>Accessible forms and interactive components</li>
          </ul>
        </div>

        <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-5 hover:border-slate-700/60 transition-colors">
          <h3 className="font-semibold text-white mb-3">Backend &amp; services</h3>
          <ul className="space-y-1.5 text-slate-300">
            <li>Integration with Node/REST APIs</li>
            <li>Authentication &amp; authorization flows</li>
            <li>Email and notification services</li>
          </ul>
        </div>

        <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-5 hover:border-slate-700/60 transition-colors">
          <h3 className="font-semibold text-white mb-3">Tooling</h3>
          <ul className="space-y-1.5 text-slate-300">
            <li>Git &amp; GitHub</li>
            <li>VS Code</li>
            <li>Linting &amp; formatting (ESLint, Prettier)</li>
            <li>Basic CI and deployment to Vercel</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

