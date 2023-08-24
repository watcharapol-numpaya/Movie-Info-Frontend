import axios from "axios";

// export const instance =  axios.create({
//     baseURL:'https://api.themoviedb.org/3/'
// })

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API,
});
