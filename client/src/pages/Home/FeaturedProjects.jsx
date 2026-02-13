/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { Link } from "react-router";
import { FaRocket, FaArrowRight, FaCode } from "react-icons/fa";
import { getFeaturedProjects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";

const FeaturedProjects = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <section
      className="section-spacing relative bg-base-100"
      aria-labelledby="projects-title"
      style={{ containment: "content" }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-20 select-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 blur-[120px] rounded-full" />
      </div>

      <div className="container-page relative z-10">
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8">
              <FaRocket className="text-primary" size={14} />
              <span className="text-xs font-black tracking-[0.2em] uppercase text-primary">
                Featured Work
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-8">
              <div className="max-w-3xl">
                <h2
                  id="projects-title"
                  className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6"
                >
                  Building{" "}
                  <span className="text-primary italic">Production</span>
                  <br /> Solutions
                </h2>
                <p className="text-lg text-base-content/60 leading-relaxed max-w-xl">
                  High-performance applications built with
                  <span className="text-base-content font-bold">
                    {" "}
                    MERN Stack{" "}
                  </span>
                  and architectural integrity.
                </p>
              </div>

              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-primary mb-2"
              >
                View All{" "}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {featuredProjects.map((project, idx) => {
            const layouts = [
              "lg:col-span-7 lg:row-span-2",
              "lg:col-span-5 lg:row-span-2",
              "lg:col-span-6",
              "lg:col-span-6",
            ];

            return (
              <div
                key={project.id}
                className={`${layouts[idx] || "lg:col-span-4"} group`}
              >
                <ProjectCard project={project} index={idx} />
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 rounded-[2.5rem] bg-base-200/50 border border-base-content/5 backdrop-blur-md text-center"
        >
          <FaCode className="text-5xl text-primary/20 mx-auto mb-6" />
          <h3 className="text-3xl font-black mb-6 tracking-tight">
            Ready to see the full code?
          </h3>
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-content rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-primary/20"
          >
            <FaRocket />
            <span>Explore Archive</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
