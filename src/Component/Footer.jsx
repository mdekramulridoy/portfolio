import React from "react";

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#c1e8ff9a] flex flex-col text-center items-center justify-center text-black py-1 relative">
      <p className="text-xs text-black pb-16 pt-4 text-center">
        &copy; {new Date().getFullYear()} Md. Ekramul Hoque. All Rights Reserved.
      </p>
      
      {/* Go to Top Button */}
      <button
        onClick={scrollToTop}
        className="bg-[#15A6FF] text-white -my-5 px-4 py-2 rounded-full absolute bottom-9 left-1/2 transform -translate-x-1/2 hover:bg-[#4dbbff4f] transition"
        aria-label="Go to top"
      >
        Go to top ↑
      </button>
    </div>
  );
};

export default Footer;
