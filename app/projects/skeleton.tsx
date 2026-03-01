"use client";

import { useRef } from "react";
import Image from "next/image";
import NavButton from "../components/button";
import FloatingNav from "../components/FloatingNav";
import { CarouselSize } from "../components/shadcn/finalCarousel";
import { Project } from "../data/projectData";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const getYouTubeVideoId = (url: string) => {
  if (!url) return null;
  if (url.includes("/embed/")) return url.split("/embed/")[1].split("?")[0];
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = RegExp(regExp).exec(url);
  return match && match[2].length === 11 ? match[2] : null;
};

const AnimatedText = ({ text }: { text: string }) => {
  return (
    <span className="gsap-text-block inline-block">
      {text.split(" ").map((word, index) => (
        <span key={index} className="gsap-word text-zinc-500">
          {word}{" "}
        </span>
      ))}
    </span>
  );
};

export default function Skeleton(project: Readonly<Project>) {
  const containerRef = useRef<HTMLDivElement>(null);

  const videoId = project?.videoLink
    ? getYouTubeVideoId(project.videoLink)
    : null;

  useGSAP(
    () => {
      const textBlocks = gsap.utils.toArray<HTMLElement>(".gsap-text-block");

      textBlocks.forEach((block) => {
        const words = block.querySelectorAll(".gsap-word");

        gsap.to(words, {
          color: "#fafafa",
          stagger: 0.5,
          scrollTrigger: {
            trigger: block,
            start: "top 95%",
            end: "top 70%",
            scrub: true,
          },
        });
      });

      const fadeUpElements = gsap.utils.toArray<HTMLElement>(".gsap-fade-up");

      fadeUpElements.forEach((elem) => {
        gsap.fromTo(
          elem,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full font-league-spartan bg-black text-zinc-50 pb-24 bg-cover bg-center bg-fixed bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,1) 100%), url('/assets/gradient.jpg')`,
      }}
    >
      <FloatingNav />
      <main className="max-w-6xl mx-auto px-6 py-32 pb-80 md:pt-40 flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl md:text-5xl font-medium gsap-fade-up">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-4 gsap-fade-up">
            <NavButton
              variant="solid"
              icon={
                <span className="material-symbols-outlined align-middle">
                  arrow_back
                </span>
              }
              onClick={() => window.history.back()}
              className="whitespace-nowrap"
            >
              Go back
            </NavButton>

            {project.gitHubLink && (
              <NavButton
                variant="solid"
                icon={
                  <Image
                    src="/github_logo.png"
                    alt="GitHub Logo"
                    width={20}
                    height={20}
                    className="align-middle"
                  />
                }
                onClick={() => window.open(project.gitHubLink, "_blank")}
              >
                GitHub Link Project
              </NavButton>
            )}
          </div>
        </div>

        {project.carouselImages && project.carouselImages.length > 0 && (
          <div className="w-full flex justify-center px-14 gsap-fade-up">
            <CarouselSize images={project.carouselImages} />
          </div>
        )}

        {project.descriptionBlocks.length >= 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 text-lg leading-relaxed">
            <p>
              <AnimatedText text={project.descriptionBlocks[0]} />
            </p>
            <p>
              <AnimatedText text={project.descriptionBlocks[1]} />
            </p>
          </div>
        )}

        {project.infoImage && (
          <div className="gsap-fade-up">
            <Image
              src={project.infoImage}
              alt={`${project.title} visual`}
              width={3600}
              height={1800}
              className="w-full rounded-2xl object-cover"
              priority
            />
          </div>
        )}

        {videoId && (
          <div className="w-full aspect-video gsap-fade-up">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&rel=0`}
              title={`${project.title} video`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full rounded-2xl"
            />
          </div>
        )}

        {project.descriptionBlocks.length >= 4 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 text-lg leading-relaxed">
            <p>
              <AnimatedText text={project.descriptionBlocks[2]} />
            </p>
            <p>
              <AnimatedText text={project.descriptionBlocks[3]} />
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
