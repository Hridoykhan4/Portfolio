import { motion as Motion, AnimatePresence } from "motion/react";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import ThemeContext from "../../../contexts/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NAV_ITEMS = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Skills", link: "/skills" },
  { label: "Projects", link: "/projects" },
  { label: "Contact", link: "/contact" },
];

const navMotion = {
  hidden: { y: -80, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const mobileMenuMotion = {
  hidden: { opacity: 0, scale: 0.95, y: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.2 } },
};

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative px-3 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
      isActive ? "text-primary" : "text-base-content/60 hover:text-primary"
    }`;

  return (
    <Motion.nav
      variants={navMotion}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-100 w-full pt-4"
    >
      <div className="container-page">
        {/* Main Glass Bar */}
        <div className="rounded-2xl border border-white/10 bg-base-100/70 backdrop-blur-xl shadow-2xl px-4 md:px-6">
          <div className="navbar min-h-16 p-0">
            {/* Logo Section */}
            <div className="flex-1">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <img
                    src="/logo.svg"
                    alt="Logo"
                    className="w-8 h-8 md:w-9 md:h-9 transition-transform duration-500 group-hover:rotate-12"
                  />
                  <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="leading-tight">
                  <p className="text-base md:text-lg font-black tracking-tighter">
                    HRIDOY<span className="text-primary">.</span>
                  </p>
                  <p className="text-[7px] md:text-[9px] uppercase tracking-[0.3em] font-bold opacity-50">
                    MERN Developer
                  </p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.label} className="relative py-2">
                  <NavLink to={item.link} className={navLinkClass}>
                    {({ isActive }) => (
                      <>
                        <span className="relative z-10">{item.label}</span>
                        {isActive && (
                          <Motion.span
                            layoutId="nav-underline"
                            className="absolute inset-x-3 -bottom-1 h-0.5 bg-primary rounded-full"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Action Group */}
            <div className="flex items-center gap-1 md:gap-3 ml-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleTheme();
                }}
                className="btn btn-ghost btn-circle btn-sm md:btn-md text-lg"
              >
                {theme === "light" ? (
                  <FiMoon />
                ) : (
                  <FiSun className="text-yellow-400" />
                )}
              </button>

              <Link
                to="/contact"
                className="btn btn-primary btn-sm hidden md:inline-flex px-6 font-bold tracking-wider rounded-xl"
              >
                HIRE ME
              </Link>

              <button
                className="lg:hidden btn btn-ghost btn-circle text-2xl"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <HiX /> : <HiMenuAlt3 />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu  */}
        <AnimatePresence>
          {isOpen && (
            <Motion.div
              variants={mobileMenuMotion}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden mt-3 overflow-hidden rounded-2xl border border-white/10 bg-base-100/95 backdrop-blur-2xl shadow-2xl"
            >
              <ul className="flex flex-col gap-1 p-6">
                {NAV_ITEMS.map((item, idx) => (
                  <Motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: idx * 0.05 },
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        `block py-3 px-4 rounded-xl text-lg font-bold transition-all ${
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-base-content/70 hover:bg-base-content/5"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </Motion.li>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn btn-primary w-full mt-6 shadow-lg shadow-primary/20"
                >
                  LET'S TALK
                </Link>
              </ul>
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </Motion.nav>
  );
};

export default Navbar;
