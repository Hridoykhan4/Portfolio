/* eslint-disable no-unused-vars */
import { motion } from "motion/react";

/**
 * Alternative Premium LoadingSpinner with Orbit Animation
 * Use this for a more dynamic, modern feel
 */

const LoadingSpinner = ({ size = "default", fullScreen = false }) => {
  const sizes = {
    small: { container: "w-12 h-12", dot: "w-3 h-3" },
    default: { container: "w-20 h-20", dot: "w-4 h-4" },
    large: { container: "w-32 h-32", dot: "w-6 h-6" },
  };

  const { container, dot } = sizes[size];

  const containerClass = fullScreen
    ? "fixed inset-0 z-50 flex flex-col items-center justify-center bg-base-100 gap-8"
    : "flex items-center justify-center";

  return (
    <div className={containerClass}>
      {/* Spinner Container */}
      <div className={`relative ${container}`}>
        {/* Center dot */}
        <motion.div
          className={`absolute inset-0 m-auto ${dot} rounded-full bg-primary`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orbiting dots */}
        {[0, 120, 240].map((rotation, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.1,
            }}
            style={{ rotate: rotation }}
          >
            <motion.div
              className={`${dot} rounded-full bg-primary absolute top-0 left-1/2 -translate-x-1/2`}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          </motion.div>
        ))}

        {/* Rotating ring */}
        <motion.div
          className={`absolute inset-0 rounded-full border-2 border-base-content/5`}
          animate={{ rotate: -360 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Loading text and branding */}
      {fullScreen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-base-content/80 font-bold text-lg tracking-tight mb-2">
            Loading
          </p>
          <motion.div
            className="flex gap-1 justify-center"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-primary"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default LoadingSpinner;