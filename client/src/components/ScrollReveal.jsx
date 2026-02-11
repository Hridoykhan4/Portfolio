import { motion as Motion } from "motion/react";
const ScrollReveal = ({ children, delay = 0 }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      style={{ overflow: "clip" }}
    >
      {children}
    </Motion.div>
  );
};

export default ScrollReveal