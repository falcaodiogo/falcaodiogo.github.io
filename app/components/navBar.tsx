"use client";

import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-secondary font-semibold w-full p-4 md:p-8 rounded-2xl shadow-lg">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:items-center md:justify-evenly lg:gap-8 gap-2 lg:flex-nowrap lg:justify-between">
        <li className="w-full">
          <Link href="/">
            <div className="cursor-pointer bg-surface text-foreground font-semibold p-3 md:p-4 rounded-xl transition-colors h-full flex items-center justify-center text-center">
              <h1>Home</h1>
            </div>
          </Link>
        </li>
        <li className="w-full">
          <ScrollLink
            to="health-tracker"
            smooth={true}
            duration={600}
            className="cursor-pointer bg-surface text-foreground font-semibold p-3 md:p-4 rounded-xl transition-colors h-full flex items-center justify-center text-center block"
          >
            Health Tracker
          </ScrollLink>
        </li>
        <li className="w-full">
          <ScrollLink
            to="heart-game"
            smooth={true}
            duration={600}
            className="cursor-pointer bg-surface text-foreground font-semibold p-3 md:p-4 rounded-xl transition-colors h-full flex items-center justify-center text-center block"
          >
            Heart Game
          </ScrollLink>
        </li>
        <li className="w-full">
          <ScrollLink
            to="findit"
            smooth={true}
            duration={600}
            className="cursor-pointer bg-surface text-foreground font-semibold p-3 md:p-4 rounded-xl transition-colors h-full flex items-center justify-center text-center block"
          >
            FindIt
          </ScrollLink>
        </li>
        <li className="w-full">
          <ScrollLink
            to="smart-homes"
            smooth={true}
            duration={600}
            className="cursor-pointer bg-surface text-foreground font-semibold p-3 md:p-4 rounded-xl transition-colors h-full flex items-center justify-center text-center block"
          >
            SmartHomes
          </ScrollLink>
        </li>
        <li className="w-full">
          <ScrollLink
            to="gestao-nucleos"
            smooth={true}
            duration={600}
            className="cursor-pointer bg-surface text-foreground font-semibold p-3 md:p-4 rounded-xl transition-colors h-full flex items-center justify-center text-center block"
          >
            NEI
          </ScrollLink>
        </li>
        <li className="w-full">
          <ScrollLink
            to="travel-mate"
            smooth={true}
            duration={600}
            className="cursor-pointer bg-surface text-foreground font-semibold p-3 md:p-4 rounded-xl transition-colors h-full flex items-center justify-center text-center block"
          >
            TravelMate
          </ScrollLink>
        </li>
        <li className="w-full">
          <ScrollLink
            to="city-connect"
            smooth={true}
            duration={600}
            className="cursor-pointer bg-surface text-foreground font-semibold p-3 md:p-4 rounded-xl transition-colors h-full flex items-center justify-center text-center block"
          >
            City Connect
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
