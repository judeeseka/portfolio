import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { projects } from "@/lib/constants";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative z-10">
      <p className="mb-2 text-lg text-center">Portfolio</p>
      <h2 className="text-5xl text-center">Recent Projects</h2>

      <div className="grid auto-rows-fr grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-8 w-full mt-10 bg-slate-900">
        {projects.map((project) => (
            <CardContainer key={project.id}>
              <CardBody className="bg-gray-50 group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border ">
                <CardItem 
                // translateZ="100"
                translateZ={100}
                 className="w-full h-56 mt-4">
                  <Image
                    src={project.imageUrl}
                    height={project.imageHeight}
                    width={project.imageWidth}
                    className="h-full w-full object-fill aspect-square rounded-xl group-hover/card:shadow-xl"
                    alt={project.title + " image"}
                  />
                </CardItem>
                <CardItem
                  // translateZ="50"
                  translateZ={50}
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  // translateZ="60"
                  translateZ={60}
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {project.description}
                </CardItem>

                <CardItem className="flex flex-wrap gap-2 my-4">
                  {project.tags.map((tag, tagIndex) => (
                    <CardItem as="span" 
                    // translateZ="60"
                    translateZ={60}
                     key={tagIndex} className="chip">
                      {tag}
                    </CardItem>
                  ))}
                </CardItem>

                <CardItem className="flex gap-4">
                  <CardItem
                  as="a"
                  // translateZ="50"
                  translateZ={50}
                    href={project.links.github}
                    className="hover:text-primary/80 transition-colors"
                  >
                    <FiGithub className="w-5 h-5" />
                  </CardItem>
                  <CardItem
                  as="a"
                  // translateZ="50"
                  translateZ={50}
                    href={project.links.live}
                    className="hover:text-primary/80 transition-colors"
                  >
                    <RiExternalLinkLine className="w-5 h-5" />
                  </CardItem>
                </CardItem>
              </CardBody>
            </CardContainer>
        ))}
      </div>
    </section>
  );
};

export default Projects;
