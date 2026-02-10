/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useState } from "react";
import { FiSend, FiCheckCircle } from "react-icons/fi";

const Newsletter = ({
  title = "Let’s Stay Connected",
  subtitle = "Get updates on my projects, research, and experiments in modern web systems.",
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_email: data.email,
          message: "New portfolio subscriber",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            relative rounded-3xl
            bg-base-200/60 backdrop-blur-xl
            border border-base-content/10
            px-6 py-10 md:px-10 md:py-14
          "
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-black tracking-tight">
              {title}
            </h3>

            <p className="mt-3 text-base-content/60 text-sm md:text-base">
              {subtitle}
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="
                    input input-bordered w-full
                    bg-base-100/80
                  "
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-error">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  btn btn-primary
                  px-6 rounded-xl
                  flex items-center gap-2
                  active:scale-95 transition
                "
              >
                {success ? (
                  <>
                    <FiCheckCircle /> Sent
                  </>
                ) : (
                  <>
                    <FiSend /> Connect
                  </>
                )}
              </button>
            </form>

            <p className="mt-4 text-xs text-base-content/50">
              No spam. No marketing. Just meaningful updates.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
