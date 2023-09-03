import axios from "axios";
import { checkTokenExpiration } from "./jwtTokenService";
 
export const userApiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_USER,
});

//Interceptors
userApiInstance.interceptors.request.use(async (req) => {
  const access_token = localStorage.getItem("access_token") || null;

  if (!access_token) {
    return req;
  }

  const isAccessTokenExpire = checkTokenExpiration(access_token);

  // req.headers.Authorization = `Bearer ${access_token}`;

  if (isAccessTokenExpire) {
    const refresh_token = localStorage.getItem("refresh_token");
    const refreshUrl = `${import.meta.env.VITE_API_USER}refresh_token`;

    try {
      const res = await axios.post(
        refreshUrl,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${refresh_token}`,
          },
        }
      );

      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token); // Update the refresh token as well
    } catch (error) {
      console.error("Failed to refresh token:", error);
      // Handle token refresh failure here
    }
  } else {
    req.headers.Authorization = `Bearer ${access_token}`;
  }

  const new_access_token = localStorage.getItem("access_token");

  req.headers.Authorization = `Bearer ${new_access_token}`;

  return req;
});
