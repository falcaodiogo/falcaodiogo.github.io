"use client";

import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const NavBar = () => {
  return (
    <ul className="bg-secondary font-semibold w-full h-1/4 p-8 rounded-2xl shadow-lg flex justify-evenly space-x-4">
      <li>
        <Link href="/">
          <h1>Home</h1>
        </Link>
      </li>
      <li>
        <ScrollLink
          to="cp"
          smooth={true}
          duration={600}
          className="cursor-pointer"
        >
          CP - Comboios Portugal
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="portofolio"
          smooth={true}
          duration={600}
          className="cursor-pointer"
        >
          Website Portofólio
        </ScrollLink>
      </li>
    </ul>
  );
};

export default NavBar;
