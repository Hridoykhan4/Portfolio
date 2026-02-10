/* eslint-disable no-unused-vars */
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
} from "motion/react";
import { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaRocket,
  FaPaperPlane,
  FaCheck,
  FaSpinner,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import ThemeContext from "../../contexts/ThemeContext";

import profileLight from "../../assets/white.png";
import profileDark from "../../assets/dark.png";

// STATIC PARTICLES - No Math.random, pre-defined positions
const STATIC_PARTICLES = [
  { id: 1, left: "15%", top: "20%", duration: 5, delay: 0 },
  { id: 2, left: "85%", top: "15%", duration: 4.5, delay: 1 },
  { id: 3, left: "25%", top: "60%", duration: 4.8, delay: 0.5 },
  { id: 4, left: "75%", top: "70%", duration: 5.2, delay: 1.5 },
  { id: 5, left: "50%", top: "40%", duration: 4.7, delay: 2 },
  { id: 6, left: "10%", top: "80%", duration: 5.1, delay: 0.8 },
];

// TECH STACK - Static, memoized outside component
const TECH_STACK = [
  { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  { Icon: SiExpress, color: "currentColor", name: "Express.js" },
  { Icon: SiReact, color: "#61DAFB", name: "React.js" },
  { Icon: SiNodedotjs, color: "#339933", name: "Node.js" },
  { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind" },
  { Icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
];

const Hero = () => {
  const [downloadState, setDownloadState] = useState("idle");
  const { theme } = useContext(ThemeContext);
  const profileImg = theme === "light" ? profileLight : profileDark;
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [enableAnimations, setEnableAnimations] = useState(true);

  /* ================= DEVICE DETECTION (Debounced) ================= */
  useEffect(() => {
    const checkDevice = () => {
      const desktop = window.innerWidth > 1024;
      const hasHover = window.matchMedia("(hover: hover)").matches;
      setIsDesktop(desktop && hasHover);
    };

    // Check reduced motion preference
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnableAnimations(!motionQuery.matches);

    checkDevice();

    // Debounced resize
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkDevice, 150);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [1.5, -1.5]), {
    stiffness: 60,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-1.5, 1.5]), {
    stiffness: 60,
    damping: 25,
  });

  useEffect(() => {
    if (!isDesktop || !isVisible || !enableAnimations) return;

    let rafId = null;
    let lastX = 0;
    let lastY = 0;
    const threshold = 5;

    const handleMouseMove = (e) => {
      const dx = Math.abs(e.clientX - lastX);
      const dy = Math.abs(e.clientY - lastY);

      if (dx < threshold && dy < threshold) return;

      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const x = e.clientX - window.innerWidth / 2;
        const y = e.clientY - window.innerHeight / 2;

        mouseX.set(x);
        mouseY.set(y);

        lastX = e.clientX;
        lastY = e.clientY;
        rafId = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isDesktop, isVisible, enableAnimations, mouseX, mouseY]);

  const handleDownloadResume = () => {
    setDownloadState("loading");
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "Md_Toyob_Uddin_Hridoy_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadState("success");

      setTimeout(() => setDownloadState("idle"), 3000);
    }, 800);
  };
  const shouldAnimate = isVisible && enableAnimations;
  const shouldAnimateBackground = shouldAnimate && isDesktop;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-base-100 section-spacing"
      aria-label="Hero Section"
    >
      <h1 className="sr-only">
        Md. Toyob Uddin Hridoy - Full Stack MERN Developer
      </h1>

      {/* ================= LIGHTWEIGHT BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* linear Orbs - Simple, no complex animations on mobile */}
        <div
          className="absolute -top-1/4 -left-1/4 w-[50%] h-[50%] rounded-full bg-linear-to-br from-primary/15 to-transparent blur-[80px] transition-opacity duration-1000"
          style={{
            opacity: shouldAnimateBackground ? 0.4 : 0.2,
            transform: shouldAnimateBackground ? "scale(1.05)" : "scale(1)",
          }}
        />

        <div
          className="absolute -bottom-1/4 -right-1/4 w-[45%] h-[45%] rounded-full bg-linear-to-tl from-accent/15 to-transparent blur-[80px] transition-opacity duration-1000"
          style={{
            opacity: shouldAnimateBackground ? 0.35 : 0.2,
            transform: shouldAnimateBackground ? "scale(1.08)" : "scale(1)",
          }}
        />

        {/* Particles - Desktop only, no Math.random */}
        {shouldAnimateBackground &&
          STATIC_PARTICLES.map((p) => (
            <motion.div
              key={p.id}
              className="absolute w-1 h-1 bg-primary/25 rounded-full will-change-transform"
              style={{ left: p.left, top: p.top }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="container-page relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* ================= TEXT CONTENT ================= */}
          <motion.div
            className="flex-[1.3] text-center lg:text-left"
            style={
              isDesktop && shouldAnimate
                ? {
                    rotateX,
                    rotateY,
                  }
                : {}
            }
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200/80 border border-base-content/10 backdrop-blur-sm mb-6 shadow-md">
                <FaRocket className="text-primary text-xs" />
                <span className="text-[10px] font-black tracking-[0.25em] uppercase text-base-content/70">
                  Full Stack Engineer
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-8">
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, x: -15 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  Building the{" "}
                </motion.span>
                <br />
                <motion.span
                  className="inline-block bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                  style={{ backgroundSize: "200% auto" }}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Modern Web.
                </motion.span>
              </h2>

              {/* Description */}
              <motion.p
                className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10 font-medium"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                I am{" "}
                <span className="text-base-content font-bold">
                  Md. Toyob Uddin Hridoy
                </span>
                . I specialize in engineering high-impact MERN applications with{" "}
                <span className="text-primary italic">scalable backends</span>{" "}
                and{" "}
                <span className="text-accent italic">immersive frontends</span>.
              </motion.p>
            </motion.div>

            {/* ================= CTA BUTTONS ================= */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-8"
            >
              {/* Contact Button */}
              <motion.div
                whileHover={enableAnimations ? { scale: 1.03, y: -2 } : {}}
                whileTap={enableAnimations ? { scale: 0.97 } : {}}
              >
                <Link to="/contact" className="btn-cta group">
                  <FaPaperPlane className="text-sm transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  Contact Me
                </Link>
              </motion.div>

              {/* Resume Button */}
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <button
                  onClick={handleDownloadResume}
                  disabled={downloadState === "loading"}
                  className={`btn-cta-soft group min-w-35 relative overflow-hidden transition-colors ${
                    downloadState === "success"
                      ? "bg-success! text-success-content!"
                      : ""
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {downloadState === "idle" && (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <FaDownload className="text-sm transition-transform group-hover:translate-y-0.5" />
                        <span>Resume</span>
                      </motion.div>
                    )}

                    {downloadState === "loading" && (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <FaSpinner className="animate-spin" />
                        <span>Fetching...</span>
                      </motion.div>
                    )}

                    {downloadState === "success" && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <FaCheck />
                        <span>Downloaded</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>

              {/* Social Icons */}
              <div className="flex gap-4 sm:ml-2">
                <motion.a
                  href="https://github.com/Hridoykhan4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn text-xl"
                  aria-label="GitHub"
                  whileHover={enableAnimations ? { scale: 1.1, y: -2 } : {}}
                  whileTap={enableAnimations ? { scale: 0.9 } : {}}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/md-toyob-uddin-hridoy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn text-xl"
                  aria-label="LinkedIn"
                  whileHover={enableAnimations ? { scale: 1.1, y: -2 } : {}}
                  whileTap={enableAnimations ? { scale: 0.9 } : {}}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="mailto:toyobuddinhridoy@gmail.com"
                  className="social-icon-btn text-xl"
                  aria-label="Email"
                  whileHover={enableAnimations ? { scale: 1.1, y: -2 } : {}}
                  whileTap={enableAnimations ? { scale: 0.9 } : {}}
                >
                  <FaEnvelope />
                </motion.a>
              </div>
            </motion.div>

            {/* ================= TECH STACK ================= */}
            {/*  <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="pt-8 border-t border-base-content/5 flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-10 opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              {TECH_STACK.map(({ Icon, color, name }) => (
                <motion.div
                  key={name}
                  whileHover={enableAnimations ? { y: -5, scale: 1.1 } : {}}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <Icon
                    className="text-3xl lg:text-4xl"
                    style={{ color }}
                    title={name}
                  />
                </motion.div>
              ))}
            </motion.div> */}
          </motion.div>

          {/* ================= IMAGE SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-md mx-auto group">
              {/* Glow Effect - Static on mobile */}
              <div
                className="absolute -inset-8 bg-linear-to-tr from-primary/20 via-accent/15 to-primary/10 blur-[50px] rounded-full transition-opacity duration-700"
                style={{
                  opacity: shouldAnimateBackground ? 0.5 : 0.3,
                }}
              />

              {/* Profile Container */}
              <div className="relative z-10 aspect-4/5 rounded-[3.5rem] overflow-hidden border-4 border-base-100 shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
                <img
                  src={profileImg}
                  alt="Md. Toyob Uddin Hridoy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Scanline - Desktop only */}
                {shouldAnimateBackground && (
                  <motion.div
                    animate={{ top: ["0%", "100%"] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute left-0 w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent pointer-events-none will-change-transform"
                  />
                )}
              </div>

              {/* Floating Badge: React */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-6 -right-4 lg:-right-8 z-20 badge-glass py-3 px-5 flex items-center gap-3 shadow-xl"
                whileHover={enableAnimations ? { scale: 1.05 } : {}}
              >
                <SiReact className="text-xl text-[#61DAFB]" />
                <span className="text-xs font-bold tracking-tight">
                  React Expert
                </span>
              </motion.div>

              {/* Floating Badge: Node */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-6 -left-4 lg:-left-8 z-20 badge-glass py-3 px-5 flex items-center gap-3 shadow-xl"
                whileHover={enableAnimations ? { scale: 1.05 } : {}}
              >
                <SiNodedotjs className="text-xl text-[#339933]" />
                <span className="text-xs font-bold tracking-tight">
                  Node Architect
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
