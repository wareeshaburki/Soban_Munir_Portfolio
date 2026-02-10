import React from "react";

const About = () => {
  return (
    <div id="about" className="scroll-mt-20">
      <h1 className="text-center mt-16 font-bold text-5xl">About Me</h1>
      <div className="flex flex-col items-center justify-between text-center mt-10 mx-4 px-10 gap-4 mb-2">
        <p className="text-gray-400 text-center mt-6 text-sm md:text-base px-4 md:px-26 leading-relaxed">
          Hi, I am a Data Engineer based in Lahore ,Pakistan, currently pursuing
          my BS in Computer Science at Riphah International University. I
          specialize in building end-to-end ETL/ELT pipelines and
          production-grade Data Warehouses using the Microsoft Azure stack.{" "}
          <br />
          With expertise in Azure Data Factory, Databricks, and Synapse
          Analytics , I transform complex data into actionable insights using
          Medallion Architecture (Bronze-Silver-Gold). I also architect
          production-ready environments through Dimensional Modeling,
          specializing in Star Schema and SCD patterns for scalable analytics.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center md:mx-2 pt-2 gap-4">
          <img
            src="aboutImg.png"
            className="px-4 h-[237px] md:h-[257px] w-full md:max-w-[45%]"
          />
          <img
            src="aboutImg (2).png"
            className="px-2 md:px-4 h-[270px] md:h-[290px] py-4 w-full md:max-w-[45%]"
          />
        </div>
      </div>
      <hr className="mt-6 border border-white/20 w-[90%] mx-auto" />
      <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-10 px-4">
        <div className="w-full max-w-[500px] mx-auto lg:mx-2">
          <h1 className="text-center text-gray-300 mt-12 font-bold text-3xl">
            My Skills
          </h1>
          <div className="w-full md:w-[500px] min-h-[550px] border border-white/20 rounded-3xl mt-6 shadow-[0_0_20px_rgba(255,255,255,0.25)] bg-white/5 backdrop-blur-md overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 h-full w-full">
              <div className="border-b border-r border-white/10 p-8 flex flex-col justify-center gap-3">
                <h3 className="text-xl font-semibold">
                  Cloud & Data Platforms
                </h3>
                <p className="text-gray-500 text-sm leading-tight">
                  Microsoft Azure (ADF, Databricks, Synapse Analytics, SQL DB),
                  Amazon Web Services (AWS) (Exploring & Project Phase)
                </p>
              </div>
              <div className="p-8 border-b border-white/10 flex flex-col justify-center gap-3">
                <h3 className="text-xl font-semibold">Data Engineering</h3>
                <p className="text-gray-500 text-sm leading-tight">
                  End-to-End ETL/ELT Pipelines, Medallion Architecture
                  (Bronze-Silver-Gold), Delta Lake, Data Warehousing and Data
                  Modeling
                </p>
              </div>
              <div className="p-8 border-r border-white/10 flex flex-col justify-center gap-3">
                <h3 className="text-xl font-semibold">Languages</h3>
                <p className="text-gray-500 text-sm leading-tight">
                  Python <br /> PySpark <br /> SQL
                </p>
              </div>
              <div className="p-8 flex flex-col justify-center gap-3">
                <h3 className="text-xl font-semibold">Visualization & Tools</h3>
                <p className="text-gray-500 text-sm leading-tight">
                  Git/GitHub <br /> Azure DevOps (CI/CD)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[500px] mx-auto lg:mx-2">
          <h1 className="text-center text-gray-300 mt-12 font-bold text-3xl">
            My Experience
          </h1>
          <div className="w-full md:w-[500px] min-h-[550px] border border-white/20 rounded-3xl mt-6 shadow-[0_0_20px_rgba(255,255,255,0.25)] bg-white/5 backdrop-blur-md overflow-hidden">
            <div className="grid grid-rows-2 h-full w-full">
              <div className="p-8 flex border-b border-white/10 flex-col justify-center gap-3">
                <h3 className="text-xl font-semibold">
                  AdventureWorks Enterprise Data Pipeline
                </h3>
                <h5 className="font-semibold text-gray-300">Tech Stack</h5>
                <p className="text-gray-500 text-[12px] leading-tight">
                  Azure Data Factory, Databricks, Delta Live Tables, Azure
                  Synapse Analytics, PySpark, Power BI
                </p>
                <h5 className="font-semibold text-gray-300">About Project</h5>
                <p className="text-gray-500 text-[12px] leading-tight">
                  Engineered a multi-layered Medallion Architecture that
                  automates data ingestion and builds a Star Schema for
                  production-grade reporting.
                </p>
              </div>
              <div className="p-8 flex flex-col justify-center gap-3">
                <h3 className="text-xl font-semibold">
                  Netflix Azure Data Engineering Project
                </h3>
                <h5 className="font-semibold text-gray-300">Tech Stack</h5>
                <p className="text-gray-500 text-[12px] leading-tight">
                  Azure Data Factory, Databricks, Delta Lake, Python,
                  SQL,Pyspark
                </p>
                <h5 className="font-semibold text-gray-300">About Project</h5>
                <p className="text-gray-500 text-[12px] leading-tight">
                  Architected an end-to-end ETL pipeline to transform raw GitHub
                  data into a high-performance Gold layer for interactive
                  analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
