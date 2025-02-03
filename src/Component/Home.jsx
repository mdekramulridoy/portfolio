import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import animationData from "../../public/web.json";
import Lottie from "lottie-react";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between mt-28 lg:mt-40">
      {/* Left Section: Text Content */}
      <div className="text-center lg:text-left max-w-lg">
        <div className="hidden lg:block">
          <img
            className=""
            src="https://readme-typing-svg.herokuapp.com?font=Righteous&size=60&color=15A6FF&center=false&vCenter=true&width=900&height=70&lines=Hi,+I'm+Md.+Ekramul+Hoque"
            alt="Md. Ekramul Hoque"
          />
        </div>
        <div className="block lg:hidden">
          <img
            className=""
            src="https://readme-typing-svg.herokuapp.com?font=Righteous&size=60&color=15A6FF&center=true&vCenter=true&width=900&height=70&lines=Hi,+I'm+Md.+Ekramul+Hoque"
            alt="Md. Ekramul Hoque"
          />
        </div>

        <p className="text-gray-600 mt-4 text-lg">
          I'm a passionate frontend developer skilled in crafting responsive and
          user-friendly web interfaces. With expertise in HTML, CSS, JavaScript,
          and React, I focus on creating visually appealing and functional
          designs.
        </p>

        {/* Download Resume */}
        <a
          href="https://docs.google.com/document/d/1R6fF2k_ErDvu5vfCTYk773K-rwYpZczyz7rGvvhEetg/export?format=pdf"
          className="mt-6 inline-flex items-center bg-[#15A6FF] hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg text-lg font-semibold"
        >
          Download Resume
          <span className="ml-2">→</span>
        </a>

        {/* Social Media Links with Icons */}
        <div className="mt-6 flex justify-center md:justify-start lg:justify-start space-x-6">
          <a
            href="https://github.com/mdekramulridoy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#15A6FF] hover:text-blue-600 text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mdekramulridoy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#15A6FF] hover:text-blue-600 text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/ekrweb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#15A6FF] hover:text-blue-600 text-xl"
          >
            <FaSquareXTwitter />
          </a>
          <a
            href="https://www.facebook.com/ekrweb/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#15A6FF] hover:text-blue-600 text-xl"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="relative mt-10 lg:mt-0">
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-96 h-auto"
        />
      </div>
    </div>
  );
};

export default Home;
