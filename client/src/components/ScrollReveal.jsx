import { motion as Motion } from "motion/react";

const ScrollReveal = ({ children, delay = 0, direction = "up" }) => {
  // Logic for different entry directions if you want to spice it up
  const variants = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  };

  return (
    <Motion.div
      initial={{
        opacity: 0,
        ...variants[direction],
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{
        once: true,
        margin: "-120px", // Slightly deeper margin for better timing
        amount: 0.2, // Triggers when 20% of the element is visible
      }}
      transition={{
        duration: 0.8,
        // The "Secret Sauce": A custom Cubic Bezier (Power4.out equivalent)
        // Starts fast, ends with a smooth glide
        ease: [0.22, 1, 0.36, 1],
        delay: delay,
      }}
      // Use 'willChange' to tell the browser to optimize this before it moves
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </Motion.div>
  );
};

export default ScrollReveal;
