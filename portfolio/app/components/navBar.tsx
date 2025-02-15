"use client";

import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <ul className="bg-secondary font-semibold w-full h-1/4 p-8 rounded-2xl shadow-lg flex justify-evenly space-x-4">
      <li>
        <Link
          to="heart-game"
          smooth={true}
          duration={600}
          className="cursor-pointer"
        >
          Heart Serious Game
        </Link>
      </li>
      <li>
        <Link
          to="health-tracker"
          smooth={true}
          duration={600}
          className="cursor-pointer"
        >
          Health Tracker
        </Link>
      </li>
      <li>
        <Link
          to="smart-homes"
          smooth={true}
          duration={600}
          className="cursor-pointer"
        >
          SmartHomes
        </Link>
      </li>
      <li>
        <Link
          to="gestao-nucleos"
          smooth={true}
          duration={600}
          className="cursor-pointer"
        >
          Gestão de Núcleos
        </Link>
      </li>
      <li>
        <Link
          to="travel-mate"
          smooth={true}
          duration={600}
          className="cursor-pointer"
        >
          TravelMate
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;