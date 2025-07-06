import { create } from "zustand";
export const useAnimStore = create((set) => ({
  anim: false,
  setAnim : (info) => set({anim:info})
}));