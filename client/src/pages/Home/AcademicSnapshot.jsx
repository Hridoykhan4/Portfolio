/* eslint-disable no-unused-vars */
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  FaGraduationCap,
  FaGithub,
  FaCode,
  FaMapMarkerAlt,
  FaRocket,
  FaFire,
  FaStar,
  FaCodeBranch,
} from "react-icons/fa";

// Real GitHub Stats based on the image
const GITHUB_STATS = [
  {
    icon: FaGithub,
    label: "Total Commits",
    value: "913",
    sub: "Consistent dedication since Jan 2024",
    color: "#2563eb",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FaFire,
    label: "Current Streak",
    value: "1 Day",
    sub: "Building every single day",
    color: "#f59e0b",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    icon: FaCodeBranch,
    label: "Total Repos",
    value: "92+",
    sub: "Open source & full-stack projects",
    color: "#7c3aed",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: FaStar,
    label: "Languages",
    value: "JS 79.85%",
    sub: "HTML, CSS & Modern frameworks",
    color: "#10b981",
    gradient: "from-green-500 to-emerald-500",
  },
];

const PROFILE_CARDS = [
  {
    title: "Education",
    value: "BSc in CSE",
    detail: "Port City International University",
    icon: FaGraduationCap,
    color: "#059669",
  },
  {
    title: "Stack",
    value: "MERN",
    detail: "Self-taught & Production-ready",
    icon: FaRocket,
    color: "#2563eb",
  },
  {
    title: "Location",
    value: "Bangladesh",
    detail: "Open to remote opportunities",
    icon: FaMapMarkerAlt,
    color: "#dc2626",
  },
];

const AcademicSnapshot = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-base-100 section-spacing overflow-hidden"
      aria-labelledby="snapshot-heading"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"
          animate={
            isInView
              ? {
                  scale: [1, 1.1, 1],
                  x: [0, 30, 0],
                }
              : {}
          }
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]"
          animate={
            isInView
              ? {
                  scale: [1, 1.15, 1],
                  x: [0, -30, 0],
                }
              : {}
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container-page relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-base-200/60 border border-base-content/8 backdrop-blur-xl mb-8 shadow-lg">
            <FaCode className="text-primary text-sm" />
            <span className="text-[11px] font-black tracking-[0.22em] uppercase text-base-content/70">
              Developer Profile
            </span>
          </div>

          {/* Title */}
          <h2
            id="snapshot-heading"
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] mb-6"
          >
            My <span className="text-gradient">Journey</span>.
          </h2>

          <p className="text-base md:text-lg text-base-content/70 max-w-2xl leading-relaxed font-medium">
            <span className="text-base-content font-semibold">
              Self-taught MERN developer
            </span>{" "}
            with a BSc in Computer Science. Building scalable applications
            through{" "}
            <span className="text-primary font-semibold">
              consistent practice
            </span>{" "}
            and{" "}
            <span className="text-accent font-semibold">
              real-world projects
            </span>
            .
          </p>
        </motion.div>

        {/* GitHub Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-16"
        >
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-8">
            <FaGithub className="text-2xl text-base-content/50" />
            <h3 className="text-xl md:text-2xl font-bold text-base-content/80 tracking-tight">
              GitHub Activity
            </h3>
            <div className="flex-1 h-px bg-base-content/10" />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {GITHUB_STATS.map((stat, idx) => (
              <GitHubStatCard
                key={idx}
                stat={stat}
                index={idx}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>

        {/* Profile Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-8">
            <FaGraduationCap className="text-2xl text-base-content/50" />
            <h3 className="text-xl md:text-2xl font-bold text-base-content/80 tracking-tight">
              Professional Overview
            </h3>
            <div className="flex-1 h-px bg-base-content/10" />
          </div>

          {/* Profile Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {PROFILE_CARDS.map((card, idx) => (
              <ProfileCard
                key={idx}
                card={card}
                index={idx}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>

        {/* Self-Taught Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-16 relative overflow-hidden"
        >
          <div className="relative bg-base-200/40 border border-base-content/5 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl" />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <h4 className="text-2xl md:text-3xl font-black tracking-tight mb-3">
                    💡 Self-Taught Developer
                  </h4>
                  <p className="text-sm md:text-base text-base-content/70 leading-relaxed">
                    No bootcamps, no certificates—just{" "}
                    <span className="text-primary font-semibold">
                      dedication
                    </span>
                    ,{" "}
                    <span className="text-accent font-semibold">
                      documentation
                    </span>
                    , and{" "}
                    <span className="text-base-content font-semibold">
                      900+ commits
                    </span>{" "}
                    of hands-on learning.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="flex-shrink-0"
              >
                <a
                  href="https://github.com/Hridoykhan4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-base-content text-base-100 rounded-2xl font-bold text-sm md:text-base transition-all duration-300 hover:shadow-lg hover:shadow-base-content/20"
                >
                  <FaGithub className="text-xl" />
                  View GitHub Profile
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// GitHub Stat Card Component
const GitHubStatCard = ({ stat, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: 0.3 + index * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative group"
    >
      <div className="relative bg-base-200/50 border border-base-content/5 rounded-2xl p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-base-200/70 hover:shadow-xl hover:shadow-primary/5">
        {/* Icon */}
        <motion.div
          animate={isHovered ? { rotate: 360, scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
          style={{
            background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}10)`,
          }}
        >
          <stat.icon className="text-2xl" style={{ color: stat.color }} />
        </motion.div>

        {/* Label */}
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-base-content/50 mb-2">
          {stat.label}
        </p>

        {/* Value */}
        <motion.h4
          className="text-3xl md:text-4xl font-black tracking-tighter mb-2"
          style={{
            background: `linear-gradient(to right, ${stat.color}, ${stat.color}80)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {stat.value}
        </motion.h4>

        {/* Subtitle */}
        <p className="text-xs text-base-content/60 leading-relaxed">
          {stat.sub}
        </p>

        {/* Animated Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
          style={{
            background: `linear-gradient(to right, ${stat.color}, ${stat.color}60)`,
          }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
        />

        {/* Glow effect on hover */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-20 pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, ${stat.color}, transparent 70%)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
          />
        )}
      </div>
    </motion.div>
  );
};

// Profile Card Component
const ProfileCard = ({ card, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: 0.5 + index * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -6 }}
      className="relative group"
    >
      <div className="relative bg-base-200/50 border border-base-content/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-base-200/70 hover:shadow-xl hover:shadow-primary/5 h-full">
        {/* Icon with glow */}
        <motion.div
          animate={isHovered ? { scale: 1.15, rotate: 5 } : { scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6"
          style={{
            background: `linear-gradient(135deg, ${card.color}20, ${card.color}10)`,
          }}
        >
          <card.icon className="text-2xl" style={{ color: card.color }} />

          {/* Icon pulse effect on hover */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-xl"
              style={{ backgroundColor: card.color }}
              initial={{ scale: 1, opacity: 0.3 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          )}
        </motion.div>

        {/* Title */}
        <p className="text-xs font-black uppercase tracking-[0.2em] text-base-content/50 mb-3">
          {card.title}
        </p>

        {/* Value */}
        <h4 className="text-2xl md:text-3xl font-black tracking-tight mb-2 text-base-content">
          {card.value}
        </h4>

        {/* Detail */}
        <p className="text-sm text-base-content/70 leading-relaxed">
          {card.detail}
        </p>

        {/* Decorative corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-16 h-16 rounded-bl-full opacity-10"
          style={{ backgroundColor: card.color }}
          animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
};

export default AcademicSnapshot;
