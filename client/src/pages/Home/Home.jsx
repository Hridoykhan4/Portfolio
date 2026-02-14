import { lazy, Suspense } from "react";
import Hero from "./Hero";
import FeaturedProjects from "./FeaturedProjects";
import ExpertiseMarquee from "./ExpertiseMarquee";

// Heavy/Non-critical sections
const AcademicSnapshot = lazy(() => import("./AcademicSnapshot"));
const NewsletterSection = lazy(() => import("./NewsletterSection"));

const Home = () => {
  return (
    <>
      {/* 1. IDENTITY: Who you are (LCP Priority) */}
      <Hero />
      
      {/* 2. PROOF: What you built (The most important conversion) */}
      <FeaturedProjects />

      {/* 3. TRANSITION: Modern visual break with skills marquee */}
      <ExpertiseMarquee />

      {/* 4. DEPTH: Supplemental info loaded as user scrolls */}
      <Suspense fallback={<HomeSectionSkeleton />}>
        <AcademicSnapshot />
        <NewsletterSection />
      </Suspense>
    </>
  );
};

const HomeSectionSkeleton = () => (
  <div className="container-page py-20 opacity-10">
    <div className="h-[400px] w-full bg-base-300 rounded-[3rem] animate-pulse" />
  </div>
);

export default Home;