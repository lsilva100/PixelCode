import ProjectsGallery from "../../components/ProjectGallery";

export default function Home() {
  return (
    <main className="w-full bg-gradient-to-tl from-black to-gray-900">
      <div className="bg-gradient-to-tl from-black to-gray-900 text-white max-w-6xl mx-auto p-6">
        <div className="flex flex-col gap-4 mb-8">
          <p className="text-sm uppercase tracking-widest opacity-70">Autores: Lucas da Silva & Lucas das Neves</p>
          <h1 className="text-4xl font-bold text-white">Projetos</h1>
          <p className="text-lg opacity-90">Uma seleção de trabalhos que unem lógica, design e desenvolvimento</p>
        </div>
        <div>
          <ProjectsGallery />
        </div>
      </div>
    </main>
  );
}

