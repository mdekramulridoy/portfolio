import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Slick styles
import "slick-carousel/slick/slick-theme.css"; // Slick theme styles

const Library = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Fetching the details.json file
    fetch("/details.json")
      .then((response) => response.json())
      .then((data) => {
        const projectData = data.find((project) => project.id === parseInt(id));
        setProject(projectData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!project) {
    return <div className="text-center text-xl font-semibold p-6">Loading...</div>;
  }

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hide navigation arrows for a clean UI
  };

  return (
    <div className="p-6 md:px-20 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>

      {/* Project Container */}
      <div className="bg-white flex flex-col items-center rounded-xl shadow-lg overflow-hidden w-full max-w-3xl">
        {/* Carousel for Images */}
        <div className="w-full">
          <Slider {...settings}>
            {project.images.map((img, index) => (
              <div key={index} className="w-full">
                <img src={img} alt={`Slide ${index + 1}`} className="w-full h-96 object-cover rounded-lg" />
              </div>
            ))}
          </Slider>
        </div>

        {/* Project Details */}
        <div className="p-6 text-center">
          <p className="text-gray-700 mb-4">{project.details}</p>
          <div className="flex justify-center gap-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#15A6FF] text-white px-5 py-2 rounded-lg hover:bg-[#0083d5] transition"
            >
              Live Demo
            </a>
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="mt-6">
        <Link
          to="/"
          className="px-6 py-2 bg-[#15A6FF] text-white font-bold rounded-lg hover:bg-blue-500 transition"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Library;
