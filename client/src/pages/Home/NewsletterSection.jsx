// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { FiMail, FiTrendingUp, FiCode, FiZap } from "react-icons/fi";
import ContactForm from "../Contact/ContactForm";

const NewsletterSection = () => {
  const benefits = [
    {
      icon: FiCode,
      text: "MERN stack insights",
    },
    {
      icon: FiTrendingUp,
      text: "Industry best practices",
    },
    {
      icon: FiZap,
      text: "Project breakdowns",
    },
  ];

  return (
    <section className="relative overflow-hidden section-spacing">
      {/* Ambient Background - Subtle on mobile */}
      <div className="absolute inset-0 pointer-events-none opacity-60 md:opacity-100">
        <div className="absolute top-1/2 left-1/4 w-75 md:w-125 h-75 md:h-125 bg-primary/5 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-62.5 md:w-100 h-62.5 md:h-100 bg-accent/5 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Main Container with responsive padding */}
          <div className="relative bg-base-200/40 backdrop-blur-xl border border-base-content/8 rounded-3xl md:rounded-[2.5rem] p-0.5 md:p-1">
            <div className="relative bg-base-100 rounded-[calc(1.5rem-2px)] md:rounded-[2.3rem] px-6 py-8 md:p-12 lg:p-16 overflow-hidden">
              {/* Decorative Elements - Reduced on mobile */}
              <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 md:-translate-y-1/2 md:translate-x-1/2 w-48 md:w-80 h-48 md:h-80 bg-primary/10 blur-[80px] md:blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 md:translate-y-1/2 md:-translate-x-1/2 w-40 md:w-60 h-40 md:h-60 bg-accent/10 blur-[60px] md:blur-[100px] pointer-events-none" />

              <div className="relative z-10 max-w-3xl mx-auto">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="inline-flex items-center gap-2 md:gap-2.5 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6 md:mb-8"
                >
                  <FiMail className="text-primary" size={12} />
                  <span className="text-[10px] md:text-xs font-black tracking-[0.15em] md:tracking-[0.2em] uppercase text-primary">
                    Stay Connected
                  </span>
                </motion.div>

                {/* Heading - Responsive sizes */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="mb-5 md:mb-6"
                >
                  <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter leading-[0.95] mb-4 md:mb-6">
                    Let's Build{" "}
                    <span className="text-gradient">
                      Together
                    </span>
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg xl:text-xl text-base-content/70 leading-relaxed">
                    Open to{" "}
                    <span className="text-primary font-semibold">
                      collaboration
                    </span>
                    ,{" "}
                    <span className="text-accent font-semibold">
                      opportunities
                    </span>
                    , and meaningful conversations. Let's connect.
                  </p>
                </motion.div>

                {/* Benefits Grid - Compact on mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-10"
                >
                  {benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 + idx * 0.05, duration: 0.4 }}
                      className="flex items-center gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl bg-base-200/40 border border-base-content/5 backdrop-blur-sm hover:bg-base-200/60 hover:border-primary/20 transition-all duration-300"
                    >
                      <div className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <benefit.icon size={16} className="md:w-4.5 md:h-4.5" />
                      </div>
                      <p className="text-xs md:text-sm font-semibold text-base-content/80 leading-tight">
                        {benefit.text}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <ContactForm variant="minimal" />
                </motion.div>

                {/* Trust Signal - Smaller on mobile */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mt-4 md:mt-6 text-[11px] md:text-xs lg:text-sm text-center text-base-content/40 font-medium leading-relaxed"
                >
                  🔒 No spam, ever. Only meaningful updates. Unsubscribe anytime.
                </motion.p>
              </div>
            </div>
          </div>

          {/* Floating Glow Elements - Hidden on mobile */}
          <div className="hidden md:block absolute -top-4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="hidden md:block absolute -bottom-4 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;