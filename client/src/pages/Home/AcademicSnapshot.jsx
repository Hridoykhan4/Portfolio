/* eslint-disable no-unused-vars */
import { motion, useInView } from "motion/react";
import { useRef, useContext } from "react";
import {
  FaGraduationCap,
  FaGithub,
  FaCode,
  FaCalendarCheck,
  FaLayerGroup,
  FaTerminal,
  FaExternalLinkAlt,
} from "react-icons/fa";
import ThemeContext from "../../contexts/ThemeContext";

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
    detail: "Consistent habit",
  },
  {
    label: "Repositories",
    value: "92+",
    icon: FaLayerGroup,
    detail: "Public projects",
  },
];

const AcademicSnapshot = () => {
  const { theme } = useContext(ThemeContext);
  const sectionRef = useRef(null);
  const bannerRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const isBannerInView = useInView(bannerRef, { once: false, margin: "-50px" });

  return (
    <section
      ref={sectionRef}
      className="relative section-spacing bg-base-100 overflow-hidden"
      aria-labelledby="academic-heading"
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]"
          animate={
            isInView
              ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }
              : {}
          }
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-page relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-base-200/80 border border-base-content/10 backdrop-blur-sm mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FaGraduationCap className="text-primary text-sm" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-primary">
              Education & Growth
            </span>
          </motion.div>

          {/* Title */}
          <h2
            id="academic-heading"
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight mb-4"
          >
            Academic <span className="text-linear">Foundation</span>
          </h2>

          <p className="text-base-content/60 max-w-2xl text-sm md:text-base leading-relaxed">
            Combining formal education with consistent hands-on development and
            open-source contributions.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Education Card - Spans 2 columns on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="md:col-span-2 group relative rounded-3xl overflow-hidden bg-base-200/50 border border-base-content/5 backdrop-blur-sm p-8 md:p-10"
          >
            {/* Hover linear */}
            <motion.div
              className="absolute inset-0 bg-linear-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ transform: "translateZ(-5px)" }}
            />

            <div className="relative">
              {/* Icon */}
              <motion.div
                className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <FaGraduationCap className="text-2xl text-primary" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-3 group-hover:text-primary transition-colors">
                BSc in Computer Science & Engineering
              </h3>

              <p className="text-base-content/50 font-bold uppercase text-xs tracking-wider mb-8">
                Port City International University
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-xs font-bold text-primary">
                    Engineering Discipline
                  </span>
                </div>
                <div className="px-4 py-2 rounded-full bg-base-300/50 border border-base-content/5">
                  <span className="text-xs font-semibold text-base-content/70">
                    Chittagong, Bangladesh
                  </span>
                </div>
              </div>
            </div>

            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500 pointer-events-none"
              whileHover={{ scale: 1.02 }}
            />
          </motion.div>

          {/* GitHub Link Card */}
          <motion.a
            href="https://github.com/Hridoykhan4"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative rounded-3xl overflow-hidden bg-base-200/50 border border-base-content/5 backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center"
          >
            {/* Hover Background */}
            <motion.div className="absolute inset-0 bg-linear-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              {/* Animated GitHub Icon */}
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
              >
                <FaGithub className="text-3xl text-primary" />
              </motion.div>

              <h4 className="text-lg font-black mb-2 group-hover:text-primary transition-colors">
                View GitHub
              </h4>

              <p className="text-xs text-base-content/50 mb-4">
                Explore all repositories
              </p>

              <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                <span className="text-xs font-bold">Visit Profile</span>
                <FaExternalLinkAlt className="text-[10px]" />
              </div>
            </div>

            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-linear(circle at center, var(--color-primary) 0%, transparent 70%)",
                opacity: 0.1,
              }}
            />
          </motion.a>
        </div>

        {/* GitHub Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {GITHUB_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative rounded-3xl overflow-hidden bg-base-200/30 border border-base-content/5 backdrop-blur-sm p-8 text-center"
            >
              {/* Hover Background */}
              <motion.div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="text-2xl text-base-content/30 group-hover:text-primary transition-colors mb-4 mx-auto" />
                </motion.div>

                {/* Value */}
                <motion.div
                  className="text-4xl md:text-5xl font-black tracking-tighter mb-2 text-primary"
                  initial={{ scale: 0.8 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + idx * 0.1, type: "spring" }}
                >
                  {stat.value}
                </motion.div>

                {/* Label */}
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-base-content/40 mb-3">
                  {stat.label}
                </p>

                {/* Detail */}
                <p className="text-xs text-base-content/50 font-medium">
                  {stat.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Growth Banner - Theme Aware */}
        <motion.div
          ref={bannerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isBannerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`
            relative rounded-3xl overflow-hidden p-8 md:p-12
            ${
              theme === "light"
                ? "bg-linear-to-br from-primary/90 to-primary text-primary-content"
                : "bg-linear-to-br from-base-200 to-base-300 text-base-content border border-primary/20"
            }
          `}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-linear(circle at 1px 1px, currentColor 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            {/* Content */}
            <div className="max-w-2xl">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 mb-5"
                whileHover={{ x: 3 }}
              >
                <FaTerminal
                  className={`text-base ${theme === "light" ? "text-primary-content/70" : "text-primary"}`}
                />
                <span
                  className={`text-[10px] font-black uppercase tracking-[0.3em] ${theme === "light" ? "text-primary-content/60" : "text-primary/80"}`}
                >
                  Growth Mindset
                </span>
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl md:text-4xl font-black tracking-tight mb-5 leading-tight">
                Structured Learning.{" "}
                <span
                  className={theme === "light" ? "opacity-70" : "text-primary"}
                >
                  Verified Execution.
                </span>
              </h3>

              {/* Description */}
              <p
                className={`text-sm md:text-base leading-relaxed font-medium ${theme === "light" ? "text-primary-content/80" : "text-base-content/70"}`}
              >
                Academic foundation meets practical engineering. From
                experimental scripts to production systems, every project
                reflects disciplined implementation and public documentation.
              </p>
            </div>

            {/* CTA Button */}
            <motion.a
              href="https://github.com/Hridoykhan4"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`
                inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider shadow-xl transition-all
                ${
                  theme === "light"
                    ? "bg-primary-content text-primary hover:shadow-2xl"
                    : "bg-primary text-primary-content hover:shadow-primary/20"
                }
              `}
            >
              <FaGithub className="text-lg" />
              <span>View GitHub</span>
              <FaExternalLinkAlt className="text-[10px]" />
            </motion.a>
          </div>

          {/* Decorative Element */}
          <div
            className={`absolute -top-10 -right-10 opacity-5 pointer-events-none hidden lg:block ${theme === "light" ? "text-primary-content" : "text-primary"}`}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
              <FaCode className="text-[20rem]" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicSnapshot;
