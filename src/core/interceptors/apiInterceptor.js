import axios from "axios";
// const URL = "https://api.xcode.sepehracademy.ir/api";
import { toast } from "react-toastify";
import { getCookie } from "../utils/cookies.storage";
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

api.interceptors.request.use(
  async (config) => {
    const user = await getCookie("UoXa-I");
    if (config.url.includes("forgetpassword")) {
      config.headers["Content-Type"] = "application/json";
    }
    if (config.url === "auth/register" || "auth/login") {
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
        toast.error("Error occured!");
      }
    }
    if (error.message === "Network Error") {
      toast.error("Network Error");
    }
    if (error.config.url.includes("resetPassword")) {
      if (error.response) {
        error.response.data.message.forEach((item) => {
          if (item.message.includes("password")) {
            toast.error("Password doesn't meet the requirements");
            toast.warning("Please enter the password correctly");
          }
          if (item.message.includes("token")) {
            toast.error("Too many atempts");
            toast.info("Please try again later");
          }
        });
        if (error.response.status === 501) {
          toast.error("Too many atempts");
          toast.info("Please try again later");
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
