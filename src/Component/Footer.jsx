import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gradient-to-br bg-[#ECF8FF] text-white py-10 px-6">
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo Section */}
        <div className="mb-6">
          <a href="/" aria-label="Home">
            <img
              src="https://i.ibb.co.com/GPJrCz3/MD-EKRAMUL.png"
              alt="Md. Ekramul Hoque Logo"
              className="h-20 w-auto object-contain"
            />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <a target="_blank" href="mailto:ekramul.hoque.ridoy@gmail.com">
            <img
              height="30px"
              src="https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white"
              alt="Gmail"
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mdekramulhoqueridoy/"
          >
            <img
              height="30px"
              src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"
              alt="LinkedIn"
            />
          </a>
          <a target="_blank" href="https://x.com/mdekramulridoy">
            <img
              height="30px"
              src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"
              alt="Twitter"
            />
          </a>
          <a target="_blank" href="https://www.facebook.com/mdekramulhoqueridoy/">
            <img
              height="30px"
              src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white"
              alt="Facebook"
            />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/mdekramulhoqueridoy/"
          >
            <img
              height="30px"
              src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
              alt="Instagram"
            />
          </a>
          <a target="_blank" href="https://t.me/ekramulridoy/">
            <img
              height="30px"
              src="https://img.shields.io/badge/Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white"
              alt="Telegram"
            />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-black mb-6 text-center">
          &copy; {new Date().getFullYear()} Md. Ekramul Hoque. All Rights Reserved.
        </p>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="bg-[#15A6FF] text-white px-4 py-2 rounded-full hover:bg-[#4dbbff] transition-all flex items-center gap-2 shadow-lg"
          aria-label="Go to top"
        >
          <FaArrowUp /> Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
