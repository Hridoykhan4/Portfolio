/* eslint-disable no-unused-vars */
import { motion, useInView, useMotionValue, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Link } from "react-router";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";
import { getFeaturedProjects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";

const FeaturedProjects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const featuredProjects = getFeaturedProjects();

  return (
    <section
      ref={sectionRef}
      className="section-spacing bg-base-100 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]"
          animate={
            isInView
              ? {
                  scale: [1, 1.2, 1],
                  x: [0, 50, 0],
                  y: [0, 30, 0],
                }
              : {}
          }
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px]"
          animate={
            isInView
              ? {
                  scale: [1, 1.3, 1],
                  x: [0, -50, 0],
                  y: [0, -30, 0],
                }
              : {}
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-base-content) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container-page relative z-10">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-base-200/80 border border-base-content/10 backdrop-blur-sm mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-primary"
              animate={
                isInView
                  ? {
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7],
                    }
                  : {}
              }
              transition={{ duration: 2, repeat: Infinity }}
            />
            <FaRocket className="text-primary text-sm" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-primary">
              Featured Work
            </span>
          </motion.div>

          {/* Title & Description */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight mb-6">
                Selected <span className="text-gradient">Projects</span>
              </h2>
              <p className="text-base-content/60 text-base md:text-lg leading-relaxed max-w-2xl">
                Full-stack applications showcasing expertise in MERN
                development, secure authentication, payment integration, and
                modern UI/UX design.
              </p>
            </div>

            {/* CTA Button */}
            <Link
              to="/projects"
              className="btn-cta-soft group self-start lg:self-auto"
            >
              <FaLaptopCode className="text-lg" />
              View All Projects
              <FaExternalLinkAlt className="text-sm transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-auto">
          {featuredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              isInView={isInView}
            />
          ))}
        </div>

    
      </div>
    </section>
  );
};

export default FeaturedProjects;
