"use client";

import { useState, useEffect, useRef } from "react";
import NavButton from "../components/button";
import FloatingNav from "../components/FloatingNav";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = "/assets/gradient.jpg";
    img.onload = () => {
      setBgLoaded(true);
    };
  }, []);

  const presentationText =
    "I'm a 23-year-old Software Engineer from the University of Aveiro. I hold a Bachelor's in Software Engineering and I'm pursuing a Master's in Communication and Web Technologies. I'm passionate about mobile/web programming and UX/UI. I'm currently on Erasmus. Scroll down to learn more!";
  const presentationWords = presentationText.split(" ");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
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
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./CV_Diogo_Falcao.pdf";
    link.download = "CV_Diogo_Falcao.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsModalOpen(false);
  };

  const digitalSkills = [
    "Kotlin",
    "Flutter",
    "React",
    "Java",
    "UI/UX design",
    "TypeScript",
    "Spring Boot",
    "Python",
    "MySQL",
    "C#",
    "Figma",
  ];

  const learningSkills = ["Kotlin Multiplatform", "SwiftUI", "Objective-C"];

  return (
    <div
      ref={containerRef}
      className="relative z-0 flex flex-col min-h-screen items-center justify-start font-league-spartan bg-black text-zinc-50 gap-48 md:gap-64 overflow-x-hidden w-full py-16 md:py-36"
    >
      <div
        className={`absolute inset-0 -z-10 transition-opacity duration-1000 ease-in-out ${
          bgLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 50%, #000000 100%), url('/assets/gradient.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "100% 120vh, 100% 120vh",
        }}
      />

      <FloatingNav />
      <div className="hero-section md:py-8 flex flex-col md:flex-row md:justify-around items-center gap-16 md:gap-0 mt-20">
        <div className="flex flex-col gap-4 w-3/4 md:w-1/3">
          <div className="w-full flex items-center justify-between gap-2">
            <div className="flex flex-col gap-4 min-w-32 hero-element">
              <h1 className="text-5xl md:text-7xl">{"Hey ;)"}</h1>
              <h1 className="text-2xl md:text-2xl">I&apos;m Diogo!</h1>
            </div>
            <Image
              src="/assets/profile-picture.png"
              alt="profile picture"
              width={150}
              height={150}
              className="rounded-lg object-cover md:w-1/4 z-10 md:hidden hero-image"
            />
          </div>

          <h1 className="py-12 md:text-lg">
            {presentationWords.map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="presentation-word inline-block"
              >
                {word}&nbsp;
              </span>
            ))}
          </h1>

          <div className="flex flex-col w-auto md:flex-row gap-4 hero-element">
            <NavButton
              variant="solid"
              className="w-auto"
              icon={<ArrowBackIcon className="align-middle" fontSize="small" />}
              onClick={() => window.history.back()}
            >
              Go back
            </NavButton>

            <NavButton
              variant="solid"
              className="w-auto"
              icon={
                <FileDownloadIcon className="align-middle" fontSize="small" />
              }
              onClick={() => setIsModalOpen(true)}
            >
              Download CV
            </NavButton>
          </div>
        </div>

        <Image
          src="/assets/profile-picture.png"
          alt="profile picture"
          width={200}
          height={200}
          className="rounded-xl object-cover md:w-1/4 z-10 hidden md:block hero-image"
        />
      </div>

      <div className="skills-section flex flex-col md:flex-row w-full items-center">
        <div className="w-3/4 flex justify-start transform -translate-x-1/4 phone-image">
          <Image
            src="/phone.png"
            alt="Phone"
            width={2200}
            height={2800}
            className="object-contain hidden md:block"
            priority
          />
        </div>

        <div className="flex w-full flex-col items-start px-8 md:px-0 z-10 gap-24 md:gap-48">
          <div className="digital-skills-container flex flex-col items-center md:items-start gap-12">
            <h2 className="text-3xl md:text-5xl skills-title">
              My top digital skills
            </h2>
            <div className="flex flex-wrap gap-4 max-w-2xl justify-center md:justify-start">
              {digitalSkills.map((skill) => (
                <div
                  key={skill}
                  className="digital-skill-btn px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-sm md:text-base font-medium hover:scale-105"
                >
                  {skill}
                </div>
              ))}

              <div className="digital-skill-btn">
                <NavButton
                  variant="outline"
                  onClick={() => window.open("/CV_Diogo_Falcao.pdf", "_blank")}
                >
                  See others in CV
                </NavButton>
              </div>
            </div>
          </div>

          <div className="learning-skills-container flex w-full flex-col items-center md:items-start gap-12">
            <h2 className="text-3xl md:text-5xl skills-title">
              Currently learning
            </h2>
            <div className="flex flex-wrap gap-4 max-w-2xl justify-center md:justify-start">
              {learningSkills.map((skill) => (
                <div
                  key={skill}
                  className="learning-skill-btn px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-sm md:text-base font-medium hover:scale-105"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="erasmus-section flex flex-col md:flex-row w-full items-center justify-center px-8 py-32 md:px-16 z-10 my-16 md:my-32 rounded-3xl bg-[linear-gradient(to_bottom,black,#003399,black)]">
        <div className="flex flex-col gap-4 text-center md:text-left mb-8 md:mb-0 md:mr-12">
          <p className="text-lg md:text-xl text-zinc-100 max-w-lg mt-2">
            I am currently participating in the <strong>Erasmus+</strong>{" "}
            exchange program at the{" "}
            <strong>
              <a
                href="https://www.uni-siegen.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                University of Siegen
              </a>
            </strong>
            .
          </p>
          <p className="font-medium text-lg text-white">
            April 1st — September 15th
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 shrink-0 bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10">
          <Image
            src="/eu_flag.png"
            alt="European Union Logo"
            width={80}
            height={55}
            className="object-contain"
          />
          <div className="w-px h-16 bg-white/20"></div>
          <Image
            src="/uni_logo.jpg"
            alt="University of Siegen Logo"
            width={80}
            height={55}
            className="object-contain"
          />
        </div>
      </div>

      <div className="contacts-section flex flex-col justify-center items-center gap-12 pb-44">
        <h1 className="text-3xl md:text-5xl contact-element">Contacts</h1>
        <div className="flex flex-col items-center md:flex-row gap-6 md:gap-8">
          <div className="contact-element">
            <NavButton
              variant="solid"
              onClick={() =>
                window.open("https://github.com/falcaodiogo", "_blank")
              }
              icon={
                <Image
                  src="/github_logo.png"
                  alt="GitHub Logo"
                  width={20}
                  height={20}
                  className="align-middle"
                />
              }
            >
              GitHub
            </NavButton>
          </div>
          <div className="contact-element">
            <NavButton
              variant="solid"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/diogofalcao2/",
                  "_blank",
                )
              }
              icon={
                <Image
                  src="/linkedin_logo.png"
                  alt="linkedin Logo"
                  width={16}
                  height={16}
                  className="align-middle"
                />
              }
            >
              LinkedIn
            </NavButton>
          </div>
          <div className="contact-element">
            <NavButton
              variant="solid"
              onClick={() => window.open("mailto:falcao.diogo@ua.pt", "_blank")}
              icon={
                <Image
                  src="/outlook.png"
                  alt="outlook Logo"
                  width={20}
                  height={20}
                  className="align-middle filter grayscale"
                />
              }
            >
              Email
            </NavButton>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-zinc-900 rounded-2xl p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-semibold mb-4">
              Download Confirmation
            </h2>
            <p className="mb-6 text-zinc-300">
              This will transfer my CV to your device. Would you like to
              proceed?
            </p>

            <div className="flex justify-end gap-4">
              <NavButton
                variant="outline"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </NavButton>
              <NavButton variant="solid" onClick={handleDownload}>
                Download
              </NavButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
