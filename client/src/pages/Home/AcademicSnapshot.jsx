/* eslint-disable no-unused-vars */
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  FaGraduationCap,
  FaGithub,
  FaCode,
  FaCalendarCheck,
  FaLayerGroup,
  FaTerminal,
} from "react-icons/fa";

const GITHUB_STATS = [
  {
    label: "Total Commits",
    value: "913+",
    icon: FaCode,
    detail: "Since Jan 2024",
  },
  {
    label: "Active Days",
    value: "300+",
    icon: FaCalendarCheck,
    detail: "Consistent contribution habit",
  },
  {
    label: "Repositories",
    value: "92+",
    icon: FaLayerGroup,
    detail: "Full-stack & experiments",
  },
];

const AcademicSnapshot = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative py-20 md:py-28 bg-base-100 overflow-hidden"
      aria-labelledby="academic-heading"
    >
      <div className="container-page relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary/60"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary/80">
              Engineering Roots
            </span>
          </div>

          <h2
            id="academic-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]"
          >
            Academic <span className="opacity-30">&</span> Digital{" "}
            <span className="text-primary italic">Residency.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {/* Education Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="bento-card md:col-span-2 p-7 md:p-10 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-105">
                <FaGraduationCap className="text-2xl text-primary" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">
                BSc in Computer Science & Engineering
              </h3>

              <p className="text-base-content/50 font-semibold uppercase text-[11px] tracking-widest">
                Port City International University
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-base-content/10 flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">
                Foundational Discipline
              </span>
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[9px] font-bold uppercase">
                Engineering
              </div>
            </div>
          </motion.div>

          {/* GitHub Stats */}
          {GITHUB_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bento-card p-6 flex flex-col items-center justify-center text-center group"
            >
              <stat.icon className="text-lg opacity-30 mb-3 group-hover:text-primary transition-colors duration-400" />

              <span className="text-3xl md:text-4xl font-extrabold tracking-tight mb-1">
                {stat.value}
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-3">
                {stat.label}
              </span>

              <p className="text-[12px] text-base-content/50 font-medium leading-relaxed max-w-42.5">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Extra spacing before Growth Banner */}
        <div className="mt-16 md:mt-24" />

        {/* Growth Banner */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-primary/95 text-primary-content rounded-3xl p-8 md:p-14 relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <FaTerminal className="text-lg opacity-80" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-70">
                  Growth Mindset
                </span>
              </div>

              <h4 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-5 leading-snug">
                Structured learning.{" "}
                <span className="opacity-70">Verified execution.</span>
              </h4>

              <p className="text-primary-content/80 text-sm md:text-base leading-relaxed font-medium">
                My academic foundation supports practical engineering. From
                experimental scripts to scalable full-stack systems, every
                project reflects disciplined implementation and public
                documentation.
              </p>
            </div>

            <motion.a
              href="https://github.com/Hridoykhan4"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary-content text-primary px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg transition-all flex items-center justify-center gap-3"
            >
              <FaGithub className="text-base" /> View GitHub
            </motion.a>
          </div>

          {/* Subtle Decorative Code Icon */}
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none hidden md:block">
            <FaCode className="text-[16rem] rotate-12" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicSnapshot;
