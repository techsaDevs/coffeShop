// /lib/axiosConfig.ts
import axios from "axios";
import { toast } from "react-toastify";

const axiosInst = axios.create({
  baseURL: "http://localhost:3001", // پایه URL
  timeout: 5000, // Timeout به میلی‌ثانیه
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
axiosInst.interceptors.request.use(
  (config) => {
    // می‌تونید توکن اضافه کنید
    // const token = localStorage.getItem("token");
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInst.interceptors.response.use(
  (response) => response,
  (error) => {
    // مدیریت خطای عمومی
    if (error.response) {
      // خطاهای سرور
      toast.error(
        `خطا: ${error.response.status} - ${
          error.response.data?.message || error.message
        }`,
        {
          position: "bottom-right",
        }
      );
    } else if (error.request) {
      // خطای شبکه
      toast.error("خطا در اتصال به سرور!", { position: "bottom-right" });
    } else {
      toast.error(`خطا: ${error.message}`, { position: "bottom-right" });
    }
    return Promise.reject(error);
  }
);

export default axiosInst;
