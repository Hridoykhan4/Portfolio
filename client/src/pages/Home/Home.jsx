import Hero from "./Hero";
import ScrollReveal from "../../components/ScrollReveal";
import ExpertiseMarquee from "./ExpertiseMarquee";
import FeaturedProjects from "./FeaturedProjects";
import AcademicSnapshot from "./AcademicSnapshot";

const Home = () => {
  return (
    <section>
      <ScrollReveal>
        <Hero></Hero>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <AcademicSnapshot></AcademicSnapshot>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <ExpertiseMarquee></ExpertiseMarquee>
      </ScrollReveal>
      <ScrollReveal delay={0.3}>
        <FeaturedProjects></FeaturedProjects>
      </ScrollReveal>
    </section>

    /*   
  <FeaturedProjects />
  < Experience and Education/>
  <Newsletter />
  <ContactCTA /> 
  */
  );
};

export default Home;
