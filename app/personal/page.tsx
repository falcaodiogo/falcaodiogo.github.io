"use client";

import PageWrapper from "../utils/pageWrapper";
import NavBar from "../components/personalNavBar";
import Portofolio from "../assets/portfolio/portofolio.png"
import CP from "../assets/cp/cp.png"
import ProjectsCard from "../components/projectsCard";
import { Element } from "react-scroll";

const UniversityPage = () => {
  return (
    <PageWrapper>
      <nav className="font-archivo w-full p-4 space-y-4 md:space-y-8 md:pb-0 md:p-8">
        <NavBar />
      </nav>

      <div className="font-archivo w-full p-4 space-y-4 md:space-y-8 md:p-8">
        <Element name="cp">
          <ProjectsCard
            name="CP - Comboios Portugal"
            description="CP App is a Kotlin-based Android app for tracking Portuguese trains in real time using the Comboios and CP public APIs. It features live train schedules, delay updates, an AI-powered chatbot, and a customizable dashboard. Designed with Material Design 3, it offers Google login integration and quick access to CP's website. This app is for educational and personal use only."
            link="https://github.com/falcaodiogo/CP"
            image={CP}
          />
        </Element>
        <Element name="portofolio">
          <ProjectsCard
            name="Portfolio"
            description="A personal portfolio website showcasing my projects, skills, and experience in software development. "
            link="https://github.com/falcaodiogo/Projeto1-ICM"
            image={Portofolio}
            buttonColor="bg-secondary"
          />
        </Element>
      </div>
    </PageWrapper>
  );
};

export default UniversityPage;
