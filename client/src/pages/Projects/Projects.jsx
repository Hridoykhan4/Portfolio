/* eslint-disable no-unused-vars */
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Link } from "react-router";
import { FaEye, FaCode, FaFilter } from "react-icons/fa";
import { getAllProjects } from "../../data/projects";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const allProjects = getAllProjects();
  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  const categories = ["all", ...new Set(allProjects.map((p) => p.category))];

  return (
    <main className="bg-base-100 pt-28 pb-20">
      <div className="container-page">
        {/* Header */}
        <motion.section
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-base-200/80 border border-base-content/10 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <FaCode className="text-primary text-sm" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-primary">
              Portfolio
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight mb-6">
            All <span className="text-gradient">Projects</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-base-content/70 max-w-3xl leading-relaxed mb-8">
            A collection of{" "}
            <strong>{allProjects.length} full-stack applications</strong> built
            with MERN stack, showcasing real-world problem-solving and modern
            development practices.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                  filter === category
                    ? "bg-primary text-primary-content shadow-lg"
                    : "bg-base-200/60 text-base-content/70 hover:bg-base-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.section>

        {/* Projects Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <FaFilter className="text-6xl text-base-content/20 mx-auto mb-4" />
              <p className="text-xl text-base-content/50">
                No projects found in this category.
              </p>
            </div>
          )}
        </motion.section>
      </div>
    </main>
  );
};

/* ========== PROJECT CARD ========== */
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isCardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group h-full"
    >
      <div className="relative h-full flex flex-col rounded-3xl overflow-hidden bg-base-200/50 border border-base-content/5 hover:border-primary/20 hover:bg-base-200/80 transition-all duration-300">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-base-300">
          <motion.img
            src={project.cover}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />

          {/* Overlay */}
          <motion.div className="absolute inset-0 bg-base-100/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Link
              to={`/projects/${project.id}`}
              className="px-6 py-3 rounded-xl bg-primary text-primary-content font-bold text-sm uppercase tracking-wider shadow-xl hover:scale-105 transition-transform flex items-center gap-2"
            >
              <FaEye />
              View Details
            </Link>
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-6">
          {/* Tagline */}
          <p className="text-xs font-bold uppercase tracking-wider text-primary/70 mb-2">
            {project.tagline}
          </p>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-black tracking-tight mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-base-content/60 mb-4 leading-relaxed line-clamp-2 flex-grow">
            {project.shortDescription}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-semibold border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default Projects;
