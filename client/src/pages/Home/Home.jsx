import Hero from "./Hero";
import ScrollReveal from "../../components/ScrollReveal";
import ExpertiseMarquee from "./ExpertiseMarquee";
import FeaturedProjects from "./FeaturedProjects";
import AcademicSnapshot from "./AcademicSnapshot";
import ContactForm from "../Contact/ContactForm";
import NewsletterSection from "./NewsLetter";

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
        <NewsletterSection></NewsletterSection>
      </ScrollReveal>
    </section>
  );
};

export default Home;
