import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector
import { checkTokenExpiration } from "../services/tokenService";
import { getRefreshToken } from "../storage/slices/authSlice"; // Import the Redux action
import OnLoadingScreen from "../components/OnLoadingScreen";

const ProtectedRoute = ({ redirectPath = "/sign-in", children }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const accessToken = useSelector((state) => state.auth.accessToken); // Get accessToken from Redux state
  const refreshToken = useSelector((state) => state.auth.refreshToken); // Get refreshToken from Redux state
  const isAccessTokenExpired = checkTokenExpiration(accessToken);
  const isRefreshTokenExpired = checkTokenExpiration(refreshToken);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    if (!accessToken || isRefreshTokenExpired) {
      setIsLoading(false);
    } else if (isAccessTokenExpired) {
    
      dispatch(getRefreshToken())
        .unwrap() //catch rejected cases
        .then((newTokens) => {
          // Update the tokens in Redux state and local storage
          // localStorage.setItem("access_token", newTokens.access_token);
          // localStorage.setItem("refresh_token", newTokens.refresh_token);
    
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error refreshing tokens:", error);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [accessToken, refreshToken, isAccessTokenExpired, isRefreshTokenExpired, dispatch]);

  if (isLoading) {
    // Show a isLoading indicator while refreshing tokens
    return <OnLoadingScreen/> 
  }

  if (!accessToken || isRefreshTokenExpired) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }

  return children || <Outlet />;
};

export default ProtectedRoute;

