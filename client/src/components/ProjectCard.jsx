import { motion, useMotionValue, useTransform } from "motion/react";
import { useState, useRef } from "react";
import { Link } from "react-router";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group h-full"
    >
      <div className="relative h-full flex flex-col rounded-3xl bg-base-200/50 border border-base-content/5 hover:border-primary/20 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
        {/* Image Section */}
        <Link
          to={`/projects/${project.id}`}
          className="relative aspect-16/10 overflow-hidden bg-base-300 block"
          style={{ transform: "translateZ(20px)" }}
        >
          <motion.img
            src={project.cover}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-base-200 via-base-200/50 to-transparent" />

          {/* Hover Overlay with CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-base-100/95 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: isHovered ? 1 : 0.8,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="flex gap-3">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-3 rounded-xl bg-primary text-primary-content hover:scale-110 transition-transform"
                  aria-label="View live demo"
                >
                  <FaExternalLinkAlt size={18} />
                </a>
                {project.links.github.client && (
                  <a
                    href={project.links.github.client}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-3 rounded-xl bg-base-content text-base-100 hover:scale-110 transition-transform"
                    aria-label="View source code"
                  >
                    <FaGithub size={18} />
                  </a>
                )}
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-primary">
                Quick Links
              </span>
            </motion.div>
          </motion.div>

          {/* Tech Tags - Always Visible */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-bold uppercase tracking-wide bg-base-100/90 backdrop-blur-md border border-base-content/10 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </Link>

        {/* Content Section */}
        <div
          className="flex-1 flex flex-col p-6 md:p-8"
          style={{ transform: "translateZ(30px)" }}
        >
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary/70 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            {project.category}
          </div>

          {/* Title */}
          <Link to={`/projects/${project.id}`}>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-black tracking-tight mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </Link>

          {/* Description */}
          <p className="text-sm md:text-base text-base-content/60 leading-relaxed mb-6 line-clamp-2 grow">
            {project.shortDescription}
          </p>

          {/* Bottom Action */}
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-base-content/70 hover:text-primary transition-colors group/link"
          >
            View Case Study
            <FaArrowRight className="transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 pointer-events-none bg-linear-to-br from-primary/5 via-transparent to-accent/5"
          style={{ transform: "translateZ(10px)" }}
        />
      </div>
    </motion.article>
  );
};

export default ProjectCard;
