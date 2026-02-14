import Hero from "./Hero";
import FeaturedProjects from "./FeaturedProjects";
import ExpertiseMarquee from "./ExpertiseMarquee"; 
import { lazy, Suspense } from "react";


const AcademicSnapshot = lazy(() => import("./AcademicSnapshot"));
const NewsletterSection = lazy(() => import("./NewsletterSection"));

const Home = () => {
  return (
    <section>
      <Hero />

      <FeaturedProjects />
      <ExpertiseMarquee />

    
      <Suspense
        fallback={
          <div className="h-96 bg-base-200/20 animate-pulse m-10 rounded-3xl" />
        }
      >
        <AcademicSnapshot />
        <NewsletterSection />
      </Suspense>
    </section>
  );
};

export default Home;
