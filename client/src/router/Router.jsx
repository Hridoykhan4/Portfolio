import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";

// LAZY LOAD PAGES (Vite will create separate chunks for these)
const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Projects = lazy(() => import("../pages/Projects/Projects"));
const Skills = lazy(() => import("../pages/Skills/Skills"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const ProjectDetails = lazy(
  () => import("../pages/ProjectDetails/ProjectDetails"),
);

// Loading State (Keep it minimal for 2026 aesthetic)
const PageLoader = () => <div className="h-screen bg-base-100" />;

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<PageLoader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/projects",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "/skills",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Skills />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/projects/:id",
        element: (
          <Suspense fallback={<PageLoader />}>
            <ProjectDetails />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: "Err",
  },
]);

export default Router;
