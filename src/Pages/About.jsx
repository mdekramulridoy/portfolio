import React from 'react';

const About = () => {
  return (
    <div className="py-10 lg:py-20 bg-[#15a5ff15] text-center rounded-lg my-6">
      <h2 className="text-4xl font-bold mb-6 text-[#15A6FF]">About Me</h2>
      
      <p className="text-lg text-gray-700 mb-4 md:mx-32 mx-10">
        I'm <span className="font-semibold text-[#15A6FF]">Md. Ekramul Hoque</span>, a dedicated <strong>Full-Stack Developer (MERN)</strong> with a passion for creating scalable, high-performance web applications. With a strong foundation in frontend and backend technologies, I specialize in building seamless, user-friendly digital experiences.
      </p>

      <p className="text-lg text-gray-700 mb-4 md:mx-32 mx-10">
        My expertise includes <strong>React.js, Next.js, Tailwind CSS, Node.js, Express.js, and MongoDB</strong>. I enjoy problem-solving and thrive in dynamic environments where I can continuously learn and apply modern web technologies to real-world applications.
      </p>

      <p className="text-lg text-gray-700 md:mx-32 mx-10">
        Beyond coding, I run the <strong>‘EH Science Club’</strong> YouTube channel with <strong>40K+ subscribers</strong>, where I share insights on space and science. I am always open to collaborations and new challenges that push the boundaries of innovation.
      </p>
    </div>
  );
};

export default About;
