import Hero from "./Hero";

import ExpertiseMarquee from "./ExpertiseMarquee";
import FeaturedProjects from "./FeaturedProjects";
import AcademicSnapshot from "./AcademicSnapshot";
import NewsletterSection from "./NewsletterSection";

const Home = () => {
  return (
    <section>
      {/* <Hero /> */}

      <FeaturedProjects />

      <ExpertiseMarquee />

      <AcademicSnapshot />

      <NewsletterSection></NewsletterSection>
    </section>
  );
};

export default Home;
