import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <ProjectsGallery />
    </main>
  );
}

type ProjectProps = {
  children: React.ReactNode;
  preview: React.ReactNode;
};

function ProjectCard({
  children,
  preview,
}: ProjectProps) {
  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <ProjectPreview>
        {preview}
      </ProjectPreview>

      <div className="bg-white p-4 shadow-md rounded-xl mt-4">
        {children}
      </div>
    </div>
  );
}

function JavaScriptPreview() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">
        JavaScript Project
      </h1>

      <p>Interactive JS runtime preview</p>
    </div>
  );
}

function PythonPreview() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">
        Python Project
      </h1>

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Execute Script
      </button>
    </div>
  );
}

function JavaPreview() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">
        Java Project
      </h1>

      <div className="border p-2 rounded mt-2">
        JVM Preview Area
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    id: 1,
    description: "This is a simple project card.",
    author: "Lucas da Silva",
    authorAvatar: "/avatars/lucas_s_avatar.webp",
    language: "JavaScript",
    githubLink: "dumb-link.com",
    previewComponent: JavaScriptPreview,
  },
  {
    id: 2,
    description: "This is another project card.",
    author: "Lucas da Silva",
    authorAvatar: "/avatars/lucas_s_avatar.webp",
    language: "Python",
    githubLink: "dumb-link.com",
    previewComponent: PythonPreview,
  },
  {
    id: 3,
    description: "This is a third project card.",
    author: "Lucas das Neves",
    authorAvatar: "/avatars/lucas_n_avatar.webp",
    language: "Java",
    githubLink: "dumb-link.com",
    previewComponent: JavaPreview,
  },
];

function ProjectsGallery() {
  return (
    <div className="max-w-6xl mx-auto border border-gray-300 rounded-xl p-6 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => {
          const PreviewComponent =
            project.previewComponent;

          return (
            <ProjectCard
              key={project.id}
              preview={<PreviewComponent />}
            >
              <p>{project.description}</p>

              <div className="flex items-center gap-3 mt-4">
                <Image
                  src={project.authorAvatar}
                  alt={project.author}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />

                <div>
                  <p className="font-semibold">
                    {project.author}
                  </p>

                  <p className="text-sm text-gray-500">
                    {project.language}
                  </p>
                </div>
              </div>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline block mt-4"
              >
                View on GitHub
              </a>
            </ProjectCard>
          );
        })}
      </div>
    </div>
  );
}

type ProjectPreviewProps = {
  children?: React.ReactNode;
};

function ProjectPreview({
  children,
}: ProjectPreviewProps) {
  return (
    <div className="aspect-square md:aspect-video w-full border border-gray-300 rounded-xl shadow-md bg-gray-100 flex items-center justify-center p-4">
      {children}
    </div>
  );
}