import React from "react";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "AdventureWorks Enterprise Pipeline",
      description:
        "Built a multi-layered Medallion Architecture to automate data ingestion from SQL sources into Azure Data Lake. It features a production-ready Star Schema in Synapse Analytics for high-performance enterprise reporting.",
      image: "adventure.jpeg",
      tags: ["Azure Data Factory", "Databricks,Synapse", "PySpark", "Power BI"],
      link: "https://github.com/soban-munir/Azure-Data-Engineering-Project",
    },
    {
      id: 2,
      title: "Netflix Data Engineering Project",
      description:
        "Architected an end-to-end ETL pipeline to transform raw Netflix datasets into a refined Gold layer for analytics. The project includes incremental loading and interactive Power BI dashboards for real-time business insights.",
      image: "netflix.png",
      tags: ["Azure Data Factory", "Databricks", "Delta Lake", "Azure Synapse"],
      link: "https://github.com/soban-munir/Netflix-Azure-Data-Engineering-Project",
    },
  ];

  return (
    <section id="projects" className="px-10 pt-20 scroll-mt-20">
      <h1 className="text-center font-bold text-5xl mb-16">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/40 transition-all duration-500 shadow-2xl"
          >
            <div className="relative h-[300px] overflow-hidden">
              <img
                src={project.image}
                className="w-full mx-auto h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-blue-500 hover:text-white transition-colors"
                >
                  View Architecture ↗
                </a>
              </div>
            </div>
            <div className="p-8">
              <div className="flex gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="flex text-[10px] text-center items-center uppercase tracking-widest bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
