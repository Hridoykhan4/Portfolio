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
];

const ExpertiseMarquee = () => {
  return (
    <section
      className="relative section-spacing bg-base-100 overflow-hidden"
      aria-label="Expertise"
    >
      {/* Heading */}
      <div className="container-page mb-14 text-center">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3">
          Technical Skillset
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-base-content">
          Tools & Technologies I Work With
        </h2>
      </div>

      {/* Marquees */}
      <div className="space-y-6">
        {/* Row 1 */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6 py-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...expertiseList, ...expertiseList].map((skill, idx) => (
              <SkillCard key={idx} label={skill} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 (reverse) */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6 py-2"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...expertiseList, ...expertiseList].map((skill, idx) => (
              <SkillCard key={idx} label={skill} subtle />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseMarquee;

/* ---------------------------------- */
/* Reusable Skill Card */
/* ---------------------------------- */

const SkillCard = ({ label, subtle = false }) => {
  return (
    <div
      className={`flex-none px-7 py-3 rounded-xl border text-sm md:text-base font-semibold tracking-wide
        ${
          subtle
            ? "bg-base-200/60 border-base-content/10 text-base-content/70"
            : "bg-base-100 border-base-content/15 text-base-content"
        }
        hover:border-primary/40 transition-colors duration-300
      `}
    >
      {label}
    </div>
  );
};
