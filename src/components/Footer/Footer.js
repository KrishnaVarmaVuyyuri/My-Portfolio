import React from "react";
import { Link } from "react-router-dom";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-3">
      <div className="grid justify-center  gap-4 ">
        <div className="flex justify-center  gap-3">
          <a
            href="#1"
            className="md:w-full  gap-0.5 flex items-center justify-center   font-bold text-white w-full"
          >
            <span className="text-purple-500">&#60;</span>
            Varma<span className="text-purple-500">&#8725;</span>Vuyyuri
            <span className="text-purple-500">&#62;</span>
          </a>
        </div>

        <div className="flex flex-wrap justify-center  space-x-5">
          <a href="#1">
            <h1>About</h1>
          </a>
          <a href="#2">
            <h1>Skills</h1>
          </a>
          <a href="#3">
            <h1>Experince</h1>
          </a>
          <a href="#4">
            <h1>Projects</h1>
          </a>
          <a href="#5">
            <h1>Education</h1>
          </a>
        </div>
        <div className="flex  space-x-3 justify-center">
          <Link to="https://www.linkedin.com/in/varma-vuyyuri-68860023b">
            {" "}
            <FaLinkedin className="w-5 h-5" />
          </Link>
          <Link to="https://github.com/KrishnaVarmaVuyyuri">
            <FaGithub className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
