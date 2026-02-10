import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-4 bg-[#0a0a0a]/90 backdrop-blur-md">
      <div className="text-lg md:text-xl font-bold tracking-tighter">
        Soban Munir
      </div>

      <div className="hidden md:flex items-center gap-8 bg-white/5 border border-white/10 px-8 py-3 rounded-full backdrop-blur-md">
        <a
          href="#home"
          className="text-sm font-medium hover:text-gray-400 transition"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-sm font-medium text-gray-500 hover:text-white transition"
        >
          About Me
        </a>
        <a
          href="#service"
          className="text-sm font-medium text-gray-500 hover:text-white transition"
        >
          Service
        </a>
        <a
          href="#contact"
          className="text-sm font-medium text-gray-500 hover:text-white transition"
        >
          Contact
        </a>
      </div>

      <a
        href="https://www.linkedin.com/in/soban-munir-89b64b333/"
        target="_blank"
        className="border border-white/20 px-3 md:px-5 py-2 rounded-full text-[10px] md:text-sm font-medium flex items-center gap-2 hover:bg-white hover:text-black transition-all"
      >
        <span className="hidden sm:inline">Explore My </span>Linkedin{" "}
        <span>↗</span>
      </a>
    </nav>
  );
};

export default Navbar;
