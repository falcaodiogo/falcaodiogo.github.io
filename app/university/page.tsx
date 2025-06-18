"use client";

import PageWrapper from "../utils/pageWrapper";
import NavBar from "../components/navBar";
import HealthTracker from "../assets/healthTracker/healthTracker.png";
import NEIImage from "../assets/gestaoNucleos/Loggin.png";
import SmartHomes from "../assets/smartHomes/Home.png";
import HSG from "../assets/heartSeriousGame/hsg.png";
import ProjectsCard from "../components/projectsCard";
import TravelMate from "../assets/travelMate/image.png";
import CityConnect from "../assets/cityconnected/cityconnected.png";
import FindIt from "../assets/findit/image.png";
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
            bgColor="bg-primary"
            buttonColor="bg-variant"
          />
        </Element>
        <Element name="heart-game">
          <ProjectsCard
            name="Heart Serious Game"
            description="Heart Serious Game (HS Game) is a cross-platform app built with Flutter, using WearOS smartwatches to track heart rates in real-time. Two players compete by maintaining higher average heart rates, creating an competitive experience."
            link="https://github.com/falcaodiogo/Projeto1-ICM"
            image={HSG}
            bgColor="bg-surface"
            buttonColor="bg-secondary"
          />
        </Element>
        <Element name="findit">
          <ProjectsCard
            name="FindIt"
            description="Development of a smart shopping assistant for supermarket environments, leveraging AI to personalize recommendations, optimize in-store navigation, and manage shopping lists intelligently. Key features include product localization, a multimodal interface, and real-time comparison across multiple supermarkets. Goals: save time and money, simplify decision-making, and elevate the overall shopping experience."
            link="https://github.com/PI-FindIt"
            image={FindIt}
            bgColor="bg-primary"
            buttonColor="bg-variant"
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
            name="NEI - Gestão de Núcleos"
            description="Gestão de Núcleos is a C# app made with SQL and its a Core Management System that simplifies event management with a database for the Núcleo de Engenharia Informática (AAUAv). It supports adding events, managing workers, wristbands, and a warehouse. The system tracks profits and sales."
            link="https://github.com/falcaodiogo/Projeto-Base-de-Dados"
            image={NEIImage}
            bgColor="bg-surface"
            buttonColor="bg-secondary"
          />
        </Element>
        <Element name="travel-mate">
          <ProjectsCard
            name="Travel Mate"
            description="Travel Mate is a React Native app focused on design and user experience. It helps users see past trips, plan new ones, and share experiences with friends. The app also provides a map with points of interest and notes."
            link="https://github.com/falcaodiogo/Projeto-TravelMate-IHC?tab=readme-ov-file"
            image={TravelMate}
            bgColor="bg-primary"
            buttonColor="bg-variant"
          />
        </Element>
        <Element name="city-connect">
          <ProjectsCard
            name="City Connect"
            description="Development of a digital platform MVP for bus services, focusing on software quality, continuous testing, integration, and delivery. Key components include a Client Portal, Staff Portal, and Digital Signage. Goals: streamline operations, improve user experience, and unify services."
            link="https://github.com/CityConnect-TQS/control-room"
            image={CityConnect}
          />
        </Element>
      </div>
    </PageWrapper>
  );
};

export default UniversityPage;
