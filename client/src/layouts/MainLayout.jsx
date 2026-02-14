import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";
import SmoothScroll from "../components/SmoothScroll";
import SmoothCursor from "../components/SmoothCursor";

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      if (window.lenis) {
        window.lenis.scrollTo(0, { duration: 1.2, immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    };
    const timeout = setTimeout(scrollToTop, 10);
    return () => clearTimeout(timeout);
  }, [pathname]);
  return (
    <SmoothScroll>
      <div className="hidden lg:block">
        <SmoothCursor />
      </div>

      <div className="flex flex-col selection:bg-primary/30 min-h-screen">
        <Navbar />

        <main id="main-content" className="grow w-full min-h-screen overflow-x-hidden">
          <Outlet />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default MainLayout;
