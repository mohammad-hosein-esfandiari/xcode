import { useMutation } from "react-query";
import register from "@/core/interceptors/register";

const postData = (userInfo)=>{
    return register.post("/auth/register", userInfo)
}

export const useRegister = ()=>{
    return useMutation(postData)
}