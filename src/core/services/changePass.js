import { useUserInfo } from "@/context/userInfoStore";
import api from "../interceptors/apiInterceptor";
import { toast } from "react-toastify";
export const changePass = async (
  userId,
  password,
  currentPassword
) => {
  let isSuccess = false;
  let isError = false;

  isSuccess = true;
  try {
    await api.patch("users/" + userId, {
      newPassword:password,
      currentPassword
    });

    // else {
    //   await api.post("/resetPassword/" + res2.data.result.resetPasswordToken, {
    //     password,
    //   });
    // }

    // await useUserInfo.getState().setUserItemObj({resetPasswordToken: res2.data.result.resetPasswordToken});
    isSuccess = false;
    isError = false;
    toast.success("Password changed successfully");

    return { isSuccess, isError };
  } catch (error) {
    isSuccess = false;
    isError = true;
    console.log(error);
    return { isSuccess, isError };
  }
};
