import { create } from "zustand";
export const useCoursesGridShow = create((set)=>({
    grid:true,
    count:12,
    setGridShow: (info)=> set({grid:info}),
}))