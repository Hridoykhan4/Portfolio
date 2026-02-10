import { useInView, useMotionValue, useTransform, motion } from "motion/react";
import { useRef, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project, index, isInView }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const cardInView = useInView(cardRef, { once: false, amount: 0.2 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [3, -3]);
  const rotateY = useTransform(mouseX, [-300, 300], [-3, 3]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.article
      ref={cardRef}
      className={`group relative rounded-3xl overflow-hidden bg-base-200/50 border border-base-content/5 backdrop-blur-sm ${project.gridSpan || ""}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -10 }}
    >
      {/* 3D Tilt Effect */}
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative"
      >
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20">
          {/* Image */}
          <motion.img
            src={project.cover}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{ transform: "translateZ(20px)" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />

          {/* Overlay Gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-base-200 via-base-200/50 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />

          {/* Featured Badge */}
          {project.featured && (
            <motion.div
              className="absolute top-4 left-4 px-4 py-2 rounded-full bg-primary/90 backdrop-blur-sm text-primary-content text-xs font-black uppercase tracking-wider shadow-xl"
              style={{ transform: "translateZ(30px)" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={cardInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              ★ Featured
            </motion.div>
          )}

          {/* Quick Action Buttons */}
          <motion.div
            className="absolute top-4 right-4 flex gap-2"
            style={{ transform: "translateZ(30px)" }}
            initial={{ opacity: 0, x: 20 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-base-100/90 backdrop-blur-sm hover:bg-primary hover:text-primary-content transition-all shadow-xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View GitHub Repository"
            >
              <FaGithub className="text-xl" />
            </motion.a>
            <motion.a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-base-100/90 backdrop-blur-sm hover:bg-accent hover:text-accent-content transition-all shadow-xl"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View Live Demo"
            >
              <FaExternalLinkAlt className="text-xl" />
            </motion.a>
          </motion.div>

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.5,
            }}
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8" style={{ transform: "translateZ(10px)" }}>
          {/* Tagline */}
          <motion.p
            className="text-xs font-bold uppercase tracking-wider text-primary/80 mb-2"
            initial={{ opacity: 0 }}
            animate={cardInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            {project.tagline}
          </motion.p>

          {/* Title */}
          <motion.h3
            className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-3 group-hover:text-primary transition-colors"
            style={{ transform: "translateZ(15px)" }}
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-sm md:text-base text-base-content/70 mb-6 leading-relaxed line-clamp-3"
            style={{ transform: "translateZ(10px)" }}
          >
            {project.shortDescription}
          </motion.p>

          {/* Highlights */}
          {project.features && project.features.length > 0 && (
            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              style={{ transform: "translateZ(8px)" }}
            >
              {project.features.slice(0, 3).map((feature, idx) => (
                <motion.span
                  key={idx}
                  className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "var(--color-primary)",
                    color: "var(--color-primary-content)",
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {feature.title}
                </motion.span>
              ))}
            </motion.div>
          )}

          {/* Tech Stack */}
          <motion.div
            className="flex flex-wrap gap-2"
            style={{ transform: "translateZ(5px)" }}
          >
            {project.tags.slice(0, 5).map((tag, idx) => (
              <motion.span
                key={idx}
                className="px-3 py-1 rounded-lg bg-base-300/50 text-base-content/70 text-xs font-semibold backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={cardInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + idx * 0.05 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "var(--color-base-300)",
                }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Animated Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary), var(--color-accent), var(--color-primary))",
            padding: "2px",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            opacity: isHovered ? 0.5 : 0,
          }}
          animate={{
            backgroundPosition: isHovered ? ["0% 0%", "200% 200%"] : "0% 0%",
          }}
          transition={{
            duration: 3,
            repeat: isHovered ? Infinity : 0,
            ease: "linear",
          }}
        />

        {/* 3D Shadow Layers */}
        <div className="absolute inset-0 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div
            className="absolute inset-0 bg-primary/10 blur-xl rounded-3xl transform translate-y-2"
            style={{ transform: "translateZ(-10px)" }}
          />
          <div
            className="absolute inset-0 bg-accent/10 blur-2xl rounded-3xl transform translate-y-4"
            style={{ transform: "translateZ(-20px)" }}
          />
        </div>
      </motion.div>
    </motion.article>
  );
};

export default ProjectCard;