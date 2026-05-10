
export  function ProjectBinarySearch(){
    return (
        <ProjectCard children={BinarySearchPreview()} projectInfo={{ class: { name: "Pesquisa", textColor: "text-blue-900" }, title: "Binary Search", description: ["Pesquisa e visualização sobre busca binária em diferentes cenários e complexidades"], link: "#" }} />
    );
}

export  function ProjectLinearSearch(){
    return (
        <ProjectCard children={LinearSearchPreview()} projectInfo={{ class: { name: "Algoritmo", textColor: "text-yellow-900" }, title: "Linear Search", description: ["Pesquisa e visualização sobre busca linear em diferentes cenários e complexidades"], link: "#" }} />
    );
}

export  function ProjectHashTable(){
    return (
        <ProjectCard children={HashTablePreview()} projectInfo={{ class: { name: "Desenvolvimento", textColor: "text-green-900" }, title: "Hash Table", description: ["Implementação e visualização de tabelas hash em diferentes cenários e complexidades"], link: "#" }} />
    );
}

export  function ProjectGraphSearch(){
    return (
        <ProjectCard children={GraphSearchPreview()} projectInfo={{ class: { name: "Algoritmo", textColor: "text-yellow-900" }, title: "Graph Search", description: ["Implementação e visualização de algoritmos de busca em grafos, como DFS e BFS"], link: "#" }} />
    );
}





function ProjectCard({children, projectInfo}: Readonly<ProjectPreviewProps> ) {
  return (
    <div className="flex bg-gradient-to-tr from-black to-gray-900 text-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform">
      <div className="flex flex-col gap-4">
        <h1 className={`text-left ${projectInfo.class.textColor} text-xs`}> {projectInfo.class.name} </h1>
        <h2 className="text-lg"> {projectInfo.title} </h2>
        <p className="text-left text-sm"> {projectInfo.description[0]} </p>
        <a href={projectInfo.link} className="text-white hover:text-blue-300 cursor-pointer">VER PROJETO -&gt; </a>
      </div>
      <div className="text-center ml-4">
        {children}
      </div>
    </div>
  );
}

function BinarySearchPreview() {
  return (
    <div className="w-60 h-48 bg-gray-200 rounded-md flex items-center justify-center">
      <span className="text-black">Binary Search Preview</span>
    </div>
  );
}

function LinearSearchPreview() {
  return (
    <div className="w-60 h-48 bg-gray-200 rounded-md flex items-center justify-center">
      <span className="text-black">Linear Search Preview</span>
    </div>
  );
}

function HashTablePreview() {
  return (
    <div className="w-60 h-48 bg-gray-200 rounded-md flex items-center justify-center">
      <span className="text-black">Hash Table Preview</span>
    </div>
  );
}

function GraphSearchPreview() {
  return (
    <div className="w-60 h-48 bg-gray-200 rounded-md flex items-center justify-center">
      <span className="text-black">Graph Search Preview</span>
    </div>
  );
}


interface category {
    name: string;
    textColor: string;
}

type ProjectInfoProps = {
    class: category;
    title: string;
    description: string[];
    link: string;
};

type ProjectPreviewProps = {
    children: React.ReactNode;
    projectInfo: ProjectInfoProps;
};

