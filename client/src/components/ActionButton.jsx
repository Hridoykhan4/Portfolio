import { motion as Motion } from "motion/react";

const ActionButton = ({ label, variant = "primary", onClick }) => {
  const isOutline = variant === "outline";

  return (
    <Motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        relative px-8 py-3 rounded-full font-bold tracking-wide transition-all duration-300
        ${
          isOutline
            ? "border-2 border-primary/50 text-base-content hover:bg-primary hover:text-white hover:border-primary"
            : "bg-primary text-primary-content shadow-lg shadow-primary/20 hover:shadow-primary/40"
        }
      `}
    >
      {label}
    </Motion.button>
  );
};

export default ActionButton;
