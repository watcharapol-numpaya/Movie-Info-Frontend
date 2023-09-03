import axios from "axios";
import { checkTokenExpiration } from "./jwtTokenService";

export const userApiInstance = axios.create({
    baseURL: import.meta.env.VITE_API_USER,
  });
  