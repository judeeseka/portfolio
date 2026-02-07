import React from "react";
import { projects } from "@/lib/constants";

const CaseStudies = () => {
  return (
    <section
      id="case-studies"
      className="py-20 relative z-10 border-t border-slate-800/60"
    >
      <p className="mb-2 text-lg text-center">Deeper dives</p>
      <h2 className="text-3xl md:text-5xl text-center font-semibold">
        Project case studies
      </h2>

      <div className="mt-10 space-y-4">
        {projects.map((project) => (
          <details
            key={project.id}
            id={`case-study-${project.id}`}
            className="group rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 md:px-6 md:py-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-emerald-300/90">
                  {project.productType}
                </p>
                <h3 className="mt-1 text-lg md:text-xl font-semibold text-slate-50">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs md:text-sm text-slate-300">
                  {project.description}
                </p>
              </div>
              <span className="text-sm text-slate-400 group-open:hidden">
                Expand
              </span>
              <span className="text-sm text-slate-400 hidden group-open:inline">
                Collapse
              </span>
            </summary>

            <div className="mt-4 grid gap-6 md:grid-cols-2 text-sm md:text-base text-slate-200">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-slate-100">Overview</h4>
                  <p className="mt-1">{project.caseStudy.overview}</p>
                  <p className="mt-1 text-slate-300 text-xs md:text-sm">
                    <span className="font-medium text-slate-100">Who it&apos;s for:</span>{" "}
                    {project.caseStudy.audience}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-100">Problem</h4>
                  <p className="mt-1">{project.caseStudy.problem}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-100">
                    Role &amp; ownership
                  </h4>
                  <p className="mt-1">{project.caseStudy.roleOwnership}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-slate-100">
                    Key technical decisions
                  </h4>
                  <ul className="mt-1 space-y-1 list-disc list-inside text-slate-200">
                    {project.caseStudy.keyDecisions.map((decision, index) => (
                      <li key={index}>{decision}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-100">Impact</h4>
                  <p className="mt-1">{project.caseStudy.impact}</p>
                </div>

                <p className="mt-2 text-xs text-slate-400">
                  {project.caseStudy.ndaNote}
                </p>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;

