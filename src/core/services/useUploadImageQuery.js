import { useQuery ,useMutation,useQueryClient} from 'react-query'
import api from '../interceptors/apiInterceptor'
const uploadImage = (hero)=>{
  return api.post(`/upload/image`,hero)
}
export const useUploadImage = ()=>{
    const queryClient = useQueryClient()
    return  useMutation(uploadImage,{
      onSuccess:(data)=>{
        // queryClient.invalidateQueries('super-heroes')
        return data
      }  
    })
  }