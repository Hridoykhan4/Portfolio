import Hero from "./Hero";
import ScrollReveal from "../../components/ScrollReveal";
import ExpertiseMarquee from "./ExpertiseMarquee";
import FeaturedProjects from "./FeaturedProjects";
import AcademicSnapshot from "./AcademicSnapshot";
import Newsletter from "../../components/Newsletter";

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

      <ScrollReveal delay={0.4}>
        <Newsletter
          title="Let’s Build Something Meaningful"
          subtitle="Open to collaboration, research, and real-world projects."
        />
      </ScrollReveal>
    </section>
  );
};

export default Home;
