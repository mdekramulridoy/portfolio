import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Slick theme

const AirTicket = () => {
  const [project, setProject] = useState(null);
  const { id } = useParams(); // Get project ID from URL

  useEffect(() => {
    // Fetch data from JSON file
    fetch("/details.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedProject = data.find((item) => item.id === parseInt(id));
        setProject(selectedProject);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!project) {
    return <div>Loading...</div>; // Show loading until data is fetched
  }

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="p-6 md:px-20 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-8">{project.title}</h1>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-3xl">
        {/* Carousel */}
        <Slider {...settings}>
          {project.images.map((img, index) => (
            <div key={index} className="w-full">
              <img src={img} alt={`Slide ${index + 1}`} className="w-full h-96 object-cover rounded-lg" />
            </div>
          ))}
        </Slider>

        {/* Project Details */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">Project Details</h3>
          <p className="text-gray-700 mb-4">{project.details}</p>

          {/* Buttons for Live Demo & GitHub */}
          <div className="flex justify-between">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#15A6FF] text-white px-4 py-2 rounded-lg hover:bg-[#0083d5]"
            >
              Live Demo
            </a>
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="mt-6">
        <Link to="/" className="px-6 py-2 bg-[#15A6FF] text-white font-bold rounded-lg hover:bg-blue-500 transition">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default AirTicket;
