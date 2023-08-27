import axios from "axios";

 
export const instance = axios.create({
  baseURL: import.meta.env.VITE_API,
});

export const instance2 = axios.create({
  baseURL: import.meta.env.VITE_API_USER,
});
