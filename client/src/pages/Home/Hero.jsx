/* eslint-disable no-unused-vars */
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useScroll,
  AnimatePresence,
} from "motion/react";
import { useContext, useEffect, useState, useRef, memo } from "react";
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

// OPTIMIZED STATIC PARTICLES - Minimal for performance
const STATIC_PARTICLES = [
  { id: 1, left: "15%", top: "20%", size: 2, duration: 6.5, delay: 0 },
  { id: 2, left: "85%", top: "28%", size: 1.5, duration: 5.8, delay: 1.5 },
  { id: 3, left: "25%", top: "68%", size: 1, duration: 6.2, delay: 0.8 },
  { id: 4, left: "75%", top: "75%", size: 2, duration: 6.8, delay: 2 },
];

// TECH STACK - Static memoized array
const TECH_STACK = [
  { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  { Icon: SiExpress, color: "currentColor", name: "Express.js" },
  { Icon: SiReact, color: "#61DAFB", name: "React.js" },
  { Icon: SiNodedotjs, color: "#339933", name: "Node.js" },
  { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
  { Icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
];

// Typing animation words - Optimized
const TYPING_WORDS = ["Scalable.", "Fast.", "Beautiful.", "Modern."];

// Memoized Particle Component for better performance
const Particle = memo(({ particle, shouldAnimate }) => (
  <motion.div
    className="absolute rounded-full bg-primary/30 will-change-transform"
    style={{
      left: particle.left,
      top: particle.top,
      width: `${particle.size}px`,
      height: `${particle.size}px`,
    }}
    animate={
      shouldAnimate
        ? {
            y: [0, -25, 0],
            opacity: [0, 0.65, 0],
            scale: [0.8, 1.2, 0.8],
          }
        : {}
    }
    transition={{
      duration: particle.duration,
      delay: particle.delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
));
Particle.displayName = "Particle";

// Memoized Tech Icon Component
const TechIcon = memo(({ tech, index, isVisible, enableAnimations }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
    transition={{ delay: 0.7 + index * 0.05, duration: 0.4 }}
    whileHover={
      enableAnimations
        ? {
            y: -6,
            scale: 1.15,
          }
        : {}
    }
    className="relative group"
  >
    <div className="p-3 rounded-xl bg-base-200/50 border border-base-content/5 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/10">
      <tech.Icon
        className="text-2xl lg:text-3xl transition-colors duration-300"
        style={{ color: tech.color }}
        title={tech.name}
      />
    </div>
    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      <span className="text-xs font-semibold text-base-content/70 whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  </motion.div>
));
TechIcon.displayName = "TechIcon";

const Hero = () => {
  const [downloadState, setDownloadState] = useState("idle");
  const { theme } = useContext(ThemeContext);
  const profileImg = theme === "light" ? profileLight : profileDark;
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [enableAnimations, setEnableAnimations] = useState(true);
  const [currentWord, setCurrentWord] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth parallax - Only opacity for performance
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  /* ================= TYPING EFFECT - Optimized ================= */
  useEffect(() => {
    if (!isVisible || !enableAnimations) return;

    const ticker = setInterval(() => {
      const fullText = TYPING_WORDS[currentWord];

      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));
        setDelta(150 - Math.random() * 50);

        if (text === fullText) {
          setIsDeleting(true);
          setDelta(2000);
        }
      } else {
        setText(fullText.substring(0, text.length - 1));
        setDelta(50);

        if (text === "") {
          setIsDeleting(false);
          setCurrentWord((prev) => (prev + 1) % TYPING_WORDS.length);
          setDelta(200);
        }
      }
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, currentWord, isVisible, enableAnimations]);

  /* ================= DEVICE DETECTION ================= */
  useEffect(() => {
    const checkDevice = () => {
      const desktop = window.innerWidth > 1024;
      const hasHover = window.matchMedia("(hover: hover)").matches;
      setIsDesktop(desktop && hasHover);
    };

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnableAnimations(!motionQuery.matches);

    checkDevice();

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkDevice, 200);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  /* ================= INTERSECTION OBSERVER ================= */
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

  /* ================= MOUSE PARALLAX - Ultra Optimized ================= */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  const rotateX = useTransform(smoothMouseY, [-300, 300], [1.5, -1.5]);
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-1.5, 1.5]);

  useEffect(() => {
    if (!isDesktop || !isVisible || !enableAnimations) return;

    let rafId = null;
    let lastX = 0;
    let lastY = 0;
    const threshold = 10; // Increased threshold for less frequent updates

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

  /* ================= RESUME DOWNLOAD ================= */
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
      className="relative bg-base-100 flex items-center"
      aria-label="Hero Section"
    >
      <h1 className="sr-only">
        Md. Toyob Uddin Hridoy - Full Stack MERN Developer
      </h1>

      {/* ================= OPTIMIZED BACKGROUND ================= */}
      <motion.div
        ref={containerRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ opacity }}
      >
        {/* Gradient Orb 1 - Using proper Tailwind classes */}
        <motion.div
          className="absolute -top-1/3 -left-1/3 w-[60%] h-[60%] rounded-full opacity-40 will-change-transform"
          style={{
            background:
              theme === "light"
                ? "radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={
            shouldAnimateBackground
              ? {
                  scale: [1, 1.08, 1],
                  x: [0, 25, 0],
                  y: [0, -15, 0],
                }
              : {}
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Gradient Orb 2 */}
        <motion.div
          className="absolute -bottom-1/3 -right-1/3 w-[55%] h-[55%] rounded-full opacity-35 will-change-transform"
          style={{
            background:
              theme === "light"
                ? "radial-gradient(circle, rgba(124, 58, 237, 0.10) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(167, 139, 250, 0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={
            shouldAnimateBackground
              ? {
                  scale: [1, 1.12, 1],
                  x: [0, -25, 0],
                  y: [0, 18, 0],
                }
              : {}
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles - Memoized */}
        {shouldAnimateBackground &&
          STATIC_PARTICLES.map((p) => (
            <Particle key={p.id} particle={p} shouldAnimate={shouldAnimate} />
          ))}

        {/* Grid Pattern - Static, no animation */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${theme === "light" ? "#0f172a" : "#f8fafc"} 1px, transparent 1px), linear-gradient(to right, ${theme === "light" ? "#0f172a" : "#f8fafc"} 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </motion.div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="container-page relative z-10 section-spacing">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20">
          {/* ================= TEXT CONTENT ================= */}
          <motion.div
            className="flex-[1.4] text-center lg:text-left"
            style={
              isDesktop && shouldAnimate
                ? {
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                  }
                : {}
            }
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-base-200/60 border border-base-content/8 backdrop-blur-xl mb-8 shadow-lg">
                <motion.div
                  animate={shouldAnimate ? { rotate: 360 } : {}}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="will-change-transform"
                >
                  <FaRocket className="text-primary text-sm" />
                </motion.div>
                <span className="text-[11px] font-black tracking-[0.22em] uppercase text-base-content/70">
                  Full Stack Engineer
                </span>
              </div>
            </motion.div>

            {/* Main Heading with Typing Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.92] mb-6">
                <span className="inline-block text-base-content">
                  Building{" "}
                </span>
                <br />
                <span className="inline-block relative">
                  <span className="text-gradient">{text}</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-1 h-[0.9em] bg-primary ml-1 align-middle will-change-[opacity]"
                  />
                </span>
                <br />
                <span className="inline-block text-base-content/90">
                  Web Apps.
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg lg:text-xl text-base-content/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10 font-medium"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Hi, I'm{" "}
              <span className="text-base-content font-bold relative inline-block">
                Md. Toyob Uddin Hridoy
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-primary will-change-[width]"
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: "100%" } : {}}
                  transition={{ delay: 0.8, duration: 0.5 }}
                />
              </span>
              . I craft high-performance MERN applications with{" "}
              <span className="text-primary font-semibold">
                scalable architectures
              </span>{" "}
              and{" "}
              <span className="text-accent font-semibold">
                stunning interfaces
              </span>
              .
            </motion.p>

            {/* ================= CTA BUTTONS ================= */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              {/* Contact Button */}
              <motion.div
                whileHover={enableAnimations ? { scale: 1.04, y: -3 } : {}}
                whileTap={enableAnimations ? { scale: 0.96 } : {}}
              >
                <Link to="/contact" className="btn-cta group">
                  <FaPaperPlane className="text-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  Let's Talk
                </Link>
              </motion.div>

              {/* Resume Button */}
              <motion.div
                whileHover={enableAnimations ? { scale: 1.04, y: -3 } : {}}
                whileTap={enableAnimations ? { scale: 0.96 } : {}}
              >
                <button
                  onClick={handleDownloadResume}
                  disabled={downloadState === "loading"}
                  className={`btn-cta-soft group min-w-35 transition-all duration-300 ${
                    downloadState === "success"
                      ? "bg-green-500! text-white! border-green-500!"
                      : ""
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {downloadState === "idle" && (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="flex items-center gap-2"
                      >
                        <FaDownload className="text-sm transition-transform duration-300 group-hover:translate-y-0.5" />
                        <span>Resume</span>
                      </motion.div>
                    )}

                    {downloadState === "loading" && (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-2"
                      >
                        <FaSpinner className="animate-spin" />
                        <span>Loading...</span>
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
                        <span>Downloaded!</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>

              {/* Social Icons */}
              <div className="flex gap-3 ml-0 sm:ml-2">
                {[
                  {
                    Icon: FaGithub,
                    href: "https://github.com/Hridoykhan4",
                    label: "GitHub",
                  },
                  {
                    Icon: FaLinkedin,
                    href: "https://linkedin.com/in/md-toyob-uddin-hridoy",
                    label: "LinkedIn",
                  },
                  {
                    Icon: FaEnvelope,
                    href: "mailto:toyobuddinhridoy@gmail.com",
                    label: "Email",
                  },
                ].map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel={label !== "Email" ? "noopener noreferrer" : undefined}
                    className="social-icon-btn text-lg"
                    aria-label={label}
                    whileHover={enableAnimations ? { scale: 1.15, y: -3 } : {}}
                    whileTap={enableAnimations ? { scale: 0.9 } : {}}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* ================= TECH STACK ================= */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-8 border-t border-base-content/5"
            >
              <p className="text-xs uppercase tracking-widest text-base-content/50 mb-4 font-bold">
                Tech Stack
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-5 lg:gap-6">
                {TECH_STACK.map((tech, index) => (
                  <TechIcon
                    key={tech.name}
                    tech={tech}
                    index={index}
                    isVisible={isVisible}
                    enableAnimations={enableAnimations}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ================= IMAGE SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={isVisible ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-1 relative"
            style={
              isDesktop && shouldAnimate
                ? {
                    transformStyle: "preserve-3d",
                  }
                : {}
            }
          >
            <div className="relative w-full max-w-md mx-auto group perspective-container">
              {/* Animated Glow Ring */}
              <motion.div
                className="absolute -inset-10 rounded-full opacity-40 blur-3xl will-change-transform"
                style={{
                  background:
                    theme === "light"
                      ? "linear-gradient(135deg, rgba(37, 99, 235, 0.3) 0%, rgba(124, 58, 237, 0.2) 100%)"
                      : "linear-gradient(135deg, rgba(56, 189, 248, 0.3) 0%, rgba(167, 139, 250, 0.25) 100%)",
                }}
                animate={
                  shouldAnimateBackground
                    ? {
                        scale: [1, 1.08, 1],
                        rotate: [0, 90, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Profile Container with 3D Effect */}
              <motion.div
                className="relative z-10 aspect-4/5 rounded-[3rem] overflow-hidden border-4 border-base-100 shadow-2xl"
                whileHover={
                  enableAnimations
                    ? {
                        scale: 1.02,
                        rotateY: 5,
                        rotateX: 2,
                      }
                    : {}
                }
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src={profileImg}
                  alt="Md. Toyob Uddin Hridoy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="eager"
                />

                {/* Animated Scanline - Desktop only */}
                {shouldAnimateBackground && (
                  <motion.div
                    animate={{ top: ["0%", "100%"] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute left-0 w-full h-0.5 pointer-events-none will-change-transform"
                    style={{
                      background:
                        "linear-gradient(to right, transparent 0%, rgba(37, 99, 235, 0.4) 50%, transparent 100%)",
                      boxShadow: "0 0 20px rgba(37, 99, 235, 0.6)",
                    }}
                  />
                )}

                {/* Gradient Overlay on Hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%)",
                  }}
                />
              </motion.div>

              {/* Floating Badge: React */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 10 }}
                animate={isVisible ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
                className="absolute -top-4 -right-4 lg:-right-10 z-20 badge-glass py-3 px-5 flex items-center gap-3 shadow-xl"
                whileHover={enableAnimations ? { scale: 1.08, rotate: 3 } : {}}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(30px)",
                }}
              >
                <SiReact className="text-xl text-[#61DAFB]" />
                <span className="text-xs font-bold tracking-tight">
                  React Expert
                </span>
              </motion.div>

              {/* Floating Badge: Node */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={isVisible ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
                className="absolute -bottom-4 -left-4 lg:-left-10 z-20 badge-glass py-3 px-5 flex items-center gap-3 shadow-xl"
                whileHover={enableAnimations ? { scale: 1.08, rotate: -3 } : {}}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(30px)",
                }}
              >
                <SiNodedotjs className="text-xl text-[#339933]" />
                <span className="text-xs font-bold tracking-tight">
                  Node Architect
                </span>
              </motion.div>

              {/* Decorative Ring Animation */}
              {shouldAnimateBackground && (
                <motion.div
                  className="absolute inset-0 rounded-[3rem] border-2 border-primary/20 pointer-events-none will-change-transform"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
