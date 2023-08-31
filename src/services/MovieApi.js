import axios from "axios";
import { checkTokenExpiration } from "./tokenService";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API,
});

export const instance2 = axios.create({
  baseURL: import.meta.env.VITE_API_USER,
});

// instance2.interceptors.request.use(async (req) => {
//   const access_token = localStorage.getItem("access_token")
//     ? localStorage.getItem("access_token")
//     : null;

//   // if(!access_token){}
//   const isTokenAccessExpire = checkTokenExpiration(access_token);

//   // req.headers.Authorization = `Bearer ${access_token}`;

//   if (isTokenAccessExpire) {
//     const refresh_token = localStorage.getItem("refresh_token");
//     await axios.post(`${import.meta.env.VITE_API_USER}/refresh_token`,{},{
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${refresh_token}`,
//           },
//         })
//       .then((res) => {
//         console.log(res)
//       }).catch((err)=>{
// console.log(err)
//       });
      
   
//   }
//   return req;
// });
