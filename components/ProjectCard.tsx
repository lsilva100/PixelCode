'use client';

import { motion } from "motion/react";
import { useState } from "react";

export type ProjectProps = {
    Preview: React.ReactNode;
    Info: {
        class: {name: string; textColor: string};
        title: string;
        description: string[];
        link: string;
    };
};

export default function ProjectCard({ props, direction }: { props: ProjectProps; direction: number }) {

  return (
        <motion.div
        layout
        initial={{
          opacity: 0,
          rotateY: -90 * direction,
          x: 40 * direction,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          rotateY: 0,
          x: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          rotateY: 90 * direction,
          x: -40 * direction,
          scale: 0.9,
        }}
        transition={{
          duration: 1.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          scale: 1.03,
        }}
        style={{
          transformPerspective: 1000,
          transformStyle: "preserve-3d",
        }}
        className="
          flex bg-gradient-to-tr from-black to-gray-900
          text-white rounded-lg shadow-md p-4
        "
      >
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
    </motion.div>
  );
};
