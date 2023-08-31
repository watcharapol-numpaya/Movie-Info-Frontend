import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = ({ redirectPath = "/sign-in", children }) => {
  const location = useLocation();
  const token = localStorage.getItem("access_token");
  if (!token) {
    return <Navigate to={redirectPath}  />;
  }
  return children || <Outlet />;
};

export default ProtectedRoute;
