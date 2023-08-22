
import { create } from "zustand";

export const useImage = create((set)=>({
    image:"",
    setImage: (info)=> set({image:info}),
}))