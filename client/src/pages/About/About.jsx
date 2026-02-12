/* eslint-disable no-unused-vars */
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router";
import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaRocket,
  FaLightbulb,
  FaHeart,
  FaCheckCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const TECH_PROFICIENCY = [
  { name: "JavaScript", level: 80, icon: SiJavascript, color: "#F7DF1E" },
  { name: "React.js", level: 85, icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", level: 75, icon: FaNodeJs, color: "#339933" },
  { name: "MongoDB", level: 80, icon: SiMongodb, color: "#47A248" },
  { name: "Express.js", level: 75, icon: SiExpress, color: "#000000" },
  { name: "Tailwind CSS", level: 90, icon: SiTailwindcss, color: "#06B6D4" },
];

const GITHUB_STATS = [
  { label: "Commits", value: "923+", icon: FaCode },
  { label: "Repositories", value: "92+", icon: FaDatabase },
  { label: "Active Days", value: "300+", icon: FaCheckCircle },
];

const CORE_VALUES = [
  {
    icon: FaLightbulb,
    title: "Problem Solver",
    description: "Breaking down complex challenges into elegant solutions",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description: "Writing maintainable, well-documented, and testable code",
  },
  {
    icon: FaRocket,
    title: "Fast Learner",
    description: "Continuously adapting to new technologies and best practices",
  },
  {
    icon: FaHeart,
    title: "Passionate",
    description: "Genuinely excited about building great web experiences",
  },
];

const SEEKING_OPPORTUNITIES = [
  "Full-Time Developer Positions",
  "Contract-Based Projects",
  "Freelance MERN Opportunities",
  "Remote Collaboration",
  "Open Source Contributions",
];

const About = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const skillsRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: false, margin: "-100px" });
  const isStatsInView = useInView(statsRef, { once: false, margin: "-100px" });
  const isSkillsInView = useInView(skillsRef, {
    once: false,
    margin: "-100px",
  });

  return (
    <main className="min-h-screen bg-base-100 pt-24 pb-16">
      <div className="container-page">
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-base-200/80 border border-base-content/10 backdrop-blur-sm mb-6 shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <FaLaptopCode className="text-primary text-sm" />
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-primary">
                  About Me
                </span>
              </motion.div>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-6">
                Full-Stack <span className="text-gradient">Developer</span>
              </h1>

              {/* Tagline */}
              <p className="text-xl md:text-2xl font-semibold text-base-content/70 mb-8 leading-relaxed">
                Transforming ideas into scalable web applications with clean
                code and modern technologies.
              </p>

              {/* Description */}
              <div className="space-y-4 text-base-content/60 leading-relaxed">
                <p>
                  My name is <span className="text-primary font-semibold">
                    Md. Toyob Uddin Hridoy.
                  </span>{" "} I'm a{" "}
                  <span className="text-primary font-semibold">
                    BSc Computer Science & Engineering graduate
                  </span>{" "}
                  from Port City International University, specializing in the{" "}
                  <span className="text-primary font-semibold">MERN stack</span>
                  . With <strong>923+ commits</strong> and{" "}
                  <strong>92+ repositories</strong>, I've built a solid
                  foundation through consistent hands-on development.
                </p>

                <p>
                  My journey is defined by{" "}
                  <span className="text-primary font-semibold">
                    practical learning
                  </span>{" "}
                  — from building authentication systems with JWT to integrating
                  payment gateways with Stripe. I focus on writing{" "}
                  <strong>clean, maintainable code</strong> and creating{" "}
                  <strong>user-centric applications</strong> that solve real
                  problems.
                </p>

                <p>
                  Currently seeking opportunities to contribute my skills to{" "}
                  <span className="text-primary font-semibold">
                    innovative teams
                  </span>{" "}
                  and continue growing as a developer.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/projects" className="btn-cta group">
                  <FaRocket className="text-lg" />
                  View Projects
                  <motion.div
                    className="ml-1"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </Link>

                <a
                  href="https://github.com/Hridoykhan4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-soft group"
                >
                  <FaGithub className="text-lg" />
                  GitHub Profile
                  <FaExternalLinkAlt className="text-sm transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>

            {/* Right: Education Card */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 30 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative group rounded-3xl overflow-hidden bg-base-200/50 border border-base-content/5 backdrop-blur-sm p-8">
                {/* Hover Gradient */}
                <motion.div className="absolute inset-0 bg-linear-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaGraduationCap className="text-3xl text-primary" />
                  </motion.div>

                  {/* Content */}
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                      2022 — 2024
                    </span>
                    <h3 className="text-xl font-black mb-2">
                      BSc in Computer Science & Engineering
                    </h3>
                    <p className="text-sm text-base-content/60 mb-4">
                      Port City International University
                    </p>
                    <p className="text-sm text-base-content/50">
                      Focused on Software Engineering, Data Structures, Database
                      Systems, and Web Technologies.
                    </p>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                      CSE Graduate
                    </span>
                    <span className="px-3 py-1 rounded-full bg-base-300/50 text-base-content/70 text-xs font-semibold">
                      Chittagong
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* GitHub Stats */}
        <motion.section
          ref={statsRef}
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {GITHUB_STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative rounded-3xl overflow-hidden bg-base-200/30 border border-base-content/5 backdrop-blur-sm p-8 text-center"
              >
                <motion.div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="text-3xl text-primary mx-auto mb-4" />
                  </motion.div>

                  <div className="text-4xl md:text-5xl font-black tracking-tighter mb-2 text-primary">
                    {stat.value}
                  </div>

                  <p className="text-xs font-bold uppercase tracking-wider text-base-content/50">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills & Values Grid */}
        <motion.section ref={skillsRef} className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Tech Proficiency */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isSkillsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-black mb-8">
                Tech <span className="text-gradient">Proficiency</span>
              </h2>

              <div className="space-y-6">
                {TECH_PROFICIENCY.map((tech, idx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isSkillsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: idx * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <tech.icon
                          className="text-xl"
                          style={{ color: tech.color }}
                        />
                        <span className="font-bold text-base-content">
                          {tech.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-primary">
                        {tech.level}%
                      </span>
                    </div>

                    <div className="relative h-2 bg-base-300 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute inset-y-0 left-0 bg-linear-to-r from-primary to-accent rounded-full"
                        initial={{ width: 0 }}
                        animate={
                          isSkillsInView ? { width: `${tech.level}%` } : {}
                        }
                        transition={{ duration: 1, delay: idx * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Core Values */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isSkillsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-black mb-8">
                Core <span className="text-gradient">Values</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CORE_VALUES.map((value, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="group p-6 rounded-2xl bg-base-200/30 border border-base-content/5"
                  >
                    <value.icon className="text-2xl text-primary mb-3" />
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-sm text-base-content/60 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Seeking Opportunities Banner */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden bg-linear-to-br from-base-200 to-base-300 border border-primary/20 p-8 md:p-12"
        >
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-black mb-6">
              Ready to <span className="text-gradient">Build Together</span>?
            </h2>

            <p className="text-base-content/70 mb-8 max-w-2xl leading-relaxed">
              I'm actively seeking opportunities to contribute my skills and
              passion to innovative teams. Whether it's building MVPs, scaling
              applications, or collaborating on meaningful projects — let's
              connect!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {SEEKING_OPPORTUNITIES.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-2 text-sm"
                >
                  <FaCheckCircle className="text-primary shrink-0" />
                  <span className="font-semibold">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link to="/contact" className="btn-cta inline-flex">
              <FaRocket className="text-lg" />
              Let's Connect
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default About;
