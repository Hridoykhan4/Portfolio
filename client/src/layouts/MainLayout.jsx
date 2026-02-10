import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";
import SmoothScroll from "../components/SmoothScroll";
import CustomCursor from "../components/CustomCursor";

const MainLayout = () => {
  return (
    <SmoothScroll>
      <CustomCursor></CustomCursor>
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="grow">
        <Outlet />
      </main>

      <Footer />
    </div>

    </SmoothScroll>
  );
};

export default MainLayout;
