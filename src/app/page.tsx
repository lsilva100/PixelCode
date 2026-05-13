'use client';

import Image from "next/image";
import Link from "next/link";
import ProjectsGallery from "../../components/ProjectGallery";
import Toggle from "../../components/Toggle";
import { projectDataL1 } from "../../projects/descriptions";
import { projectDataL2 } from "../../projects/descriptions";
import React, { useState } from "react";


export default function Home() {

  const [author, setAuthor] = useState({"name": "Lucas das Neves", "projects": projectDataL1});

  return (
    <main className="w-full min-h-screen bg-black">
     <header className="relative z-10 flex w-full items-center justify-between bg-gradient-to-tl from-black to-gray-900 py-6 px-8">
        <div className="flex-shrink-0">
          <Image
            className="" 
            src="/header/transp-white.png" 
            alt="Pixel Logo" 
            width={90} 
            height={30} 
            priority 
          />
        </div>

        <nav className="flex space-x-6">
          <Link href="#about" className="text-white hover:text-gray-300">ABOUT US</Link>
          <Link href="#projects" className="text-white hover:text-gray-300">PROJECTS</Link>
          <Link href="#contact" className="text-white hover:text-gray-300">CONTACT</Link>
        </nav>

        <div className="flex items-center gap-4 rounded-full border border-zinc-700 px-5 py-3 text-sm text-white">
    <span>LSILVA</span>

    <Toggle />

    <span>LMATEUS</span>
  </div>
      </header>

       <div className="bg-gradient-to-tl from-black to-gray-900 text-white w-full p-6">
        <div className="flex flex-col gap-4 mb-8">
          <p className="text-sm uppercase tracking-widest opacity-70">Autor: {author.name}</p>
          <h1 className="text-4xl font-bold text-white">Projetos</h1>
          <p className="text-lg opacity-90">Uma seleção de trabalhos que unem lógica, design e desenvolvimento</p>
        </div>
        <div>
          <ProjectsGallery projectsFromAuthor={author.projects} />
        </div>
      </div>
    </main>
  );
}

