export type ProjectProps = {
    Preview: React.ReactNode;
    Info: {
        class: {name: string; textColor: string};
        title: string;
        description: string[];
        link: string;
    };
};


export default function ProjectCard({props}: {props: ProjectProps}) {
  return (
    <div className="flex bg-gradient-to-tr from-black to-gray-900 text-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform">
      <div className="flex flex-col gap-4 basis-[50%]">
        <span className={`text-left ${props.Info.class.textColor} text-xs font-semibold uppercase tracking-wider`}> {props.Info.class.name} </span>
        <h2 className="text-lg font-bold"> {props.Info.title} </h2>
        <p className="text-left text-sm opacity-80"> {props.Info.description[0]} </p>
        <a 
          href={props.Info.link} 
          className="text-white hover:text-blue-300 cursor-pointer text-sm font-medium mt-auto"
          aria-label={`Ver o projeto ${props.Info.title}`}
        >
          VER PROJETO -&gt; 
        </a>
      </div>
      <div className="text-center ml-4 flex items-center justify-center basis-[50%]">
        {props.Preview}
      </div>
    </div>
  );
};
