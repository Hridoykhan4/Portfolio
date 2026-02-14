import { Outlet, useLocation, useNavigation } from "react-router";
import { useEffect } from "react";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";
import SmoothScroll from "../components/SmoothScroll";
import SmoothCursor from "../components/SmoothCursor";

const MainLayout = () => {
  const { pathname } = useLocation();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  useEffect(() => {
    window.lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <SmoothScroll>
      <div className="hidden lg:block">
        <SmoothCursor />
      </div>

      <div className="flex flex-col min-h-screen relative selection:bg-primary/30">
        {/* Instant Top Loading Bar */}
        {isLoading && (
          <div className="fixed top-0 left-0 h-1 bg-primary z-[9999] w-full animate-pulse" />
        )}

        <Navbar />

        <main id="main-content" className="grow w-full overflow-x-hidden">
          {/* No Suspense here - Route 'lazy' handles it better */}
          <Outlet />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default MainLayout;
