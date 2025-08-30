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
            to="cp"
            smooth={true}
            duration={600}
            className="cursor-pointer bg-surface text-foreground font-semibold p-3 md:p-4 rounded-xl transition-colors h-full flex items-center justify-center text-center block"
          >
            CP
          </ScrollLink>
        </li>
        <li className="w-full">
          <ScrollLink
            to="portofolio"
            smooth={true}
            duration={600}
            className="cursor-pointer bg-surface text-foreground font-semibold p-3 md:p-4 rounded-xl transition-colors h-full flex items-center justify-center text-center block"
          >
            Website Portofólio
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;