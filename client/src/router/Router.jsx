import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
      <div className="h-screen flex items-center justify-center font-black text-4xl">
        404
      </div>
    ),
  },
]);

export default Router;
