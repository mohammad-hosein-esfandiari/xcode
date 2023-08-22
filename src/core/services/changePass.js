import { useUserInfo } from "@/context/userInfoStore";
import api from "../interceptors/apiInterceptor";
import { toast } from "react-toastify";
export const changePass = async (
  userId,
  userEmail,
  userResetPasswordToken,
  password
) => {
  let isSuccess = false;
  let isError = false;

  isSuccess = true;
  try {
    await api.post("/forgetpassword", { email: userEmail });
    const res2 = await api("/student/" + userId);
    console.log(res2)
    await api.post("/resetPassword/" + res2.data.result.resetPasswordToken, {
      password,
    });

    // else {
    //   await api.post("/resetPassword/" + res2.data.result.resetPasswordToken, {
    //     password,
    //   });
    // }

    // await useUserInfo.getState().setUserItemObj({resetPasswordToken: res2.data.result.resetPasswordToken});
    isSuccess = false;
    isError = false;
    toast.success("رمز عبور با موفقیت تغییر کرد");

    return { isSuccess, isError };
  } catch (error) {
    isSuccess = false;
    isError = true;
    console.log(error);
    return { isSuccess, isError };
  }
};
