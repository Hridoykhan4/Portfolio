import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";

// High-end Fallback for initial hydration
const GlobalLoader = () => (
  <div className="h-screen w-full bg-base-100 flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // This is the missing piece that fixes your error
    HydrateFallback: GlobalLoader,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        lazy: () =>
          import("../pages/About/About").then((m) => ({
            Component: m.default,
          })),
      },
      {
        path: "projects",
        lazy: () =>
          import("../pages/Projects/Projects").then((m) => ({
            Component: m.default,
          })),
      },
      {
        path: "skills",
        lazy: () =>
          import("../pages/Skills/Skills").then((m) => ({
            Component: m.default,
          })),
      },
      {
        path: "contact",
        lazy: () =>
          import("../pages/Contact/Contact").then((m) => ({
            Component: m.default,
          })),
      },
      {
        path: "projects/:id",
        lazy: () =>
          import("../pages/ProjectDetails/ProjectDetails").then((m) => ({
            Component: m.default,
          })),
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="h-screen flex flex-col items-center justify-center bg-base-100">
        <h1 className="text-9xl font-black tracking-tighter opacity-10">404</h1>
        <p className="text-xl font-bold -mt-8">Artifact Not Found</p>
      </div>
    ),
  },
]);

export default Router;
