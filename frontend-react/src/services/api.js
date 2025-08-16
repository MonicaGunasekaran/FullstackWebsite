import axios from "axios";

const BASE = import.meta.env.VITE_API_URL || "http://localhost:3000/api";
// 👆 added /api at the end

export const api = axios.create({
  baseURL: BASE,
  timeout: 10000,
});
