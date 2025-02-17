"use client";

import PageWrapper from "../utils/pageWrapper";
import NavBar from "../components/navBar";
import HealthTracker from "../assets/healthTracker/healthTracker.png";
import NEIImage from "../assets/gestaoNucleos/Loggin.png";
import SmartHomes from "../assets/smartHomes/Home.png";
import HSG from "../assets/heartSeriousGame/hsg.png";
import ProjectsCard from "../components/projectsCard";
import TravelMate from "../assets/travelMate/image.png";
import { Element } from "react-scroll";

const UniversityPage = () => {
  return (
    <PageWrapper>
      <nav className="font-archivo w-full p-4 space-y-4 md:space-y-8 md:pb-0 md:p-8">
        <NavBar />
      </nav>

      <div className="font-archivo w-full p-4 space-y-4 md:space-y-8 md:p-8">
        <Element name="health-tracker">
          <ProjectsCard
            name="Health Tracker"
            description="Health Tracker is a Kotlin app for Android and WearOS designed to monitor health metrics in real time using the HealthConnect API.
      The app features step tracking, calorie monitoring, exercise planning, and sleep tracking. The WearOS version complements it with immediate feedback during physical activities."
            link="https://github.com/falcaodiogo/Projeto2-ICM"
            image={HealthTracker}
          />
        </Element>
        <Element name="heart-game">
          <ProjectsCard
            name="Heart Serious Game"
            description="Heart Serious Game (HS Game) is a cross-platform app built with Flutter, using WearOS smartwatches to track heart rates in real-time. Two players compete by maintaining higher average heart rates, creating an competitive experience."
            link="https://github.com/falcaodiogo/Projeto1-ICM"
            image={HSG}
            buttonColor="bg-secondary"
          />
        </Element>
        <Element name="smart-homes">
          <ProjectsCard
            name="SmartHomes"
            description="SmartHomes is a React app that helps homeowners monitor and control electricity and water usage. Unlike other systems, it works with any plugged-in device, requiring no complex programming. The app also provides insights to reduce consumption, benefiting both the environment and your wallet."
            link="https://github.com/falcaodiogo/Projeto-IES"
            image={SmartHomes}
          />
        </Element>
        <Element name="gestao-nucleos">
          <ProjectsCard
            name="Gestão de Núcleos"
            description="Gestão de Núcleos is a C# app made with SQL and its a Core Management System that simplifies event management with a database and user-friendly interface. It supports adding events, managing workers, wristbands, and a warehouse. The system tracks profits and sales."
            link="https://github.com/falcaodiogo/Projeto-Base-de-Dados"
            image={NEIImage}
            buttonColor="bg-secondary"
          />
        </Element>
        <Element name="travel-mate">
          <ProjectsCard
            name="Travel Mate"
            description="Travel Mate is a React Native app focused on design and user experience. It helps users see past trips, plan new ones, and share experiences with friends. The app also provides a map with points of interest and notes."
            link="https://github.com/falcaodiogo/Projeto-TravelMate-IHC?tab=readme-ov-file"
            image={TravelMate}
          />
        </Element>
      </div>
    </PageWrapper>
  );
};

export default UniversityPage;
