"use client";

import { useRef } from "react";
import { Project } from "../data/projectData";
import NavButton from "./button";
import ProjectCard from "./projectCard";

function CarouselArrow({
  direction,
  onClick,
}: Readonly<{
  direction: "left" | "right";
  onClick: () => void;
}>) {
  const isLeft = direction === "left";

  return (
    <button
      onClick={onClick}
      className={`hidden md:flex absolute ${
        isLeft ? "left-2 md:left-4" : "right-2 md:right-4"
      } z-10 items-center justify-center p-3 bg-black/10 text-white rounded-full hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all`}
      aria-label={`Scroll ${direction}`}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={isLeft ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
        />
      </svg>
    </button>
  );
}

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

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount =
        direction === "left"
          ? -current.clientWidth / 2
          : current.clientWidth / 2;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row h-full w-full items-center justify-center py-12 px-12 md:py-0 group">
      <CarouselArrow direction="left" onClick={() => scroll("left")} />

      <div
        ref={scrollContainerRef}
        className="w-full flex items-center overflow-x-auto scroll-smooth no-scrollbar rounded-2xl px-4 md:px-0"
      >
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
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollTo({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }
                handleBack();
              }}
            >
              Go to the Projects page
            </NavButton>
          </div>
        </div>
      </div>

      <CarouselArrow direction="right" onClick={() => scroll("right")} />
    </div>
  );
}
