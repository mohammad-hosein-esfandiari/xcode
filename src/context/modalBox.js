import { create } from "zustand";
export const useModalAccept = create((set)=>({
    showModal:false,
    success:false,
    loading:false,
    Modaltext:"",
    successText:"",
    info:"",
    setInfo: (obj)=> set({info:obj}),
    setSuccess: (bol)=> set({success:bol}),
    setIsShowModal: (bol)=>set({showModal:bol}),
    setLoading: (bol)=>set({loading:bol}),
    setModalText: (text)=>set({Modaltext:text})
    
}))