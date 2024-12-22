import axios from "axios";
import { APP_ROUTES } from "../router/Route";
const request = axios.create({
  baseURL: `${APP_ROUTES.BASE_URL}`,
});
console.log(APP_ROUTES.BASE_URL);

request.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default request;
