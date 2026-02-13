/* eslint-disable no-unused-vars */
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useParams, Link, Navigate } from "react-router";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCode,
  FaServer,
  FaCheckCircle,
  FaCalendar,
  FaClock,
} from "react-icons/fa";
import { getProjectById } from "../../data/projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = getProjectById(id);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // If project not found, redirect
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <main className="bg-base-100 section-spacing">
      <div className="container-page">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-base-200/60 hover:bg-base-200 transition-all text-sm font-semibold"
          >
            <FaArrowLeft />
            Back to Projects
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.section
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          {/* Tagline */}
          <p className="text-sm font-bold uppercase tracking-wider text-primary mb-4">
            {project.tagline}
          </p>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight mb-6">
            {project.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-base-content/60">
              <FaCalendar className="text-primary" />
              <span>{project.completionDate}</span>
            </div>
            {project.duration && (
              <div className="flex items-center gap-2 text-sm text-base-content/60">
                <FaClock className="text-primary" />
                <span>{project.duration}</span>
              </div>
            )}
            <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
              {project.category}
            </div>
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
              <motion.span
                className="inline-block"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
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
        </motion.section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-3xl overflow-hidden border border-base-content/10 shadow-2xl"
            >
              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-auto"
              />
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-black mb-4">
                About This Project
              </h2>
              <p className="text-base-content/70 leading-relaxed text-lg">
                {project.fullDescription}
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-black mb-6">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + idx * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-base-200/50 border border-base-content/5"
                  >
                    <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">{feature.title}</h3>
                      <p className="text-sm text-base-content/60">
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
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-black mb-6">
                  Technical Highlights
                </h2>
                <ul className="space-y-3">
                  {project.technicalHighlights.map((highlight, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + idx * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-base-content/70">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-6 rounded-3xl bg-base-200/50 border border-base-content/5 sticky top-24"
            >
              <h3 className="text-xl font-black mb-6">Tech Stack</h3>

              {/* Frontend */}
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-base-content/50 mb-3">
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.frontend.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-base-100 border border-base-content/10 text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-base-content/50 mb-3">
                  Backend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.backend.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-base-100 border border-base-content/10 text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Database */}
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-base-content/50 mb-3">
                  Database
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.database.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-base-100 border border-base-content/10 text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Authentication */}
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-base-content/50 mb-3">
                  Authentication
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.authentication.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-base-100 border border-base-content/10 text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Payment (if exists) */}
              {project.stack.payment && (
                <div className="mb-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-base-content/50 mb-3">
                    Payment
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.payment.map((tech, idx) => (
                      <span
                        key={idx}
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
                  <h4 className="text-sm font-bold uppercase tracking-wider text-base-content/50 mb-3">
                    Other Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.other.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-base-100 border border-base-content/10 text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Stats (if exists) */}
            {project.stats && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="p-6 rounded-3xl bg-primary/10 border border-primary/20"
              >
                <h3 className="text-xl font-black mb-4 text-primary">
                  Project Stats
                </h3>
                <div className="space-y-3">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm font-semibold capitalize">
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 p-10 rounded-3xl bg-base-200/50 border border-base-content/10 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-black mb-4">
            Interested in this project?
          </h3>
          <p className="text-base-content/70 mb-6 max-w-2xl mx-auto">
            Check out the live demo or explore the source code on GitHub.
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
    </main>
  );
};

export default ProjectDetails;
