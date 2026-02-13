/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { motion, useInView } from "motion/react";
import { useRef } from "react";
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
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiFramer,
} from "react-icons/si";
import {
  FaCode,
  FaServer,
  FaTools,
  FaShieldAlt,
  FaLayerGroup,
  FaRocket,
} from "react-icons/fa";

/* ========== PROFESSIONAL SKILL ORGANIZATION ========== */
const SKILL_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: FaCode,
    description: "Responsive, accessible, and performant user interfaces",
    skills: [
      { name: "React.js", icon: SiReact, proficiency: 5, color: "#61DAFB" },
      {
        name: "JavaScript (ES6+)",
        icon: SiJavascript,
        proficiency: 5,
        color: "#F7DF1E",
      },
      { name: "HTML5", icon: SiHtml5, proficiency: 5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, proficiency: 5, color: "#1572B6" },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        proficiency: 5,
        color: "#06B6D4",
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
        proficiency: 4,
        color: "#7952B3",
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
        proficiency: 4,
        color: "#FF0055",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        proficiency: 3,
        color: "#3178C6",
      },
      { name: "Next.js", icon: SiNextdotjs, proficiency: 3, color: "#ffffff" },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: FaServer,
    description: "Secure, scalable server-side architectures",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, proficiency: 4, color: "#339933" },
      { name: "Express.js", icon: SiExpress, proficiency: 4, color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, proficiency: 4, color: "#47A248" },
      { name: "Firebase", icon: SiFirebase, proficiency: 4, color: "#FFCA28" },
      { name: "REST APIs", icon: FaServer, proficiency: 4, color: "#10b981" },
      {
        name: "JWT Authentication",
        icon: FaShieldAlt,
        proficiency: 4,
        color: "#3b82f6",
      },
      {
        name: "Stripe Integration",
        icon: SiStripe,
        proficiency: 3,
        color: "#635BFF",
      },
    ],
  },
  {
    id: "tools",
    title: "Development Tools",
    icon: FaTools,
    description: "Modern workflow and deployment platforms",
    skills: [
      { name: "Git", icon: SiGit, proficiency: 5, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, proficiency: 5, color: "#ffffff" },
      { name: "Vite", icon: SiVite, proficiency: 4, color: "#646CFF" },
      { name: "Postman", icon: SiPostman, proficiency: 4, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, proficiency: 4, color: "#ffffff" },
      { name: "Netlify", icon: SiNetlify, proficiency: 4, color: "#00C7B7" },
    ],
  },
];

const PROFICIENCY_LABELS = {
  5: {
    label: "Expert",
    description: "Production-ready",
    color: "text-green-500",
    bgColor: "bg-green-500",
  },
  4: {
    label: "Advanced",
    description: "Highly proficient",
    color: "text-primary",
    bgColor: "bg-primary",
  },
  3: {
    label: "Intermediate",
    description: "Actively learning",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500",
  },
};

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <main className="bg-base-100 section-spacing">
      <div className="container-page">
        {/* ========== HEADER ========== */}
        <motion.section
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-base-200/80 border border-base-content/10 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <FaRocket className="text-primary text-sm" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-primary">
              Technical Skills
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-base-content/70 max-w-3xl leading-relaxed">
            <strong>2+ years</strong> of hands-on development experience
            building{" "}
            <span className="text-primary font-semibold">production-ready</span>{" "}
            web applications. Specialized in the <strong>MERN stack</strong>{" "}
            with a focus on{" "}
            <span className="text-primary font-semibold">clean code</span>,{" "}
            <span className="text-accent font-semibold">scalability</span>, and{" "}
            <span className="text-primary font-semibold">user experience</span>.
          </p>
        </motion.section>

        {/* ========== CATEGORIES (CARD-BASED) ========== */}
        <div className="space-y-16 mb-20">
          {SKILL_CATEGORIES.map((category, catIdx) => {
            const categoryRef = useRef(null);
            const isCategoryInView = useInView(categoryRef, {
              once: true,
              margin: "-80px",
            });

            return (
              <motion.div
                key={category.id}
                ref={categoryRef}
                initial={{ opacity: 0, y: 40 }}
                animate={isCategoryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-primary/10">
                    <category.icon className="text-3xl md:text-4xl text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-1">
                      {category.title}
                    </h2>
                    <p className="text-sm md:text-base text-base-content/60">
                      {category.description}
                    </p>
                  </div>
                  {/* Skill Count */}
                  <div className="hidden sm:flex items-center justify-center w-14 h-14 rounded-full bg-base-200/80 border border-base-content/10">
                    <div className="text-center">
                      <div className="text-xl font-black text-primary">
                        {category.skills.length}
                      </div>
                      <div className="text-[7px] uppercase tracking-wider font-bold text-base-content/50">
                        Skills
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={isCategoryInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: idx * 0.05,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="group"
                    >
                      <div className="relative p-5 md:p-6 rounded-2xl bg-base-200/50 border border-base-content/5 hover:border-primary/20 hover:bg-base-200/80 transition-all duration-300 h-full">
                        {/* Icon & Badge Row */}
                        <div className="flex items-center justify-between mb-4">
                          <div
                            className="p-2.5 md:p-3 rounded-xl transition-transform group-hover:scale-110 duration-300"
                            style={{ backgroundColor: `${skill.color}15` }}
                          >
                            <skill.icon
                              className="text-2xl md:text-3xl"
                              style={{ color: skill.color }}
                            />
                          </div>

                          {/* Proficiency Badge */}
                          <div
                            className={`px-2.5 md:px-3 py-1 rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-wider ${
                              PROFICIENCY_LABELS[skill.proficiency].color
                            } bg-base-300/50`}
                          >
                            {PROFICIENCY_LABELS[skill.proficiency].label}
                          </div>
                        </div>

                        {/* Skill Name */}
                        <h3 className="text-base md:text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                          {skill.name}
                        </h3>

                        {/* Proficiency Dots */}
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex gap-1.5">
                            {[1, 2, 3, 4, 5].map((level) => (
                              <motion.div
                                key={level}
                                className="relative"
                                initial={{ scale: 0 }}
                                animate={isCategoryInView ? { scale: 1 } : {}}
                                transition={{
                                  delay: 0.3 + idx * 0.03 + level * 0.05,
                                  type: "spring",
                                  stiffness: 200,
                                  damping: 15,
                                }}
                              >
                                <div
                                  className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                                    level <= skill.proficiency
                                      ? PROFICIENCY_LABELS[skill.proficiency]
                                          .bgColor
                                      : "bg-base-300"
                                  } ${
                                    level <= skill.proficiency
                                      ? "scale-100"
                                      : "scale-75 opacity-40"
                                  }`}
                                />
                                {/* Subtle Glow */}
                                {level <= skill.proficiency && (
                                  <div
                                    className={`absolute inset-0 rounded-full ${
                                      PROFICIENCY_LABELS[skill.proficiency]
                                        .bgColor
                                    } blur-[2px] opacity-30`}
                                  />
                                )}
                              </motion.div>
                            ))}
                          </div>
                          <span className="text-[10px] md:text-xs text-base-content/50 font-medium">
                            {skill.proficiency}/5
                          </span>
                        </div>

                        {/* Level Description */}
                        <p className="text-[10px] md:text-xs text-base-content/50">
                          {PROFICIENCY_LABELS[skill.proficiency].description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ========== EXPERIENCE STATS ========== */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-20"
        >
          {[
            {
              icon: FaLayerGroup,
              value: "23+",
              label: "Technologies",
              sublabel: "Frontend, backend & tools",
            },
            {
              icon: FaCode,
              value: "2+",
              label: "Years Experience",
              sublabel: "Consistent development",
            },
            {
              icon: FaRocket,
              value: "92+",
              label: "Projects Built",
              sublabel: "Production-ready apps",
            },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="relative overflow-hidden rounded-3xl bg-base-200/50 border border-base-content/5 p-6 md:p-8"
            >
              <div className="relative z-10">
                <stat.icon className="text-3xl md:text-4xl text-primary mb-4" />
                <div className="text-3xl md:text-4xl font-black text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-sm font-bold text-base-content/80 mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-base-content/60">{stat.sublabel}</p>
              </div>
              {/* Subtle Icon Background */}
              <div className="absolute -bottom-8 -right-8 text-[10rem] text-primary/5">
                <stat.icon />
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* ========== PROFESSIONAL STATEMENT ========== */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden bg-base-200/50 border border-base-content/10 p-8 md:p-12"
        >
          <div className="relative z-10 max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-black mb-4">
              Production-Ready <span className="text-gradient">Developer</span>
            </h3>
            <p className="text-base-content/70 leading-relaxed mb-6">
              I don't just learn technologies — I build with them. Every skill
              represents real projects, from implementing{" "}
              <strong>JWT authentication systems</strong> to integrating{" "}
              <strong>Stripe payment gateways</strong>. My code is{" "}
              <span className="text-primary font-semibold">clean</span>,{" "}
              <span className="text-accent font-semibold">documented</span>, and{" "}
              <span className="text-primary font-semibold">scalable</span> by
              design.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Clean Code",
                "Best Practices",
                "Scalable Architecture",
                "Documentation",
              ].map((tag, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  className="px-4 py-2 rounded-xl bg-base-100/50 border border-base-content/10 text-xs font-bold uppercase tracking-wider"
                >
                  {tag}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default Skills;
