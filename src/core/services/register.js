import { useErrorText } from "@/context/errorStore";
import api from "@/core/interceptors/apiInterceptor";
import { loginFunc } from "./login";
import { useStepperStore } from "@/context/stepperStore";
import { useUserInfo } from "@/context/userInfoStore";
const setStates = useStepperStore.getState();
export const registerFunc = async (info) => {
  setStates.setLastStepLoading(true);
  useErrorText.getState().setError("");
  try {
    const response = await api.post("/auth/register", info);
    console.log(response);
    if (response.data.success && response?.status === 200) {
      const loginUserObj = {
        email: response.data.result.email,
        password: useStepperStore.getState().data.password,
        remember:false,
      };
      await loginFunc(loginUserObj);
      // useUserInfo.getState().setUserInfo(info);
      // useUserInfo.getState().setUserLogin();

      setStates.setStepNext();
      console.log("success");
    }
  } catch (error) {
    console.log(error);
    if (error.message == "Network Error") {
      await useErrorText.getState().setError("به اینترنت متصل نیستید");
    }
    if (error.response?.status === 401 || error.response?.status === 400) {
      setStates.setLastStepError(error.response.data.message);
      setStates.setLastStepLoading(false);
      setStates.setError(true);
      setTimeout(() => {
        setStates.setStep(3);
        setStates.setLastStepLoading(true);
      }, 3000);
    }
    console.log(error);
  }
};
