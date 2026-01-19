import { motion as Motion} from "motion/react";
import { Link } from "react-router";
// import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <Motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full px-6 py-4"
    >
      {/* Glassmorphism Container */}
      <div className="mx-auto max-w-7xl backdrop-blur-md bg-base-100/70 border border-white/10 shadow-lg rounded-2xl navbar">
        <div className="flex-1">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-10 h-10 group-hover:rotate-12 transition-transform"
            />
            <span className="text-xl font-bold tracking-tighter hidden sm:block">
              HRIDOY<span className="text-primary">.dev</span>
            </span>
          </Link>
        </div>

        <div className="flex-none gap-4">
          {/* <ThemeSwitcher /> */}
          <Link
            to="/contact"
            className="btn btn-primary btn-sm md:btn-md rounded-xl shadow-indigo-500/20 shadow-lg"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </Motion.nav>
  );
};

export default Navbar;
