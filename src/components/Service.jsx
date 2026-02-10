import React from "react";

const Service = () => {
  const serviceList = [
    {
      title: "End-to-End ETL/ELT Pipelines",
      desc: "Designing automated data workflows to ingest data from any source into your data lake using Azure Data Factory and Databricks.",
      icon: "⚡"
    },{
      title: "Scalable Data Frameworks",
      desc: "Designing robust, multi-stage architectures using Delta Lake to ensure high-fidelity processing and end-to-end data governance with automated validation.",
      icon: "💎"
    },{
      title: "Big Data Transformation & Analytics",
      desc: "Leveraging PySpark and SQL for large-scale data processing and creating interactive Power BI dashboards for real-time insights.",
      icon: "🔥"
    },{
      title: "Data Warehousing & Modeling",
      desc: "Building production-grade Dimensional Data Warehouses using Star Schema and SCD patterns in Azure Synapse Analytics.",
      icon: "🏗️"
    }
  ];
  return(
    <section id="service" className="px-10 pt-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center font-bold text-5xl mb-4">What can I do for you?</h1>
        <p className="text-center text-gray-500 mb-16-text-lg">
          Comprehensive Solutions for Modern Data Challenges
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {serviceList.map((service,index) => (
            <div key={index} className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500 flex flex-col items-start min-h-[280px]">
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.desc}
              </p>
              <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">Expertise</span>
                <div className="w-8 h-[1px] bg-blue-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;