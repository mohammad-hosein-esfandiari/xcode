import { create } from "zustand";
export const useToastBox = create((set) => ({
  text: "",
  type:'',
  setToastText: (info) => set({ text: info }),
  setToastType: (info) => set({ type: info }),
}));
