import api from "@/core/interceptors/apiInterceptor";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

let endPoints = [
    "/course/getall",
    "/news"
]

const fecthAllData = () => {
    return axios.all(endPoints.map(item => api(item)));
  };

//   export const useGetAllData = (onSuccess) => {
//     return useQuery({
//       queryKey: ["search"],
//       queryFn: async () => await fecthAllData(),
//       select: (data) => {
//         const array = data;
//         return array;
//       },
//       onSuccess,
//     });
//   };

  export const useGetAllData = () => {
    const queryClient = useQueryClient();
    return useMutation(fecthAllData, {
      onSuccess: () => {
        // queryClient.invalidateQueries({ queryKey: ["search"] });
      },
    });
  };
  