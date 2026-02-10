/* eslint-disable no-unused-vars */
import { useEffect, useState, useContext } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import ThemeContext from "../contexts/ThemeContext";


const CustomCursor = () => {
  const { theme } = useContext(ThemeContext);
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device has mouse (desktop only)
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (!hasHover) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);

    // Detect interactive elements
    const handleMouseEnter = (e) => {
      const target = e.target;

      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.classList.contains("btn") ||
        target.classList.contains("social-icon-btn") ||
        target.classList.contains("btn-cta") ||
        target.classList.contains("btn-cta-soft")
      ) {
        setCursorVariant("link");
      } else if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.contentEditable === "true"
      ) {
        setCursorVariant("text");
      }
    };

    const handleMouseLeave = () => {
      setCursorVariant("default");
    };

    // Add event listeners
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);
    window.addEventListener("mouseenter", () => setIsVisible(true));

    // Add listeners to all interactive elements
    document.addEventListener("mouseover", handleMouseEnter);
document.addEventListener("mouseout", handleMouseLeave);


    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor:
        theme === "light"
          ? "rgba(37, 99, 235, 0.2)"
          : "rgba(56, 189, 248, 0.2)",
      border:
        theme === "light"
          ? "2px solid rgba(37, 99, 235, 0.5)"
          : "2px solid rgba(56, 189, 248, 0.5)",
    },
    link: {
      width: 60,
      height: 60,
      backgroundColor:
        theme === "light"
          ? "rgba(37, 99, 235, 0.1)"
          : "rgba(56, 189, 248, 0.1)",
      border:
        theme === "light"
          ? "2px solid rgba(37, 99, 235, 0.8)"
          : "2px solid rgba(56, 189, 248, 0.8)",
    },
    text: {
      width: 2,
      height: 24,
      backgroundColor:
        theme === "light"
          ? "rgba(37, 99, 235, 0.8)"
          : "rgba(56, 189, 248, 0.8)",
      border: "none",
    },
  };

  // Don't render on mobile/tablet
  if (
    typeof window !== "undefined" &&
    !window.matchMedia("(hover: hover)").matches
  ) {
    return null;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion) return null;


  return (
    <>
      {/* Main Cursor */}
      <motion.div
       className={`fixed pointer-events-none z-9999 ${
  theme === "light" ? "mix-blend-normal" : "mix-blend-difference"
}`}

        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="rounded-full backdrop-blur-sm"
          variants={variants}
          animate={cursorVariant}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
          }}
          style={{
            width: variants[cursorVariant].width,
            height: variants[cursorVariant].height,
            backgroundColor: variants[cursorVariant].backgroundColor,
            border: variants[cursorVariant].border,
          }}
        />
      </motion.div>

      {/* Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-9999"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="rounded-full"
          animate={{
            width: cursorVariant === "text" ? 0 : 6,
            height: cursorVariant === "text" ? 0 : 6,
            backgroundColor: theme === "light" ? "#2563eb" : "#38bdf8",
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
          }}
          style={{
            transform: "translate(13px, 13px)",
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
