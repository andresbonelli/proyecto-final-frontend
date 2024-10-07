import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";
const api = axios.create({ baseURL: baseUrl, withCredentials: true });

export default api;
