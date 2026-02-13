/* eslint-disable no-unused-vars */
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router";
import {
  FaGithub,
  FaLinkedinIn,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCode,
  FaLayerGroup,
  FaCalendarCheck,
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaShieldAlt,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

/* ========== VERIFIED DATA ========== */
const GITHUB_STATS = [
  {
    value: "923+",
    label: "Total Commits",
    icon: FaCode,
    detail: "Consistent development",
  },
  {
    value: "92+",
    label: "Repositories",
    icon: FaLayerGroup,
    detail: "Full-stack projects",
  },
  {
    value: "300+",
    label: "Active Days",
    icon: FaCalendarCheck,
    detail: "Daily practice",
  },
];

const TECH_STACK = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "React.js", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Tailwind CSS", icon: SiTailwindcss },
];

const BUSINESS_VALUE = [
  {
    icon: FaShieldAlt,
    title: "Authentication & Security",
    detail: "Built JWT-based auth systems with secure session management",
  },
  {
    icon: FaLayerGroup,
    title: "Scalable Architecture",
    detail: "REST APIs designed for growth and maintainability",
  },
  {
    icon: FaUsers,
    title: "User-Centric Interfaces",
    detail: "Responsive UIs with accessibility and performance in mind",
  },
  {
    icon: FaLightbulb,
    title: "Problem-Solving",
    detail: "Logical debugging and systematic approach to challenges",
  },
];

const WORK_VALUES = [
  "Clear communication and collaborative mindset",
  "Clean, documented, and maintainable code",
  "Proactive learning and adapting to team standards",
  "Ownership of features from concept to deployment",
  "Remote-first work ethic with strong self-management",
];

const About = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const valueRef = useRef(null);

  // FIX: Set once: true to prevent flickering when scrolling up and down
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const isValueInView = useInView(valueRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-base-100 section-spacing overflow-x-hidden">
      <div className="container-page">
        {/* ========== HERO SECTION ========== */}
        <motion.section
          ref={heroRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          {/* Location Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200/80 border border-base-content/10 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <FaMapMarkerAlt className="text-primary text-xs" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-base-content/60">
              Chittagong, Bangladesh • Remote Ready
            </span>
          </motion.div>

          {/* Name & Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight mb-6">
            Md. Toyob Uddin Hridoy
          </h1>

          <p className="text-xl md:text-2xl font-bold text-primary mb-8">
            Full-Stack Web Developer • MERN Stack Specialist
          </p>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-base-200/40 border border-base-content/5">
              <FaGraduationCap className="text-2xl text-primary" />
              <div>
                <p className="font-bold text-sm">BSc in CSE</p>
                <p className="text-xs text-base-content/60">
                  Port City University
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-base-200/40 border border-base-content/5">
              <FaCode className="text-2xl text-primary" />
              <div>
                <p className="font-bold text-sm">923+ Commits</p>
                <p className="text-xs text-base-content/60">
                  Proven track record
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-base-200/40 border border-base-content/5">
              <FaRocket className="text-2xl text-primary" />
              <div>
                <p className="font-bold text-sm">Remote/Office</p>
                <p className="text-xs text-base-content/60">
                  Flexible & available
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/Hridoykhan4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-base-200/60 border border-base-content/10 hover:border-primary hover:bg-base-200 transition-all text-sm font-semibold group"
            >
              <FaGithub />
              <span>GitHub</span>
              <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-toyob-uddin-hridoy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-base-200/60 border border-base-content/10 hover:border-primary hover:bg-base-200 transition-all text-sm font-semibold group"
            >
              <FaLinkedinIn />
              <span>LinkedIn</span>
              <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </motion.section>

        {/* ========== PROFESSIONAL OVERVIEW ========== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Who I <span className="text-linear">Am</span>
            </h2>

            <div className="space-y-5 text-base-content/70 leading-relaxed">
              <p>
                I'm a <strong>Computer Science graduate</strong> with a BSc from
                Port City International University, specializing in building{" "}
                <strong>production-ready web applications</strong> using the
                MERN stack.
              </p>

              <p>
                What started as curiosity about how websites work evolved into{" "}
                <strong>systematic skill development</strong>. Over the past
                year, I've maintained <strong>consistent daily practice</strong>{" "}
                — reflected in my <strong>923+ commits</strong> and{" "}
                <strong>92+ repositories</strong> on GitHub.
              </p>

              <p>
                I focus on writing <strong>clean, maintainable code</strong>{" "}
                that solves real business problems. From implementing JWT
                authentication to integrating Stripe payments, I've built
                features that deliver value and scale with growth.
              </p>

              <p>
                I'm seeking opportunities where I can contribute to{" "}
                <strong>meaningful products</strong>, collaborate with
                experienced engineers, and continue growing as a professional
                developer.
              </p>
            </div>
          </motion.div>

          {/* Right: Academic Excellence + GitHub Proof */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Education Card */}
            <div className="p-8 rounded-3xl bg-base-200/50 border border-base-content/5 relative group">
              <motion.div className="absolute inset-0 bg-linear-to-br from-primary/5 to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className="p-3 rounded-xl bg-primary/10"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaGraduationCap className="text-2xl text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-primary mb-2">
                      2022 — 2025
                    </p>
                    <h3 className="text-xl font-black mb-1">
                      BSc in Computer Science & Engineering
                    </h3>
                    <p className="text-sm text-base-content/60">
                      Port City International University
                    </p>
                  </div>
                </div>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  Strong foundation in <strong>Data Structures</strong>,{" "}
                  <strong>Algorithms</strong>, <strong>Database Systems</strong>
                  , and <strong>Software Engineering</strong> — essential
                  knowledge for building scalable applications.
                </p>
              </div>
            </div>

            {/* GitHub Stats */}
            <div className="grid grid-cols-3 gap-3">
              {GITHUB_STATS.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="p-4 rounded-2xl bg-base-200/40 border border-base-content/5 text-center"
                >
                  <stat.icon className="text-xl text-primary mx-auto mb-2" />
                  <div className="text-2xl font-black text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[9px] uppercase tracking-wider text-base-content/50 font-bold">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="p-6 rounded-2xl bg-base-200/40 border border-base-content/5">
              <p className="text-xs font-black uppercase tracking-wider text-base-content/50 mb-4">
                Core Technologies
              </p>
              <div className="grid grid-cols-3 gap-3">
                {TECH_STACK.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-base-300/30 hover:bg-base-300/50 transition-colors"
                  >
                    <tech.icon className="text-xl text-primary" />
                    <span className="text-[10px] font-semibold text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========== BUSINESS VALUE SECTION ========== */}
        <motion.section
          ref={valueRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isValueInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            What I <span className="text-linear">Deliver</span>
          </h2>
          <p className="text-base-content/60 mb-12 max-w-2xl">
            Real business value through technical solutions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BUSINESS_VALUE.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isValueInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -3, scale: 1.01 }}
                className="p-6 rounded-2xl bg-base-200/40 border border-base-content/5"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <item.icon className="text-xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-base-content/70">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ========== TEAM FIT SECTION ========== */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} // FIX: once: true
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            How I <span className="text-linear">Work</span>
          </h2>
          <p className="text-base-content/60 mb-10 max-w-2xl">
            Professional mindset built for collaborative teams
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WORK_VALUES.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-3 p-5 rounded-2xl bg-base-200/30 border border-base-content/5"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-sm font-medium text-base-content/80">
                  {value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ========== CTA SECTION ========== */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.8 , delay: 0.5}}
          className="relative rounded-3xl overflow-hidden bg-linear-to-br from-base-200 to-base-300 border border-primary/20 p-10 md:p-16 text-center"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Let's Build <span className="text-linear">Together</span>
            </h2>

            <p className="text-base-content/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm actively seeking <strong>full-time positions</strong> or{" "}
              <strong>remote opportunities</strong> where I can contribute to
              meaningful products, work with experienced teams, and deliver real
              impact.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-cta">
                <FaRocket />
                Get In Touch
              </Link>
              <Link to="/projects" className="btn-cta-soft">
                <FaLayerGroup />
                View Projects
              </Link>
            </div>
          </div>

          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -mr-36 -mt-36" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -ml-36 -mb-36" />
        </motion.section>
      </div>
    </main>
  );
};

export default About;