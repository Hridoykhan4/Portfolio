import { motion as Motion, useMotionValue, useTransform } from "motion/react";
import { Link } from "react-router";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
  FaCode,
} from "react-icons/fa";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/Hridoykhan4",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/md-toyob-uddin-hridoy",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "https://x.com/ToyobHridoy85",
  },
];

const CONTACT_INFO = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "toyobuddinhridoy@gmail.com",
    href: "mailto:toyobuddinhridoy@gmail.com",
  },
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+880 1832 148385",
    href: "tel:+8801832148385",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Khulshi, Chittagong",
    href: "https://maps.google.com/?q=Khulshi,Chittagong,Bangladesh",
  },
];

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-base-100 overflow-hidden">
      {/* Top Border Line */}
      <Motion.div
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Motion.div
          className="absolute -bottom-1/2 -left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[100px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <Motion.div
          className="absolute -bottom-1/2 -right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[100px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container-page relative z-10">
        {/* Main Content */}
        <div className="section-spacing">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: Brand */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <Link
                to="/"
                className="inline-flex items-center gap-3 group mb-6"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  mouseX.set(e.clientX - rect.left - rect.width / 2);
                  mouseY.set(e.clientY - rect.top - rect.height / 2);
                }}
                onMouseLeave={() => {
                  mouseX.set(0);
                  mouseY.set(0);
                }}
              >
                <Motion.div
                  className="relative"
                  style={{
                    transformStyle: "preserve-3d",
                    rotateX: useTransform(mouseY, [-50, 50], [3, -3]),
                    rotateY: useTransform(mouseX, [-50, 50], [-3, 3]),
                  }}
                >
                  <img
                    src="/logo.svg"
                    alt="Hridoy"
                    className="w-10 h-10 drop-shadow-xl"
                  />
                  <Motion.div
                    className="absolute inset-0 bg-primary/20 blur-lg rounded-full -z-10"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </Motion.div>

                <div className="leading-tight">
                  <Motion.h3
                    className="text-xl font-black tracking-tighter"
                    whileHover={{ x: 2 }}
                  >
                    HRIDOY
                    <Motion.span
                      className="text-primary inline-block"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      .
                    </Motion.span>
                  </Motion.h3>
                  <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-base-content/50">
                    MERN Developer
                  </p>
                </div>
              </Link>

              {/* Tagline */}
              <Motion.p
                className="text-base-content/60 text-sm leading-relaxed mb-6 max-w-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Building scalable web applications with modern technologies.
                Passionate about clean code and exceptional user experiences.
              </Motion.p>

              {/* Social Links */}
              <Motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-base-content/40 mb-3">
                  Connect
                </p>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((social, idx) => (
                    <Motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-base-200/50 border border-base-content/5 text-base-content/70 hover:text-primary hover:border-primary/20 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + idx * 0.05 }}
                      whileHover={{ y: -3, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onHoverStart={() => setHoveredSocial(idx)}
                      onHoverEnd={() => setHoveredSocial(null)}
                      aria-label={social.name}
                    >
                      <Motion.div
                        animate={{
                          rotateY: hoveredSocial === idx ? 360 : 0,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <social.icon className="text-lg" />
                      </Motion.div>
                    </Motion.a>
                  ))}
                </div>
              </Motion.div>
            </Motion.div>

            {/* Right: Contact */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-base font-black uppercase tracking-wider mb-5 text-base-content/70">
                Get In Touch
              </h3>

              <div className="space-y-3">
                {CONTACT_INFO.map((item, idx) => (
                  <Motion.a
                    key={idx}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-base-200/30 border border-base-content/5 hover:border-primary/20 transition-all duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    whileHover={{ x: 3, scale: 1.01 }}
                  >
                    <Motion.div
                      className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-content transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="text-base" />
                    </Motion.div>

                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-base-content/40 mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-base-content/80 group-hover:text-primary transition-colors truncate">
                        {item.value}
                      </p>
                    </div>

                    <Motion.div
                      className="text-base-content/20 group-hover:text-primary"
                      animate={{ x: 0 }}
                      whileHover={{ x: 3 }}
                    >
                      →
                    </Motion.div>
                  </Motion.a>
                ))}
              </div>
            </Motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <Motion.div
          className="border-t border-base-content/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {/* Copyright */}
          <Motion.div
            className="flex items-center gap-2 text-xs text-base-content/50"
            whileHover={{ scale: 1.02 }}
          >
            <FaCode className="text-primary/70" />
            <span>© {currentYear} Hridoy</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">
              Built with React & Tailwind
            </span>
          </Motion.div>

          {/* Scroll to Top */}
          <Motion.button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-primary text-primary-content shadow-lg shadow-primary/20 relative overflow-hidden group"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <Motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <FaArrowUp className="text-base relative z-10" />
          </Motion.button>
        </Motion.div>
      </div>
    </footer>
  );
};

export default Footer;
