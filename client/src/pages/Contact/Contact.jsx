import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import ContactForm from "./ContactForm";


const Contact = () => {
  return (
    <div className="section-spacing container-page min-h-[80vh] flex flex-col justify-center">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Info */}
        <div>
          <span className="text-primary font-black tracking-[0.4em] uppercase text-xs mb-4 block">
            Available for Hire
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
            Let’s Build <br />
            <span className="text-gradient">Meaningful</span> Stuff.
          </h1>
          <p className="text-base-content/60 text-lg mb-10 max-w-md">
            Currently based in **Chittagong, Bangladesh**. Open to remote
            collaborations and world-changing ideas.
          </p>

          <div className="flex gap-6">
            {[
              { icon: FaGithub, link: "https://github.com/Hridoykhan4" },
              { icon: FaLinkedin, link: "#" },
              { icon: FaFacebook, link: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                className="text-2xl opacity-40 hover:opacity-100 hover:text-primary transition-all"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Full Form */}
        <div className="bg-base-200/30 p-1 border border-base-content/5 rounded-[2.5rem]">
          <div className="bg-base-100 p-8 md:p-12 rounded-[2.4rem] shadow-2xl">
            <ContactForm variant="contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact