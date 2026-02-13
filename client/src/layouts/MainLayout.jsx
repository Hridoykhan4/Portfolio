import { Outlet, useLocation, useNavigation } from "react-router";
import { useEffect } from "react";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";
import SmoothScroll from "../components/SmoothScroll";
import LoadingSpinner from "../components/LoadingSpinner";
import SmoothCursor from "../components/SmoothCursor";

const MainLayout = () => {
  const { pathname } = useLocation();
  const navigation = useNavigation();

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

        <main id="main-content" className="grow w-full overflow-x-hidden">
          {navigation.state === "loading" ? (
            <LoadingSpinner fullScreen />
          ) : (
            <Outlet />
          )}
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default MainLayout;
