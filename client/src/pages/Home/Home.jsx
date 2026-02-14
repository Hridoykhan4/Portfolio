import Hero from "./Hero";
import { lazy, Suspense } from "react";

// Lazy load non-critical home sections
const FeaturedProjects = lazy(() => import("./FeaturedProjects"));
const ExpertiseMarquee = lazy(() => import("./ExpertiseMarquee"));
const AcademicSnapshot = lazy(() => import("./AcademicSnapshot"));
const NewsletterSection = lazy(() => import("./NewsletterSection"));

const Home = () => {
  return (
    <section>
      <Hero />

      <Suspense
        fallback={<div className="h-96 animate-pulse bg-base-200/50" />}
      >
        <FeaturedProjects />
        <ExpertiseMarquee />
        <AcademicSnapshot />
        <NewsletterSection />
      </Suspense>
    </section>
  );
};

export default Home;
