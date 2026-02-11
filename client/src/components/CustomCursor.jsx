/* eslint-disable no-unused-vars */
import { useEffect, useState, useContext, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import ThemeContext from "../contexts/ThemeContext";

const CustomCursor = () => {
  const { theme } = useContext(ThemeContext);
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 320 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device has mouse (desktop only)
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (!hasHover) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    let rafId = null;

    const moveCursor = (e) => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        cursorX.set(e.clientX - 16);
        cursorY.set(e.clientY - 16);
        setIsVisible(true);
        rafId = null;
      });
    };

    const hideCursor = () => setIsVisible(false);
    const showCursor = () => setIsVisible(true);

    // Optimized interactive element detection
    const handleMouseOver = (e) => {
      const target = e.target;

      // Check for interactive elements
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.classList.contains("btn") ||
        target.classList.contains("social-icon-btn") ||
        target.classList.contains("btn-cta") ||
        target.classList.contains("btn-cta-soft");

      const isTextInput =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.contentEditable === "true";

      if (isInteractive) {
        setCursorVariant("link");
        setIsPointer(true);
      } else if (isTextInput) {
        setCursorVariant("text");
        setIsPointer(false);
      } else {
        setCursorVariant("default");
        setIsPointer(false);
      }
    };

    // Add event listeners
    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseleave", hideCursor);
    window.addEventListener("mouseenter", showCursor);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("mouseenter", showCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [cursorX, cursorY]);

  // Don't render on mobile/tablet or if reduced motion
  if (typeof window !== "undefined") {
    const hasHover = window.matchMedia("(hover: hover)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!hasHover || prefersReducedMotion) {
      return null;
    }
  }

  // Theme-aware cursor styles
  const getCursorStyles = () => {
    const isLight = theme === "light";

    return {
      default: {
        width: 32,
        height: 32,
        backgroundColor: isLight
          ? "rgba(37, 99, 235, 0.15)"
          : "rgba(56, 189, 248, 0.2)",
        border: isLight
          ? "2px solid rgba(37, 99, 235, 0.4)"
          : "2px solid rgba(56, 189, 248, 0.5)",
      },
      link: {
        width: 64,
        height: 64,
        backgroundColor: isLight
          ? "rgba(37, 99, 235, 0.08)"
          : "rgba(56, 189, 248, 0.12)",
        border: isLight
          ? "2px solid rgba(37, 99, 235, 0.6)"
          : "2px solid rgba(56, 189, 248, 0.7)",
      },
      text: {
        width: 2,
        height: 28,
        backgroundColor: isLight
          ? "rgba(37, 99, 235, 0.9)"
          : "rgba(56, 189, 248, 0.9)",
        border: "none",
      },
    };
  };

  const variants = getCursorStyles();
  const dotColor = theme === "light" ? "#2563eb" : "#38bdf8";

  return (
    <>
      {/* Main Cursor Ring */}
      <motion.div
        className="fixed pointer-events-none z-9999"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
          mixBlendMode: theme === "light" ? "normal" : "difference",
        }}
      >
        <motion.div
          className="rounded-full backdrop-blur-sm"
          variants={variants}
          animate={cursorVariant}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
          style={{
            width: variants[cursorVariant].width,
            height: variants[cursorVariant].height,
            backgroundColor: variants[cursorVariant].backgroundColor,
            border: variants[cursorVariant].border,
          }}
        >
          {/* Inner Glow Effect */}
          {isPointer && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle, ${dotColor}22 0%, transparent 70%)`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.div>
      </motion.div>

      {/* Center Dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
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
            backgroundColor: dotColor,
            scale: isPointer ? 1.3 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
          style={{
            transform: "translate(13px, 13px)",
            boxShadow: isPointer
              ? `0 0 8px ${dotColor}, 0 0 12px ${dotColor}`
              : "none",
          }}
        />
      </motion.div>

      {/* Trailing Effect (Optional - for premium feel) */}
      {isPointer && (
        <motion.div
          className="fixed pointer-events-none z-[9998]"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            opacity: isVisible ? 0.3 : 0,
          }}
        >
          <motion.div
            className="rounded-full"
            style={{
              width: 80,
              height: 80,
              border: `1px solid ${dotColor}`,
              transform: "translate(calc(-50% + 16px), calc(-50% + 16px))",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0, 0.2],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;
