/* eslint-disable no-unused-vars */
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { useRef, useMemo } from "react";

const EXPERTISE = [
  { name: "React.js", icon: "⚛️", color: "#61DAFB" },
  { name: "Next.js", icon: "▲", color: "#000000" },
  { name: "Node.js", icon: "◆", color: "#339933" },
  { name: "Express.js", icon: "◉", color: "#68A063" },
  { name: "MongoDB", icon: "◈", color: "#47A248" },
  { name: "TypeScript", icon: "TS", color: "#3178C6" },
  { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: "◐", color: "#06B6D4" },
  { name: "Firebase", icon: "◭", color: "#FFCA28" },
  { name: "JWT", icon: "◘", color: "#000000" },
  { name: "REST APIs", icon: "◇", color: "#FF6C37" },
  { name: "Redux Toolkit", icon: "◉", color: "#764ABC" },
  { name: "Git & GitHub", icon: "◎", color: "#F05032" },
];

const ExpertiseMarquee = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0],
  );

  const skills = useMemo(() => [...EXPERTISE, ...EXPERTISE], []);

  return (
    <section
      ref={sectionRef}
      className="relative section-spacing bg-base-100 overflow-hidden overflow-x-clip"
      aria-labelledby="expertise-heading"
    >
      {/* Ambient Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity }}
      >
        <div className="absolute top-1/3 left-1/4 w-100 h-100 bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/3 w-87.5 h-87.5 bg-accent/5 blur-[120px] rounded-full" />
      </motion.div>

      {/* Header */}
      <div className="container-page mb-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-xs tracking-[0.35em] font-black uppercase text-primary">
            Expertise
          </span>

          <h2
            id="expertise-heading"
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
          >
            Technical Expertise
          </h2>

          <p className="mt-5 text-base-content/60 text-sm md:text-base leading-relaxed max-w-2xl">
            A carefully selected stack focused on scalability, performance, and
            production-grade architecture.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <motion.div
        ref={containerRef}
        className="relative space-y-8"
        style={{ y }}
      >
        {[1, 2].map((row) => (
          <div key={row} className="flex overflow-hidden group">
            <motion.div
              className="flex gap-5 lg:gap-6 flex-none py-3 will-change-transform"
              animate={
                shouldReduceMotion
                  ? {}
                  : row === 1
                    ? { x: ["0%", "-50%"] }
                    : { x: ["-50%", "0%"] }
              }
              transition={{
                duration: row === 1 ? 60 : 55,
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {skills.map((skill, idx) => (
                <SkillCard key={`${row}-${idx}`} skill={skill} />
              ))}
            </motion.div>
          </div>
        ))}
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-base-100 to-transparent pointer-events-none" />
    </section>
  );
};

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="
        relative flex items-center gap-4
        px-6 py-4 lg:px-8 lg:py-5
        rounded-2xl border border-base-content/10
        bg-base-200/60 backdrop-blur-xl
        text-base font-semibold
        text-base-content whitespace-nowrap
        transition-all duration-300
        hover:border-primary/40
        hover:shadow-lg hover:shadow-primary/10
      "
    >
      <span
        aria-hidden="true"
        className="text-2xl"
        style={{ color: skill.color }}
      >
        {skill.icon}
      </span>

      <span className="tracking-tight">{skill.name}</span>
    </motion.div>
  );
};

export default ExpertiseMarquee;
