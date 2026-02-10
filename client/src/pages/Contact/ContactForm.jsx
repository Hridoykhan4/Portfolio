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
} from "react-icons/fi";
import { sendEmail } from "../../utils/emailService";
import emailjs from "@emailjs/browser";
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
    try {
      const adminParams = {
        from_name: data.name || "Portfolio Visitor",
        from_email: data.email,
        subject: isFull ? "Direct Message" : "Newsletter Sub",
        message: data.message || "New subscription from Home page.",
      };

      const autoReplyParams = {
        from_name: data.name || "Friend",
        from_email: data.email,
      };

      await Promise.all([
        sendEmail({ templateParams: adminParams }),

        emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
          autoReplyParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        ),
      ]);

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className={`relative ${isFull ? "" : "max-w-2xl"}`}>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="p-8 rounded-3xl bg-primary/10 border border-primary/20 text-center"
          >
            <FiCheckCircle className="text-5xl text-primary mx-auto mb-4" />
            <h4 className="text-2xl font-bold text-base-content">
              Message Sent!
            </h4>
            <p className="text-base-content/60">
              I'll get back to you faster than a page load.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-4"
          >
            {isFull && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label-text mb-2 flex items-center gap-2 opacity-60">
                    <FiUser size={12} /> Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    className="input input-bordered bg-base-200/50 focus:border-primary"
                    placeholder="Hridoy Khan"
                  />
                </div>
                <div className="form-control">
                  <label className="label-text mb-2 flex items-center gap-2 opacity-60">
                    <FiMail size={12} /> Email
                  </label>
                  <input
                    {...register("email", { required: true })}
                    className="input input-bordered bg-base-200/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            )}

            {!isFull && (
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <input
                  {...register("email", { required: true })}
                  className="input input-bordered flex-1 bg-base-100/50"
                  placeholder="Enter your email"
                />
                <button
                  disabled={isSubmitting}
                  className="btn btn-primary px-8"
                >
                  {isSubmitting ? (
                    <FiLoader className="animate-spin" />
                  ) : (
                    "Connect"
                  )}
                </button>
              </div>
            )}

            {isFull && (
              <>
                <div className="form-control">
                  <label className="label-text mb-2 flex items-center gap-2 opacity-60">
                    <FiMessageSquare size={12} /> Message
                  </label>
                  <textarea
                    {...register("message", { required: true })}
                    className="textarea textarea-bordered bg-base-200/50 h-32"
                    placeholder="Let's talk about..."
                  />
                </div>
                <button
                  disabled={isSubmitting}
                  className="btn btn-primary w-full md:w-max px-10 rounded-xl group"
                >
                  {isSubmitting ? (
                    <FiLoader className="animate-spin" />
                  ) : (
                    "Send Message"
                  )}
                  <FiSend className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </>
            )}

            {status === "error" && (
              <p className="text-error text-xs">
                Something went wrong. Try again?
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
