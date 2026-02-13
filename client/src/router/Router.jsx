import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Skills from "../pages/Skills/Skills";
import Contact from "../pages/Contact/Contact";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/projects',
        element: <Projects></Projects>
      },
      {
        path: '/skills',
        element: <Skills></Skills>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/projects/:id',
        element: <ProjectDetails></ProjectDetails>
      }
    ],
  },
  {
    path: '*',
    element: 'Err'
  }
]);

export default Router;
