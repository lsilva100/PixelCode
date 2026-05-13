import ProjectCard, { ProjectProps } from "./ProjectCard";
import {projectDataL1} from "../projects/descriptions";
import { Project } from "next/dist/build/swc/types";

export default function ProjectsGallery(props: { projectsFromAuthor: ProjectProps[] }) {
  return (
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {props.projectsFromAuthor.map((project, index) => (
          <ProjectCard key={index} props={project} />
        ))}
      </div>      
  );
}

