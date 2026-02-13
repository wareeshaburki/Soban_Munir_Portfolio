import React from "react";

const Home = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center mt-22 px-6 scroll-mt-20"
      id="home"
    >
      <section className="flex flex-col items-center md:items-start text-center md:text-left mt-4 md:ml-10 md:pl-10">
        <h1 className="text-3xl md:text-6xl font-semibold tracking-tight leading-tight">
          Turning Raw{" "}
          <span className="italic font-light text-gray-400">Data</span> Into{" "}
          <br className="hidden md:block" />
          Actionable <span className="text-blue-400">Insights</span>
        </h1>
        <p className="text-gray-400 mt-6 max-w-2xl text-xs md:text-base">
          Specializing in Data Engineering pipelines and Advanced Analytics. I
          bridge the gap between complex data and strategic decision making.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href="#projects"
            className="bg-white text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition text-center"
          >
            View Projects
          </a>
          <a
            href="/Soban Munir.pdf"
            download="Soban Munir.pdf"
            className="border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white/10 transition text-center"
          >
            Download CV ↓
          </a>
        </div>
      </section>
      <section className="flex items-center justify-center mt-10 md:mt-4 md:mr-8">
        <img
          src="soban4.png"
          className="w-full max-w-[300px] md:max-w-[500px]"
        />
      </section>
    </div>
  );
};

export default Home;
