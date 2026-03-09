"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const sequenceIndices = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

export default function IntroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      if (containerRef.current) {
        containerRef.current.style.display = "none";
      }
      return;
    }

    const ctx = gsap.context(() => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const originalGap = wrapper.style.gap;
      wrapper.style.gap = "3rem";

      const children = Array.from(wrapper.children) as HTMLElement[];
      const centerImage = children[2];

      if (!centerImage) return;

      const blackBox = centerImage.querySelector(".black-box");

      const viewportCenter = window.innerWidth / 2;
      const imageCenterOffset =
        centerImage.offsetLeft + centerImage.offsetWidth / 2;
      wrapper.style.gap = originalGap;

      const endPosition = viewportCenter - imageCenterOffset;

      wrapper.style.gap = "30vw";
      const startWidth = wrapper.scrollWidth;
      wrapper.style.gap = "";

      const tl = gsap.timeline({
        delay: 0.5,
      });

      tl.addLabel("start");

      tl.set(wrapper, { autoAlpha: 1 }, "start");

      tl.fromTo(
        wrapper,
        { x: -startWidth, gap: "30vw" },
        {
          x: endPosition,
          gap: "3rem",
          duration: 2,
          ease: "power2.inOut",
        },
        "start"
      );

      tl.fromTo(
        children[1],
        { x: -50 },
        { x: 0, duration: 2, ease: "power2.inOut", delay: 0.2 },
        "start"
      );

      tl.fromTo(
        children[0],
        { x: -150 },
        { x: 0, duration: 2, ease: "power2.inOut", delay: 0.5 },
        "start"
      );

      const leftChildren = [children[0], children[1]];
      const leftXOffsets = [
        -window.innerWidth / 2,
        -window.innerWidth / 2 + 20,
      ];
      const leftScales = [0.5, 0.55];

      leftChildren.forEach((child, index) => {
        tl.to(
          child,
          {
            x: leftXOffsets[index],
            duration: 1,
            ease: "power2.in",
          },
          "split"
        );

        tl.to(
          child,
          {
            keyframes: [
              { scale: 1, duration: 0 },
              {
                scale: leftScales[index],
                duration: 0.5,
                ease: "power2.inOut",
              },
              { scale: 2.5, duration: 0.5, ease: "power2.inOut" },
            ],
            duration: 1.5,
          },
          "split"
        );
      });

      tl.to(
        centerImage,
        {
          scale: 1.2,
          duration: 1.5,
          ease: "power2.inOut",
        },
        "split"
      );

      if (blackBox) {
        const viewportW = window.innerWidth;
        const viewportH = window.innerHeight;
        const imageW = centerImage.offsetWidth;
        const imageH = centerImage.offsetHeight;
        const targetScaleX = (viewportW / (imageW * 1.2)) * 1.05;
        const targetScaleY = (viewportH / (imageH * 1.2)) * 1.05;

        tl.to(
          blackBox,
          {
            scaleX: targetScaleX,
            scaleY: targetScaleY,
            borderRadius: 0,
            duration: 2,
            ease: "power4.inOut",
          },
          "split"
        );
      }

      const rightChildren = [children[3], children[4]];
      const rightXOffsets = [window.innerWidth / 2 + 20, window.innerWidth / 2];
      const rightScales = [0.5, 0.55];

      rightChildren.forEach((child, index) => {
        tl.to(
          child,
          {
            x: rightXOffsets[index],
            duration: 1,
            ease: "power2.in",
          },
          "split"
        );

        tl.to(
          child,
          {
            keyframes: [
              { scale: 1, duration: 0 },
              {
                scale: rightScales[index],
                duration: 0.5,
                ease: "power2.inOut",
              },
              { scale: 2.5, duration: 0.5, ease: "power2.inOut" },
            ],
            duration: 1.5,
          },
          "split"
        );
      });

      tl.to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          if (containerRef.current) {
            containerRef.current.style.display = "none";
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center bg-gray-100 overflow-hidden"
    >
      <div
        ref={wrapperRef}
        className="flex gap-16 shrink-0 invisible"
        style={{ willChange: "transform, gap" }}
      >
        {sequenceIndices.map((imgIndex, i) => (
          <div
            key={`${imgIndex}-${i}`}
            className={`relative w-48 h-32 md:w-64 md:h-48 shrink-0 ${
              i === 2 ? "overflow-visible" : ""
            }`}
          >
            {i === 2 && (
              <div
                className="black-box absolute inset-0 bg-black -z-10 rounded-md"
                style={{ willChange: "transform" }}
              />
            )}

            <Image
              src={`/assets/Frame${imgIndex}.${imgIndex === 3 ? "png" : "jpg"}`}
              alt={`Intro sequence ${imgIndex}`}
              fill
              priority={true}
              className="object-cover rounded-md shadow-lg"
              sizes="(max-width: 768px) 300px, 400px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
