import {
  motion as Motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useContext, useState, useEffect, useCallback, useMemo } from "react";
import { Link, NavLink, useLocation } from "react-router";
import ThemeContext from "../../../contexts/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";
import { HiMenuAlt3, HiX } from "react-icons/hi";

// Moved outside to prevent re-creation on every render
const NAV_ITEMS = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Skills", link: "/skills" },
  { label: "Projects", link: "/projects" },
  { label: "Contact", link: "/contact" },
];

const navMotion = {
  hidden: { y: -100, opacity: 0, rotateX: -15 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
    },
  },
};

const mobileMenuMotion = {
  hidden: { opacity: 0, scale: 0.9, rotateX: -20, transformOrigin: "top" },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    rotateX: -20,
    transition: { duration: 0.2 },
  },
};

const itemMotion = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [3, -3]);
  const rotateY = useTransform(mouseX, [-300, 300], [-3, 3]);

  const isContactPage = useMemo(
    () => location.pathname === "/contact",
    [location.pathname],
  );

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [location.pathname]);

  const handleMouseMove = useCallback(
    (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    },
    [mouseX, mouseY],
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const navLinkClass = useCallback(
    ({ isActive }) =>
      `relative px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
        isActive ? "text-primary" : "text-base-content/60 hover:text-primary"
      }`,
    [],
  );

  return (
    <Motion.nav
      variants={navMotion}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-100 w-full"
      style={{ perspective: 1200, transformZ: 0, willChange: "transform" }}
    >
      <div className="absolute inset-0 bg-base-100/80 backdrop-blur-xl -z-10" />

      <div className="container-page py-3">
        <Motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
          className={`
            relative rounded-3xl border backdrop-blur-2xl 
            px-4 md:px-6 transition-all duration-500
            ${
              scrolled
                ? "border-base-content/20 bg-base-100/95 shadow-2xl shadow-primary/10"
                : "border-base-content/10 bg-base-100/80 shadow-xl"
            }
          `}
        >
          <div
            className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"
            style={{ transform: "translateZ(1px)" }}
          />

          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden"
            style={{ transform: "translateZ(2px)" }}
          >
            <div
              className="absolute inset-full bg-linear-conic from-primary via-accent to-primary"
              style={{
                animation: "spin 8s linear infinite",
              }}
            />
            <div className="absolute inset-0.5 rounded-3xl bg-base-100/95 backdrop-blur-2xl" />
          </div>

          <div
            className="navbar min-h-16 p-0 relative group"
            style={{ transform: "translateZ(10px)" }}
          >
            <Motion.div className="flex-1" variants={itemMotion}>
              <Link to="/" className="flex items-center gap-3 group/logo">
                <Motion.div
                  className="relative"
                  whileHover={{
                    rotateY: 180,
                    scale: 1.1,
                    transition: { duration: 0.6 },
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src="/logo.svg"
                    alt="Logo"
                    fetchPriority="high"
                    className="w-8 h-8 md:w-9 md:h-9 drop-shadow-2xl"
                    style={{ transform: "translateZ(20px)" }}
                  />
                  <Motion.div
                    className="absolute inset-0 bg-primary/30 blur-xl rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{ transform: "translateZ(-10px)" }}
                  />
                </Motion.div>

                <div className="leading-tight">
                  <Motion.p
                    className="text-base md:text-lg font-black tracking-tighter"
                    whileHover={{ x: 3 }}
                  >
                    HRIDOY
                    <Motion.span
                      className="text-primary inline-block"
                      animate={{
                        scale: [1, 1.3, 1],
                        rotateZ: [0, 10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      .
                    </Motion.span>
                  </Motion.p>
                  <p className="text-[7px] md:text-[9px] uppercase tracking-[0.3em] font-bold opacity-50">
                    MERN Developer
                  </p>
                </div>
              </Link>
            </Motion.div>

            <Motion.ul
              className="hidden lg:flex items-center gap-1"
              variants={itemMotion}
            >
              {NAV_ITEMS.map((item, idx) => (
                <Motion.li
                  key={item.label}
                  className="relative py-2"
                  initial={{ opacity: 0, rotateX: -20 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -2 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <NavLink to={item.link} className={navLinkClass}>
                    {({ isActive }) => (
                      <>
                        <Motion.span
                          className="relative z-10 inline-block"
                          whileHover={{
                            scale: 1.05,
                            textShadow: isActive
                              ? "0 0 8px rgba(37, 99, 235, 0.5)"
                              : "0 0 8px rgba(100, 100, 100, 0.3)",
                          }}
                        >
                          {item.label}
                        </Motion.span>

                        {isActive && (
                          <Motion.span
                            layoutId="nav-underline"
                            className="absolute inset-x-3 -bottom-1 h-0.5 bg-linear-to-r from-primary via-accent to-primary rounded-full"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                            style={{
                              boxShadow: "0 0 10px rgba(37, 99, 235, 0.6)",
                              transform: "translateZ(5px)",
                            }}
                          />
                        )}

                        <Motion.span
                          className="absolute inset-0 bg-primary/10 rounded-xl -z-10"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileHover={{
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 0.2 },
                          }}
                          style={{ transform: "translateZ(-5px)" }}
                        />
                      </>
                    )}
                  </NavLink>
                </Motion.li>
              ))}
            </Motion.ul>

            <Motion.div
              className="flex items-center gap-1 md:gap-3 ml-4"
              variants={itemMotion}
            >
              <Motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleTheme();
                }}
                className="btn btn-ghost btn-circle btn-sm md:btn-md text-lg relative overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ transformStyle: "preserve-3d" }}
                aria-label="Toggle theme"
              >
                <Motion.div
                  className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ transform: "translateZ(-2px)" }}
                />
                <AnimatePresence mode="wait">
                  <Motion.div
                    key={theme}
                    initial={{ rotateY: -90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    {theme === "light" ? (
                      <FiMoon />
                    ) : (
                      <FiSun className="text-yellow-400" />
                    )}
                  </Motion.div>
                </AnimatePresence>
              </Motion.button>

              {!isContactPage && (
                <Motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Link
                    to="/contact"
                    className="btn btn-primary btn-sm hidden md:inline-flex px-6 font-bold tracking-wider rounded-xl relative overflow-hidden group"
                  >
                    <Motion.span
                      className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <span className="relative z-10">HIRE ME</span>
                    <Motion.span
                      className="absolute inset-0 bg-accent/20 rounded-xl"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{
                        scale: 1,
                        opacity: 1,
                        transition: { duration: 0.3 },
                      }}
                      style={{ transform: "translateZ(-3px)" }}
                    />
                  </Link>
                </Motion.div>
              )}

              <Motion.button
                className="lg:hidden btn btn-ghost btn-circle text-2xl"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  <Motion.div
                    key={isOpen ? "close" : "menu"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? <HiX /> : <HiMenuAlt3 />}
                  </Motion.div>
                </AnimatePresence>
              </Motion.button>
            </Motion.div>
          </div>
        </Motion.div>

        <AnimatePresence>
          {isOpen && (
            <Motion.div
              variants={mobileMenuMotion}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden mt-4 overflow-hidden rounded-3xl border border-base-content/10 bg-base-100/95 backdrop-blur-2xl shadow-2xl shadow-primary/10"
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
            >
              <Motion.ul
                className="flex flex-col gap-2 p-6"
                variants={mobileMenuMotion}
              >
                {NAV_ITEMS.map((item) => (
                  <Motion.li
                    key={item.label}
                    variants={itemMotion}
                    whileHover={{
                      scale: 1.02,
                      x: 8,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        `block py-4 px-5 rounded-2xl text-lg font-bold transition-all relative overflow-hidden ${
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-base-content/70 hover:bg-base-content/5"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span className="relative z-10">{item.label}</span>
                          {isActive && (
                            <Motion.div
                              className="absolute inset-0 bg-linear-to-r from-primary/20 via-accent/20 to-primary/20"
                              animate={{
                                backgroundPosition: [
                                  "0% 50%",
                                  "100% 50%",
                                  "0% 50%",
                                ],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              style={{
                                backgroundSize: "200% 100%",
                                transform: "translateZ(-2px)",
                              }}
                            />
                          )}
                        </>
                      )}
                    </NavLink>
                  </Motion.li>
                ))}

                {!isContactPage && (
                  <Motion.div
                    variants={itemMotion}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-4"
                  >
                    <Link
                      to="/contact"
                      className="btn btn-primary w-full shadow-lg shadow-primary/20 relative overflow-hidden"
                    >
                      <Motion.span
                        className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <span className="relative z-10">LET'S TALK</span>
                    </Link>
                  </Motion.div>
                )}
              </Motion.ul>
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </Motion.nav>
  );
};

export default Navbar;
