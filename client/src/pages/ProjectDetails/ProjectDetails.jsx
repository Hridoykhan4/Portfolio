// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useRef } from "react";
import { useParams, Link, Navigate } from "react-router";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCheckCircle,
  FaCalendar,
  FaClock,
  FaCode,
  FaServer,
} from "react-icons/fa";
import { getProjectById } from "../../data/projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = getProjectById(id);
  const sectionRef = useRef(null);

  // Redirect if project not found
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <main className="bg-base-100 section-spacing min-h-screen">
      {/* Hero Section */}
      <section className="relative  overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
        </div>

        <div className="container-page relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-base-200/60 hover:bg-base-200 transition-all text-sm font-semibold border border-base-content/5"
            >
              <FaArrowLeft />
              Back to Projects
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            {/* Tagline */}
            <p className="text-sm font-bold uppercase tracking-wider text-primary mb-4">
              {project.tagline}
            </p>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-[0.95] mb-6">
              {project.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 mb-8 text-sm text-base-content/60">
              <div className="flex items-center gap-2">
                <FaCalendar className="text-primary" />
                <span>{project.completionDate}</span>
              </div>
              {project.duration && (
                <div className="flex items-center gap-2">
                  <FaClock className="text-primary" />
                  <span>{project.duration}</span>
                </div>
              )}
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                {project.category}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta group"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

              {project.links.github.client && (
                <a
                  href={project.links.github.client}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-soft group"
                >
                  <FaGithub />
                  Client Code
                </a>
              )}

              {project.links.github.server && (
                <a
                  href={project.links.github.server}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-soft group"
                >
                  <FaServer />
                  Server Code
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Main Content (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-3xl overflow-hidden border border-base-content/10 shadow-2xl"
              >
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-auto"
                />
              </motion.div>

              {/* About */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
                  About This Project
                </h2>
                <p className="text-base md:text-lg text-base-content/70 leading-relaxed">
                  {project.fullDescription}
                </p>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tight">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.05 }}
                      className="flex items-start gap-3 p-5 rounded-2xl bg-base-200/50 border border-base-content/5 hover:border-primary/20 transition-colors"
                    >
                      <FaCheckCircle className="text-primary mt-1 shrink-0" />
                      <div>
                        <h3 className="font-bold mb-1 text-base-content">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-base-content/60 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Technical Highlights */}
              {project.technicalHighlights && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
                    Technical Highlights
                  </h2>
                  <div className="space-y-3">
                    {project.technicalHighlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.05 }}
                        className="flex items-start gap-3 text-base-content/70"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Column - Sidebar (4 cols) */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-8">
                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="p-6 md:p-8 rounded-3xl bg-base-200/50 border border-base-content/5"
                >
                  <h3 className="text-2xl font-black mb-6 tracking-tight">
                    Tech Stack
                  </h3>

                  {/* Frontend */}
                  {project.stack.frontend && (
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-3">
                        Frontend
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.frontend.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg bg-base-100 border border-base-content/10 text-sm font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Backend */}
                  {project.stack.backend && (
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-3">
                        Backend
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.backend.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg bg-base-100 border border-base-content/10 text-sm font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Database */}
                  {project.stack.database && (
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-3">
                        Database
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.database.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg bg-base-100 border border-base-content/10 text-sm font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Authentication */}
                  {project.stack.authentication && (
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-3">
                        Authentication
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.authentication.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg bg-base-100 border border-base-content/10 text-sm font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Payment */}
                  {project.stack.payment && (
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-3">
                        Payment
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.payment.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg bg-base-100 border border-base-content/10 text-sm font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Other */}
                  {project.stack.other && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-3">
                        Other Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.other.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg bg-base-100 border border-base-content/10 text-sm font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Stats */}
                {project.stats && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="p-6 md:p-8 rounded-3xl bg-primary/10 border border-primary/20"
                  >
                    <h3 className="text-xl font-black mb-6 text-primary tracking-tight">
                      Project Stats
                    </h3>
                    <div className="space-y-4">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between items-center"
                        >
                          <span className="text-sm font-semibold capitalize text-base-content/70">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </span>
                          <span className="text-lg font-black text-primary">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 p-10 md:p-12 rounded-3xl bg-base-200/50 border border-base-content/10 text-center"
          >
            <FaCode className="text-5xl text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">
              Interested in This Project?
            </h3>
            <p className="text-base-content/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Explore the live demo to see it in action, or dive into the source
              code on GitHub to see how it's built.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta"
              >
                <FaExternalLinkAlt />
                View Live Demo
              </a>
              <Link to="/projects" className="btn-cta-soft">
                <FaCode />
                More Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetails;
