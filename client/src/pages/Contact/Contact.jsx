/* eslint-disable no-unused-vars */
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiClock, FiArrowUpRight } from "react-icons/fi";
import ContactForm from "./ContactForm";

const Contact = () => {
  const formRef = useRef(null);

  // Lightweight 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(useSpring(y), [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(useSpring(x), [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e) => {
    if (!formRef.current) return;
    const rect = formRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "toyobuddinhridoy@gmail.com",
      link: "mailto:toyobuddinhridoy@gmail.com",
    },
    {
      icon: FaPhoneAlt,
      label: "Phone",
      value: "+880 1832-148385",
      link: "tel:+8801832148385",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Chittagong, Bangladesh",
    },
  ];

const socials = [
  {
    icon: FaLinkedin,
    link: "https://linkedin.com/in/md-toyob-uddin-hridoy",
    label: "LinkedIn",
  },
  { icon: FaGithub, link: "https://github.com/Hridoykhan4", label: "GitHub" },
  { icon: FaWhatsapp, link: "https://wa.me/8801832148385", label: "WhatsApp" },
  {
    icon: FaEnvelope,
    link: "mailto:toyobuddinhridoy@gmail.com",
    label: "Email",
  },
];

  return (
    <section className="relative section-spacing overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 blur-[120px] rounded-full" />
      </div>

      <div className="container-page relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* LEFT SIDE - Info (5 columns) */}
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-24">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-primary rounded-full"
              />
              <span className="text-xs font-black tracking-wider uppercase text-primary">
                Available for Hire
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
                Let's Work <span className="text-gradient">Together</span>
              </h1>
              <p className="text-lg text-base-content/70 leading-relaxed max-w-md">
                Have a project in mind? Let's create something exceptional that
                makes an impact.
              </p>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="group"
                >
                  {item.link ? (
                    <a
                      href={item.link}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-base-200/40 border border-base-content/5 hover:bg-base-200/70 hover:border-primary/30 transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <item.icon size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-base-content/50 uppercase tracking-wider">
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-base-content truncate">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-base-200/40 border border-base-content/5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-base-content/50 uppercase tracking-wider">
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-base-content">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Socials */}
            <div className="pt-6 border-t border-base-content/5">
              <p className="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-4">
                Connect
              </p>
              <div className="flex gap-3">
                {socials.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.05 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-2xl bg-base-200/60 border border-base-content/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-content transition-all shadow-md hover:shadow-lg hover:shadow-primary/20"
                  >
                    <social.icon size={22} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Response Time Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="p-6 rounded-2xl bg-linear-to-br from-primary/10 to-accent/10 border border-primary/20"
            >
              <div className="flex items-center gap-4">
                <FiClock className="text-primary text-3xl" />
                <div>
                  <p className="font-bold text-base-content">Quick Response</p>
                  <p className="text-sm text-base-content/70">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Form (7 columns) */}
          <motion.div
            className="lg:col-span-7"
            ref={formRef}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-primary/20 to-accent/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Form Container */}
              <div className="relative bg-base-200/50 backdrop-blur-xl border border-base-content/8 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
                <div className="mb-8">
                  <h3 className="text-3xl font-black tracking-tight mb-2">
                    Send a Message
                  </h3>
                  <div className="h-1 w-12 bg-primary rounded-full" />
                </div>

                <ContactForm variant="contact" />

                {/* Decorative Icon */}
                <div className="absolute top-8 right-8 opacity-5 pointer-events-none">
                  <FaEnvelope size={120} />
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-6 p-6 rounded-2xl bg-primary text-primary-content flex items-center justify-between cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-content/20 flex items-center justify-center">
                  <FiClock size={24} />
                </div>
                <div>
                  <p className="font-bold">Fast Response</p>
                  <p className="text-sm opacity-90">Average 4-6 hours</p>
                </div>
              </div>
              <FiArrowUpRight size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
