import axios from "axios";

const BASE =
  import.meta.env.VITE_API_URL || "https://backendformernapp.onrender.com/";

export const api = axios.create({
  baseURL: BASE,
  timeout: 10000,
});
