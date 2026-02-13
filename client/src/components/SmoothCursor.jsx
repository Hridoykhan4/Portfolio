import { useEffect, useRef } from "react";

const SmoothCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-5 h-5 border-2 border-primary rounded-full pointer-events-none z-9999 transition-transform duration-75 ease-out"
      style={{ willChange: "transform", left: -10, top: -10 }}
    />
  );
};

export default SmoothCursor;
