import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Language = () => {
  const [project, setProject] = useState(null);
  const { id } = useParams(); // Get the id from the URL parameters

  useEffect(() => {
    // Fetch data from details.json
    fetch("/details.json")
      .then((response) => response.json())
      .then((data) => {
        // Filter the project with the matching id
        const selectedProject = data.find((item) => item.id === parseInt(id));
        setProject(selectedProject); // Set the selected project data in the state
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, [id]); // Re-fetch when the id changes

  if (!project) {
    return <div>Loading...</div>; // Show loading if the project is not yet fetched
  }

  return (
    <div className="p-6 md:px-20 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-8">{project.title}</h1>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">Project Details</h3>
          <p className="text-gray-700 mb-4">{project.details}</p>
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

export default Language;
