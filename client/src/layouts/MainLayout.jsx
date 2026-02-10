import { Outlet, useLocation } from "react-router";
import { useEffect, useRef } from "react";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";
import SmoothScroll from "../components/SmoothScroll";
import CustomCursor from "../components/CustomCursor";

const MainLayout = () => {
  const { pathname } = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    const getLenisInstance = () => {
      const checkInterval = setInterval(() => {
        if (window.lenis) {
          lenisRef.current = window.lenis;
          clearInterval(checkInterval);
        }
      }, 100);

      return () => clearInterval(checkInterval);
    };

    getLenisInstance();
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, {
        duration: 1,
        immediate: false,
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <SmoothScroll>
      <CustomCursor />
      <div className="min-h-screen flex flex-col selection:bg-primary/30">
        <Navbar />

        <main id="main-content" className="grow w-full overflow-x-hidden">
          <Outlet />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default MainLayout;
