import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  // Fetch data from the details.json file when the component is mounted
  useEffect(() => {
    fetch("/details.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))  // Store the fetched data into the state
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);  // Empty dependency array means this effect runs only once when the component is mounted

  const handleViewDetails = (id) => {
    navigate(`/project/${id}`);  // Navigate to the project details page with the project id
  };

  return (
    <div className="p-6 md:px-20">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#15A6FF]">My Projects</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="max-w-5xl mx-auto"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#74caff]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="p-6 flex justify-between items-center">
                <h3 className="text-2xl font-bold mb-2 text-[#15A6FF]">{project.title}</h3>
              
                <div className="flex items-center">
                
                 
                  <button
                    onClick={() => handleViewDetails(project.id)}
                    className="bg-[#15A6FF] text-white px-4 py-2 rounded-lg hover:bg-blue-500"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Project;
