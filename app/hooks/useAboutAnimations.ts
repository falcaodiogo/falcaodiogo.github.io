import { useEffect, useLayoutEffect, RefObject } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useAboutAnimations(
  containerRef: RefObject<HTMLElement | null>,
) {
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (containerRef.current) {
        gsap.set(containerRef.current, { autoAlpha: 1 });
      }

      gsap.from(".hero-element", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".hero-image", {
        y: 30,
        delay: 0.5,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top 80%",
          once: true,
        },
      });

      gsap.fromTo(
        ".presentation-word",
        { opacity: 0, color: "#000000" },
        {
          keyframes: [
            { opacity: 1, color: "#3b82f6", duration: 0.4 },
            { color: "#fafafa", duration: 0.4 },
          ],
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top 75%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".phone-image",
        { y: 200, opacity: 0, rotation: -10, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          scrollTrigger: {
            trigger: ".skills-section",
            start: "top 95%",
            end: "center center",
            scrub: 1,
          },
        },
      );

      gsap.from(".skills-title", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".digital-skills-container",
          start: "top 85%",
          once: true,
        },
      });

      const animateSkills = (selector: string | object | null) => {
        gsap.utils.toArray<HTMLElement>(selector).forEach((btn) => {
          const randomX = gsap.utils.random(-100, 100);
          const randomStartY = gsap.utils.random(200, 450);

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".skills-section",
              start: "top 65%",
              end: "top 15%",
              scrub: 1,
            },
          });

          tl.fromTo(
            btn,
            {
              x: randomX,
              y: randomStartY,
              scale: 0.8,
              opacity: 0,
            },
            {
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              ease: "none",
            },
          );
        });
      };

      animateSkills(".digital-skill-btn");
      animateSkills(".learning-skill-btn");

      gsap.from(".contact-element", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contacts-section",
          start: "top 80%",
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
}
