import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Visa Portal",
    image: "https://i.ibb.co.com/N2ZsvCDZ/Screenshot-2025-02-03-114317.png",
  },
  {
    id: 2,
    title: "Book Library",
    image: "https://i.ibb.co.com/9DMrYnc/Screenshot-2025-02-04-234519.png",
  },
  {
    id: 3,
    title: "Language Learning",
    image: "https://i.ibb.co.com/MD5Lwhdy/Screenshot-2025-02-03-114115.png",
  },
];

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 3000); // Auto slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 mt-24 overflow-hidden w-full rounded-xl">
      <div className="relative flex w-full h-full object-cover items-center justify-center rounded-xl">
        {/* Projects Wrapper */}
        <motion.div
          className="flex w-full flex-col sm:flex-row justify-center items-center overflow-hidden rounded-xl"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`relative z-10 flex flex-col items-center m-2 md:m-4 transition-all duration-1000 ease-in-out rounded-xl ${
                index === activeIndex ? "scale-100 opacity-100" : "scale-90 opacity-60"
              } hover:scale-105 hover:border hover:border-[#0083D5]  transition-transform rounded-xl`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover rounded-lg shadow-xl"
              />
              <div className="text-center flex flex-col gap-5 sm:gap-20 justify-between my-6 sm:my-10">
                <h2 className="text-sm sm:text-lg font-bold text-black">
                  {project.title}
                </h2>
                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="text-sm sm:text-lg font-bold bg-[#0083D5] text-white hover:bg-blue-600 transition-all py-1 px-2 flex justify-center items-center rounded-xl"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex mt-6 space-x-4">
        <button
          onClick={prevProject}
          className="px-4 sm:px-6 py-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition-all"
        >
          ◀
        </button>
        <button
          onClick={nextProject}
          className="px-4 sm:px-6 py-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition-all"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Project;