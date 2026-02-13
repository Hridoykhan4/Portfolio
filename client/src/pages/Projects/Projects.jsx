import { motion } from "motion/react";
import { useState, useMemo } from "react";
import { Link } from "react-router";
import {
  FaRocket,
  FaFilter,
  FaExternalLinkAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import { getAllProjects } from "../../data/projects";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const allProjects = getAllProjects();

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ["all", ...new Set(allProjects.map((p) => p.category))];
    return cats;
  }, [allProjects]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return allProjects;
    return allProjects.filter((p) => p.category === activeFilter);
  }, [activeFilter, allProjects]);

  return (
    <main className="bg-base-100 min-h-screen section-spacing">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 blur-[120px] rounded-full" />
      </div>

      <div className="container-page relative z-10">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8">
            <FaCode className="text-primary" size={14} />
            <span className="text-xs font-black tracking-[0.2em] uppercase text-primary">
              Complete Portfolio
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-[0.95] mb-6">
            All <span className="text-gradient">Projects</span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-base-content/70 leading-relaxed max-w-3xl mb-10">
            A comprehensive collection of{" "}
            <span className="text-primary font-semibold">
              {allProjects.length} full-stack applications
            </span>{" "}
            built with the MERN stack. Each project demonstrates real-world
            problem-solving, modern development practices, and production-ready
            code.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-primary text-primary-content shadow-lg shadow-primary/20"
                    : "bg-base-200/60 text-base-content/70 hover:bg-base-200 border border-base-content/10"
                }`}
              >
                {category}
                {category !== "all" && (
                  <span className="ml-2 opacity-60">
                    ({allProjects.filter((p) => p.category === category).length}
                    )
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Projects Grid */}
        <motion.section layout className="mb-16">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProjects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </motion.section>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="p-6 md:p-8 rounded-2xl bg-primary/10 border border-primary/20">
            <div className="text-4xl font-black text-primary mb-2">
              {allProjects.length}
            </div>
            <p className="text-sm font-semibold text-base-content/80">
              Total Projects
            </p>
          </div>
          <div className="p-6 md:p-8 rounded-2xl bg-accent/10 border border-accent/20">
            <div className="text-4xl font-black text-accent mb-2">100%</div>
            <p className="text-sm font-semibold text-base-content/80">
              MERN Stack
            </p>
          </div>
          <div className="p-6 md:p-8 rounded-2xl bg-green-500/10 border border-green-500/20">
            <div className="text-4xl font-black text-green-500 mb-2">Live</div>
            <p className="text-sm font-semibold text-base-content/80">
              Deployed & Ready
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

/* ==================== PROJECT CARD ==================== */
const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group h-full"
    >
      <div className="relative h-full flex flex-col rounded-3xl bg-base-200/50 border border-base-content/5 hover:border-primary/20 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-base-300">
          <Link to={`/projects/${project.id}`}>
            <motion.img
              src={project.cover}
              alt={project.title}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.08 : 1 }}
              transition={{ duration: 0.8 }}
            />
          </Link>

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-base-200 via-base-200/40 to-transparent" />

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
            }}
            className="absolute top-4 right-4 flex gap-2"
          >
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2.5 rounded-xl bg-primary text-primary-content hover:scale-110 transition-transform shadow-lg"
              aria-label="Live demo"
            >
              <FaExternalLinkAlt size={14} />
            </a>
            {project.links.github.client && (
              <a
                href={project.links.github.client}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2.5 rounded-xl bg-base-content text-base-100 hover:scale-110 transition-transform shadow-lg"
                aria-label="Source code"
              >
                <FaGithub size={14} />
              </a>
            )}
          </motion.div>

          {/* Tags */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-bold uppercase tracking-wide bg-base-100/90 backdrop-blur-md border border-base-content/10 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-6">
          {/* Category */}
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary/70 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {project.category}
          </div>

          {/* Title */}
          <Link to={`/projects/${project.id}`}>
            <h3 className="text-xl md:text-2xl font-black tracking-tight mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </Link>

          {/* Description */}
          <p className="text-sm text-base-content/60 leading-relaxed line-clamp-2 mb-4 flex-grow">
            {project.shortDescription}
          </p>

          {/* CTA */}
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-base-content/70 hover:text-primary transition-colors group/link"
          >
            View Details
            <motion.span
              animate={{ x: isHovered ? 3 : 0 }}
              className="transition-transform"
            >
              →
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

/* ==================== EMPTY STATE ==================== */
const EmptyState = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="col-span-full flex flex-col items-center justify-center py-20 text-center"
  >
    <FaFilter className="text-6xl text-base-content/20 mb-6" />
    <h3 className="text-2xl font-black mb-2 text-base-content/50">
      No Projects Found
    </h3>
    <p className="text-base-content/40">
      Try selecting a different category filter
    </p>
  </motion.div>
);

export default Projects;
