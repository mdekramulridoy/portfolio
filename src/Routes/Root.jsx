import React from "react";
import Navbar from "../Component/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import About from "../Pages/About";
import Experiences from "../Pages/Experiences";
import Project from "../Pages/Project";
import Contact from "../Pages/Contact";

const Root = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mt-20 lg:mt-40 px-6 lg:mx-20">
        <Outlet />
        <div id="home">
          <About />
        </div>
        <div id="experiences">
          <Experiences />
        </div>
        <div id="project">
          <Project />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
