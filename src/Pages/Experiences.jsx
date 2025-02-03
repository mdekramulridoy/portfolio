import React from "react";
import {
  FaReact,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiDaisyui, SiAxios, SiReact, SiReactquery, SiNextdotjs, SiReactrouter } from "react-icons/si";

const Experiences = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#15A6FF]">
        My Skills & Experience
      </h1>

      {/* Frontend Skills */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center text-[#15A6FF]">
          Frontend
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 text-center">
          <div className="bg-[#15A6FF] p-6 rounded-lg shadow-lg text-white hover:shadow-2xl hover:shadow-[#15A6FF] transition duration-300">
            <FaReact className="text-4xl text-white mx-auto mb-4" />
            <h3 className="font-semibold text-xl">React</h3>
          </div>
          <div className="bg-[#15A6FF] p-6 rounded-lg shadow-lg text-white hover:shadow-2xl hover:shadow-[#15A6FF] transition duration-300">
            <FaHtml5 className="text-4xl text-white mx-auto mb-4" />
            <h3 className="font-semibold text-xl">HTML</h3>
          </div>
          <div className="bg-[#15A6FF] p-6 rounded-lg shadow-lg text-white hover:shadow-2xl hover:shadow-[#15A6FF] transition duration-300">
            <FaCss3Alt className="text-4xl text-white mx-auto mb-4" />
            <h3 className="font-semibold text-xl">CSS</h3>
          </div>
          <div className="bg-[#15A6FF] p-6 rounded-lg shadow-lg text-white hover:shadow-2xl hover:shadow-[#15A6FF] transition duration-300">
            <SiTailwindcss className="text-4xl text-white mx-auto mb-4" />
            <h3 className="font-semibold text-xl">Tailwind CSS</h3>
          </div>
          {/* New Divs */}
          <div className="bg-[#15A6FF] p-6 rounded-lg shadow-lg text-white hover:shadow-2xl hover:shadow-[#15A6FF] transition duration-300">
            <SiReactrouter className="text-4xl text-white mx-auto mb-4" />
            <h3 className="font-semibold text-xl">React Router</h3>
          </div>
          <div className="bg-[#15A6FF] p-6 rounded-lg shadow-lg text-white hover:shadow-2xl hover:shadow-[#15A6FF] transition duration-300">
            <SiNextdotjs className="text-4xl text-white mx-auto mb-4" />
            <h3 className="font-semibold text-xl">Next.js</h3>
          </div>
          <div className="bg-[#15A6FF] p-6 rounded-lg shadow-lg text-white hover:shadow-2xl hover:shadow-[#15A6FF] transition duration-300">
            <SiReactquery className="text-4xl text-white mx-auto mb-4" />
            <h3 className="font-semibold text-xl">React Query</h3>
          </div>
          <div className="bg-[#15A6FF] p-6 rounded-lg shadow-lg text-white hover:shadow-2xl hover:shadow-[#15A6FF] transition duration-300">
            <SiReact className="text-4xl text-white mx-auto mb-4" />
            <h3 className="font-semibold text-xl">Context API</h3>
          </div>
          <div className="bg-[#15A6FF] p-6 rounded-lg shadow-lg text-white hover:shadow-2xl hover:shadow-[#15A6FF] transition duration-300">
            <SiAxios className="text-4xl text-white mx-auto mb-4" />
            <h3 className="font-semibold text-xl">Axios Interceptor</h3>
          </div>
        </div>
      </div>

      {/* Backend Skills */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center text-[#15A6FF]">
          Backend
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 text-center">
          <div className="bg-[#15A6FF] p-6 rounded-lg shadow-lg text-white hover:shadow-2xl hover:shadow-[#15A6FF] transition duration-300">
            <FaNodeJs className="text-4xl text-white mx-auto mb-4" />
            <h3 className="font-semibold text-xl">Node.js</h3>
          </div>
          <div className="bg-[#15A6FF] p-6 rounded-lg shadow-lg text-white hover:shadow-2xl hover:shadow-[#15A6FF] transition duration-300">
            <SiMongodb className="text-white text-4xl  mx-auto mb-4" />
            <h3 className="font-semibold text-xl">MongoDB</h3>
          </div>
          <div className="bg-[#15A6FF] p-6 rounded-lg shadow-lg text-white hover:shadow-2xl hover:shadow-[#15A6FF] transition duration-300">
            <SiExpress className="text-white text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-xl">Express.js</h3>
          </div>
        </div>
      </div>

      {/* Other Skills */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-center text-[#15A6FF]">
          Other Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 text-center">
          <div className="bg-[#15A6FF] p-6 rounded-lg shadow-lg text-white hover:shadow-2xl hover:shadow-[#15A6FF] transition duration-300">
            <FaJava className="text-4xl text-white mx-auto mb-4" />
            <h3 className="font-semibold text-xl">Java</h3>
          </div>
          <div className="bg-[#15A6FF] p-6 rounded-lg shadow-lg text-white hover:shadow-2xl hover:shadow-[#15A6FF] transition duration-300">
            <FaDatabase className="text-4xl text-white mx-auto mb-4" />
            <h3 className="font-semibold text-xl">Database</h3>
          </div>
          <div className="bg-[#15A6FF] p-6 rounded-lg shadow-lg text-white hover:shadow-2xl hover:shadow-[#15A6FF] transition duration-300">
            <SiDaisyui className="text-4xl text-white mx-auto mb-4" />
            <h3 className="font-semibold text-xl">DaisyUI</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
