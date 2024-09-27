import axios from "axios";
// import { cookies } from "next/headers";

const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";
const api = axios.create({ baseURL: baseUrl });
// const cookieStore = cookies();

// api.interceptors.request.use(
//   (config) => {
//     const token = cookieStore.get("access_token_cookie");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default api;
