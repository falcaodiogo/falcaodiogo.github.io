"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import NavButton from "../components/button";
import FloatingNav from "../components/FloatingNav";
import Carousel from "../components/caroussel";
import { personalProjects, uniProjects } from "../data/projectData";
import { useRouter } from "next/navigation";

interface SelectionCardProps {
  title: string;
  side: "left" | "right";
  isLocked: boolean;
  onSelect: () => void;
}

const SelectionCard = ({
  title,
  side,
  isLocked,
  onSelect,
}: SelectionCardProps) => {
  const expandBgRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const active = isHovered || isLocked;

  const handleMouseEnter = () => {
    setIsHovered(true);
    gsap.to(expandBgRef.current, {
      scaleX: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!isLocked) {
      gsap.to(expandBgRef.current, {
        scaleX: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  };

  const alignmentClasses =
    side === "left"
      ? "items-end pb-8 md:items-center md:pb-0"
      : "items-start pt-8 md:items-center md:pt-0";

  return (
    <div
      className={`relative flex h-[50vh] w-full flex-1 cursor-pointer justify-center overflow-hidden ${alignmentClasses}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onSelect}
    >
      <div
        ref={expandBgRef}
        className={`absolute inset-0 z-0 bg-white ${
          side === "left" ? "origin-right" : "origin-left"
        }`}
        style={{ transform: isLocked ? "scaleX(1)" : "scaleX(0)" }}
      />
      <div className="relative z-10 pointer-events-none">
        <NavButton variant="outline" isActive={active}>
          {title}
        </NavButton>
      </div>
    </div>
  );
};

export default function Projects() {
  const splitScreenRef = useRef<HTMLDivElement>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [selectedCategory, setSelectedCategory] = useState<
    "uni" | "personal" | null
  >(null);

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      const savedCategory = sessionStorage.getItem("selectedCategory") as
        | "uni"
        | "personal"
        | null;
      const savedScroll = sessionStorage.getItem("carouselScroll");

      if (savedCategory) {
        setSelectedCategory(savedCategory);

        requestAnimationFrame(() => {
          const splitExitX = savedCategory === "personal" ? "100%" : "-100%";
          gsap.set(splitScreenRef.current, { x: splitExitX });
          gsap.set(carouselContainerRef.current, { x: 0, autoAlpha: 1 });

          if (savedScroll && scrollContainerRef.current) {
            setTimeout(() => {
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollLeft = parseInt(
                  savedScroll,
                  10
                );
              }
            }, 50);
          }
        });
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleSelect = (side: "left" | "right") => {
    if (selectedCategory) return;

    const category = side === "left" ? "personal" : "uni";
    setSelectedCategory(category);

    const splitExitX = side === "left" ? "100%" : "-100%";
    const carouselEnterX = side === "left" ? "-100%" : "100%";

    const tl = gsap.timeline();

    tl.to(splitScreenRef.current, {
      x: splitExitX,
      duration: 0.4,
      ease: "power2.inOut",
    }).fromTo(
      carouselContainerRef.current,
      { x: carouselEnterX, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.5, ease: "power2.out" },
      "-=0.4"
    );
  };

  const handleBack = () => {
    sessionStorage.removeItem("selectedCategory");
    sessionStorage.removeItem("carouselScroll");

    const exitToX = selectedCategory === "personal" ? "-100%" : "100%";

    const tl = gsap.timeline({
      onComplete: () => setSelectedCategory(null),
    });

    tl.to(carouselContainerRef.current, {
      x: exitToX,
      autoAlpha: 0,
      duration: 0.5,
      ease: "power2.in",
    }).to(
      splitScreenRef.current,
      { x: 0, duration: 0.5, ease: "power2.out" },
      "-=0.3"
    );
  };

  const handleProjectClick = (link: string) => {
    if (selectedCategory) {
      sessionStorage.setItem("selectedCategory", selectedCategory);
    }
    if (scrollContainerRef.current) {
      sessionStorage.setItem(
        "carouselScroll",
        scrollContainerRef.current.scrollLeft.toString()
      );
    }
    router.push(link);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden font-league-spartan bg-black flex items-center justify-center">
      <FloatingNav />

      <div
        ref={splitScreenRef}
        className="absolute inset-0 flex h-full w-full flex-col items-center justify-center md:flex-row"
      >
        <SelectionCard
          title="Personal projects"
          side="left"
          isLocked={selectedCategory === "personal"}
          onSelect={() => handleSelect("left")}
        />

        <div
          className={`hidden h-[50vh] w-px bg-gray-200 md:block transition-opacity duration-300 ${
            selectedCategory ? "opacity-0" : "opacity-100"
          }`}
        />

        <SelectionCard
          title="University projects"
          side="right"
          isLocked={selectedCategory === "uni"}
          onSelect={() => handleSelect("right")}
        />
      </div>

      <div
        ref={carouselContainerRef}
        className="absolute inset-0 z-20 flex flex-col md:flex-row items-center justify-center opacity-0 invisible gap-12 h-full"
      >
        {selectedCategory === "uni" && (
          <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-[50vh] w-32 bg-white z-0 rounded-r-2xl" />
        )}

        {selectedCategory === "personal" && (
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[50vh] w-32 bg-white z-0 rounded-l-2xl" />
        )}

        {selectedCategory === "uni" && (
          <div className="hidden md:block relative z-10 left-16 pr-16">
            <NavButton
              variant="solid"
              icon={
                <span className="material-symbols-outlined align-middle">
                  arrow_back
                </span>
              }
              onClick={handleBack}
              className="whitespace-nowrap"
            >
              Go back
            </NavButton>
          </div>
        )}

        <div
          ref={scrollContainerRef}
          className="relative z-10 flex-1 overflow-x-auto h-full md:px-0"
        >
          {selectedCategory === "personal" && (
            <Carousel
              items={personalProjects}
              universityProject={false}
              onClick={(project) => handleProjectClick(project.link)}
              handleBack={handleBack}
            />
          )}
          {selectedCategory === "uni" && (
            <Carousel
              items={uniProjects}
              universityProject={true}
              onClick={(project) => handleProjectClick(project.link)}
              handleBack={handleBack}
            />
          )}
        </div>

        {selectedCategory === "personal" && (
          <div className="hidden md:block relative z-10 right-16 pl-16">
            <NavButton
              variant="solid"
              swap={true}
              icon={
                <span className="material-symbols-outlined align-middle">
                  arrow_forward
                </span>
              }
              onClick={handleBack}
              className="whitespace-nowrap"
            >
              Go back
            </NavButton>
          </div>
        )}
      </div>
    </div>
  );
}
