import { motion } from "motion/react";
import profileImg from "../../assets/ProfilePic.jpeg";
import ActionButton from "../../components/ActionButton";
import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import Hero from "./Hero";
import ScrollReveal from "../../components/ScrollReveal";
import ExpertiseMarquee from "./ExpertiseMarquee";

const Home = () => {
  return (
    <section>
      <ScrollReveal>
        <Hero></Hero>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <ExpertiseMarquee></ExpertiseMarquee>
      </ScrollReveal>
    </section>

    /*   <Hero />
  <ExpertiseMarquee />
  <FeaturedProjects />
  <TechStack />
  <Newsletter />
  <ContactCTA /> */
  );
};

export default Home;
