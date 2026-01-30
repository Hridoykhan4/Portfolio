import { motion } from "motion/react";

const expertiseList = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "React Router",
  "JWT",
  "Firebase",
  "REST APIs",
  "Git & GitHub",
  "Redux Toolkit",
  "Next.js",
];

const ExpertiseMarquee = () => {
  return (
    <section
      className="relative section-spacing bg-base-100 overflow-hidden"
      aria-labelledby="expertise-heading"
    >
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-primary/5 -rotate-3 -z-10" />

      <div className="container-page mb-12">
        <div className="flex flex-col md:flex-row items-end justify-between gap-4">
          <div className="max-w-xl text-left">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-2 block"
            >
              Proven Stack
            </motion.span>
            <h2
              id="expertise-heading"
              className="text-4xl md:text-6xl font-black tracking-tighter"
            >
              My <span className="text-gradient">Arsenal.</span>
            </h2>
          </div>
          <p className="text-base-content/50 font-medium text-sm md:text-base max-w-xs md:text-right">
            Continuously evolving with the latest ecosystem standards and best
            practices.
          </p>
        </div>
      </div>

      {/* Marquee Container with Skew Effect */}
      <div className="relative -rotate-2 scale-105 space-y-4 md:space-y-6 mask-fade-edges py-10">
        {/* Row 1: Fast & Bold */}
        <div className="flex overflow-hidden border-y border-base-content/5 bg-base-200/30 backdrop-blur-sm py-4">
          <motion.div
            className="flex gap-4 md:gap-8 flex-none"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...expertiseList, ...expertiseList].map((skill, idx) => (
              <SkillCard key={`row1-${idx}`} label={skill} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Faster & Distinct */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 md:gap-8 flex-none"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...expertiseList, ...expertiseList].map((skill, idx) => (
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
    <div
      className={`
        flex-none flex items-center gap-3 px-6 py-3 md:px-10 md:py-5 
        rounded-2xl transition-all duration-500 cursor-default select-none
        ${
          secondary
            ? "bg-primary text-primary-content shadow-xl shadow-primary/20 rotate-3"
            : "bg-base-100 border border-base-content/10 text-base-content font-bold shadow-sm -rotate-2"
        }
      `}
    >
      <span className="text-lg md:text-2xl font-black uppercase tracking-tight italic">
        {label}
      </span>
      {/* Aesthetic Dot */}
      <span
        className={`h-2 w-2 rounded-full ${secondary ? "bg-primary-content/50" : "bg-primary"}`}
      />
    </div>
  );
};

export default ExpertiseMarquee;
