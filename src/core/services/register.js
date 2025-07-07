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
    const response = await api.post("auth/register", info);
    if (response?.status === 201) {
      const loginUserObj = {
        email: info.email,
        password: info.password,
        remember:false,
      };
      await loginFunc(loginUserObj);
      setStates.setLastStepLoading(false);
      setStates.setStepNext();

    }
  } catch (error) {
    console.log("register",error);
    if (error.message == "Network Error") {
      await useErrorText.getState().setError("No connection");
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

  }
};
