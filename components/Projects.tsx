"use client";

import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { projects } from "@/lib/constants";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";
import { CaseStudyModal } from "./ui/case-study-modal";
import type { projects as projectsArray } from "@/lib/constants";

type Project = (typeof projectsArray)[number];

function ProjectImage({ project }: { project: Project }) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className="h-full w-full rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-slate-500 text-sm">
        {project.title}
      </div>
    );
  }
  return (
    <Image
      src={project.imageUrl}
      height={project.imageHeight}
      width={project.imageWidth}
      className="h-full w-full object-cover rounded-xl group-hover/card:scale-[1.02] transition-transform duration-300"
      alt={project.title}
      onError={() => setError(true)}
    />
  );
}

const Projects = () => {
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openCaseStudy = (project: Project, e?: React.MouseEvent) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    setModalProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalProject(null);
  };

  return (
    <>
      <section id="projects" className="py-16 md:py-24 relative z-10">
        <p className="text-center text-slate-400 text-sm font-medium tracking-wider uppercase mb-2">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-5xl font-semibold text-center text-white">
          Featured projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 w-full mt-10">
          {projects.map((project) => (
            <CardContainer key={project.id}>
              <CardBody
                className="bg-slate-900/80 group/card hover:shadow-xl hover:shadow-emerald-500/5 dark:border-slate-700/60 border border-slate-800 w-full h-auto rounded-2xl p-5 md:p-6 cursor-pointer transition-all duration-200 hover:border-slate-600/60"
                onClick={() => openCaseStudy(project)}
              >
                <CardItem translateZ={100} className="w-full h-48 md:h-52 mt-0 overflow-hidden rounded-xl">
                  <ProjectImage project={project} />
                </CardItem>
                <CardItem translateZ={50} className="mt-4 text-xs uppercase tracking-wider text-emerald-400/90 font-medium">
                  {project.productType}
                </CardItem>
                <CardItem translateZ={50} className="text-lg md:text-xl font-semibold text-white mt-1">
                  {project.title}
                </CardItem>
                <CardItem as="p" translateZ={60} className="text-slate-400 text-sm mt-1.5 line-clamp-2">
                  {project.description}
                </CardItem>
                <CardItem as="p" translateZ={60} className="mt-2 text-xs text-slate-500">
                  <span className="text-slate-400">Role:</span> {project.role}
                </CardItem>
                <CardItem as="p" translateZ={60} className="text-xs text-slate-500">
                  <span className="text-slate-400">Stack:</span> {project.techStackShort}
                </CardItem>
                <CardItem className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </CardItem>

                <div className="mt-4 flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
                  <div className="flex gap-3">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-emerald-400 transition-colors p-1"
                      aria-label="GitHub"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-emerald-400 transition-colors p-1"
                      aria-label="Live site"
                    >
                      <RiExternalLinkLine className="w-5 h-5" />
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => openCaseStudy(project, e)}
                    className="text-sm font-medium text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                  >
                    View case study
                  </button>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-6">
          Click any project or &quot;View case study&quot; to read the full case study.
        </p>
      </section>

      <CaseStudyModal project={modalProject} open={modalOpen} onClose={closeModal} />
    </>
  );
};

export default Projects;
