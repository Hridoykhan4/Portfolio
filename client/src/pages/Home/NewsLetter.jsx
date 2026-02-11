import { motion } from "motion/react";
import { FiMail, FiTrendingUp, FiCode, FiZap } from "react-icons/fi";
import ContactForm from "../Contact/ContactForm";

const NewsletterSection = () => {
  const benefits = [
    {
      icon: FiCode,
      text: "Latest MERN stack insights",
    },
    {
      icon: FiTrendingUp,
      text: "Industry trends & best practices",
    },
    {
      icon: FiZap,
      text: "Exclusive project breakdowns",
    },
  ];

  return (
    <section className="relative overflow-hidden section-spacing">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Gradient Border Container */}
          <div className="relative bg-base-200/40 backdrop-blur-xl border border-base-content/8 rounded-[2.5rem] p-1">
            <div className="relative bg-base-100 rounded-[2.3rem] p-10 md:p-16 lg:p-20 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-primary/10 blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-60 h-60 bg-accent/10 blur-[100px] pointer-events-none" />

              <div className="relative z-10 max-w-3xl mx-auto">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8"
                >
                  <FiMail className="text-primary" size={14} />
                  <span className="text-xs font-black tracking-[0.2em] uppercase text-primary">
                    Stay Connected
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="mb-6"
                >
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] mb-6">
                    Let's Build <span className="text-gradient">Together</span>
                  </h3>
                  <p className="text-base md:text-lg lg:text-xl text-base-content/70 leading-relaxed">
                    Open to{" "}
                    <span className="text-primary font-semibold">
                      collaboration
                    </span>
                    ,{" "}
                    <span className="text-accent font-semibold">
                      opportunities
                    </span>
                    , and meaningful technical conversations. Drop your email
                    and let's connect.
                  </p>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
                >
                  {benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 rounded-2xl bg-base-200/40 border border-base-content/5 backdrop-blur-sm"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <benefit.icon size={18} />
                      </div>
                      <p className="text-sm font-semibold text-base-content/80">
                        {benefit.text}
                      </p>
                    </div>
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

                {/* Trust Signal */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mt-6 text-xs md:text-sm text-center text-base-content/40 font-medium"
                >
                  🔒 No spam, ever. Only meaningful updates and opportunities.
                  Unsubscribe anytime.
                </motion.p>
              </div>
            </div>
          </div>

          {/* Floating Glow Elements */}
          <div className="absolute -top-4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-4 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
