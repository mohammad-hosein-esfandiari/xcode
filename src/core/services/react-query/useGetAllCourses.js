import api from "@/core/interceptors/apiInterceptor";
import { useMutation, useQuery, useQueryClient } from "react-query";

const fetchAllCourse = () => {
  return api(`/course/getall`);
};
const deleteStudentFormCourse = (userId, info) => {
  return api.post("/course/removeStudentFromCourse/" + userId, info);
};
// export const useFetchAllCourses = ()=>{
//     return useQuery(['courses'],async ()=> await fetchAllCourse())
// }
export const useFetchAllCourses = (onSuccess) => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: async () => await fetchAllCourse(),
    refetchOnMount:true,
    onSuccess,
    
    
    
  });
};
export const useDeleteStudentFronmCourse = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteStudentFormCourse, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
  });
};
