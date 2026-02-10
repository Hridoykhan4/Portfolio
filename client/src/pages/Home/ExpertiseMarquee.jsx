/* eslint-disable no-unused-vars */
import { motion, useInView } from "motion/react";
import { useRef, useMemo } from "react";

const EXPERTISE = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Firebase",
  "JWT",
  "REST APIs",
  "Redux Toolkit",
  "Git & GitHub",
];

const ExpertiseMarquee = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Triple the list for a seamless, ultra-long loop
  const tripledSkills = useMemo(
    () => [...EXPERTISE, ...EXPERTISE, ...EXPERTISE],
    [],
  );

  return (
    <section
      ref={sectionRef}
      className="relative section-spacing bg-base-100 overflow-hidden"
      aria-labelledby="expertise-heading"
    >
      {/* Subtle Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full animate-floaty" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 blur-[120px] rounded-full animate-floaty"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Header Section */}
      <div className="container-page mb-16 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-primary block mb-3">
              Technical Stack
            </span>
            <h2
              id="expertise-heading"
              className="text-5xl md:text-7xl font-black tracking-tighter leading-none"
            >
              My <span className="text-gradient">Arsenal.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-base-content/50 font-medium max-w-xs md:text-right text-sm md:text-base leading-relaxed"
          >
            A production-ready stack focused on performance, scalability, and
            exceptional user experience.
          </motion.p>
        </div>
      </div>

      {/* Marquee Container - Slightly tilted for modern "Bento" aesthetic */}
      <div className="relative py-4 space-y-6 md:space-y-10">
        {/* Row 1: Left to Right */}
        <div className="flex overflow-hidden mask-fade-edges">
          <motion.div
            className="flex gap-4 md:gap-8 flex-none py-4"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {tripledSkills.map((skill, idx) => (
              <SkillCard key={`row1-${idx}`} label={skill} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right to Left (Slightly faster) */}
        <div className="flex overflow-hidden mask-fade-edges">
          <motion.div
            className="flex gap-4 md:gap-8 flex-none py-4"
            animate={{ x: ["-33.33%", "0%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {tripledSkills.map((skill, idx) => (
              <SkillCard key={`row2-${idx}`} label={skill} secondary />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ label, secondary = false }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className={`
        relative flex items-center gap-4 px-8 py-4 md:px-12 md:py-6
        rounded-2xl transition-all duration-500 cursor-default select-none
        border backdrop-blur-md
        ${
          secondary
            ? "bg-primary text-primary-content border-primary/20 shadow-xl shadow-primary/10"
            : "bg-base-200/40 text-base-content border-base-content/5 shadow-sm hover:border-primary/30"
        }
      `}
    >
      {/* Static Shimmer on hover via CSS classes defined in your index.css */}
      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />

      <span className="text-xl md:text-3xl font-black uppercase tracking-tighter italic">
        {label}
      </span>

      {/* Aesthetic Signal Dot */}
      <div
        className={`h-2 w-2 rounded-full ${
          secondary ? "bg-primary-content/40" : "bg-primary animate-pulse"
        }`}
      />
    </motion.div>
  );
};

export default ExpertiseMarquee;
