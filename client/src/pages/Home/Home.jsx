import { lazy, Suspense } from "react";
import Hero from "./Hero";
import FeaturedProjects from "./FeaturedProjects";
import ExpertiseMarquee from "./ExpertiseMarquee";

const AcademicSnapshot = lazy(() => import("./AcademicSnapshot"));
const NewsletterSection = lazy(() => import("./NewsletterSection"));

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ExpertiseMarquee />

      {/* This Suspense handles components BELOW THE FOLD */}
      <Suspense fallback={<HomeSectionSkeleton />}>
        <AcademicSnapshot />
        <NewsletterSection />
      </Suspense>
    </>
  );
};

// High-fidelity ghost state to prevent Layout Shift (CLS)
const HomeSectionSkeleton = () => (
  <div className="container-page py-20 space-y-10">
    <div className="h-100 w-full bg-base-300/20 rounded-[3rem] animate-pulse border border-base-content/5" />
    <div className="h-50 w-full bg-base-300/10 rounded-4xl animate-pulse" />
  </div>
);

export default Home;
