"use client";

import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const NavBar = () => {
  return (
    <ul className="bg-secondary font-semibold w-full p-8 rounded-2xl shadow-lg flex flex-wrap justify-evenly gap-4 sm:flex-nowrap sm:justify-between">
      <li>
        <Link href="/">
          <h1>Home</h1>
        </Link>
      </li>
      <li>
        <ScrollLink
          to="health-tracker"
          smooth={true}
          duration={600}
          className="cursor-pointer"
        >
          Health Tracker
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="heart-game"
          smooth={true}
          duration={600}
          className="cursor-pointer"
        >
          Heart Serious Game
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="smart-homes"
          smooth={true}
          duration={600}
          className="cursor-pointer"
        >
          SmartHomes
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="gestao-nucleos"
          smooth={true}
          duration={600}
          className="cursor-pointer"
        >
          Gestão de Núcleos
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="travel-mate"
          smooth={true}
          duration={600}
          className="cursor-pointer"
        >
          TravelMate
        </ScrollLink>
      </li>
    </ul>
  );
};

export default NavBar;
