import React from "react";
import { Link } from "react-router";

function Nav({ sr, cr, wr, er, pr }) {
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="border-b-1 flex-col lg:flex-row   border-white p-5 flex bg-black fixed w-full justify-between items-center">
      <span className="text-white text-2xl ">Yagya Mandelia</span>

      <div className="text-sm lg:text-lg lg:flex gap-3 lg:gap-5 flex">
        <span
          onClick={() => scrollToSection(pr)}
          className="text-white cursor-pointer hover:underline"
        >
          Profile
        </span>
        <span
          onClick={() => scrollToSection(sr)}
          className="text-white cursor-pointer hover:underline"
        >
          Skills
        </span>
        <Link to={"/projects"}>
          {" "}
          <span
            onClick={() => scrollToSection()}
            className="text-white cursor-pointer hover:underline"
          >
            Projects
          </span>
        </Link>

        <span
          onClick={() => scrollToSection(wr)}
          className="text-white cursor-pointer hover:underline"
        >
          Work
        </span>
        <span
          onClick={() => scrollToSection(er)}
          className="text-white cursor-pointer hover:underline"
        >
          Experience
        </span>
        <span
          onClick={() => scrollToSection(cr)}
          className="text-white cursor-pointer hover:underline"
        >
          Contact
        </span>
      </div>
    </div>
  );
}

export default Nav;
