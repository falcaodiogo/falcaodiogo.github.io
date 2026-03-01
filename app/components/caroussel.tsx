"use client";

import { Project } from "../data/projectData";
import NavButton from "./button";
import ProjectCard from "./projectCard";

interface CarouselProps {
  items: Project[];
  universityProject: boolean;
  handleBack: () => void;
  onClick: (project: Project) => void;
}

export default function Carousel({
  items,
  universityProject,
  onClick,
  handleBack,
}: Readonly<CarouselProps>) {
  const projectType = universityProject
    ? "university projects"
    : "personal projects";

  return (
    <div className="flex flex-col md:flex-row h-full w-full items-center justify-center py-12 px-12 md:py-0">
      <div className="w-full flex items-center overflow-x-auto scroll-smooth no-scrollbar rounded-2xl px-4 md:px-0">
        <div className="flex flex-col pt-12 pb-24 md:py-0 md:flex-row w-max h-full items-center gap-10 md:gap-16 bg-linear-to-r from-black from-60% md:to-cyan-900/50 rounded-2xl md:rounded-l-none md:rounded-r-2xl">
          {items.map((project) => (
            <div key={project.title} className="shrink-0 snap-center">
              <ProjectCard
                title={project.title}
                imageSrc={project.imageSrc}
                onClick={() => onClick(project)}
              />
            </div>
          ))}

          <div className="flex flex-col items-center justify-center w-full gap-6 px-8 md:px-64 pb-12 md:pb-0 py-16 md:pt-0">
            <h1 className="text-lg md:text-2xl text-center text-zinc-50 w-[85vw] max-w-95 md:w-120">
              You made it to the end of the main {projectType}! Woohoo!
            </h1>
            <NavButton
              variant="solid"
              onClick={() => {
                const carousel = document.querySelector(".scroll-smooth");
                if (carousel) {
                  carousel.scrollTo({ left: 0, top: 0, behavior: "smooth" });
                }
                handleBack();
              }}
            >
              Go to the Projects page
            </NavButton>
          </div>
        </div>
      </div>
    </div>
  );
}
