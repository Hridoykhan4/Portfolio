// SmoothCursor.jsx - Optimized
import { useEffect, useRef } from "react";

const SmoothCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (!cursorRef.current) return;
      // Using translate3d for GPU acceleration (Sub-pixel rendering)
      cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 border-2 border-primary rounded-full pointer-events-none z-9999 transition-transform duration-150 ease-out mix-blend-difference"
      style={{ willChange: "transform", left: -12, top: -12 }}
    />
  );
};

export default SmoothCursor;
