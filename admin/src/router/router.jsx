import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../layout/DashboardLayout";
import AdminLogin from "../pages/AdminLogin";
import AllProjects from "../pages/AllProjects";
import AddProject from "../pages/AddProject";
import PrivateRoute from "../components/PrivateRoute";

const router = createBrowserRouter([

  // Login page (public)
  {
    path: "/admin/login",
    element: <AdminLogin />
  },

  // Admin dashboard (protected)
  {
    path: "/admin",
    element: <PrivateRoute />,   // checks token
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { path: "add", element: <AddProject /> },
          { path: "projects", element: <AllProjects /> }
        ]
      }
    ]
  }

]);

export default router;