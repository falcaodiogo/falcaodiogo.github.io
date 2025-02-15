"use client";

import React from "react";
import PageWrapper from "../utils/pageWrapper";
import { Link, Element } from "react-scroll";
import NavBar from "../components/navBar";

const UniversityPage = () => {
  return (
    <PageWrapper>
      <nav className="font-archivo w-full p-4 space-y-4 md:space-y-8 md:pb-0 md:p-8">
        <NavBar />
      </nav>

      <div className="font-archivo w-full p-4 space-y-4 md:space-y-8 md:p-8">
        <Element
          name="heart-game"
          className="bg-primary w-full h-dvh p-8 rounded-2xl shadow-lg flex items-center justify-center"
        >
          Heart Serious Game
        </Element>
        <Element
          name="health-tracker"
          className="bg-terciary w-full h-dvh p-8 rounded-2xl shadow-lg flex items-center justify-center"
        >
          Health Tracker
        </Element>
        <Element
          name="smart-homes"
          className="bg-surface w-full h-dvh p-8 rounded-2xl shadow-lg flex items-center justify-center"
        >
          SmartHomes
        </Element>
        <Element
          name="gestao-nucleos"
          className="bg-secondary w-full h-dvh p-8 rounded-2xl shadow-lg flex items-center justify-center"
        >
          Gestão de Núcleos
        </Element>
        <Element
          name="travel-mate"
          className="bg-variant w-full h-dvh p-8 rounded-2xl shadow-lg flex items-center justify-center"
        >
          TravelMate
        </Element>
      </div>
    </PageWrapper>
  );
};

export default UniversityPage;
