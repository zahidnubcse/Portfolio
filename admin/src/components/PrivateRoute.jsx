import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {

  const token = localStorage.getItem("token");

  // If token exists, allow access, else redirect to login
  return token ? <Outlet /> : <Navigate to="/admin/login" />;
}