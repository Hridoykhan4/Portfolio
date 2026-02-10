/* eslint-disable no-unused-vars */
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  FaGraduationCap,
  FaGithub,
  FaCode,
  FaMapMarkerAlt,
  FaRocket,
  FaAward,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

const STATS = [
  {
    icon: FaCode,
    label: "Development",
    value: "92+ Repos",
    sub: "Open Source & Full-Stack",
    color: "#2563eb",
  },
  {
    icon: FaRocket,
    label: "Specialization",
    value: "MERN Stack",
    sub: "Enterprise-Ready Solutions",
    color: "#7c3aed",
  },
  {
    icon: FaGraduationCap,
    label: "Education",
    value: "BSc in CSE",
    sub: "Port City International University",
    color: "#059669",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Availability",
    value: "Remote / BD",
    sub: "Ready for global relocation",
    color: "#dc2626",
  },
];

const AcademicSnapshot = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-50px" });

  return (
    <section ref={sectionRef} className="relative bg-base-100 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"
          animate={
            isInView
              ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }
              : {}
          }
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]"
          animate={
            isInView
              ? {
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }
              : {}
          }
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container-page relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-base-200/80 border border-base-content/10 backdrop-blur-sm mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FaAward className="text-primary text-sm" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-base-content/70">
              Professional Profile
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4">
            Quick <span className="text-linear">Overview</span>
          </h2>
          <p className="text-base-content/60 max-w-2xl mx-auto text-sm md:text-base">
            Dedicated to delivering scalable web solutions with modern
            technologies
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Top Border */}
          <motion.div
            className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-base-content/20 to-transparent"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />

          {/* Bottom Border */}
          <motion.div
            className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-base-content/20 to-transparent"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />

          {/* Background Glow on Hover */}
          <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl blur-2xl" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 py-12 relative">
            {STATS.map((stat, idx) => (
              <StatCard
                key={idx}
                stat={stat}
                index={idx}
                isInView={isInView}
                isLast={idx === STATS.length - 1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, index, isInView, isLast }) => {
  const { icon: Icon, label, value, sub, color } = stat;

  return (
    <motion.div
      className="relative flex flex-col items-center lg:items-start px-6 lg:px-8 group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.3 + index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{ y: -4 }}
    >
      {/* Vertical Divider (Desktop) */}
      {!isLast && (
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-linear-to-b from-transparent via-base-content/10 to-transparent" />
      )}

      {/* Icon + Label */}
      <motion.div
        className="flex items-center gap-3 mb-4"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="relative p-3 rounded-xl bg-base-200 group-hover:bg-base-300 transition-colors"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="text-xl" style={{ color }} />

          {/* Icon Glow */}
          <motion.div
            className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-40"
            style={{ backgroundColor: color }}
            initial={false}
            whileHover={{ scale: 1.2 }}
          />
        </motion.div>

        <span className="text-[9px] font-black uppercase tracking-[0.25em] text-base-content/40">
          {label}
        </span>
      </motion.div>

      {/* Value */}
      <motion.h3
        className="text-3xl md:text-4xl font-black tracking-tighter text-base-content mb-2 text-center lg:text-left"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 + index * 0.1 }}
      >
        {value}
      </motion.h3>

      {/* Subtitle */}
      <p className="text-xs font-semibold text-base-content/60 text-center lg:text-left leading-relaxed">
        {sub}
      </p>

      {/* Animated Underline on Hover */}
      <motion.div
        className="absolute bottom-0 left-6 right-6 h-0.5 bg-linear-to-r from-primary to-accent rounded-full"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default AcademicSnapshot;
