import React, { useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(1);
  const navigate = useNavigate();

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 mt-24">
      <div className="relative flex w-full h-full object-cover items-center justify-center">
        {/* Left Project (Inactive) */}
        <motion.div
          className="absolute left-0 scale-90 opacity-60 transition-all duration-500 hidden md:block"
          initial={{ x: -100, opacity: 0.5 }}
          animate={{ x: 0, opacity: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={projects[(activeIndex + projects.length - 1) % projects.length].image}
            alt="Left Project"
            className="w-64 h-64 rounded-lg border-2 border-green-500 shadow-lg object-cover"
          />
        </motion.div>

        {/* Center Project (Active) */}
        <motion.div
          className="relative z-10 flex flex-col items-center scale-110"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={projects[activeIndex].image}
            alt="Center Project"
            className="w-96 h-96 lg:w-[1080px] lg:h-[720px] object-cover md:w-96 msd:h-[26rem] rounded-lg shadow-xl"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
            <h2 className="text-xl font-bold text-black bg-white p-1 rounded-xl">{projects[activeIndex].title}</h2>
            <button
              onClick={() => navigate(`/project/${projects[activeIndex].id}`)}
              className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
            >
              View Details
            </button>
          </div>
        </motion.div>

        {/* Right Project (Inactive) */}
        <motion.div
          className="absolute right-0 scale-90 opacity-60 transition-all duration-500 hidden md:block"
          initial={{ x: 100, opacity: 0.5 }}
          animate={{ x: 0, opacity: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={projects[(activeIndex + 1) % projects.length].image}
            alt="Right Project"
            className="w-64 h-64 rounded-lg border-2 border-green-500 shadow-lg object-cover"
          />
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex mt-6 space-x-4">
        <button
          onClick={prevProject}
          className="px-6 py-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition-all"
        >
          ◀
        </button>
        <button
          onClick={nextProject}
          className="px-6 py-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition-all"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Project;
