/* eslint-disable no-unused-vars */
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";

// FEATURED PROJECTS DATA
const FEATURED_PROJECTS = [
  {
    id: 1,
    title: "Masakkali Courier",
    description:
      "Full-stack parcel delivery platform with real-time tracking, secure payment integration, and comprehensive admin dashboard.",
    image: "/projects/masakkali.jpg", // Add your images
    tags: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
    github: "https://github.com/Hridoykhan4/Masakkali_Courier",
    live: "https://masakkali-courier.web.app",
    featured: true,
    highlights: [
      "JWT Auth",
      "Payment Gateway",
      "Admin Panel",
      "Real-time Updates",
    ],
    gridSpan: "lg:col-span-2 lg:row-span-2", // Large card
  },
  {
    id: 2,
    title: "Cafe Aziz Hotel",
    description:
      "Restaurant management system with online ordering, table booking, and inventory management.",
    image: "/projects/cafe-aziz.jpg",
    tags: ["MERN", "Firebase", "Tailwind"],
    github: "https://github.com/Hridoykhan4/Cafe_Aziz_Hotel_Kaptai",
    live: "https://cafe-aziz.web.app",
    featured: true,
    highlights: ["Menu Management", "Order System", "Booking"],
    gridSpan: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: 3,
    title: "Happiness Hill Resort",
    description:
      "Hotel booking platform with secure authentication and booking management system.",
    image: "/projects/happiness-hill.jpg",
    tags: ["React", "Node.js", "JWT", "MongoDB"],
    github: "https://github.com/Hridoykhan4/Backend_JWT_Axios_5_Happiness_Hill",
    live: "https://happiness-hill.web.app",
    highlights: ["JWT Security", "Booking System"],
    gridSpan: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: 4,
    title: "Volora Platform",
    description:
      "Modern web application with secure backend and responsive frontend design.",
    image: "/projects/volora.jpg",
    tags: ["MERN", "Axios", "Tailwind"],
    github: "https://github.com/Hridoykhan4/Backend_JWT_Axios_4_Volora",
    live: "https://volora.web.app",
    highlights: ["RESTful API", "Responsive UI"],
    gridSpan: "lg:col-span-1 lg:row-span-1",
  },
];

const FeaturedProjects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="section-spacing bg-base-100 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container-page relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-3"
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.span
              className="w-8 h-px bg-primary"
              initial={{ width: 0 }}
              animate={isInView ? { width: 32 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            Featured Work
          </motion.span>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight mb-4">
                Selected <span className="text-linear">Projects</span>
              </h2>
              <p className="text-base-content/60 max-w-xl text-sm md:text-base">
                Full-stack applications built with modern technologies and best
                practices
              </p>
            </div>

            <Link
              to="/projects"
              className="btn-cta-soft group self-start md:self-auto"
            >
              View All Projects
              <FaExternalLinkAlt className="text-sm transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr">
          {FEATURED_PROJECTS.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Stats Footer */}
        <motion.div
          className="mt-16 pt-12 border-t border-base-content/5 flex flex-wrap justify-center gap-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          {[
            { value: "92+", label: "Total Projects" },
            { value: "4+", label: "Full-Stack Apps" },
            { value: "100%", label: "Responsive Design" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-base-content/60 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, isInView }) => {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: false, amount: 0.3 });

  return (
    <motion.article
      ref={cardRef}
      className={`group relative rounded-3xl overflow-hidden bg-base-200 border border-base-content/5 hover:border-primary/20 transition-all duration-500 ${project.gridSpan || ""}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {/* Image */}
      <div className="relative aspect-16/10 overflow-hidden bg-base-300">
        {/* Placeholder - Replace with actual image */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-accent/20 to-primary/20" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-base-200 via-base-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Quick Links */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-base-100/90 backdrop-blur-sm hover:bg-primary hover:text-primary-content transition-all shadow-lg"
            aria-label="View GitHub"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-base-100/90 backdrop-blur-sm hover:bg-accent hover:text-accent-content transition-all shadow-lg"
            aria-label="View Live"
          >
            <FaExternalLinkAlt className="text-lg" />
          </a>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-primary-content text-xs font-bold">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-base-content/70 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.highlights.map((highlight, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold"
              >
                {highlight}
              </span>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg bg-base-300 text-base-content/70 text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-500 pointer-events-none"
        whileHover={{ scale: 1.02 }}
      />
    </motion.article>
  );
};

export default FeaturedProjects;
