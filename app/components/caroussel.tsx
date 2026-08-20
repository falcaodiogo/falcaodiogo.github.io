"use client";

import { useRef, useEffect } from "react";
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

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let targetScroll = container.scrollLeft;
    let animationFrame: number | null = null;

    const smoothScroll = () => {
      const currentScroll = container.scrollLeft;

      const difference = targetScroll - currentScroll;

      container.scrollLeft += difference * 0.12;

      if (Math.abs(difference) > 0.5) {
        animationFrame = requestAnimationFrame(smoothScroll);
      } else {
        container.scrollLeft = targetScroll;
        animationFrame = null;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth < 768) return;

      e.preventDefault();

      const multiplier = Math.abs(e.deltaY) > 40 ? 1.5 : 1;

      targetScroll += e.deltaY * multiplier;

      targetScroll = Math.max(
        0,
        Math.min(targetScroll, container.scrollWidth - container.clientWidth),
      );

      if (!animationFrame) {
        animationFrame = requestAnimationFrame(smoothScroll);
      }
    };

    container.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      container.removeEventListener("wheel", handleWheel);

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="relative flex h-full w-full items-start md:items-center justify-center py-12 px-4 md:px-12">
      <div
        ref={scrollContainerRef}
        className="w-full flex items-start md:items-center overflow-y-auto overflow-x-hidden md:overflow-x-auto md:overflow-y-hidden rounded-2xl pb-4 [scrollbar-width:thin] contain-[layout_paint]"
      >
        <div className="flex flex-col pt-12 pb-24 md:py-0 md:flex-row w-full md:w-max h-full items-center gap-10 md:gap-16 bg-linear-to-r from-black from-60% md:to-cyan-900/50 rounded-2xl md:rounded-l-none md:rounded-r-2xl">
          {items.map((project) => (
            <div
              key={project.title}
              className="shrink-0 snap-center pointer-events-auto"
            >
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
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });

                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollTo({
                    left: 0,
                    top: 0,
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
    </div>
  );
}
