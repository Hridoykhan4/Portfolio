import { motion, AnimatePresence } from "motion/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  FiSend,
  FiCheckCircle,
  FiLoader,
  FiUser,
  FiMail,
  FiMessageSquare,
  FiAlertCircle,
  FiPhone,
} from "react-icons/fi";
import { sendAdminEmail, sendAutoReply } from "../../utils/emailService";

const ContactForm = ({ variant = "minimal" }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [status, setStatus] = useState("idle");

  const isFull = variant === "contact";

  const onSubmit = async (data) => {
    setStatus("sending");

    try {
      const adminParams = {
        from_name: data.name || "Newsletter Subscriber",
        from_email: data.email,
        phone: data.phone || "Not provided",
        subject: isFull
          ? "🔥 New Contact Message"
          : "📬 Newsletter Subscription",
        message:
          data.message || "New newsletter subscription request from homepage.",
      };

      const autoReplyParams = {
        to_name: data.name || "there",
        to_email: data.email,
        type: isFull ? "contact" : "newsletter",
      };

      await Promise.all([
        sendAdminEmail(adminParams),
        sendAutoReply(autoReplyParams),
      ]);

      setStatus("success");
      reset();

      // Reset to idle after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("Email error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <div className={`relative ${isFull ? "" : "max-w-2xl mx-auto"}`}>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative overflow-hidden"
          >
            <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm">
              {/* Success Animation Circle */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                className="relative inline-block mb-6"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                />
                <FiCheckCircle className="relative text-6xl md:text-7xl text-primary" />
              </motion.div>

              <motion.h4
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl font-black tracking-tight text-base-content mb-3"
              >
                Message Sent! ✨
              </motion.h4>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-base md:text-lg text-base-content/70 leading-relaxed"
              >
                {isFull
                  ? "I'll respond faster than a React re-render. Check your inbox for confirmation!"
                  : "You're on the list! Expect meaningful updates, not spam."}
              </motion.p>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* Full Form Layout */}
            {isFull && (
              <>
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label className="flex items-center gap-2 text-sm font-semibold text-base-content/70 mb-3">
                      <FiUser className="text-primary" size={14} />
                      Your Name
                    </label>
                    <input
                      {...register("name", {
                        required: "Name is required",
                        minLength: { value: 2, message: "Name too short" },
                      })}
                      type="text"
                      placeholder="John Doe"
                      className={`
                        w-full h-14 px-5 rounded-2xl
                        bg-base-200/60 backdrop-blur-sm
                        border-2 transition-all duration-300
                        focus:outline-none focus:scale-[1.01]
                        placeholder:text-base-content/40
                        ${
                          errors.name
                            ? "border-error focus:border-error"
                            : "border-base-content/10 focus:border-primary"
                        }
                      `}
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1 text-xs text-error mt-2"
                      >
                        <FiAlertCircle size={12} />
                        {errors.name.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label className="flex items-center gap-2 text-sm font-semibold text-base-content/70 mb-3">
                      <FiMail className="text-primary" size={14} />
                      Email Address
                    </label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      type="email"
                      placeholder="john@example.com"
                      className={`
                        w-full h-14 px-5 rounded-2xl
                        bg-base-200/60 backdrop-blur-sm
                        border-2 transition-all duration-300
                        focus:outline-none focus:scale-[1.01]
                        placeholder:text-base-content/40
                        ${
                          errors.email
                            ? "border-error focus:border-error"
                            : "border-base-content/10 focus:border-primary"
                        }
                      `}
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1 text-xs text-error mt-2"
                      >
                        <FiAlertCircle size={12} />
                        {errors.email.message}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Phone Field (Optional) */}
                <div className="relative">
                  <label className="flex items-center gap-2 text-sm font-semibold text-base-content/70 mb-3">
                    <FiPhone className="text-primary" size={14} />
                    Phone Number{" "}
                    <span className="text-xs text-base-content/40 font-normal">
                      (Optional)
                    </span>
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="+880 1XXX-XXXXXX"
                    className="
                      w-full h-14 px-5 rounded-2xl
                      bg-base-200/60 backdrop-blur-sm
                      border-2 border-base-content/10
                      focus:border-primary focus:outline-none
                      focus:scale-[1.01] transition-all duration-300
                      placeholder:text-base-content/40
                    "
                  />
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label className="flex items-center gap-2 text-sm font-semibold text-base-content/70 mb-3">
                    <FiMessageSquare className="text-primary" size={14} />
                    Your Message
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Please tell me how I can help",
                      minLength: {
                        value: 10,
                        message: "Message too short (min 10 chars)",
                      },
                    })}
                    rows={6}
                    placeholder="Tell me about your project, idea, or just say hi..."
                    className={`
                      w-full px-5 py-4 rounded-2xl
                      bg-base-200/60 backdrop-blur-sm
                      border-2 transition-all duration-300
                      focus:outline-none focus:scale-[1.01]
                      placeholder:text-base-content/40
                      resize-none
                      ${
                        errors.message
                          ? "border-error focus:border-error"
                          : "border-base-content/10 focus:border-primary"
                      }
                    `}
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 text-xs text-error mt-2"
                    >
                      <FiAlertCircle size={12} />
                      {errors.message.message}
                    </motion.p>
                  )}
                </div>

                {/* Submit Button - Full Form */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || status === "sending"}
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className="btn-cta w-full md:w-auto px-10 h-14 group relative overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting || status === "sending" ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <FiLoader className="animate-spin" size={18} />
                        <span>Sending...</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <span>Send Message</span>
                        <FiSend
                          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                          size={16}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </>
            )}

            {/* Minimal Form (Newsletter) */}
            {!isFull && (
              <div className="relative">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Email Input */}
                  <div className="flex-1 relative">
                    <input
                      {...register("email", {
                        required: "Email required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email",
                        },
                      })}
                      type="email"
                      placeholder="your.email@company.com"
                      className={`
                        w-full h-14 px-6 rounded-2xl
                        bg-base-200/60 backdrop-blur-md
                        border-2 transition-all duration-300
                        focus:outline-none focus:scale-[1.01]
                        placeholder:text-base-content/40 text-base
                        ${
                          errors.email
                            ? "border-error focus:border-error"
                            : "border-base-content/10 focus:border-primary"
                        }
                      `}
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-6 left-2 flex items-center gap-1 text-xs text-error"
                      >
                        <FiAlertCircle size={12} />
                        {errors.email.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || status === "sending"}
                    whileHover={!isSubmitting ? { scale: 1.03, y: -2 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.97 } : {}}
                    className="btn-cta h-14 px-8 sm:px-10 group whitespace-nowrap"
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting || status === "sending" ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <FiLoader className="animate-spin" size={18} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="idle"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <span>Connect</span>
                          <FiSend
                            className="transition-transform group-hover:translate-x-1"
                            size={16}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </div>
            )}

            {/* Error State */}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 rounded-xl bg-error/10 border border-error/20 text-error text-sm"
              >
                <FiAlertCircle size={16} />
                <span>
                  Something went wrong. Please try again or email me directly.
                </span>
              </motion.div>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
