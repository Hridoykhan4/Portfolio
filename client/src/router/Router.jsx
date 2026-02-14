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
    // Immediate scroll reset on route change for better UX
    window.lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <SmoothScroll>
      {/* Client-side only cursor enhancement */}
      <div className="hidden lg:block">
        <SmoothCursor />
      </div>

      <div className="relative flex flex-col min-h-screen">
        {/* Modern Progress Indicator */}
        {isLoading && (
          <div className="fixed top-0 left-0 right-0 h-1 z-[9999] overflow-hidden bg-base-100">
            <div className="h-full bg-primary animate-[scanline_2s_linear_infinite] w-1/2" />
          </div>
        )}

        <Navbar />

        {/* Main Content Area: Use 'relative' for Framer Motion anchors */}
        <main id="main-content" className="relative grow w-full outline-none">
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
