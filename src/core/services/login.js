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
    const response = await api.post("/auth/login", obj2);
    console.log(response)

    if (response.data.success && response.status === 200) {
      const obj = {
        token: response.data.result.jwtToken,
        id: response.data.result.studentModel._id,
      };
    
        if (info.remember) {
          setCookie("UoXa-I", obj, 30);
        } else {
          setCookie("UoXa-I", obj);
        }
     

      useUserInfo.getState().setUserInfo(response.data.result.jwtToken,response.data.result.studentModel);
      useUserInfo.getState().setUserLogin();
      console.log(response);
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
