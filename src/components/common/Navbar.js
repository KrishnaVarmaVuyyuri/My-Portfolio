import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 z-[999] lg:px-14 px-10   bg-[#000300] text-white sticky top-0 w-full">
      <a
        href="#1"
        className="md:w-full  gap-0.5 flex items-center  md:text-2xl  font-bold text-white w-full"
      >
        <MdKeyboardArrowLeft className="text-3xl mt-1 tracking-tight text-purple-500" />
        Varma<span className="text-purple-500">/</span>Vuyyuri
        <MdOutlineKeyboardArrowRight className=" text-3xl mt-1 text-purple-500" />
      </a>

      {/* Desktop nav */}
      <ul className="hidden lg:flex">
        <a href="#1" className="group">
          <li className="p-4 text-center w-fit font-bold tracking-wide hover:text-red-600">
            About
            <div class="bg-red-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </li>
        </a>
        <a href="#2" className="group">
          <li className="p-4 text-center w-fit font-bold tracking-wide hover:text-red-600">
            Skills
            <div class="bg-red-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </li>
        </a>

        <a href="#3" className="group">
          <li className="p-4 w-fit text-center font-bold tracking-wide hover:text-red-600">
            Experince
            <div class="bg-red-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </li>
        </a>
        <a href="#4" className="group">
          <li className="p-4 w-fit text-center font-bold tracking-wide hover:text-red-600">
            Projects
            <div class="bg-red-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </li>
        </a>
        <a href="#5" className="group">
          <li className="p-4 w-fit text-center font-bold tracking-wide hover:text-red-600">
            Education
            <div class="bg-red-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </li>
        </a>
        <a href="#7" className="group">
          <li className="p-4 w-fit text-center font-bold tracking-wide hover:text-red-600">
            Contact
            <div class="bg-red-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </li>
        </a>
        <li className=" flex  space-x-6">
          <a
            href="https://github.com/KrishnaVarmaVuyyuri"
            target="_blank"
            className="border border-purple-500  text-purple-500 w-32 h-fit  rounded-full   p-3"
          >
            Github Profile
          </a>
        </li>
      </ul>

      <div onClick={handleNav} className="block lg:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile nav */}
      <div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4"></h1>
          <a href="#1">
            <h2 className="p-4 border-b text-xl  hover:text-red-600  border-gray-600">
              About
            </h2>
          </a>
          <a href="#2">
            <h2 className="p-4 border-b   hover:text-red-600  text-xl  border-gray-600">
              Skills
            </h2>
          </a>

          <div>
            <a href="#3">
              <li className="p-4 flex   text-xl border-b border-gray-600 ">
                Experince
              </li>
            </a>
            <a href="#4">
              {" "}
              <h2 className="p-4 text-xl  border-b border-gray-600">
                Education
              </h2>
            </a>{" "}
            <a href="#5">
              {" "}
              <h2 className="p-4 text-xl  border-b cursor-pointer border-gray-600">
                Projects
              </h2>
            </a>
            <a href="#7">
              <h2 className="p-4 text-xl  border-b cursor-pointer border-gray-600">
                Contact
              </h2>
            </a>
            <a href="https://github.com/KrishnaVarmaVuyyuri" target="_blank">
              <h2 className="p-4 text-xl  border-b cursor-pointer border-gray-600">
                Github Profile
              </h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
