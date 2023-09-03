import axios from "axios";
import { checkTokenExpiration } from "./jwtTokenService";

export const movieApiInstance = axios.create({
  baseURL: import.meta.env.VITE_API,
});

 