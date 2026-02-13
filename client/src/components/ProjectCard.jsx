/* eslint-disable no-unused-vars */
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { useState, useRef, memo, useCallback } from "react";
import { Link } from "react-router";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = memo(({ project, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // --- 3D Physics ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // High-end spring settings for that "premium weight" feel
  const springConfig = { stiffness: 150, damping: 20, mass: 0.6 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Subtle rotation for professional elegance (too much looks amateur)
  const rotateX = useTransform(springY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-8deg", "8deg"]);

  // --- Dynamic Spotlight Effect ---
  // This tracks the mouse to create a moving highlight/glare
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightOpacity = useSpring(isHovered ? 0.15 : 0, {
    stiffness: 100,
    damping: 30,
  });

  const handleMouseMove = useCallback(
    (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();

      // Set 3D Tilt values
      const xVal = (e.clientX - rect.left) / rect.width - 0.5;
      const yVal = (e.clientY - rect.top) / rect.height - 0.5;
      x.set(xVal);
      y.set(yVal);

      // Set Spotlight values
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY, x, y],
  );

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1], // Custom Expo-Out ease
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group h-full relative"
    >
      <div className="relative h-full flex flex-col rounded-[2.5rem] bg-base-100/40 border border-white/10 dark:border-white/5 backdrop-blur-2xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-primary/20 group-hover:border-primary/40">
        {/* 1. Dynamic Spotlight Glare */}
        <motion.div
          className="absolute inset-0 z-30 pointer-events-none"
          style={{
            opacity: spotlightOpacity,
            background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.3), transparent 40%)`,
          }}
        />

        {/* --- IMAGE SECTION --- */}
        <div
          className="relative aspect-16/11 overflow-hidden"
          style={{ transform: "translateZ(30px)" }}
        >
          {/* Main Overlay Link */}
          <Link
            to={`/projects/${project.id}`}
            className="absolute inset-0 z-20"
            aria-label={`Project: ${project.title}`}
          />

          <motion.img
            src={project.cover}
            alt={project.title}
            className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-700"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Luxury Frosted Overlay on Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 z-30 bg-primary/10 backdrop-blur-xs flex items-center justify-center"
          >
            <div className="flex gap-4 translate-z-50 pointer-events-auto">
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-xl hover:bg-primary hover:text-white transition-colors"
              >
                <FaExternalLinkAlt size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={project.links.github.client}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-xl hover:bg-primary transition-colors"
              >
                <FaGithub size={22} />
              </motion.a>
            </div>
          </motion.div>

          {/* Floating Tags */}
          <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-40 pointer-events-none">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest bg-black/60 text-white backdrop-blur-xl border border-white/20 rounded-full shadow-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* --- CONTENT SECTION --- */}
        <div
          className="relative flex-1 flex flex-col p-8 md:p-10"
          style={{
            transform: "translateZ(60px)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Animated Category Badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-primary group-hover:w-12 transition-all duration-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-4 leading-none group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-sm md:text-base text-base-content/60 font-medium leading-relaxed mb-8 line-clamp-2 grow">
            {project.shortDescription}
          </p>

          <div className="mt-auto pt-6 border-t border-base-content/5">
            <Link
              to={`/projects/${project.id}`}
              className="group/btn inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] transition-all"
            >
              <span className="relative">
                Explore Case Study
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover/btn:w-full transition-all duration-500" />
              </span>
              <div className="w-8 h-8 rounded-full border border-base-content/20 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:border-primary group-hover/btn:text-white transition-all duration-500">
                <FaArrowRight
                  className="-rotate-45 group-hover/btn:rotate-0 transition-transform duration-500"
                  size={12}
                />
              </div>
            </Link>
          </div>
        </div>

        {/* High-End Ambient Background Glow */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-primary/20 transition-colors duration-700" />
      </div>
    </motion.article>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
