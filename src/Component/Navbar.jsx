import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const middleLink = (
    <>
      <HashLink
        smooth
        to="#top"
        className="px-4 hover:bg-[#15A6FF] hover:text-white py-2 rounded-lg font-bold"
      >
        Home
      </HashLink>
      <HashLink
        smooth
        to="/#experiences"
        className="px-4 hover:bg-[#15A6FF] hover:text-white py-2 rounded-lg font-bold"
      >
        Experiences
      </HashLink>
      <HashLink
        smooth
        to="/#project"
        className="px-4 hover:bg-[#15A6FF] hover:text-white py-2 rounded-lg font-bold"
      >
        Project
      </HashLink>
      <HashLink
        smooth
        to="/#contact"
        className="px-4 hover:bg-[#15A6FF] hover:text-white py-2 rounded-lg font-bold"
      >
        Contact
      </HashLink>
    </>
  );

  return (
    <div className="navbar w-full bg-base-100 bg-opacity-90 backdrop-blur-lg fixed top-0 shadow-lg shadow-[#15a5ff20] z-50">
      <div className="px-6 lg:mx-20 justify-between w-full">
        {/* Left */}
        <HashLink smooth to="#top" className="flex">
          <img
            src="https://i.ibb.co.com/GPJrCz3/MD-EKRAMUL.png"
            alt="Logo"
            className=" w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
          />
        </HashLink>

        {/* Middle */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="menu menu-horizontal px-1 space-x-4 font-bold flex items-center">
            {middleLink}
          </ul>
        </div>

        {/* Right */}
        <div className="flex-none flex items-center space-x-4">
          {/* Download Resume */}
          <a
            href="https://docs.google.com/document/d/1R6fF2k_ErDvu5vfCTYk773K-rwYpZczyz7rGvvhEetg/export?format=pdf"
            className="rounded-2xl bg-[#15A6FF] hover:bg-[#0083d5] text-white border-none px-4 py-2 text-xs font-bold md:text-sm lg:text-lg md:px-5 md:py-3"
          >
            Download Resume
          </a>

          {/* Hamburger Menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <FontAwesomeIcon
                icon={faBars}
                className="text-xl text-[#15A6FF]"
              />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {middleLink}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
