import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector
import { checkTokenExpiration } from "../services/jwtTokenService";
import { getRefreshToken } from "../storage/slices/authSlice"; // Import the Redux action
import OnLoadingScreen from "../components/OnLoadingScreen";

const ProtectedRoute = ({ redirectPath = "/sign-in", children }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const accessToken = useSelector((state) => state.auth.accessToken); // Get accessToken from Redux state.
  const refreshToken = useSelector((state) => state.auth.refreshToken); // Get refreshToken from Redux state.
  const isAccessTokenExpired = checkTokenExpiration(accessToken);
  const isRefreshTokenExpired = checkTokenExpiration(refreshToken);
  const [isLoading, setIsLoading] = useState(true);

  if (!accessToken) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }

  return children || <Outlet />;
};

export default ProtectedRoute;
