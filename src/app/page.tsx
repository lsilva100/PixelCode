import Image from "next/image";
import ProjectsGallery from "../../components/ProjectGallery";

export default function Home() {
  return (
    <main className="w-full">
      <div className="max-w-6xl mx-auto p-6">
        <ProjectsGallery />
      </div>
    </main>
  );
}

