import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // Initialize Lenis with optimized settings
    const lenis = new Lenis({
      duration: 1.2, // Smooth but not too slow
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1, // Normal scroll speed
      smoothTouch: false, // Better for mobile performance
      touchMultiplier: 2,
      infinite: false,
      autoResize: true, // Auto-adjust on window resize
    });

    // Expose Lenis instance globally for access in other components
    window.lenis = lenis;

    // Animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor link clicks
    const handleAnchorClick = (e) => {
      const target = e.target.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      e.preventDefault();
      const element = document.querySelector(href);

      if (element) {
        lenis.scrollTo(element, {
          offset: -80, // Account for fixed navbar
          duration: 1.5,
        });
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Cleanup
    return () => {
      lenis.destroy();
      delete window.lenis;
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
