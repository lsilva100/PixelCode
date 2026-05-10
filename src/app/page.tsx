import Image from "next/image";
import ProjectsGallery from "../../components/ProjectGallery";

export default function Home() {
  return (
    <main className="w-full bg-gradient-to-tl from-black to-gray-900">
      <div className="bg-gradient-to-tl from-black to-gray-900 text-white max-w-6xl mx-auto p-6">
        <div className="flex flex-col gap-4 mb-8">
        <p>Autor</p>
        <h1 className="text-4xltext-white">Projetos</h1>
        <p>Uma seleção de trabalhos que unem lógica, design e desenvolvimento</p>
        </div>
        <ProjectsGallery />
      </div>
    </main>
  );
}

