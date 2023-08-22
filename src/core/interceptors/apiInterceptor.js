import axios from "axios";
const URL = process.env.NEXT_PUBLIC_BASE_URL;
import { toast } from "react-toastify";
import { getCookie } from "../utils/cookies.storage";
const api = axios.create({
  baseURL: URL,
});

api.interceptors.request.use(
  async (config) => {
    const user = await getCookie("UoXa-I");
    if (config.url.includes("forgetpassword")) {
      config.headers["Content-Type"] = "application/json";
    }
    if (config.url === "/auth/register" || "/auth/login") {
      config.headers["Content-Type"] = "application/json";
    }
    if (config.url.includes("upload")) {
      config.headers["Content-Type"] = "multipart/form-data";
      config.headers["Accept"] = "application/json";
    }
    if (
      config.url.includes("addStudentToCourse") ||
      config.url.includes("/student/") ||
      config.url.includes("/removeStudentFromCourse/")
    ) {
      config.headers["Content-Type"] = "application/json";
      config.headers["x-auth-token"] = user.token;
    }
    // if(config.url.includes("/employee/") ){
    //   config.headers["x-auth-token"] = user.token;
    // }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    if (error.config.url.includes("/auth/login")) {
      if (error.response.data) {
        error.response.data.message.message.forEach((item) => {
          toast.error(item.message);
        });
      } else {
        toast.error("خطایی رخ داده است");
      }
    }
    if (error.message === "Network Error") {
      toast.error("خطا در برقراری ارتباط");
    }
    if (error.config.url.includes("resetPassword")) {
      if (error.response) {
        error.response.data.message.forEach((item) => {
          if (item.message.includes("password")) {
            toast.error("رمز وارد شده با الگو مطابقت ندارد");
            toast.warning("لطفا رمز دیگری را وارد کنید");
          }
          if (item.message.includes("token")) {
            toast.error("تلاش بیش از حد");
            toast.info("لطفا در یک وقت دیگر امتحان کنید");
          }
        });
        if (error.response.status === 501) {
          toast.error("تلاش بیش از حد");
          toast.info("لطفا در یک وقت دیگر امتحان کنید");
        }
      }
    }
    // if (error.config.url === "/auth/login") {
    //   let errorMessageArray = error.response.data.message.message;
    //   errorMessageArray?.forEach((item) => {
    //     toast.error(item.message);
    //   });
    // }

    return Promise.reject(error);
  }
);

export default api;
