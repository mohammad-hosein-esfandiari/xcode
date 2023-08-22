import api from "@/core/interceptors/apiInterceptor";
import { useQuery } from "react-query";

const fetchLesson =  (id)=>{
    return  api(`/lesson/${id}`)
}
export const useGetLeesonById = (id)=>{
    return useQuery(['lesson',id],async ()=> await fetchLesson(id))
}