import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router";
import { FaCompass, FaChevronRight } from "react-icons/fa";
import { getFeaturedProjects } from "../../data/projects";
import ProjectCard from '../../components/ProjectCard'

const FeaturedProjects = () => {
  const containerRef = useRef(null);
  const featuredProjects = getFeaturedProjects();

  return (
    <section ref={containerRef} className="section-spacing relative bg-base-100 overflow-hidden">
      {/* Dynamic Background Noise/Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      <div className="container-page relative z-10">
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{once: true}}
              className="flex items-center gap-3 text-primary font-black uppercase text-[10px] tracking-[0.5em] mb-6"
            >
              <FaCompass className="animate-spin-slow" />
              The Portfolio
            </motion.div>
            
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
              Digital <br /> 
              <span className="text-gradient">Architectures.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-6">
            <p className="text-base-content/50 text-sm md:text-right max-w-[300px] font-medium leading-relaxed">
              Merging technical excellence with aesthetic precision to solve real-world problems.
            </p>
            <Link to="/projects" className="group flex items-center gap-4 py-2 text-sm font-black uppercase tracking-widest border-b-2 border-primary/20 hover:border-primary transition-all">
              View All Work
              <FaChevronRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </header>

        {/* The Bento Grid - Staggered layout for Desktop, Stacked for Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {featuredProjects.map((project, idx) => {
            // Create a custom grid span for a "magazine" feel
            const gridConfig = idx === 0 ? "lg:col-span-7" : idx === 1 ? "lg:col-span-5" : "lg:col-span-4";
            
            return (
              <div key={project.id} className={gridConfig}>
                <ProjectCard project={project} index={idx} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;