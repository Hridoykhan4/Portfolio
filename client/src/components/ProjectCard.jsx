import {
  useInView,
  useMotionValue,
  useTransform,
  motion,
  AnimatePresence,
} from "motion/react";
import { useRef, useState } from "react";
import { Link } from "react-router";
import { FaArrowRight, FaCode, FaLayerGroup } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useTransform(x, [-0.5, 0.5], ["-7deg", "7deg"]);
  const mouseYSpring = useTransform(y, [-0.5, 0.5], ["7deg", "-7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "circOut" }}
      className={`relative h-full ${project.gridSpan || ""}`}
    >
      <Link to={`/projects/${project.id}`} className="block h-full group">
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            x.set(0);
            y.set(0);
          }}
          style={{
            rotateX: mouseYSpring,
            rotateY: mouseXSpring,
            transformStyle: "preserve-3d",
          }}
          className="relative h-full flex flex-col rounded-[2rem] bg-base-200/40 border border-base-content/5 hover:border-primary/30 backdrop-blur-md overflow-hidden transition-colors duration-500"
        >
          {/* Top Visual: Image + Floating Tags */}
          <div
            className="relative h-64 overflow-hidden"
            style={{ transform: "translateZ(30px)" }}
          >
            <motion.img
              src={project.cover}
              alt={project.title}
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base-200/90 via-transparent to-transparent" />

            {/* Floating Tech Badges */}
            <div className="absolute bottom-4 left-6 flex flex-wrap gap-2">
              {project.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Body Content */}
          <div
            className="p-8 flex-1 flex flex-col justify-between"
            style={{ transform: "translateZ(50px)" }}
          >
            <div>
              <div className="flex items-center gap-2 mb-4 text-primary font-bold text-xs tracking-widest uppercase">
                <FaLayerGroup className="text-[10px]" />
                {project.category}
              </div>

              <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-base-content/60 leading-relaxed line-clamp-2">
                {project.shortDescription}
              </p>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 flex items-center justify-between border-t border-base-content/5 pt-6">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2 text-[10px] font-bold opacity-40 uppercase tracking-tighter">
                  <FaCode /> MERN Stack
                </span>
              </div>

              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary"
              >
                Case Study <FaArrowRight />
              </motion.div>
            </div>
          </div>

          {/* Hover Glow Effect */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
              />
            )}
          </AnimatePresence>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
