import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiDaisyui,
  SiAxios,
  SiReactquery,
  SiNextdotjs,
  SiReactrouter,
} from "react-icons/si";

// All Skills Combined in One List
const allSkills = [
  { name: "React", icon: <FaReact /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "React Router", icon: <SiReactrouter /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React Query", icon: <SiReactquery /> },
  { name: "Axios Interceptor", icon: <SiAxios /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Database", icon: <FaDatabase /> },
  { name: "DaisyUI", icon: <SiDaisyui /> },
];

// Continuous Infinite Scrolling Component
const InfiniteScroll = ({ skills }) => {
  return (
    <div className="overflow-hidden w-full relative py-4">
      <motion.div
        className="flex space-x-6"
        animate={{ x: ["-100%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 20, 
          ease: "linear",
        }}
      >
        {/* Twice Render for Continuous Effect */}
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="bg-[#15A6FF] p-6 min-w-[180px] lg:min-w-[250px] rounded-lg shadow-lg text-white hover:shadow-2xl hover:shadow-[#15A6FF] transition duration-300 flex flex-col items-center"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <h3 className="font-semibold text-xl">{skill.name}</h3>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// Main Component
const Experiences = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#15A6FF]">
        My Skills & Experience
      </h1>
      <InfiniteScroll skills={allSkills} />
    </div>
  );
};

export default Experiences;
