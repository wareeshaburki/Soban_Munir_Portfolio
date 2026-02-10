import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from './components/Contact';
import Service from "./components/Service";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-inter relative overflow-hidden">
      <div className="absolute top-[0%] right-[-5%] w-[600px] h-[600px] bg-gray-700 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none"></div>
      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <Service/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
