"use client";

import { useState, useRef, useEffect } from "react";
import NavButton from "../components/button";
import FloatingNav from "../components/FloatingNav";

import HeroSection from "../components/about/heroSection";
import SkillsSection from "../components/about/skillsSection";
import ErasmusSection from "../components/about/erasmusSection";
import ContactsSection from "../components/about/contactsSection";
import { useAboutAnimations } from "../hooks/useAboutAnimations"; // adjust path

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useAboutAnimations(containerRef);

  useEffect(() => {
    const img = new window.Image();
    img.src = "/assets/gradient.jpg";
    img.onload = () => setBgLoaded(true);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./CV_Diogo_Falcao.pdf";
    link.download = "CV_Diogo_Falcao.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();

    setIsModalOpen(false);
  };

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
      <HeroSection setIsModalOpen={setIsModalOpen} />
      <SkillsSection />
      <ErasmusSection />
      <ContactsSection />

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
