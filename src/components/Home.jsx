import React from "react";

const Home = () => {
  return (
    <div className="flex items-center mt-22 scroll-mt-20" id="home">
      <section className="flex flex-col items-center text-center mt-4 ml-10 pl-10">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
          Turning Raw{" "}
          <span className="italic font-light text-gray-400 ">Data</span> Into{" "}
          <br />
          Actionable <span className="text-blue-400">Insights</span>
        </h1>
        <p className="text-gray-400 mt-6 max-w-2xl text-sm md:text-base">
          Specializing in Data Engineering pipelines and Advanced Analytics. I
          bridge the gap between complex data and strategic decision making.
        </p>
        <div className="flex gap-4 mt-10">
          <a href="#projects" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform">
            View Projects
          </a>
          <a
            href="/Soban_Munir_Resume.pdf"
            download="Soban_Munir_CV.pdf"
            className="border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all text-center"
          >
            Download CV<span className="ml-2">↓</span>
          </a>
        </div>
      </section>
      <section className="flex items-center flex-col justify-center mr-8 mt-4">
        <img src="soban4.png" className="max-w-[500px] max-h-[500px]" />
      </section>
    </div>
  );
};

export default Home;
