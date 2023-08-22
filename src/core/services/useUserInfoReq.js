import { useQuery } from "react-query";

import api from "../interceptors/apiInterceptor";
const fetchUser =  (id)=>{
    return  api(`/student/${id}`)
}
export const useUserInfoReq = (id)=>{
    return useQuery(['userInfo',id],async ()=> await fetchUser(id))
}