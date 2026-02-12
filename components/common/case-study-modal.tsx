"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import type { projects as projectsType } from "@/lib/constants";

type Project = (typeof projectsType)[number];

function ProjectImage({ project }: { project: Project }) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className="h-64 w-full rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-slate-500 text-sm">
        {project.title}
      </div>
    );
  }
  return (
    <div className="w-full h-80 rounded-xl overflow-hidden border border-slate-700/50">
      <Image
        src={project.imageUrl}
        height={project.imageHeight}
        width={project.imageWidth}
        className="h-full w-full object-fill rounded-xl"
        alt={project.title}
        onError={() => setError(true)}
      />
    </div>
  );
}

export default function CaseStudyModal({
  project,
  open,
  onClose,
}: {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-6000 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 z-6001 w-[calc(100%-2rem)] max-w-2xl max-h-[85vh] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-slate-700/50 bg-slate-900 shadow-2xl shadow-black/40 flex flex-col overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-700/50 px-5 py-4 shrink-0">
              <h2
                id="case-study-title"
                className="mt-1 text-xl font-semibold text-white"
              >
                {project.title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 cursor-pointer hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-5 pt-4 pb-2 shrink-0">
              <ProjectImage project={project} />
            </div>
            <div className="px-5 py-4 space-y-5 text-sm text-slate-200">
              <div>
                <h3 className="font-semibold text-emerald-600 mb-1">
                  Overview
                </h3>
                <p>{project.caseStudy.overview}</p>
                <p className="mt-1 text-slate-300">
                  <span className="font-medium text-slate-100">
                    Who it&apos;s for:
                  </span>{" "}
                  {project.caseStudy.audience}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-emerald-600 mb-1">Problem</h3>
                <p>{project.caseStudy.problem}</p>
              </div>
              <div>
                <h3 className="font-semibold text-emerald-600 mb-1">
                  Role & ownership
                </h3>
                <p>{project.caseStudy.roleOwnership}</p>
              </div>
              <div>
                <h3 className="font-semibold text-emerald-600 mb-1">
                  Key technical decisions
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {project.caseStudy.keyDecisions.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-emerald-600 mb-1">Impact</h3>
                <p>{project.caseStudy.impact}</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
