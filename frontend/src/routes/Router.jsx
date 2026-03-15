import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";


import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

 

const router = createBrowserRouter([
  // Portfolio pages
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
    ],
  },


]);

export default router;