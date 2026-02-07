import React from "react";

const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="py-20 relative z-10 border-t border-slate-800/60"
    >
      <p className="mb-2 text-lg text-center">What I work with</p>
      <h2 className="text-3xl md:text-5xl text-center font-semibold">
        Technology stack
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-sm md:text-base">
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <h3 className="font-semibold text-slate-100 mb-3">Core frontend</h3>
          <ul className="space-y-1 text-slate-200">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
          </ul>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <h3 className="font-semibold text-slate-100 mb-3">State &amp; data</h3>
          <ul className="space-y-1 text-slate-200">
            <li>React Query / TanStack Query</li>
            <li>Zustand</li>
            <li>Context &amp; reducer patterns</li>
            <li>REST APIs, Appwrite, basic caching strategies</li>
          </ul>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <h3 className="font-semibold text-slate-100 mb-3">UI &amp; styling</h3>
          <ul className="space-y-1 text-slate-200">
            <li>Tailwind CSS</li>
            <li>Aceternity UI-inspired components</li>
            <li>Responsive layouts &amp; design systems</li>
            <li>Accessible forms and interactive components</li>
          </ul>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <h3 className="font-semibold text-slate-100 mb-3">Backend &amp; services</h3>
          <ul className="space-y-1 text-slate-200">
            <li>Integration with Node/REST APIs</li>
            <li>Authentication &amp; authorization flows</li>
            <li>Email and notification services</li>
          </ul>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <h3 className="font-semibold text-slate-100 mb-3">Tooling</h3>
          <ul className="space-y-1 text-slate-200">
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

