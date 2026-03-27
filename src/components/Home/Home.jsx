import React, { useEffect, useState } from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChanger";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="Home"
      className="relative overflow-hidden text-white flex flex-col-reverse md:flex-row w-full justify-between items-center px-6 py-16 md:px-20 md:py-24"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-[#465697]/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* Left Section */}
      <div
        className={`md:w-2/4 md:pt-10 z-10 transition-all duration-1000 ease-out ${
          showContent
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-[#7c8ee6] text-sm md:text-lg font-medium mb-3 tracking-wide">
          Frontend Developer
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          <TextChange />
        </h1>

        <p
          className={`text-base md:text-xl mt-5 leading-relaxed text-gray-300 max-w-2xl transition-all duration-1000 delay-200 ${
            showContent
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          I build modern, responsive, and engaging web interfaces with a strong
          focus on clean design, smooth user experience, and React-based
          development.
        </p>

        <div
          className={`flex flex-wrap gap-4 mt-8 transition-all duration-1000 delay-500 ${
            showContent
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#Footer"
            className="inline-block text-white py-3 px-6 text-sm md:text-lg font-semibold rounded-full bg-[#465697] hover:opacity-90 duration-300 hover:scale-105 shadow-lg shadow-[#465697]/30"
          >
            Contact Me
          </a>

          <a
            href="https://github.com/Lrs-5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 px-5 py-3 rounded-full transition duration-300 hover:scale-105"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/lipsarani-sahoo-79909033b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 px-5 py-3 rounded-full transition duration-300 hover:scale-105"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div
        className={`mb-10 md:mb-0 w-72 md:w-[460px] z-10 transition-all duration-1000 delay-300 ease-out ${
          showContent
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 translate-x-16 scale-95"
        }`}
      >
        <div className="relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-4 rounded-[2rem] shadow-[0_0_50px_rgba(70,86,151,0.25)] border border-white/10 hover:scale-[1.02] transition duration-500">
          {/* Floating Glow */}
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-[#465697]/20 to-blue-500/10 blur-xl opacity-70"></div>

          <img
            className="relative w-full object-contain animate-float"
            src={avatarImg}
            alt="Lipsa avatar"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;