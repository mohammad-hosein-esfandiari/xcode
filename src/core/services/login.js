import { useErrorText } from "@/context/errorStore";
import { useUserInfo } from "@/context/userInfoStore";
import api from "@/core/interceptors/apiInterceptor";
import { setCookie } from "../utils/cookies.storage";
export const loginFunc = async (info) => {
  const obj2 = {
    email: info.email,
    password: info.password,
  };
  let isSuccess;
  try {
    const response = await api.post("auth/login", obj2);
    console.log("response => ",response)

    if (response.status === 200) {
      const obj = {
        token: response.data.token,
        id: response.data.user._id,
      };
      console.log("res =======>",response)
      console.log("obj ====>",obj)
        if (info.remember) {
          setCookie("UoXa-I", obj, 7);
        } else {
          setCookie("UoXa-I", obj);
        }
       

      useUserInfo.getState().setUserInfo(response.data.token,response.data.user);
      useUserInfo.getState().setUserLogin();
      isSuccess = true;
    }
    
  } catch  (error) {
    console.log(error)
  //   try {
  //     const res = await api.post('/auth/employee/login',obj2)
  //     if (res.data.success && res.status === 200) {
  //     const obj = {
  //       token: res.data.result.jwtToken,
  //       id: res.data.result.employeeModel._id,
  //     };
      
  //     if (info.remember) {
  //       setCookie("UoXa-I", obj, 30);
  //     } else {
  //       setCookie("UoXa-I", obj);
  //       }
  //    console.log(res)
     
  //    useUserInfo.getState().setUserInfo(res.data.result.jwtToken,res.data.result.employeeModel);
  //    useUserInfo.getState().setUserLogin();
  //    console.log(res);
  //    isSuccess = true;
  //   }
  // } catch (error2) {
    
  //   isSuccess = false;
  // }
  
  
  
}
return {  isSuccess }
};
