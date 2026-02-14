import { Outlet, useLocation, useNavigation } from "react-router";
import { useEffect, Suspense } from "react";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";
import SmoothScroll from "../components/SmoothScroll";
import SmoothCursor from "../components/SmoothCursor";

const MainLayout = () => {
  const { pathname } = useLocation();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <SmoothScroll>
      <div className="hidden lg:block">
        <SmoothCursor />
      </div>

      <div className="relative flex flex-col min-h-screen overflow-x-clip bg-base-100 selection:bg-primary/30">
        {/* TOP PROGRESS BAR - The only indicator you need for route changes */}
        <div
          className={`fixed top-0 left-0 right-0 h-0.75 z-10000 transition-all duration-500 ease-in-out ${
            isLoading ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          } origin-left bg-primary`}
        />

        <Navbar />

        <main
          id="main-content"
          className="relative grow w-full flex flex-col outline-none"
        >
          {/* We use a simple null fallback here because the progress bar handles the 'loading' vibe */}
          <Suspense fallback={<div className="min-h-screen bg-base-100" />}>
            <Outlet />
          </Suspense>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default MainLayout;
