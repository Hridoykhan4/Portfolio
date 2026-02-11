import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useSpring, useMotionValue } from "motion/react";

const SmoothCursor = () => {
  // 1. Raw coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // 2. Smooth "Spring" physics (This is what makes it feel 'smoothy')
  const springConfig = { damping: 25, stiffness: 250 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      // Offset by 10px to center a 20px ring
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      style={{
        translateX: x,
        translateY: y,
      }}
      className="fixed top-0 left-0 w-5 h-5 border-2 border-primary rounded-full pointer-events-none z-9999 mix-blend-difference"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    />
  );
};

export default SmoothCursor;
