import Hero from "./Hero";
import ScrollReveal from "../../components/ScrollReveal";
import ExpertiseMarquee from "./ExpertiseMarquee";
import FeaturedProjects from "./FeaturedProjects";
import AcademicSnapshot from "./AcademicSnapshot";
import ContactForm from "../Contact/ContactForm";

const Home = () => {
  return (
    <section>
      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <FeaturedProjects />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <ExpertiseMarquee />
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <AcademicSnapshot />
      </ScrollReveal>

      {/* Inside Home.jsx */}
      <ScrollReveal delay={0.4}>
        <section className="relative overflow-hidden py-20">
          <div className="container-page">
            <div className="relative rounded-[2.5rem] bg-base-200/50 backdrop-blur-xl border border-base-content/5 p-10 md:p-16">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-primary/10 blur-[120px] pointer-events-none" />

              <div className="relative z-10 max-w-2xl">
                <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                  Let’s Build Something{" "}
                  <span className="text-gradient">Meaningful</span>
                </h3>
                <p className="text-base-content/60 text-lg mb-8">
                  Open to collaboration, research, and real-world projects. Drop
                  your email to start a conversation.
                </p>

                {/* This is where the magic happens */}
                <ContactForm variant="minimal" />

                <p className="mt-6 text-xs text-base-content/40 font-medium">
                  No marketing spam. Only direct, purposeful communication.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </section>
  );
};

export default Home;
