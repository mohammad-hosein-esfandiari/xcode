"use client";
import { useRouter } from "next/navigation";
import { useUserInfo } from "@/context/userInfoStore";
import { useEffect } from "react";
import { getCookie } from "@/core/utils/cookies.storage";
const PrivateRoute = () => {
  const isLogin = useUserInfo((state) => state.login);
  const navigate = useRouter();
  useEffect(() => {
    const get = async () => {
      if (isLogin) {
        navigate.push("/");
      }
      const user = await getCookie("UoXa-I");
      if (user) {
        navigate.push("/");
      }
    };
    get();
  }, []);

  return null;
};

export default PrivateRoute;
