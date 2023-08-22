import { create } from "zustand";
export const useCountSpliceShow = create((set)=>({

    count:'',
    setCountShow: (info)=> set({count:info}),
}))