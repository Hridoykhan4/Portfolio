// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useState } from "react";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiStripe,
  SiPostman,
  SiVite,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import {
  FaBootstrap,
  FaServer,
  FaShieldAlt,
  FaRocket,
  FaCode,
  FaLayerGroup,
} from "react-icons/fa";


const SKILL_DATA = {
  expertise: {
    title: "Production Expertise",
    subtitle: "Battle-tested in real projects",
    skills: [
      { name: "React 19", icon: SiReact, color: "#61DAFB", level: "Expert" },
      {
        name: "JavaScript ES6+",
        icon: SiJavascript,
        color: "#F7DF1E",
        level: "Expert",
      },
      {
        name: "Tailwind CSS 4",
        icon: SiTailwindcss,
        color: "#06B6D4",
        level: "Expert",
      },
      {
        name: "Node.js/Express",
        icon: SiNodedotjs,
        color: "#339933",
        level: "Advanced",
      },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: "Advanced" },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "#FFCA28",
        level: "Advanced",
      },
    ],
  },
  tools: {
    title: "Professional Tools",
    subtitle: "Modern development workflow",
    skills: [
      {
        name: "React Router v7",
        icon: FaLayerGroup,
        color: "#CA4245",
        level: "Advanced",
      },
      {
        name: "TanStack Query",
        icon: FaRocket,
        color: "#FF4154",
        level: "Advanced",
      },
      {
        name: "Framer Motion",
        icon: FaCode,
        color: "#FF0055",
        level: "Advanced",
      },
      {
        name: "DaisyUI 5",
        icon: FaLayerGroup,
        color: "#FF9903",
        level: "Expert",
      },
      {
        name: "Bootstrap 5",
        icon: FaBootstrap,
        color: "#7952B3",
        level: "Advanced",
      },
      { name: "Vite", icon: SiVite, color: "#646CFF", level: "Advanced" },
    ],
  },
  backend: {
    title: "Backend & Integration",
    subtitle: "Secure, scalable systems",
    skills: [
      {
        name: "Express.js",
        icon: SiExpress,
        color: "#ffffff",
        level: "Advanced",
      },
      {
        name: "JWT Auth",
        icon: FaShieldAlt,
        color: "#10b981",
        level: "Advanced",
      },
      {
        name: "Stripe Payments",
        icon: SiStripe,
        color: "#635BFF",
        level: "Intermediate",
      },
      {
        name: "REST APIs",
        icon: FaServer,
        color: "#3b82f6",
        level: "Advanced",
      },
      { name: "Postman", icon: SiPostman, color: "#FF6C37", level: "Advanced" },
    ],
  },
  learning: {
    title: "Active Learning",
    subtitle: "Expanding capabilities",
    skills: [
      {
        name: "Next.js 15",
        icon: SiNextdotjs,
        color: "#ffffff",
        level: "Learning",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        level: "Learning",
      },
    ],
  },
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("expertise");

  const categories = [
    { key: "expertise", label: "Core Stack", icon: FaCode },
    { key: "tools", label: "Tools & Libraries", icon: FaLayerGroup },
    { key: "backend", label: "Backend & APIs", icon: FaServer },
    { key: "learning", label: "Learning", icon: FaRocket },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert":
        return "text-green-500";
      case "Advanced":
        return "text-primary";
      case "Intermediate":
        return "text-yellow-500";
      case "Learning":
        return "text-accent";
      default:
        return "text-base-content/50";
    }
  };

  const getLevelDots = (level) => {
    switch (level) {
      case "Expert":
        return 5;
      case "Advanced":
        return 4;
      case "Intermediate":
        return 3;
      case "Learning":
        return 2;
      default:
        return 1;
    }
  };

  return (
    <section className="relative section-spacing overflow-hidden bg-base-100">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 blur-[120px] rounded-full" />
      </div>

      <div className="container-page relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8">
            <FaCode className="text-primary" size={14} />
            <span className="text-xs font-black tracking-[0.2em] uppercase text-primary">
              Technical Arsenal
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] mb-6">
            Tech Stack & <span className="text-">Expertise</span>
          </h2>

          <p className="text-lg md:text-xl text-base-content/70 max-w-2xl leading-relaxed">
            <span className="text-primary font-semibold">2+ years</span>{" "}
            building production-grade applications. From concept to deployment,
            I craft <span className="text-accent font-semibold">scalable</span>,{" "}
            <span className="text-primary font-semibold">secure</span>, and{" "}
            <span className="text-base-content font-semibold">
              user-centric
            </span>{" "}
            solutions.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm
                border-2 transition-all duration-300
                ${
                  activeCategory === cat.key
                    ? "bg-primary text-primary-content border-primary shadow-lg shadow-primary/20"
                    : "bg-base-200/40 text-base-content border-base-content/10 hover:border-primary/30"
                }
              `}
            >
              <cat.icon size={16} />
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Category Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-end justify-between mb-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-2">
                {SKILL_DATA[activeCategory].title}
              </h3>
              <p className="text-base-content/60">
                {SKILL_DATA[activeCategory].subtitle}
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SKILL_DATA[activeCategory].skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="relative group"
              >
                <div className="relative bg-base-200/50 backdrop-blur-sm border border-base-content/5 rounded-2xl p-6 hover:bg-base-200/80 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-(135deg, ${skill.color}20, ${skill.color}10)`,
                    }}
                  >
                    <skill.icon size={28} style={{ color: skill.color }} />
                  </div>

                  {/* Name */}
                  <h4 className="font-bold text-base mb-2 text-base-content leading-tight">
                    {skill.name}
                  </h4>

                  {/* Level Badge */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-black uppercase tracking-wider ${getLevelColor(
                        skill.level,
                      )}`}
                    >
                      {skill.level}
                    </span>

                    {/* Level Dots */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            i < getLevelDots(skill.level)
                              ? getLevelColor(skill.level).replace(
                                  "text-",
                                  "bg-",
                                )
                              : "bg-base-content/10"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-(circle at center, ${skill.color}, transparent 70%)`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Stats/Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Stat 1 */}
          <div className="relative overflow-hidden rounded-2xl bg--to-br from-primary/10 to-transparent border border-primary/20 p-6">
            <div className="relative z-10">
              <div className="text-4xl font-black text-primary mb-2">20+</div>
              <p className="text-sm font-semibold text-base-content/80">
                Technologies Mastered
              </p>
              <p className="text-xs text-base-content/60 mt-1">
                Across frontend, backend & tools
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 text-8xl text-primary/5">
              <FaCode />
            </div>
          </div>

          {/* Stat 2 */}
          <div className="relative overflow-hidden rounded-2xl bg--to-br from-accent/10 to-transparent border border-accent/20 p-6">
            <div className="relative z-10">
              <div className="text-4xl font-black text-accent mb-2">15+</div>
              <p className="text-sm font-semibold text-base-content/80">
                Production Projects
              </p>
              <p className="text-xs text-base-content/60 mt-1">
                Real-world experience building
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 text-8xl text-accent/5">
              <FaRocket />
            </div>
          </div>

          {/* Stat 3 */}
          <div className="relative overflow-hidden rounded-2xl bg--to-br from-green-500/10 to-transparent border border-green-500/20 p-6">
            <div className="relative z-10">
              <div className="text-4xl font-black text-green-500 mb-2">
                Clean
              </div>
              <p className="text-sm font-semibold text-base-content/80">
                Code Architecture
              </p>
              <p className="text-xs text-base-content/60 mt-1">
                Scalable, maintainable, documented
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 text-8xl text-green-500/5">
              <FaShieldAlt />
            </div>
          </div>
        </motion.div>

        {/* Professional Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 p-8 rounded-3xl bg-base-200/40 border border-base-content/5 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <FaShieldAlt size={32} />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-black tracking-tight mb-2">
                Production-Ready Mindset
              </h4>
              <p className="text-base-content/70 leading-relaxed">
                I don't just write code—I architect{" "}
                <span className="text-primary font-semibold">secure</span>,{" "}
                <span className="text-accent font-semibold">optimized</span>,
                and{" "}
                <span className="text-base-content font-semibold">
                  SEO-friendly
                </span>{" "}
                systems. Every project is built with scalability,
                maintainability, and user experience at its core.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="px-4 py-2 rounded-xl bg-base-100 border border-base-content/10 text-xs font-bold uppercase tracking-wider">
                Clean Code
              </div>
              <div className="px-4 py-2 rounded-xl bg-base-100 border border-base-content/10 text-xs font-bold uppercase tracking-wider">
                Best Practices
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
