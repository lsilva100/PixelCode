import { ProjectGraphSearch } from "../projects/Projects";
import { ProjectHashTable } from "../projects/Projects";
import { ProjectLinearSearch } from "../projects/Projects";
import { ProjectBinarySearch } from "../projects/Projects"; 


export default function ProjectsGallery() {
  return (
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        <ProjectBinarySearch />
        <ProjectLinearSearch />
        <ProjectHashTable />
        <ProjectGraphSearch />
      </div>      
  );
}

