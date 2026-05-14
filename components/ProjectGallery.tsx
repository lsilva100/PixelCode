import ProjectCard, { ProjectProps } from "./ProjectCard";
import {projectDataL1} from "../projects/descriptions";
import { Project } from "next/dist/build/swc/types";
import { AnimatePresence, motion } from "motion/react";

export default function ProjectsGallery(props: { projectsFromAuthor: ProjectProps[] }) {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        layout
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6"
      >
        {props.projectsFromAuthor.map((project, index) => (
          <ProjectCard
            key={project.Info.title}
            props={project}
            direction={index % 2 === 0 ? 1 : -1}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

