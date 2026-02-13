import { motion } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router";
import { FaRocket, FaArrowRight, FaCode } from "react-icons/fa";
import { getFeaturedProjects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";

const FeaturedProjects = () => {
  const featuredProjects = getFeaturedProjects();
  return (
    <section
      className="section-spacing relative bg-base-100 overflow-hidden"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 blur-[120px] rounded-full" />
      </div>

      <div className="container-page relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8">
              <FaRocket className="text-primary" size={14} />
              <span className="text-xs font-black tracking-[0.2em] uppercase text-primary">
                Featured Work
              </span>
            </div>

            {/* Title & Description */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-8">
              <div className="max-w-3xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-[0.95] mb-6">
                  Building{" "}
                  <span className="text-gradient">Production-Ready</span>
                  <br />
                  Solutions
                </h2>
                <p className="text-base md:text-lg text-base-content/70 leading-relaxed max-w-2xl">
                  From concept to deployment, each project showcases{" "}
                  <span className="text-primary font-semibold">
                    scalable architecture
                  </span>
                  ,{" "}
                  <span className="text-accent font-semibold">clean code</span>,
                  and{" "}
                  <span className="text-base-content font-semibold">
                    modern best practices
                  </span>
                  .
                </p>
              </div>

              {/* View All Link */}
              <motion.div whileHover={{ x: 5 }} className="lg:mb-2">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors"
                >
                  View All Projects
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Projects Grid - Magazine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {featuredProjects.map((project, idx) => {
            // Strategic grid layout for magazine feel
            const layouts = [
              "lg:col-span-7 lg:row-span-2", // Hero project
              "lg:col-span-5 lg:row-span-2", // Second featured
              "lg:col-span-6", // Third
              "lg:col-span-6", // Fourth
            ];

            return (
              <div key={project.id} className={layouts[idx] || "lg:col-span-4"}>
                <ProjectCard project={project} index={idx} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 md:mt-20 p-8 md:p-12 rounded-3xl bg-base-200/40 border border-base-content/5 backdrop-blur-sm text-center"
        >
          <FaCode className="text-4xl text-primary mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-black mb-4">
            Want to See More?
          </h3>
          <p className="text-base-content/70 mb-6 max-w-2xl mx-auto">
            Explore the complete collection of full-stack MERN applications with
            detailed case studies and live demos.
          </p>
          <Link to="/projects" className="btn-cta group">
            <FaRocket />
            Explore All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
