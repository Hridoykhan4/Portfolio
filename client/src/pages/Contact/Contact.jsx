import { motion } from "motion/react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiClock, FiGlobe } from "react-icons/fi";
import ContactForm from "./ContactForm";

const Contact = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      link: "https://github.com/Hridoykhan4",
      label: "GitHub",
      color: "#181717",
    },
    {
      icon: FaLinkedin,
      link: "https://linkedin.com/in/md-toyob-uddin-hridoy",
      label: "LinkedIn",
      color: "#0A66C2",
    },
    {
      icon: FaEnvelope,
      link: "mailto:toyobuddinhridoy@gmail.com",
      label: "Email",
      color: "#EA4335",
    },
  ];

  const quickInfo = [
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Chittagong, Bangladesh",
    },
    {
      icon: FiGlobe,
      label: "Remote Work",
      value: "Available Worldwide",
    },
    {
      icon: FiClock,
      label: "Response Time",
      value: "Within 24 hours",
    },
  ];

  return (
    <div className="section-spacing container-page min-h-screen flex flex-col justify-center">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* ========== LEFT SIDE: INFO ========== */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8 lg:sticky lg:top-24"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-black tracking-[0.2em] uppercase text-primary">
              Available for Hire
            </span>
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] mb-6">
              Let's Build <span className="text-gradient">Something</span>
              <br />
              Meaningful.
            </h1>
            <p className="text-base md:text-lg text-base-content/70 leading-relaxed max-w-md">
              Whether you're looking to hire, collaborate, or just have a
              technical conversation — I'm here to help build exceptional
              digital experiences.
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="space-y-4">
            {quickInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-base-200/40 border border-base-content/5 backdrop-blur-sm group hover:bg-base-200/60 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                  <info.icon size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-base-content/50 uppercase tracking-wider mb-0.5">
                    {info.label}
                  </p>
                  <p className="text-sm font-semibold text-base-content">
                    {info.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="pt-6 border-t border-base-content/5">
            <p className="text-xs font-bold text-base-content/50 uppercase tracking-wider mb-4">
              Connect With Me
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={
                    social.label !== "Email" ? "noopener noreferrer" : undefined
                  }
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-14 h-14 rounded-2xl bg-base-200/60 border border-base-content/10 text-base-content/60 hover:bg-primary hover:text-primary-content hover:border-primary transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/20"
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Trust Signal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="p-6 rounded-2xl bg-linear-to-br from-primary/5 to-accent/5 border border-primary/10"
          >
            <p className="text-sm text-base-content/70 leading-relaxed">
              💡{" "}
              <span className="font-semibold text-base-content">
                Quick Response Guaranteed.
              </span>{" "}
              I typically respond within 24 hours. For urgent inquiries, mention
              "Urgent" in your message.
            </p>
          </motion.div>
        </motion.div>

        {/* ========== RIGHT SIDE: FORM ========== */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          {/* Decorative Background */}
          <div className="absolute -inset-4 bg-linear-to-br from-primary/5 via-transparent to-accent/5 rounded-[3rem] blur-2xl" />

          {/* Form Container */}
          <div className="relative bg-base-200/40 border border-base-content/8 rounded-[2.5rem] p-1 backdrop-blur-sm">
            <div className="bg-base-100 rounded-[2.3rem] p-8 md:p-10 lg:p-12 shadow-2xl">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
                  Send a Message
                </h3>
                <p className="text-sm text-base-content/60">
                  Fill out the form below and I'll get back to you soon.
                </p>
              </div>

              <ContactForm variant="contact" />
            </div>
          </div>

          {/* Floating Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
