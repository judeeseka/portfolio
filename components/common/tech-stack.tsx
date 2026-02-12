import React from "react";
import { CardSpotlight } from "../ui/card-spotlight";

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
        <CardSpotlight className="rounded-xl border border-slate-800/80 bg-slate-900/50 hover:bg-black p-5 hover:border-slate-700/60 transition-colors">
          <h3 className="font-semibold text-white mb-3">Core frontend</h3>
          <ul className="space-y-1.5 text-slate-300">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
          </ul>
        </CardSpotlight>

        <CardSpotlight className="rounded-xl border border-slate-800/80 bg-slate-900/50 hover:bg-black p-5 hover:border-slate-700/60 transition-colors">
          <h3 className="font-semibold text-white mb-3">State &amp; data</h3>
          <ul className="space-y-1.5 text-slate-300">
            <li>React Query / TanStack Query</li>
            <li>Zustand</li>
            <li>REST APIs</li>
          </ul>
        </CardSpotlight>

        <CardSpotlight className="rounded-xl border border-slate-800/80 bg-slate-900/50 hover:bg-black p-5 hover:border-slate-700/60 transition-colors">
          <h3 className="font-semibold text-white mb-3">UI &amp; styling</h3>
          <ul className="space-y-1.5 text-slate-300">
            <li>Tailwind CSS</li>
            <li>ShadCN UI</li>
          </ul>
        </CardSpotlight>

        <CardSpotlight className="rounded-xl border border-slate-800/80 bg-slate-900/50 hover:bg-black p-5 hover:border-slate-700/60 transition-colors">
          <h3 className="font-semibold text-white mb-3">
            Backend &amp; services
          </h3>
          <ul className="space-y-1.5 text-slate-300">
            <li>Firebase</li>
            <li>Appwrite</li>
            <li>Express.js</li>
          </ul>
        </CardSpotlight>

        <CardSpotlight className="rounded-xl border border-slate-800/80 bg-slate-900/50 hover:bg-black p-5 hover:border-slate-700/60 transition-colors">
          <h3 className="font-semibold text-white mb-3">Tooling</h3>
          <ul className="space-y-1.5 text-slate-300">
            <li>Git &amp; GitHub</li>
            <li>VS Code</li>
            <li>Linting &amp; formatting (ESLint, Prettier)</li>
            <li>Vite</li>
          </ul>
        </CardSpotlight>
      </div>
    </section>
  );
};

export default TechStack;
