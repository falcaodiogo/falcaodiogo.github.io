"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import IntroAnimation from "@/app/components/IntroAnimation";
import FloatingNav from "./components/FloatingNav";
import NavButton from "./components/button";

export default function Home() {
  const containerRef = useRef<HTMLSpanElement>(null);
  const imageRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const navBarRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const changeTextRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    const ctx = gsap.context(() => {
      if (!hasVisited) {
        sessionStorage.setItem("hasVisited", "true");

        const tl = gsap.timeline({
          delay: 4,
        });

        tl.to(navBarRef.current, {
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        });

        tl.to(textRef.current, {
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        })
          .to(imageRef.current, {
            opacity: 1,
            duration: 0.6,
            ease: "power2.inOut",
          })
          .add(() => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();

            gsap.set(containerRef.current, {
              position: "fixed",
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height,
              zIndex: 40,
              borderRadius: 0,
            });
          })
          .to(containerRef.current, {
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            duration: 1.5,
            ease: "expo.inOut",
          })
          .to(
            buttonsRef.current,
            {
              delay: 0.6,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
            },
            "<",
          )
          .to(changeTextRef.current, {
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
          });
      } else {
        gsap.set(
          [
            navBarRef.current,
            textRef.current,
            buttonsRef.current,
            changeTextRef.current,
          ],
          { opacity: 1 },
        );

        const tl = gsap.timeline({ delay: 0.3 });

        tl.to(imageRef.current, {
          opacity: 1,
          duration: 0.8,
          ease: "power2.inOut",
        })
          .add(() => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();

            gsap.set(containerRef.current, {
              position: "fixed",
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height,
              zIndex: 40,
              borderRadius: 0,
            });
          })
          .to(containerRef.current, {
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            duration: 1.5,
            ease: "expo.inOut",
          });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col md:gap-8 gap-4 min-h-screen items-center justify-center font-league-spartan bg-black overflow-hidden">
      <IntroAnimation />
      <h1
        ref={textRef}
        className="opacity-0 text-center md:text-5xl text-2xl font-normal text-white relative z-50"
      >
        <span className="relative z-50">
          Hello, I&apos;m Diogo! Welcome to
          <br />
          my{" "}
        </span>
        <span className="relative inline-block">
          <span className="relative z-50">brand new</span>

          <span
            ref={containerRef}
            className="absolute -bottom-3 left-0 h-1.5 w-full bg-white overflow-hidden"
          >
            <video
              ref={imageRef}
              className="absolute inset-0 h-full w-full opacity-0 object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/assets/gradient.mp4" type="video/mp4" />
            </video>
          </span>
        </span>{" "}
        <span className="relative z-50">website!</span>
      </h1>

      <div
        ref={buttonsRef}
        className="flex flex-col md:flex-row md:gap-8 gap-4 opacity-0 relative z-50"
      >
        <NavButton
          variant="solid"
          onClick={() => (window.location.href = "/about")}
        >
          About me
        </NavButton>

        <NavButton
          variant="solid"
          onClick={() => (window.location.href = "/projects")}
        >
          Projects
        </NavButton>
      </div>

      <FloatingNav
        className="opacity-0 flex pointer-events-auto"
        ref={navBarRef}
      />
    </div>
  );
}
