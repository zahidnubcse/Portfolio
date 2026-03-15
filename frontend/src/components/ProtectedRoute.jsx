import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  // Check if admin is logged in
  const isAdmin = localStorage.getItem("isAdmin"); // "true" if logged in

  if (!isAdmin) {
    // Redirect to login if not admin
    return <Navigate to="/admin" replace />;
  }

  // Show the admin page if logged in
  return <Outlet />;
}