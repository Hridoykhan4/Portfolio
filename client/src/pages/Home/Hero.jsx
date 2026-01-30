// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useContext } from "react";
import { Link } from "react-router"; 
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaRocket,
  FaPaperPlane,
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

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const profileImg = theme === "light" ? profileLight : profileDark;

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Md_Toyob_Uddin_Hridoy_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className="relative  flex items-center justify-center overflow-hidden bg-base-100 section-spacing"
      aria-label="Hero Section"
    >
      <h1 className="sr-only">
        Md. Toyob Uddin Hridoy - Full Stack MERN Developer | React, Node.js,
        MongoDB, Express, Tailwind, JavaScript
      </h1>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-primary/10 blur-[120px] rounded-full mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[35%] h-[35%] bg-accent/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="container-page z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-14 lg:gap-10">
          <div className="flex-[1.3] text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-base-200/80 border border-base-content/10 backdrop-blur-md mb-6 shadow-sm">
                <FaRocket className="text-primary text-xs animate-pulse" />
                <span className="text-[10px] font-black tracking-[0.25em] uppercase text-base-content/70">
                  Full Stack Engineer
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-8">
                Building the <br />
                <span className="text-gradient">Modern Web.</span>
              </h2>

              <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10 font-medium">
                I am{" "}
                <span className="text-base-content font-bold">
                  Md. Toyob Uddin Hridoy
                </span>
                . I specialize in engineering high-impact MERN applications with{" "}
                <span className="text-primary italic">scalable backends</span>{" "}
                and{" "}
                <span className="text-accent italic">immersive frontends</span>.
              </p>
            </motion.div>

            {/* --- CTA BUTTONS --- */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6"
            >
              {/* Contact Button */}
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-primary text-primary-content font-bold rounded-2xl overflow-hidden transition-all hover:shadow-[0_0_25px_-5px_var(--color-primary)] active:scale-95 flex items-center gap-2"
              >
                <FaPaperPlane className="text-sm group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                Contact Me
              </Link>

              {/* Resume Button */}
              <button
                onClick={handleDownloadResume}
                className="group px-8 py-4 bg-base-200 text-base-content font-bold rounded-2xl border border-base-content/10 transition-all hover:bg-base-300 active:scale-95 flex items-center gap-2"
              >
                <FaDownload className="text-sm group-hover:animate-bounce" />{" "}
                Resume
              </button>

              {/* Social Icons */}
              <div className="flex gap-4 sm:ml-2">
                <a
                  href="https://github.com/Hridoykhan4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn text-xl"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/md-toyob-uddin-hridoy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn text-xl"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:toyobuddinhridoy@gmail.com"
                  className="social-icon-btn text-xl"
                  aria-label="Send Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </motion.div>

            {/* --- TECH STACK DOCK --- */}
      {/*       <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-16 pt-8 border-t border-base-content/5 flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-10 opacity-50  hover:opacity-100 transition-all duration-700"
            >
              <SiMongodb
                className="text-3xl lg:text-4xl text-[#47A248]"
                title="MongoDB"
              />
              <SiExpress
                className="text-3xl lg:text-4xl text-base-content"
                title="Express.js"
              />
              <SiReact
                className="text-3xl lg:text-4xl text-[#61DAFB] animate-[spin_20s_linear_infinite]"
                title="React.js"
              />
              <SiNodedotjs
                className="text-3xl lg:text-4xl text-[#339933]"
                title="Node.js"
              />
              <SiTailwindcss
                className="text-3xl lg:text-4xl text-[#06B6D4]"
                title="Tailwind CSS"
              />
              <SiJavascript
                className="text-3xl lg:text-4xl text-[#F7DF1E]"
                title="JavaScript"
              />
            </motion.div> */}
          </div>

          {/* ================= VISUAL IMAGE SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "backOut" }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-70 sm:max-w-85 lg:max-w-100 mx-auto group">
              {/* Profile Glow */}
              <div className="absolute -inset-8 bg-linear-to-tr from-primary/20 to-accent/20 blur-[60px] rounded-full animate-pulse" />

              {/* Profile Image */}
              <div className="relative z-10 aspect-4/5 rounded-[3.5rem] overflow-hidden border-4 border-base-100 shadow-2xl">
                <img
                  src={profileImg}
                  alt="Md. Toyob Uddin Hridoy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <motion.div
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-0.5 bg-primary/40 shadow-[0_0_15px_var(--color-primary)] z-20 pointer-events-none"
              />
              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-4 lg:-right-8 z-20 badge-glass py-3 px-5 flex items-center gap-3"
              >
                <SiReact className="text-xl text-primary" />
                <span className="text-xs font-bold tracking-tight">
                  React Expert
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 -left-4 lg:-left-8 z-20 badge-glass py-3 px-5 flex items-center gap-3"
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
