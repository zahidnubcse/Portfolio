import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"
import MainLayout from "../Layout/MainLayout";

const mainRoutes = [
    { path: "/", element: <Home /> },
    { path: "contact", element: <Contact /> },
    { path: "about", element: <About /> },
    { path: "projects", element: <Projects /> },
];

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: mainRoutes,
    }
]);

export default router;