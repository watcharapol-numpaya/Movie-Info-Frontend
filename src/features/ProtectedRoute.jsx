import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import {  useSelector } from "react-redux"; 


const ProtectedRoute = ({ redirectPath = "/sign-in", children }) => {

  const location = useLocation();
  const accessToken = useSelector((state) => state.auth.accessToken);

  if (!accessToken) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }

  return children || <Outlet />;
};

export default ProtectedRoute;
