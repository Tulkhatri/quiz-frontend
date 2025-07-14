import Axios from "axios";
import type { AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";

interface Headers {
  [key: string]: string;
}

const baseURL = import.meta.env.VITE_REACT_APP_API_URL as string;
const headers = {} as Headers;
const http = Axios.create({
  baseURL: baseURL,
  headers: { ...headers, "Content-Type": "application/json" },
});

const refreshTokenFxn = async () => {
  window.localStorage.removeItem("token");
  toast.error("Your session has expired. Please login agian.");
  window.location.href = "/login";
};

http.interceptors.request.use(
  async (config: AxiosRequestConfig): Promise<any> => {
    const token = localStorage.getItem("token");
    if (token) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        },
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  async (response: any) => {
    if (response.data.status === 401) {
      toast.error("Your session has expired. Please login agian.");
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return response;
  },
  async function (error) {
    const originalConfig = error.config;
    if (error?.response?.data?.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      refreshTokenFxn();
    }
    return Promise.reject(error);
  }
);
export default http;
