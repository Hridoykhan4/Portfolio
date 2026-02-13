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

/* ---------------- Static Data ---------------- */

const PARTICLES = [
  { id: 1, left: "15%", top: "20%", size: 2, duration: 6.5 },
  { id: 2, left: "85%", top: "28%", size: 1.5, duration: 5.8 },
  { id: 3, left: "25%", top: "68%", size: 1, duration: 6.2 },
];

const TECH_STACK = [
  { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  { Icon: SiExpress, color: "currentColor", name: "Express.js" },
  { Icon: SiReact, color: "#61DAFB", name: "React.js" },
  { Icon: SiNodedotjs, color: "#339933", name: "Node.js" },
  { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
  { Icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
];

const TYPING_WORDS = ["Scalable.", "Fast.", "Beautiful.", "Modern."];

/* ======================================================= */

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const profileImg = theme === "light" ? profileLight : profileDark;

  const sectionRef = useRef(null);

  const [downloadState, setDownloadState] = useState("idle");
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  /* ---------------- Desktop Detection ---------------- */

  useEffect(() => {
    const checkDevice = () => setIsDesktop(window.innerWidth >= 1024);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  /* ---------------- Visibility Observer ---------------- */

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  /* ---------------- Typing Effect ---------------- */

  useEffect(() => {
    if (!isVisible) return;

    const fullText = TYPING_WORDS[wordIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting && text === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
        } else {
          setText(
            isDeleting
              ? fullText.substring(0, text.length - 1)
              : fullText.substring(0, text.length + 1),
          );
        }
      },
      isDeleting ? 70 : 120,
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, isVisible]);

  /* ---------------- Mouse 3D Effect ---------------- */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(
    useSpring(mouseY, { stiffness: 60, damping: 25 }),
    [-300, 300],
    [1.5, -1.5],
  );

  const rotateY = useTransform(
    useSpring(mouseX, { stiffness: 60, damping: 25 }),
    [-300, 300],
    [-1.5, 1.5],
  );

  useEffect(() => {
    if (!isDesktop || !isVisible) return;

    const el = sectionRef.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDesktop, isVisible, mouseX, mouseY]);

  /* ---------------- Resume Download ---------------- */

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

  /* ======================================================= */

  return (
    <section
      ref={sectionRef}
      className="relative section-spacing min-h-screen bg-base-100 flex items-center overflow-hidden"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-1/3 -left-1/3 w-[60%] h-[60%] rounded-full opacity-40 blur-[100px]"
          style={{
            background:
              theme === "light"
                ? "radial-gradient(circle, rgba(37, 99, 235, 0.12), transparent 70%)"
                : "radial-gradient(circle, rgba(56, 189, 248, 0.15), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-1/3 -right-1/3 w-[55%] h-[55%] rounded-full opacity-35 blur-[100px]"
          style={{
            background:
              theme === "light"
                ? "radial-gradient(circle, rgba(124, 58, 237, 0.10), transparent 70%)"
                : "radial-gradient(circle, rgba(167, 139, 250, 0.12), transparent 70%)",
          }}
        />

        {isDesktop &&
          PARTICLES.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-primary/30"
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
              }}
              animate={{ y: [0, -25, 0], opacity: [0, 0.6, 0] }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
      </div>

      {/* Content */}
      <div className="container-page relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center order-2 lg:order-1 lg:text-left"
          >
            {/* 3D Layer ONLY for Visual Text */}
            <motion.div
              style={
                isDesktop
                  ? { rotateX, rotateY, transformStyle: "preserve-3d" }
                  : {}
              }
            >
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-base-200/60 border border-base-content/8 backdrop-blur-xl mb-8 shadow-lg">
                <FaRocket className="text-primary text-sm" />
                <span className="text-xs font-black tracking-wider uppercase text-base-content/70">
                  Full Stack Engineer
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.92] mb-6">
                <span className="text-base-content">Building </span>
                <br />
                <span className="text-gradient">
                  {text}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-1 h-[0.9em] bg-primary ml-1 align-middle"
                  />
                </span>
                <br />
                <span className="text-base-content/90">Web Apps.</span>
              </h2>

              <p className="text-base md:text-lg lg:text-xl text-base-content/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10 font-medium">
                Hi, I'm{" "}
                <span className="text-base-content font-bold">
                  Md. Toyob Uddin Hridoy
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
              </p>
            </motion.div>

            {/* CTA + SOCIAL (OUTSIDE 3D → fully clickable) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 relative z-20">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link to="/contact" className="btn-cta group">
                  <FaPaperPlane className="text-sm group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  Let's Talk
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <button
                  onClick={handleDownloadResume}
                  disabled={downloadState === "loading"}
                  className="btn-cta-soft group min-w-35"
                >
                  <AnimatePresence mode="wait">
                    {downloadState === "idle" && (
                      <motion.div
                        key="idle"
                        className="flex items-center gap-2"
                      >
                        <FaDownload className="text-sm" />
                        <span>Resume</span>
                      </motion.div>
                    )}
                    {downloadState === "loading" && (
                      <motion.div
                        key="loading"
                        className="flex items-center gap-2"
                      >
                        <FaSpinner className="animate-spin" />
                        <span>Loading...</span>
                      </motion.div>
                    )}
                    {downloadState === "success" && (
                      <motion.div
                        key="success"
                        className="flex items-center gap-2"
                      >
                        <FaCheck />
                        <span>Downloaded!</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>

              {[
                { Icon: FaGithub, href: "https://github.com/Hridoykhan4" },
                {
                  Icon: FaLinkedin,
                  href: "https://linkedin.com/in/md-toyob-uddin-hridoy",
                },
                { Icon: FaEnvelope, href: "mailto:toyobuddinhridoy@gmail.com" },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="social-icon-btn text-lg"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* IMAGE SIDE (unchanged visually) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full max-w-md mx-auto group">
              <div
                className="absolute -inset-10 rounded-full opacity-40 blur-3xl"
                style={{
                  background:
                    theme === "light"
                      ? "linear-gradient(135deg, rgba(37, 99, 235, 0.3), rgba(124, 58, 237, 0.2))"
                      : "linear-gradient(135deg, rgba(56, 189, 248, 0.3), rgba(167, 139, 250, 0.25))",
                }}
              />

              <div className="relative z-10 aspect-4/5 rounded-[3rem] overflow-hidden border-4 border-base-100 shadow-2xl">
                <img
                  src={profileImg}
                  alt="Md. Toyob Uddin Hridoy - MERN Stack Developer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
