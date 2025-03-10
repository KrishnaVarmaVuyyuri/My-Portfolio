import React from "react";
import data from "../../content/Projects.js/Projects.json";
import { HiArrowRight } from "react-icons/hi2";

function Projectdetails() {
  return (
    <div
      id="4"zz
      className="grid bg-[#090917] items-center place-items-center py-[70px] px-3 bg"
    >
      <h1 className="text-5xl text-center text-white/90 py-5 font-serif font-bold ">
        Projects
      </h1>
      <h2 className=" text-white/50 md:text-xl text-md font-serif text-center py-4">
        {data.heading}
      </h2>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {data?.projects?.map((d, i) => (
          <div className="w-full lg:px-12 h-84 px-3 py-10 rounded-lg bg-[#101725] shadow-shadowOne r bg-gradient-to-r from-bodyColor to-[#202327]  group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
            <div className="xl:h-72 overflow-y-hidden">
              <div className="flex h-full flex-col gap-3 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex flex-col gap-6">
                  <h2 className="text-xl  font-titleFont font-bold text-white">
                    {d.title}
                  </h2>
                  <p className="text-white">{d.description}</p>
                  <a href={d.link} target="_blank">
                    <span className="text-2xl text-red-700">
                      <HiArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projectdetails;
